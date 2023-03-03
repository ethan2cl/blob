import { useSubStore } from "@/client/hooks";
import { observer } from "mobx-react";

const TabContent = () => {
  const tabs = useSubStore("tabs");

  const Component = tabs.currentTab.Component;

  return (
    <>
      <Component />
    </>
  );
};

export default observer(TabContent);
