import { ComponentWithChildren } from "@/shared";
import { ThemeProvider } from "styled-components";

const theme = {
  color: "#EEE",
};

const StyledThemeProvider = ({ children }: ComponentWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
