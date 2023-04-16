import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkScrollbar } from "@mui/material";

import "./index.css";
import App from "./components/App";
import { LinkBehavior } from "./components/utils/links";

// Set default link components to ref forwarding react-router links
const mdTheme = createTheme({
  components: {
    MuiLink: {
      // TODO: figure out how to avoid `as any` here
      defaultProps: {
        component: LinkBehavior,
      } as any,
    },
    MuiListItemButton: {
      defaultProps: {
        component: LinkBehavior,
      } as any,
    },
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
