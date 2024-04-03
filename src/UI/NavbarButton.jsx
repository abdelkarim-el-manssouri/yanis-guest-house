import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { HoverImageLinks } from "../components/NavbarLinks";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      // duration: 0.4,
      // ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    // transition: {
    //   type: "spring",
    //   stiffness: 100,
    //   damping: 10,
    //   // duration: 0.4,
    //   // ease: [0.22, 1, 0.36, 1],
    // },
  },
};

export const NavbarButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={`fixed top-0 left-0 text-white max-w-fit ${
        open ? "bg-neutral-950" : "bg-transparent mix-blend-difference"
      } `}
    >
      <button onClick={() => setOpen((pv) => !pv)}>
        <AnimatedHamburgerButton />
        {open && (
          <AnimatePresence>
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ originY: "top", translateY: "2%" }}
              // className="origin-top"
            >
              <HoverImageLinks />
            </motion.div>
          </AnimatePresence>
        )}
      </button>
    </motion.div>
  );
};

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative size-10 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-5 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-5 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-2.5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% - 5px)",
    },
  },
};
