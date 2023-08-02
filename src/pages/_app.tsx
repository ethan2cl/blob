/**
 * 程序的总入口，可以：
 * 1、集成redux、mobx等
 * 2、加载全局的东西，如全局样式文件
 */

import { GlobalStyled } from "@/client/styles";
import { DefaultLayout } from "@/client/components/Layout";
import { BlobNextPage } from "@/shared";
import Head from "next/head";
import {
  AntGlobalProvider,
  MobxStoreProvider,
  StyledThemeProvider,
} from "@/client/providers";

export default function App({ Component, pageProps }: BlobNextPage) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <MobxStoreProvider initialState={pageProps.initialMobxState}>
      <Head>
        <title>Ethan的个人中心</title>
      </Head>
      <GlobalStyled />
      <StyledThemeProvider>
        <AntGlobalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AntGlobalProvider>
      </StyledThemeProvider>
    </MobxStoreProvider>
  );
}
