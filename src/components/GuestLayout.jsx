import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      this is for guest users
      <Outlet />
    </div>
  );
};

export default GuestLayout;
