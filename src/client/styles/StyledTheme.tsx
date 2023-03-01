import { ThemeProvider } from "styled-components";

const theme = {
  color: "#EEE",
};

const StyledTheme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledTheme;
