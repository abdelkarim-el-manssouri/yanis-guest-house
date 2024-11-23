/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { cards } from "../data/data";

const HorizontalScroll = ({ t }) => {
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
    <section ref={targetRef} className="relative h-[200vh] bg-cozyGreen">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-x-3 lg:gap-x-0">
          {cards.map((card) => {
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
      className="group grid grid-flow-dense md:grid-rows-none md:grid-cols-2 h-[720px] md:h-[650px] w-[350px] md:w-[700px] lg:w-[1000px] overflow-hidden bg-neutral-100"
    >
      <img
        src={card.url}
        alt="image"
        className="object-cover inset-0 transition-transform duration-1000 group-hover:scale-105 w-full md:h-full bg-transparent"
        loading="lazy"
      />
      <div className="h-full grid place-content-center gap-3 m-2 -mt-5 md:-mt-0 p-3 md:m-6 lg:m-0 lg:gap-6 lg:mx-6 overflow-y-auto lg:overflow-y-hidden">
        <motion.h2
          variants={titleReveal}
          initial="initial"
          whileInView="animate"
          className="!font-Italiana font-semibold mt-16 md:mt-0 md:text-xl text-center uppercase"
        >
          {t(card.title)}
        </motion.h2>
        <div className="!font-PoiretOne font-semibold tracking-wide text-sm md:text-base">
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
        </div>
        <motion.div
          variants={content3Reveal}
          initial="initial"
          whileInView="animate"
          className="my-4 mb-6 md:mb-6 flex justify-center "
        >
          <Link to={card.link}>
            <Button content={card.buttonContent} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

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
