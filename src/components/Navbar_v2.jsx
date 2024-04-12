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
        <StaggeredDropDown />
        <Link to="/accommodations">
          <Button content="book" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar_v2;
