/**
 * 菜单对应的key => 一个页面（tab）
 */

import { Spin } from "antd";
import dynamic, { DynamicOptions, Loader } from "next/dynamic";
import { ComponentType } from "react";

function dynamicWithSpin<P>(dynamicOptions: DynamicOptions<P> | Loader<P>) {
  return dynamic(dynamicOptions, {
    loading: () => <Spin />,
  });
}

const tabsConfig: Record<string, ComponentType> = {
  home: dynamicWithSpin(() => import("@/client/components/Home")),
  test1: dynamicWithSpin(() => import("@/client/components/Test1")),
  test2: dynamicWithSpin(() => import("@/client/components/Test2")),
};

export default tabsConfig;
