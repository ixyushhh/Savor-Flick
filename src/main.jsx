import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizzing: border-box;
  padding: 0;
  margin: 0;
} 
body{
  background-color: #31304D;
  min-height: 100vh;
  color: white;
}
`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
