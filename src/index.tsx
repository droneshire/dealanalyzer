import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#d2d3d4",
    },
    text: {
      primary: "#ffffff",
      secondary: "#d2d3d4",
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
