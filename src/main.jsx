import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "./i18n.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import Loading from "./components/Loading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
