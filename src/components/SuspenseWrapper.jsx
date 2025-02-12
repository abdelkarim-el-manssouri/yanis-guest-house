import { Suspense } from "react";
import Loading from "./Loading";

const SuspenseWrapper = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export default SuspenseWrapper;
