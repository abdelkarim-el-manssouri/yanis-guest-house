import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import Loading from "./components/Loading.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);
