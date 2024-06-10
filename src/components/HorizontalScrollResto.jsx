import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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
      className="group grid grid-flow-dense md:grid-rows-none md:grid-cols-2 h-[560px] w-[350px] md:w-[700px] lg:w-[1000px] overflow-hidden bg-neutral-100"
    >
      <img
        src={card.url}
        alt="image"
        className="object-cover inset-0 transition-transform duration-1000 group-hover:scale-105 w-full md:h-full bg-transparent"
        loading="lazy"
      />
      <div className="h-full grid place-content-center gap-3 m-2 p-3 md:m-6 lg:m-0 lg:gap-6 lg:mx-6 overflow-y-scroll lg:overflow-y-hidden">
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

const cards = [
  {
    id: 1,
    url: "/src/assets/accommodations-photos/room1.jpg",
    link: "/accommodations",
    buttonContent: "accommodations",
    title: "horiScrollTitle1",
    content1: "horiScrollContent1",
    content2: "horiScrollContent1_1",
    content3: "horiScrollContent1_2",
  },
  {
    id: 2,
    url: "/src/assets/accommodations-photos/room2.jpg",
    link: "/home",
    buttonContent: "restaurants",
    title: "horiScrollTitle2",
    content1: "horiScrollContent2",
    content2: "horiScrollContent2_1",
  },
  {
    id: 3,
    url: "/src/assets/accommodations-photos/room4.jpg",
    link: "/activities",
    buttonContent: "activities",
    title: "horiScrollTitle3",
  },
];

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
