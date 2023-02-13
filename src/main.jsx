import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfiguratorProvider } from "./contexts/Configurator";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfiguratorProvider>
      <App />
    </ConfiguratorProvider>
  </React.StrictMode>
);
