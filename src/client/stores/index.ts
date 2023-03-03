import { enableStaticRendering } from "mobx-react";
import GlobalStore, { GlobalStoreConstructorProps } from "./GlobalStore";
import { isServer } from "./helpers";
import TabsStore, { TabsConstructorProps } from "./TabsStore";

// 支持静态渲染，防止内存泄漏
enableStaticRendering(isServer);

export type StoreConstructorProps = {
  global?: GlobalStoreConstructorProps;
  tabs?: TabsConstructorProps;
};

export class Store {
  global: GlobalStore;
  tabs: TabsStore;

  constructor(initialState: StoreConstructorProps = {}) {
    this.global = new GlobalStore(initialState.global);
    this.tabs = new TabsStore(initialState.tabs);
  }
}

export const initialMobxStore = (() => {
  let store: Store;
  return (initialStore: StoreConstructorProps = {}) => {
    if (isServer) {
      return new Store(initialStore);
    }
    if (!store) {
      store = new Store(initialStore);
    }
    return store;
  };
})();
