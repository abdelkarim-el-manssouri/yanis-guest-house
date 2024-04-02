import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useState } from "react";
import { motion, spring } from "framer-motion";
import { HoverImageLinks } from "./NavbarLinks";
import StaggeredDropDown from "./Menu";

const variants = {
  open: {
    transition: {
      type: spring,
      stiffness: 20,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: spring,
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar_v2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-3 bg-secondary/50 backdrop-blur-sm p-3">
      <motion.div
        variants={variants}
        animate={open ? "open" : "closed"}
        // className={`${open ? "col-span-3" : "col-span-1"}`}
        className="flex items-center ml-2"
      >
        {/* <button onClick={() => setOpen((prev) => !prev)}>click</button> */}
        <StaggeredDropDown />
        {/* {open && <HoverImageLinks />} */}
      </motion.div>

      <div className="grid place-content-center">
        <Link to="/home">
          <img
            src="https://yanisguesthouse.com/images/logo.png"
            alt="logo"
            className="w-28 h-14"
          />
        </Link>
      </div>

      <div className="grid justify-end place-content-center mr-2">
        <Link to="/accommodations">
          <Button content="book" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar_v2;
