import { CSSVariablesResolver, createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily:"Inter , sans-serif",
  primaryShade: 8,
  colors: {
    primary: [
      "#e8f3ff",
      "#d0e2fe",
      "#9fc2fa",
      "#6ba1f8",
      "#4284f6",
      "#2b72f6",
      "#1e69f6",
      "#1259dd",
      "#044fc6",
      "#0044ae",
    ],
  },
});

const resolver: CSSVariablesResolver = () => ({
  variables: {
    
  },
  light: {
   
  },
  dark: {
   
  },
});

export { theme, resolver };
