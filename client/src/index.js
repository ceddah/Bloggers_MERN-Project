import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { DarkModeProvider } from "./context/darkModeContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </Provider>
);
