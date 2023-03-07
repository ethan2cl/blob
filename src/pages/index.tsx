/**
 * 页面入口，全局只需要一个页面
 */

import { TabLayout } from "@/client/components/Layout";
import { TabContent } from "@/client/components/PageTabs";
// import { tokenHandler } from "@/client/helpers/tokenHandler";
import { DefaultAppPageProps } from "@/shared";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
const Home = () => {
  // resolve UI dose not resolve
  const [boolean, setBoolean] = useState(false);
  useEffect(() => {
    if (!boolean) {
      setBoolean(true);
    }
  }, [boolean]);

  if (!boolean) return false;

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
