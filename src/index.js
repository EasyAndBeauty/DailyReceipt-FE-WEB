import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";

const theme = {
  bk: "#191919",
  wt: "#fcfcfc",
  gray: "#aaaaaa",
  green: "#81c944",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Reset />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
