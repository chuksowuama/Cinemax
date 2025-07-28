import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Storedmovies from "./Reduxstore.js";

createRoot(document.getElementById("root")).render(
  <Provider store={Storedmovies}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
