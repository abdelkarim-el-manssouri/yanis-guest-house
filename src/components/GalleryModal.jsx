/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect } from "react";

const GalleryModal = ({ selected, setSelected }) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", selected);
  }, [selected]);
  if (!selected) {
    return <></>;
  }
  return (
    <motion.div
      variants={bgModalVariants}
      initial="initial"
      animate="animate"
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-[700] cursor-pointer backdrop-blur-md overflow-y-scroll lg:w-[calc(100%+2.5rem)]"
    >
      <div className="size-9 rounded-full bg-black/30 right-4 md:right-5 lg:right-12 top-4 absolute grid place-content-center">
        <span className="w-1/2 h-0.5 bg-background rounded rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <span className="w-1/2 h-0.5 bg-background rounded -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[90%] md:max-w-[70%] mx-auto cursor-default flex items-center h-full"
      >
        <motion.div layoutId={`image-${selected}`}>
          <img src={selected} alt={selected} className="rounded-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GalleryModal;

const bgModalVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
