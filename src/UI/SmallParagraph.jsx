import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const SmallParagraph = ({ text }) => {
  return (
    <>
      <motion.section
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", stiffness: 100 }}
        className="my-20"
      >
        <p className="text-center w-[25ch] md:w-[40ch] mx-auto font-semibold text-2xl text-mainText uppercase leading-snug tracking-wide">
          {text}
        </p>
      </motion.section>
    </>
  );
};

export default SmallParagraph;
