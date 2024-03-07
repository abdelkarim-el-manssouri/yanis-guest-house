import { useRef } from "react";
import { AnimatedText } from "../../UI/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
// import HorizontalScroll from "../../components/HorizontalScroll";

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

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const textContent = `yanis guest house your best marrakesh spot`;
  return (
    <>
      <motion.section
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        ref={ref}
        className="relative h-screen w-full flex justify-center bg-cover bg-no-repeat bg-center bg-[url('/src/assets/cozy-grey-wall.jpeg')]"
      >
        <div className="absolute top-32 md:top-20 leading-8 w-[25ch] md:w-[50ch] lg:w-[80ch] uppercase">
          <AnimatedText text={textContent} />
        </div>
      </motion.section>

      <motion.section
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", stiffness: 100 }}
        className="my-20"
      >
        <motion.p className="text-center w-[25ch] md:w-[40ch] mx-auto font-semibold text-2xl text-mainText">
          Get away for a dream vacation and dive into an oasis of luxurious
          serenity in the heart of the Medina of Marrakech.
        </motion.p>
      </motion.section>

      <section>{/* <HorizontalScroll /> */}</section>
    </>
  );
};

export default Home;
