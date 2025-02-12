/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cards2 } from "../data/data";

const HorizontalScrollResto = ({ t }) => {
  return (
    <>
      <HorizontalScrollCarousel t={t} />
    </>
  );
};

const HorizontalScrollCarousel = ({ t }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-x-3 lg:gap-x-0">
          {cards2.map((card) => {
            return <Card card={card} key={card.id} t={t} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, t }) => {
  return (
    <div
      key={card.id}
      className="group grid grid-rows-4 grid-flow-dense md:grid-rows-none md:grid-cols-2 h-[720px] md:h-[650px] w-[350px] md:w-[700px] lg:w-[1000px] overflow-hidden bg-gradient-to-tl from-golden to-lightGreen"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="transition-transform duration-1000 group-hover:scale-105 w-full h-full row-span-1 md:row-span-4"
      />
      <div className="h-full row-span-3 grid place-content-center gap-3 m-2 -mt-4 md:-mt-0 p-3 md:m-6 lg:m-0 lg:gap-6 lg:mx-6 overflow-y-scroll lg:overflow-y-hidden">
        <motion.h3
          variants={titleReveal}
          initial="initial"
          whileInView="animate"
          className="!font-Italiana font-semibold mt-32 lg:mt-0 md:text-xl text-center uppercase"
        >
          {t(card.title)}
        </motion.h3>
        <div className="!font-PoiretOne font-semibold tracking-wide text-xs md:text-sm">
          <motion.p
            variants={content1Reveal}
            initial="initial"
            whileInView="animate"
            className="mb-2 first-letter:font-bold first-letter:text-lg indent-4 text-justify"
          >
            {t(card.content1)}
          </motion.p>
          <motion.p
            variants={content2Reveal}
            initial="initial"
            whileInView="animate"
            className="mb-2 first-letter:font-bold first-letter:text-lg indent-4 text-justify"
          >
            {t(card.content2)}
          </motion.p>
          <motion.p
            variants={content3Reveal}
            initial="initial"
            whileInView="animate"
            className="mb-10 lg:mb-2 first-letter:font-bold first-letter:text-lg indent-4 text-justify"
          >
            {t(card.content3)}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollResto;

const titleReveal = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stifness: 10,
      duration: 1,
      delay: 0.5,
    },
  },
};

const content1Reveal = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stifness: 10,
      duration: 1,
      delay: 0.8,
    },
  },
};

const content2Reveal = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stifness: 10,
      duration: 1,
      delay: 1.1,
    },
  },
};

const content3Reveal = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stifness: 10,
      duration: 1,
      delay: 1.4,
    },
  },
};
