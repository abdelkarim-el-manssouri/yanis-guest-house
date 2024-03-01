import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      this is default layout
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
