/**
 * 程序的总入口，可以：
 * 1、集成redux、mobx等
 * 2、加载全局的东西，如全局样式文件
 */

import type { AppProps } from "next/app";
import { AntGlobal, GlobalStyled, StyledTheme } from "@/client/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <StyledTheme>
        <AntGlobal>
          <Component {...pageProps} />
        </AntGlobal>
      </StyledTheme>
    </>
  );
}
