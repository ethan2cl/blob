import { TabItem } from "@/shared";
import { makeAutoObservable, when } from "mobx";
import { v1 } from "uuid";

const DEFAULT_TAB: TabItem = {
  uuid: v1(),
  key: "home",
  Component: () => <>123</>,
};

const uniqueTabs = ["home", "test1", "test2"];

export type TabsConstructorProps = {
  tabs?: TabItem[];
};

// export interface TabsStoreInterface {
//   tabs: TabItem[];
//   currentTabUUID: string;
//   currentTab: TabItem;
//   addTab(tab: TabItem): void;
//   removeTab(uuid: string): void;
//   changeCurrentTabUUID(uuid: string): void;
//   addDefaultTab(): void;
// }

class TabsStore {
  tabs: TabItem[];
  currentTabUUID!: string;

  get currentTab() {
    return (
      this.tabs.find((item) => item.uuid === this.currentTabUUID) || DEFAULT_TAB
    );
  }

  constructor(initialState?: TabsConstructorProps) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.tabs = initialState?.tabs ?? [];
    this.addDefaultTab();
  }

  addTab(tab: TabItem) {
    const inQueueTab = this.tabs.find((item) => item.key === tab.key);
    if (inQueueTab && uniqueTabs.includes(tab.key)) {
      return this.changeCurrentTabUUID(inQueueTab.uuid);
    }
    if (this.tabs.length > 10) {
      this.tabs.shift();
    }
    this.changeCurrentTabUUID(tab.uuid);
    this.tabs.push(tab);
  }

  removeTab(uuid: string) {
    const removeTabIndex = this.tabs.findIndex((item) => item.uuid === uuid);
    this.tabs = this.tabs.filter((item) => item.uuid !== uuid);
    if (this.currentTabUUID === uuid && this.tabs.length >= 1) {
      const nextIndex =
        // boundary => should to left
        removeTabIndex === this.tabs.length
          ? removeTabIndex - 1
          : removeTabIndex;
      this.changeCurrentTabUUID(this.tabs[nextIndex].uuid);
    }
    if (!this.tabs.length) {
      return this.addDefaultTab();
    }
  }

  changeCurrentTabUUID(uuid: string) {
    if (this.currentTabUUID === uuid) return;
    this.currentTabUUID = uuid;
  }

  addDefaultTab() {
    this.addTab(DEFAULT_TAB);
  }
}

export default TabsStore;
