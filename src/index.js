import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

import "./index.css";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
