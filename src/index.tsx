import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import InitializationProject from "./components/InitializationProject";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <InitializationProject>
      <App />
      </InitializationProject>
    </Provider>
  </React.StrictMode>
);
