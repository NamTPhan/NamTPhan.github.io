import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const container =
  document.getElementById("root") || document.createElement("div");

const root = ReactDOMClient.createRoot(container);
root.render(<App />);

localStorage.setItem("theme", "light");
serviceWorker.unregister();
