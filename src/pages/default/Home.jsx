import { useRef } from "react";
import { AnimatedText } from "../../UI/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScroll from "../../components/HorizontalScroll";
// import WaterDropGrid from "../../UI/WaterDropGrid";
import AnimatedButton from "../../UI/AnimatedButton";
import { Link } from "react-router-dom";
import { SwipeCarousel } from "../../components/Carousel";

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

const fadeInLeftXAxisAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const fadeInRightXAxisAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const xAxisTextScroll = {
  initial: {
    x: 600,
  },
  animate: {
    x: -300,
  },
};

const Home = () => {
  const ref = useRef(null);
  // const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const scale2Progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity2Progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
        className="h-3/4 grid gap-y-4 md:gap-y-0 md:grid-cols-3 mt-4 md:my-16 md:w-11/12 mx-auto"
      >
        <div className="h-full w-full md:flex order-2 md:order-none lg:justify-center lg:items-end md:relative">
          <div className="md:z-10 md:absolute flex-row md:flex-none justify-center items-center md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[90%] md:p-5 mx-auto">
            <motion.h3
              variants={fadeInLeftXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1 }}
              className="md:text-center w-full mx-auto p-1.5 lg:p-3 my-3 lg:my-5 text-sm md:text-xl lg:text-3xl font-semibold whitespace-nowrap md:w-[45ch] bg-beige md:relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-right-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-right-3 md:before:top-0"
            >
              To return to yanis guest house time and time again
            </motion.h3>
            <motion.div
              variants={fadeInLeftXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1.5 }}
              className="p-1.5 md:p-3 md:mt-0 lg:p-6 mx-auto w-full md:w-[60ch] lg:w-[75ch] text-xs lg:text-sm tracking-wide bg-beige relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-right-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-right-3 md:before:top-0"
            >
              <p className="mb-2 md:mb-3 lg:mb-4">
                Our excellence is the result of tireless endeavour, the
                unfailing commitment of our employees, constant
                self-questioning, and innovations that are daring yet respectful
                of the past. This is how yanis guest house remains a place of
                legend that moves with the times while always remaining in tune
                with the here and now.
              </p>
              <p>
                Our greatest reward is the loyalty of our customers, who love
                coming back here because they are made to feel so at home.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ type: "tween", duration: 1.6 }}
            className="flex md:flex-none justify-center mt-5 md:absolute lg:relative md:left-20 lg:left-0 md:-bottom-6 lg:bottom-0"
          >
            <AnimatedButton text="book now">
              <Link to="/book" />
            </AnimatedButton>
          </motion.div>
        </div>
        <div className="md:col-span-2">
          <img
            src="/src/assets/cozy-green-sofa_edited.jpg"
            alt="image"
            className="h-full"
            loading="lazy"
          />
        </div>
      </motion.section>

      <motion.section
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", stiffness: 100 }}
        className="h-3/4 grid gap-y-4 md:gap-y-0 md:grid-cols-3 mt-4 md:my-16 md:w-11/12 mx-auto overflow-hidden"
      >
        <div className="md:col-span-2 mt-4 md:mt-0">
          <img
            src="/src/assets/cozy-green-sofa_edited.jpg"
            alt="image"
            className="h-full"
            loading="lazy"
          />
        </div>
        <div className="h-full w-full md:flex md:justify-center md:items-end md:relative">
          <div className="md:z-10 md:absolute md:top-1/2 md:right-3/4 md:-translate-x-60 md:-translate-y-1/2 w-[90%] md:p-5 mx-auto">
            <motion.h3
              variants={fadeInRightXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1 }}
              className="md:text-center w-full mx-auto p-1.5 lg:p-3 my-3 lg:my-5 md:ml-10 lg:ml-0 text-sm md:text-xl lg:text-3xl font-semibold whitespace-nowrap md:w-[45ch] bg-beige md:relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-left-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-left-3 md:before:top-0"
            >
              What makes yanis guest house unique in their eyes?
            </motion.h3>
            <motion.div
              variants={fadeInRightXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1.5 }}
              className="p-1.5 md:p-3 md:mt-0 md:ml-28 lg:p-6 mx-auto w-full md:w-[60ch] lg:w-[75ch] text-xs lg:text-sm tracking-wide bg-beige relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-left-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-left-3 md:before:top-0"
            >
              <p className="mb-2 md:mb-3 lg:mb-4">
                A sense of hospitality that translates into a thousand and one
                details. From your first visit, we remember your preferences:
                your ideal room temperature, your favourite coffee, the drinks
                and dishes you like...
              </p>
              <p>
                So, we know not only what will please you during your next stay,
                but also what will surprise you and make you want to come back
                for an experience that is always fresh and new.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        // variants={fadeInAnimationVariants}
        // initial="initial"
        // whileInView="animate"
        // transition={{ type: "spring" }}
        style={{
          scale: scale2Progress,
          opacity: opacity2Progress,
        }}
        // ref={ref}
        className="my-16 md:my-0 md:h-screen flex items-center overflow-hidden"
      >
        <div className="aspect-video lg:aspect-carousel w-full bg-cover opacity-80 bg-[url('/src/assets/cozy-green-sofa.jpeg')]">
          <motion.h2
            // ref={ref2}
            variants={xAxisTextScroll}
            initial="initial"
            whileInView="animate"
            // style={{ x }}
            className="flex items-end w-full h-full whitespace-nowrap text-white text-[6em] md:text-[9em] lg:text-[11em] font-bold transition-all duration-[5s] ease-move-mouse"
          >
            something special
          </motion.h2>
        </div>
      </motion.section>

      <section className="">
        <SwipeCarousel />
      </section>
    </>
  );
};

export default Home;
