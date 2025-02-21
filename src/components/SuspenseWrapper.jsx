import { Suspense } from "react";

const SuspenseWrapper = (Component) => (
  <Suspense>
    <Component />
  </Suspense>
);

export default SuspenseWrapper;
