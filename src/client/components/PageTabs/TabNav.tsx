import { useSubStore } from "@/client/hooks";
import { CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { observer } from "mobx-react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: -40px;
  left: 0px;
  max-width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .tab-item {
    height: 100%;
    width: 80px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0 10px;

    &.active {
      background-color: #e6f4ff;
    }
  }
`;

const TabNav = () => {
  const { tabs, currentTabUUID, changeCurrentTabUUID, removeTab } =
    useSubStore("tabs");
  return (
    <Wrapper>
      {tabs.map(({ uuid, key }) => (
        <div
          key={uuid}
          className={classNames(
            "tab-item",
            currentTabUUID === uuid ? "active" : "inactive"
          )}
          onClick={() => {
            changeCurrentTabUUID(uuid);
          }}
        >
          {key}
          <CloseOutlined
            onClick={(e) => {
              e.stopPropagation();
              removeTab(uuid);
            }}
          />
        </div>
      ))}
    </Wrapper>
  );
};

export default observer(TabNav);
