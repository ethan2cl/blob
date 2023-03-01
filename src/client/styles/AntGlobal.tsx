import { ThemeProvider } from "styled-components";

import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "antd/lib/config-provider";

const theme: ThemeConfig = {
  token: {
    // colorPrimary: "#EEE",
  },
};

const AntGlobal = ({ children }: any) => {
  return (
    <ConfigProvider theme={theme} locale={zhCN} componentSize="middle">
      {children}
    </ConfigProvider>
  );
};

export default AntGlobal;
