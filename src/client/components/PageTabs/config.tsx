/**
 * 菜单对应的key => 一个页面（tab）
 */

import { TabItem } from "@/shared";
import { Spin } from "antd";
import dynamic, { DynamicOptions, Loader } from "next/dynamic";
import React, { ComponentType } from "react";
import { v1 } from "uuid";

function dynamicWithSpin<P>(dynamicOptions: DynamicOptions<P> | Loader<P>) {
  return React.memo(
    dynamic(dynamicOptions, {
      loading: () => <Spin />,
    })
  );
}

const tabsConfig: Record<string, ComponentType> = {
  home: dynamicWithSpin(() => import("@/client/components/Home")),
  test1: dynamicWithSpin(() => import("@/client/components/Test1")),
  test2: dynamicWithSpin(() => import("@/client/components/Test2")),
};

export const DEFAULT_TAB: TabItem = {
  uuid: v1(),
  key: "home",
  Component: tabsConfig.home,
};

export default tabsConfig;
