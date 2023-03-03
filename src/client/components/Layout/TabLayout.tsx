import { ComponentWithChildren } from "@/shared";
import Menu from "../Menu";
import { TabNav } from "../PageTabs";
import { StyledContent, StyledHeader, StyledLayout } from "./styles";

const TabLayout = ({ children }: ComponentWithChildren) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <div className="logo">Ethan的个人中心</div>
      </StyledHeader>
      <StyledContent>
        <div className="menu">
          <Menu />
        </div>
        <div className="maintain">
          <TabNav />
          {children}
        </div>
      </StyledContent>
    </StyledLayout>
  );
};

export default TabLayout;
