import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import { ShiftingDropDown } from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const DefaultLayout = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const vheight = window.innerHeight;
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > vheight + 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <div className="">
        {/* To call color from tailwind.config, use -{nameOfKey} ex: text-primary */}
        <header className="w-full h-screen bg-secondary"></header>
        <motion.div
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="bg-neutral-950 sticky top-0"
        >
          <nav>
            <ShiftingDropDown />
          </nav>
        </motion.div>
        <Outlet />
        <footer className="h-screen">
          <Footer />
        </footer>
        <footer className="h-screen">
          <Footer />
        </footer>
        <footer className="h-screen">
          <Footer />
        </footer>
        <footer className="h-screen">
          <Footer />
        </footer>
        <footer className="h-screen">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default DefaultLayout;
