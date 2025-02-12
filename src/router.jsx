// import { Navigate, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/default/Home";
// import NotFound from "./pages/default/NotFound";
// import DefaultLayout from "./components/DefaultLayout";
// import Rooms from "./pages/default/Rooms";
// import Activities from "./pages/default/Activities";
// import Photos from "./pages/photos";
// import Restoration from "./pages/default/Restoration";
// import Book from "./pages/default/Book";
// import MassageForm from "./components/MassageForm";
// import EmailForm from "./components/EmailForm";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <DefaultLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Navigate to="/home" />,
//       },
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/gallery",
//         element: <Photos />,
//       },
//       {
//         path: "/accommodations",
//         element: <Rooms />,
//       },
//       {
//         path: "/activities&wellbeing",
//         element: <Activities />,
//       },
//       {
//         path: "/restoration",
//         element: <Restoration />,
//       },
//       {
//         path: "/book",
//         element: <Book />,
//       },
//       {
//         path: "/selfCareForm",
//         element: <MassageForm />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// export default router;

import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  Home,
  NotFound,
  Rooms,
  Activities,
  Photos,
  Restoration,
  Book,
  MassageForm,
} from "./lazyComponents";
import DefaultLayout from "./components/DefaultLayout";
import SuspenseWrapper from "./components/SuspenseWrapper";

// const EmailForm = lazy(() => import("./components/EmailForm"));

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
      {
        path: "/book",
        element: SuspenseWrapper(Book),
      },
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
