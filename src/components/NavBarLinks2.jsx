import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NavBarLinks2 = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((pv) => !pv);
  };

  // const [showNav, setShowNav] = useState(false);

  // useEffect(() => {
  //   // Listen for route changes and close the navbar
  //   const handleRouteChange = () => {
  //     setShowNav(false);
  //   };

  //   // Attach the event listener
  //   window.addEventListener("routeChange", handleRouteChange);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("routeChange", handleRouteChange);
  //   };
  // }, []);

  return (
    <>
      <button
        onClick={toggleOpen}
        className="relative size-10 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <span className="absolute h-0.5 w-5 bg-gray-500 left-1/4 top-[35%] " />
        <span className="absolute h-0.5 w-5 bg-gray-500 top-1/2 left-1/4" />
        <span className="absolute h-0.5 w-2.5 bg-gray-500 top-[65%] left-1/4" />
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 origin-top bg-black h-screen w-screen"
            >
              <motion.button
                variants={exitButtonVariant}
                onClick={toggleOpen}
                className="left-5 top-5 relative size-10 rounded-full bg-white/0 transition-colors hover:bg-white/20"
              >
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
                    <div key={i.id} className="overflow-hidden">
                      <Links setOpen={setOpen} title={i.title} href={i.link} />;
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBarLinks2;

const Links = ({ title, setOpen, href }) => {
  return (
    <motion.div
      onClick={() => setOpen(false)}
      variants={menuLinksVariants}
      className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-7"
    >
      <Link to={href}>{title}</Link>
    </motion.div>
  );
};

const Pages = [
  { id: 1, title: "home", link: "home" },
  { id: 2, title: "accommodations", link: "accommodations" },
  { id: 3, title: "restoration", link: "restoration" },
  { id: 4, title: "gallery", link: "gallery" },
];

const menuVariants = {
  initial: {
    // scaleY: 0,
    y: "-100%",
  },
  animate: {
    // scaleY: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
    // scaleY: 0,
    y: "-100%",
  },
};

const menuLinksVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
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
