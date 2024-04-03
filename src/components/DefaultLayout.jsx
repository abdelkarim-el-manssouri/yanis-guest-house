import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
// import { ShiftingDropDown } from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
// import Header from "./Header";
// import AnimatedButton from "../UI/AnimatedButton";
// import WaterDropGrid from "../UI/WaterDropGrid";
// import AnimatedText from "../UI/AnimatedText";
import Navbar_v2 from "./Navbar_v2";
import { NavbarButton } from "../UI/NavbarButton";
// import { HoverImageLinks } from "./NavbarLinks";

const DefaultLayout = () => {
  // const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const vheight = window.innerHeight;
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > vheight + 70) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <main className="mx-auto bg-beige">
        <header className="w-full h-[100dvh] bg-primary">
          {/* <Header /> */}
        </header>
        <motion.div
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="sticky top-0 z-[500]"
        >
          <nav>
            <Navbar_v2 />
          </nav>
        </motion.div>
        <Outlet />
        <div className="bg-neutral-950">
          {/* <button onClick={() => setOpen((prev) => !prev)}> */}
          <NavbarButton />
          {/* {open && (
              <div className="">
                <HoverImageLinks />
              </div>
            )} */}
          {/* </button> */}
        </div>
        <footer className="h-screen">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default DefaultLayout;
