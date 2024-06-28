import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Router from "./routes/Routes.tsx";
import { resolver, theme } from "./core/utility/constants/theme.constants.ts";
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Router />
    </MantineProvider>
  </React.StrictMode>
);
