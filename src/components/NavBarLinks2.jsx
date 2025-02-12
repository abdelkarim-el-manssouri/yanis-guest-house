/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Pages } from "../data/data";
import "../css/rooms.css";

const NavBarLinks2 = ({ t }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((pv) => !pv);
  };
  const [revealImg, setRevealImg] = useState({
    show: false,
    image: "/images/homePage/navbarLinks/homeLinkBkg2-1.webp",
    key: "0",
  });

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <>
      <button
        onClick={toggleOpen}
        className="relative size-10 rounded-full bg-white/0 transition-colors hover:bg-white/20 p-6"
      >
        <span className="sr-only">open menu</span>
        <span className="absolute h-0.5 w-5 bg-background left-1/4 top-[35%] " />
        <span className="absolute h-0.5 w-5 bg-background top-1/2 left-1/4" />
        <span className="absolute h-0.5 w-2.5 bg-background top-[65%] left-1/4" />
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 origin-top bg-black h-screen w-full"
            >
              <motion.button
                variants={exitButtonVariant}
                onClick={toggleOpen}
                className="left-5 top-5 relative size-10 rounded-full bg-white/0 transition-colors hover:bg-white/20"
              >
                <span className="sr-only">close menu</span>
                <span className="absolute h-0.5 w-5 bg-white left-1/4 top-1/2 rotate-45" />
                <span className="absolute h-0.5 w-5 bg-white top-1/2 left-1/4 -rotate-45" />
              </motion.button>
              <motion.div
                variants={linkVariant}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col justify-center h-full items-center"
              >
                {Pages.map((i) => {
                  return (
                    <motion.div
                      onHoverStart={() =>
                        setRevealImg({
                          show: true,
                          image: i.image,
                          key: i.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealImg({
                          show: false,
                          image: i.image,
                          key: i.id,
                        })
                      }
                      key={i.id}
                      className="overflow-hidden"
                    >
                      <Links
                        setOpen={setOpen}
                        title={i.title}
                        href={i.link}
                        t={t}
                      />
                    </motion.div>
                  );
                })}
                <motion.div className="image absolute inset-0 -z-10 overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 0.25,
                      }}
                      exit={{ opacity: 0 }}
                      src={revealImg.image}
                      alt={`image of ${revealImg.key}`}
                      className="object-cover object-center h-full w-full"
                      key={revealImg.key}
                    />
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBarLinks2;

const Links = ({ title, setOpen, href, t }) => {
  return (
    <motion.div
      onClick={() => setOpen(false)}
      variants={menuLinksVariants}
      className="relative text-white/70 hover:text-white transition duration-300 !font-Italiana font-medium uppercase text-xl md:text-3xl lg:text-4xl mb-8 md:mb-10 lg:mb-12 hover:after:absolute hover:after:-bottom-2 after:duration-300 after:bg-white after:left-0 after:-bottom-4 after:h-0.5 after:w-full"
    >
      <Link to={href}>{t(title)}</Link>
    </motion.div>
  );
};

const menuVariants = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
    y: "-100%",
  },
};

const menuLinksVariants = {
  initial: {
    y: "30vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const linkVariant = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const exitButtonVariant = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};
