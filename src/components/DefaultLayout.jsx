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
import NavBarLinks2 from "./NavBarLinks2";
// import { NavbarButton } from "../UI/NavbarButton";
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
        <div className="fixed top-0 left-0 z-[600] p-5">
          {/* <NavbarButton /> */}
          <NavBarLinks2 />
        </div>

        <header className="w-full h-[100dvh] bg-bordeaux/20">
          {/*  <Header />*/}
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
            {/* <NavbarButton /> */}
            <Navbar_v2 />
          </nav>
        </motion.div>

        <Outlet />
        <div className="bg-neutral-950">{/* <NavbarButton /> */}</div>
        <footer className="h-screen">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default DefaultLayout;
