import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  Home,
  NotFound,
  Rooms,
  Activities,
  Photos,
  Restoration,
  // Book,
  MassageForm,
} from "./lazyComponents";
import DefaultLayout from "./components/DefaultLayout";
import SuspenseWrapper from "./components/SuspenseWrapper";

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
        element: SuspenseWrapper(Home),
      },
      {
        path: "/gallery",
        element: SuspenseWrapper(Photos),
      },
      {
        path: "/accommodations",
        element: SuspenseWrapper(Rooms),
      },
      {
        path: "/activities&wellbeing",
        element: SuspenseWrapper(Activities),
      },
      {
        path: "/restoration",
        element: SuspenseWrapper(Restoration),
      },
      // {
      //   path: "/book",
      //   element: SuspenseWrapper(Book),
      // },
      {
        path: "/selfCareForm",
        element: SuspenseWrapper(MassageForm),
      },
    ],
  },
  {
    path: "*",
    element: SuspenseWrapper(NotFound),
  },
]);

export default router;
