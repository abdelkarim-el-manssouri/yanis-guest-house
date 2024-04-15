import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { sensationsData } from "../../data/data";
import SmallParagraph from "../../UI/SmallParagraph";
import BookNow from "../../components/BookNow";
import HorizontalScrollResto from "../../components/HorizontalScrollResto";

const Restoration = () => {
  const text1 =
    "the restaurant of yanis guest house is not only a fine dining destination, it is a feast for each of the five senses.";
  const text2 =
    "There is something for everyone, Along with unforgettable moments of exchange.";
  return (
    <>
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

      <section>
        <HorizontalScrollResto />
      </section>
    </>
  );
};

export default Restoration;

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
      <section className="grid grid-rows-2 md:grid-rows-none bg-secondary/15 transition duration-500 hover:bg-secondary/25 w-[90%] md:w-4/5 mx-auto border-black/5 overflow-hidden md:relative h-96 md:h-80 rounded-md">
        <div className="grid md:grid-cols-layout lg:py-4 md:p-2 lg:px-5 sm:max-w-[50%] sm:mt-auto h-full md:group-even:ml-[19.3rem] lg:group-even:ml-[29.3rem]">
          <h3 className="grid place-content-center -mb-10 md:mb-0 text-2xl font-semibold capitalize">
            {title}
          </h3>
          <p className="grid place-content-center px-2 lg:px-4 text-center text-sm lg:text-base leading-relaxed tracking-wide">
            {content}
          </p>
        </div>

        <img
          src={imageUrl}
          alt="image"
          loading="lazy"
          className="md:absolute top-8 md:-right-64 lg:-right-14 md:w-[35rem] lg:w-[30rem] md:rounded-t-lg shadow-2xl 
          transition duration-500
          group-even:right-[initial] 
          md:group-even:-left-64
          lg:group-even:-left-14
          group-hover:scale-105
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-hover:-rotate-2
          group-even:group-hover:rotate-2
          "
        />
      </section>
    </motion.div>
  );
};
