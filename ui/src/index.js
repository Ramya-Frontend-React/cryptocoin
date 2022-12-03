import React from "react";
import ReactDOM from "react-dom/client";

import { MainFrame } from "./components/mainframe";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainFrame />
  </React.StrictMode>
);
