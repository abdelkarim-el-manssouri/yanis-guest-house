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
        <p className="text-center w-[30ch] md:w-[40ch] mx-auto font-semibold text-xl lg:text-2xl text-textColor uppercase leading-snug tracking-wide">
          {text}
        </p>
      </motion.section>
    </>
  );
};

export default SmallParagraph;
