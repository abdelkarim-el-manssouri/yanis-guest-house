import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Rooms from "./pages/Rooms";
// import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <GuestLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
