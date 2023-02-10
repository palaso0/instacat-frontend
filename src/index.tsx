import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./app/App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme.config";
import { UserList, BoxModal, Post, FullPost } from "./components";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
