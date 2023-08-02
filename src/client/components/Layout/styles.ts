import { Layout } from "antd";
import styled from "styled-components";

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  height: 100%;
`;

const StyledHeader = styled(Header)`
  background-color: #f2f2f2 !important;

  .logo {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .login {
    cursor: pointer;
  }
`;

const StyledContent = styled(Content)`
  background-color: #fff !important;
  display: flex !important;

  .menu {
    width: 320px;
    border-right: 1px solid #f2f2f2;
    padding: 40px 20px 40px 40px;
    .ant-menu {
      border-inline-end: unset;

      &.ant-menu-sub {
        background: unset;
      }
    }
  }

  .maintain {
    flex: 1;
    padding: 10px;
    position: relative;
    // overflow-x: hidden;
    // overflow-y: scroll;
  }
`;

export { StyledLayout, StyledHeader, StyledContent };
