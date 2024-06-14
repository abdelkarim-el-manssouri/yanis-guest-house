import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import Navbar_v2 from "./Navbar_v2";
import NavBarLinks2 from "./NavBarLinks2";
import { useTranslation } from "react-i18next";

const DefaultLayout = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  // const vheight = window.innerHeight;
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 90) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const { t } = useTranslation("navbar");
  return (
    <>
      <main className="mx-auto bg-background md:max-w-7xl">
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid grid-cols-navbar sticky top-0 left-0 z-[600] bg-gradient-to-b from-black/80 via-black/50 to-transparent"
        >
          <div className="top-0 left-0 z-[600] p-5 w-full ">
            <NavBarLinks2 t={t} />
          </div>

          <Navbar_v2 t={t} />
        </motion.nav>
        <Outlet />
        <div className="bg-neutral-950"></div>
        <div className="h-screen">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
