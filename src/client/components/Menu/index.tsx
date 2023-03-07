import { useSubStore } from "@/client/hooks";
import { Menu as _Menu } from "antd";
import { observer } from "mobx-react";
import { v1 } from "uuid";
import { tabsConfig } from "../PageTabs";
import menuItems from "./config";

const Menu = () => {
  const {
    addTab,
    currentTab: { key },
  } = useSubStore("tabs");

  return (
    <_Menu
      items={menuItems}
      mode="inline"
      selectedKeys={[key]}
      onSelect={({ key }) => {
        addTab({
          key,
          uuid: v1(),
          Component: tabsConfig[key],
        });
      }}
    />
  );
};

export default observer(Menu);
