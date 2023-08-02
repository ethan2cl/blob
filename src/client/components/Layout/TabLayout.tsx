import { ComponentWithChildren } from "@/shared";
import Menu from "../Menu";
import { TabNav } from "../PageTabs";
import { StyledContent, StyledHeader, StyledLayout } from "./styles";
import Header from "./Header";

const TabLayout = ({ children }: ComponentWithChildren) => {
  return (
    <StyledLayout>
      <Header />
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
