import { Outlet } from "react-router-dom";
import "../App.css";
import { ShiftingDropDown } from "./Navbar";

const DefaultLayout = () => {
  return (
    <>
      <div className="grid-content">
        {/* To call color from tailwind.config, use -{nameOfKey} ex: text-primary */}
        <header className="w-full h-screen bg-secondary"></header>
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
