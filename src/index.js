import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/App.css";

// Get the root element
const container = document.getElementById("root");
const root = createRoot(container);

// Render the App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
