import { Outlet } from "react-router-dom";
import "../App.css";
import { ShiftingDropDown } from "./Navbar";

const DefaultLayout = () => {
  return (
    <>
      <div className="grid-content">
        <header className="w-full h-screen bg-slate-500"></header>
        <div className="h-screen bg-neutral-950">
          <nav>
            <ShiftingDropDown />
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
