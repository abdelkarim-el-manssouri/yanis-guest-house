import { Link } from "react-router-dom";
import Button from "../UI/Button";
import StaggeredDropDown from "./Menu";
// import { NavbarButton } from "../UI/NavbarButton";

const Navbar_v2 = () => {
  return (
    <div className="grid grid-cols-3 shadow-xl backdrop-blur-sm p-3">
      <div className="flex items-center ml-2">{/* <NavbarButton /> */}</div>

      <div className="grid place-content-center hover:scale-105 active:scale-95 transition duration-500">
        <Link to="/home">
          <img
            src="https://yanisguesthouse.com/images/logo.png"
            alt="logo"
            className="w-28 h-14"
          />
        </Link>
      </div>

      <div className="flex justify-end items-center gap-2 mr-2">
        <span className="invisible md:visible">
          <Link to="/accommodations">
            {/* <Button content="book" /> */}
            <button className="grid place-content-center cursor-pointer relative w-fit px-3 h-8 rounded-md overflow-hidden bg-gradient-to-b from-background/30 via-black/40 to-transparent text-background font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 capitalize before:absolute before:-left-10 before:w-8 before:h-[120%] before:bg-white/35 before:-skew-x-12 before:blur-sm before:hover:translate-x-48 before:transition-all before:duration-700">
              book
            </button>
          </Link>
        </span>
        <StaggeredDropDown />
      </div>
    </div>
  );
};

export default Navbar_v2;
