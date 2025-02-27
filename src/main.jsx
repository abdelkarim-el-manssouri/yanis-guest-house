import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
// import Loading from "./components/Loading.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
