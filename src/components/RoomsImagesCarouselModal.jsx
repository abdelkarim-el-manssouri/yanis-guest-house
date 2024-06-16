import { motion } from "framer-motion";

const RoomsImagesCarouselModal = ({ clickedImg, setClickedImg }) => {
  if (!clickedImg) return <></>;
  return (
    <motion.div
      variants={bgModalVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      onClick={() => setClickedImg(null)}
      className="fixed grid place-content-center inset-0 bg-black/50 z-[700] cursor-pointer backdrop-blur-md overflow-y-scroll lg:w-[calc(100%+2.5rem)]"
    >
      <div className="size-9 rounded-full bg-black/30 right-5 md:right-12 top-4 absolute grid place-content-center">
        <span className="w-1/2 h-0.5 bg-background rounded rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <span className="w-1/2 h-0.5 bg-background rounded -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        onClick={(e) => e.stopPropagation()}
        className="w-full md:max-w-[75%] lg:max-w-[70%] mx-auto px-8 cursor-default"
      >
        <motion.div layoutId={`image-${clickedImg}`}>
          <img
            src={clickedImg}
            alt={clickedImg}
            className="rounded-md"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RoomsImagesCarouselModal;

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

const modalVariants = {
  initial: {
    opacity: 0,
    y: "-20%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.2,
    },
  },
};
