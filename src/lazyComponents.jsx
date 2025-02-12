import { lazy } from "react";

export const Home = lazy(() => import("./pages/default/Home"));
export const NotFound = lazy(() => import("./pages/default/NotFound"));
export const Rooms = lazy(() => import("./pages/default/Rooms"));
export const Activities = lazy(() => import("./pages/default/Activities"));
export const Photos = lazy(() => import("./pages/photos"));
export const Restoration = lazy(() => import("./pages/default/Restoration"));
// export const Book = lazy(() => import("./pages/default/Book"));
export const MassageForm = lazy(() => import("./components/MassageForm"));
