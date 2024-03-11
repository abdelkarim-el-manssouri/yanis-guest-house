import { useRef } from "react";
import { AnimatedText } from "../../UI/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScroll from "../../components/HorizontalScroll";
// import WaterDropGrid from "../../UI/WaterDropGrid";
import AnimatedButton from "../../UI/AnimatedButton";
import { Link } from "react-router-dom";

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
        <div className="absolute top-32 md:top-20 leading-8 w-[25ch] md:w-[50ch] lg:w-[80ch] uppercase [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
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

      <section>
        <HorizontalScroll />
      </section>

      <motion.section
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", stiffness: 100 }}
        className="h-3/4 grid grid-cols-3 my-16 w-11/12 mx-auto"
      >
        <div className="h-full w-full flex justify-center items-end relative">
          {/* <WaterDropGrid /> */}
          <div className="z-10 absolute top-full md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 md:-translate-y-1/2 w-[90%] md:p-5 mx-auto">
            <motion.h3
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1 }}
              className="text-center mx-auto py-5 md:p-1.5 lg:p-3 my-6 md:my-3 lg:my-5 text-sm md:text-xl lg:text-3xl font-semibold w-[45ch] md:w-[45ch] bg-beige relative after:absolute after:w-0.5 after:h-full after:bg-beige after:-right-1.5 after:top-0 before:absolute before:w-1 before:h-full before:bg-beige before:-right-3 before:top-0"
            >
              To return to yanis guest house time and time again
            </motion.h3>
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 2 }}
              className="p-3 -mt-3 md:mt-0 lg:p-6 mx-auto w-[50ch] md:w-[60ch] lg:w-[75ch] text-xs md:text-sm lg:text-base bg-beige relative after:absolute after:w-0.5 after:h-full after:bg-beige after:-right-1.5 after:top-0 before:absolute before:w-1 before:h-full before:bg-beige before:-right-3 before:top-0"
            >
              Our excellence is the result of tireless endeavour, the unfailing
              commitment of our employees, constant self-questioning, and
              innovations that are daring yet respectful of the past. This is
              how yanis guest house remains a place of legend that moves with
              the times while always remaining in tune with the here and now.
              Our greatest reward is the loyalty of our customers, who love
              coming back here because they are made to feel so at home.
            </motion.p>
          </div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ type: "tween", duration: 2.1 }}
            className="absolute lg:relative -bottom-60 md:-bottom-6 lg:bottom-0"
          >
            <AnimatedButton text="book now">
              <Link to="/book" />
            </AnimatedButton>
          </motion.div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <img
            src="/src/assets/cozy-green-sofa_edited.jpg"
            alt="image"
            className="h-full"
            loading="lazy"
          />
        </div>
      </motion.section>
    </>
  );
};

export default Home;
