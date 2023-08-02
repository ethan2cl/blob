import { Row } from "antd";
import { StyledHeader } from "../styles";
import { useSubStore } from "@/client/hooks";
import Link from "next/link";

const Header = () => {
  const { username } = useSubStore("global");
  return (
    <StyledHeader>
      <Row justify="space-between">
        <div className="logo">Ethan的个人中心</div>
        <div className="login">
          {username ? `欢迎你, ${username}` : <Link href="/login">登陆</Link>}
        </div>
      </Row>
    </StyledHeader>
  );
};

export default Header;
