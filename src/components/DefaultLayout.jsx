/* eslint-disable react/prop-types */
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import Navbar_v2 from "./Navbar_v2";
import NavBarLinks2 from "./NavBarLinks2";
import { useTranslation } from "react-i18next";
import BookModal from "./BookModal";
import { PiHandTap } from "react-icons/pi";

const DefaultLayout = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
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
      <main className="mx-auto bg-background max-w-[2600px] selection:bg-cozyGreen selection:text-background">
        <BookButton t={t} />
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
        <div className="">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;

const BookButton = ({ t }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [selected, setSelected] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 75) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  return (
    <>
      <motion.div
        variants={bookButtonVariants}
        initial="hidden"
        animate={isHidden ? "hidden" : "visible"}
        onFocusCapture={() => setIsHidden(false)}
        whileTap={() => setIsHidden(false)}
        className="bg-gradient-to-br from-black to-cozyGreen px-1.5 z-[70] w-1/2 h-14 md:hidden flex justify-center items-center fixed top-[80%] left-0"
      >
        <div className="w-full h-full grid grid-cols-bookButton items-center gap-x-2">
          <button
            onClick={() => setSelected(true)}
            className="text-background !font-PoiretOne font-bold capitalize"
          >
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            {t("book")}
            {/* </a> */}
          </button>

          <span className="text-background ">
            <PiHandTap />
          </span>
        </div>
      </motion.div>
      <BookModal selected={selected} setSelected={setSelected} t={t} />
    </>
  );
};

const bookButtonVariants = {
  hidden: {
    x: "-85%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  visible: {
    x: "0%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};
