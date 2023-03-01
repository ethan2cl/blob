/**
 * 页面入口，全局只需要一个页面
 */

import { useSubStore } from "@/client/hooks";
import { Button, TimePicker } from "antd";
import { observer } from "mobx-react";
import { GetServerSideProps } from "next";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.color};
`;

const Home = () => {
  const global = useSubStore("global");

  const setA = () => {
    global.setUsername("tong yao");
  };

  return (
    <Wrapper onClick={setA}>
      <Button type="primary">{global.username}</Button>
      <TimePicker />
    </Wrapper>
  );
};

export default observer(Home);

export const getServerSideProps: GetServerSideProps = async function (context) {
  return {
    props: {},
  };
};
