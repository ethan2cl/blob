import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "antd/lib/config-provider";
import { ComponentWithChildren } from "@/shared";

const theme: ThemeConfig = {
  token: {
    // colorPrimary: "#EEE",
  },
};

const AntGlobalProvider = ({ children }: ComponentWithChildren) => {
  return (
    <ConfigProvider theme={theme} locale={zhCN} componentSize="middle">
      {children}
    </ConfigProvider>
  );
};

export default AntGlobalProvider;
