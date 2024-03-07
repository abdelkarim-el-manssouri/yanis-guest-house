import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import { ShiftingDropDown } from "./Navbar";
import Footer from "./Footer";
import { Children, useState } from "react";
import Header from "./Header";
// import AnimatedButton from "../UI/AnimatedButton";
// import WaterDropGrid from "../UI/WaterDropGrid";

const DefaultLayout = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const vheight = window.innerHeight;
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > vheight + 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <div className="mx-auto">
        {/* To call color from tailwind.config, use -{nameOfKey} ex: text-primary */}
        <header className="w-full h-screen bg-secondary">
          <Header />
        </header>
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
        <div className="h-screen bg-primary">
          {/* <AnimatedButton text="something" /> */}
          {/* <WaterDropGrid /> */}{" "}
        </div>
        <Outlet />
        <footer className="h-screen">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default DefaultLayout;
