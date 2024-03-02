import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import "../App.css";
import { ShiftingDropDown } from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const DefaultLayout = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <div className="grid-content snap-y">
        {/* To call color from tailwind.config, use -{nameOfKey} ex: text-primary */}
        <header className="w-full h-screen snap-center bg-secondary"></header>
        <motion.div
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="snap-center bg-neutral-950 sticky top-0"
        >
          <nav>
            <ShiftingDropDown />
          </nav>
        </motion.div>
        <Outlet />
        <footer className="h-screen snap-center">
          <Footer />
        </footer>
        <footer className="h-screen snap-center">
          <Footer />
        </footer>
        <footer className="h-screen snap-center">
          <Footer />
        </footer>
        <footer className="h-screen snap-center">
          <Footer />
        </footer>
        <footer className="h-screen snap-center">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default DefaultLayout;
