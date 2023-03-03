import { ComponentWithChildren } from "@/shared";
import { StyledLayout } from "./styles";

const DefaultLayout = ({ children }: ComponentWithChildren) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default DefaultLayout;
