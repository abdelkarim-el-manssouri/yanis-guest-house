import { motion, useTransform, useScroll, stagger } from "framer-motion";
import { t } from "i18next";
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
      // className="group relative h-[430px] lg:h-[500px] w-[400px] md:w-[600px] lg:w-[1000px] overflow-hidden bg-gradient-to-br from-aubergine to-aubergine/0"
      className="group grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 h-[560px] w-[350px] md:w-[600px] lg:w-[1000px] overflow-hidden bg-neutral-100"
    >
      <img
        src={card.url}
        alt="image"
        className="object-cover bg-center inset-0 transition-transform duration-700 group-hover:scale-105 h-full w-full"
        loading="lazy"
      />
      <div className="h-full grid place-content-center gap-3 m-2 p-3 md:m-6 lg:m-0 lg:gap-6 lg:mx-6 overflow-y-auto lg:overflow-y-hidden">
        <motion.h3
          variants={titleReveal}
          initial="initial"
          whileInView="animate"
          className="font-Marcellus italic font-semibold mt-16 md:mt-0 lg:text-2xl text-xl lg:text-center capitalize"
        >
          {t(card.title)}
        </motion.h3>
        <motion.div className="text-sm !font-PoiretOne font-semibold tracking-wide">
          <motion.p
            variants={content1Reveal}
            initial="initial"
            whileInView="animate"
            className="mb-2 first-letter:font-black first-letter:text-xl indent-4 text-justify"
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
            className="mb-2 first-letter:font-bold first-letter:text-lg indent-4 text-justify"
          >
            {t(card.content3)}
          </motion.p>
        </motion.div>
        {/* <div className="my-4 md:mb-6 flex justify-center lg:justify-start">
          <Link to={card.link}>
            <Button content={card.buttonContent} />
          </Link>
        </div> */}
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
  // {
  //   url: "/src/assets/cozy-green-sofa.jpeg",
  //   title: "Title 4",
  //   id: 4,
  // },
  // {
  //   url: "/src/assets/cozy-green-sofa.jpeg",
  //   title: "Title 5",
  //   id: 5,
  // },
  // {
  //   url: "/src/assets/cozy-green-sofa.jpeg",
  //   title: "Title 6",
  //   id: 6,
  // },
  // {
  //   url: "/imgs/abstract/7.jpg",
  //   title: "Title 7",
  //   id: 7,
  // },
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
