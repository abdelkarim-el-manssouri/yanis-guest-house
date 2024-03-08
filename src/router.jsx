import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/default/Home";
import NotFound from "./pages/default/NotFound";
// import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Rooms from "./pages/default/Rooms";
import Activities from "./pages/default/Activities";
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
        path: "/accommodations",
        element: <Rooms />,
      },
      {
        path: "/activities",
        element: <Activities />,
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
