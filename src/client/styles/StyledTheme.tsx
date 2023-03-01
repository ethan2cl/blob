import { ThemeProvider } from "styled-components";

const styledTheme = {
  color: "#EEE",
};

const StyledTheme = ({ children }: any) => {
  return <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>;
};

export default StyledTheme;
