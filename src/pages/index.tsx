/**
 * 页面入口，全局只需要一个页面
 */

import { TabLayout } from "@/client/components/Layout";
import { TabContent } from "@/client/components/PageTabs";
import { DefaultAppPageProps } from "@/shared";
import { GetServerSideProps } from "next";

const Home = () => {
  return (
    <>
      <TabContent />
    </>
  );
};

Home.Layout = TabLayout;

export default Home;

export const getServerSideProps: GetServerSideProps<DefaultAppPageProps> =
  async function () {
    return {
      props: {
        initialMobxState: {
          global: { username: "ethan" },
        },
      },
    };
  };
