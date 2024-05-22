import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { sensationsData } from "../../data/data";
import SmallParagraph from "../../UI/SmallParagraph";
import BookNow from "../../components/BookNow";
import HorizontalScrollResto from "../../components/HorizontalScrollResto";

const Restoration = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const text1 =
    "the restaurant of yanis guest house is not only a fine dining destination, it is a feast for each of the five senses.";
  const text2 =
    "There is something for everyone, Along with unforgettable moments of exchange.";
  return (
    <>
      <RestoHeader />

      <SmallParagraph text={text1} />

      <motion.section>
        {sensationsData.map((sen) => {
          return (
            <React.Fragment key={sen.id}>
              <Sensation {...sen} />
            </React.Fragment>
          );
        })}
      </motion.section>

      <SmallParagraph text={text2} />

      {/* <section>
        <BookNow />
      </section> */}

      <section className="relative z-10">
        <HorizontalScrollResto />
      </section>

      <section>
        <SeeMenu />
      </section>
    </>
  );
};

export default Restoration;

const RestoHeader = () => {
  const firstTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: firstTextRef,
    offset: ["center center", "start start"],
  });
  const y = useTransform(scrollYProgress, [0.1, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/src/assets/accommodations-photos/room1.jpg')",
        }}
        className="h-screen z-50 bg-cover bg-center -mt-20"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="flex flex-col justify-center items-center h-full gap-y-16">
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              stifness: 50,
              duration: 1,
              delay: 1.3,
            }}
            ref={firstTextRef}
            style={{ y, opacity }}
            src="https://yanisguesthouse.com/images/logo.png"
            alt="logo"
            className="w-44 h-20 md:w-52 lg:w-60 md:h-24 lg:h-32 z-10"
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              stifness: 20,
              duration: 1,
              delay: 1.3,
            }}
            className="z-10 text-white font-bold text-3xl md:text-4xl lg:text-5xl font-Montsrrat tracking-wider capitalize underline underline-offset-8 decoration-[3px] [text-shadow:_1px_1px_0_#00464326]"
          >
            the restaurant
          </motion.p>
        </div>
      </div>
    </>
  );
};

const Sensation = ({ title, content, imageUrl }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="group mb-10 last:mb-0"
    >
      <section className="grid grid-rows-2 md:grid-rows-none bg-secondary/15 transition duration-500 hover:bg-secondary/25 w-[90%] shadow-2xl shadow-cozyGreen/30 md:w-4/5 mx-auto border-black/5 overflow-hidden md:relative h-96 md:h-80 rounded-md">
        <div className="grid md:grid-cols-layout lg:py-4 md:p-2 lg:px-5 sm:max-w-[50%] sm:mt-auto h-full md:group-even:ml-[19.3rem] lg:group-even:ml-[29.3rem]">
          <h3 className="grid place-content-center -mb-10 md:mb-0 text-2xl font-bold capitalize font-Marcellus italic">
            {title}
          </h3>
          <p className="grid place-content-center px-2 lg:px-4 text-center font-Dancing font-normal text-sm lg:text-base leading-relaxed">
            {content}
          </p>
        </div>

        <img
          src={imageUrl}
          alt="image"
          loading="lazy"
          className="md:absolute top-8 md:-right-64 lg:-right-14 md:w-[35rem] lg:w-[30rem] md:rounded-t-lg shadow-2xl object-cover object-center
          transition duration-500
          group-even:right-[initial] 
          md:group-even:-left-64
          lg:group-even:-left-14
          group-hover:scale-105
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          "
          // group-hover:-rotate-2
          // group-even:group-hover:rotate-2
        />
      </section>
    </motion.div>
  );
};

const SeeMenu = () => {
  return (
    <>
      <div className="grid place-content-center text-center min-h-[150vh] mt-[-100vh]">
        <div className="sticky top-[50%] mb-[calc(50%-25%)] md:mb-[calc(50%-38%)]">
          <h4 className="mb-5 text-lg uppercase font-Marcellus italic font-semibold">
            discover our menu
          </h4>
          <button className="py-3 px-10 bg-secondary/15 transition duration-300 hover:bg-secondary/25 text-mainText hover:text-background shadow-md hover:shadow-xl active:shadow-none hover:scale-105 active:scale-95 font-semibold capitalize rounded-sm">
            see menu
          </button>
        </div>
      </div>
    </>
  );
};
