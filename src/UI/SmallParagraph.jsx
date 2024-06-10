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
        className="my-12 md:my-20"
      >
        <p className="text-center w-[25ch] md:w-[40ch] mx-auto font-semibold text-lg lg:text-2xl bg-gradient-to-br from-black via-secondary/80 to-black bg-clip-text text-transparent uppercase leading-snug tracking-wide !font-Italiana">
          {text}
        </p>
      </motion.section>
    </>
  );
};

export default SmallParagraph;
