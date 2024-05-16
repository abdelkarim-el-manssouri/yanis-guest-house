import { motion, useTransform, useScroll, stagger } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollResto = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

const HorizontalScrollCarousel = () => {
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
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
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
          {card.title}
        </motion.h3>
        <motion.div className="text-sm font-Dancing tracking-wide">
          <motion.p
            variants={content1Reveal}
            initial="initial"
            whileInView="animate"
            className="mb-2 first-letter:font-bold first-letter:text-lg indent-4 text-justify"
          >
            {card.content1}
          </motion.p>
          <motion.p
            variants={content2Reveal}
            initial="initial"
            whileInView="animate"
            className="mb-2 first-letter:font-bold first-letter:text-lg indent-4 text-justify"
          >
            {card.content2}
          </motion.p>
          <motion.p
            variants={content3Reveal}
            initial="initial"
            whileInView="animate"
            className="mb-2 first-letter:font-bold first-letter:text-lg indent-4 text-justify"
          >
            {card.content3}
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
    title: "the great cuisine of the red city",
    content1:
      "Poolside, or in one of our indoor sitting rooms with a fireplace… Get ready for an East-to-West culinary treat. In Marrakech, The Yanis guest house restaurant offers a variety of sun-drenched tastes, for a thousand ways to enjoy elegant gourmet cuisine. Bringing in both the traditional and the modern, the Yanis guest houses’ chef takes you on a journey of subtle flavors with the right notes of spice and sweetness, with a Moroccan-inspired menu.",
    content2:
      "The choice is yours among the classic dishes - tagines, tangia - meat preserved in a jar, the scent of which you inhale before tasting ... and seafood pastilla or the sweet chicken one,  semi-cooked red tuna with mango, fresh coriander and a coconut-lemon emulsion, marinated Essaouira sardines, lobster tagine, chicken tagine with lemon and olives or even vegetables tagine, couscous to name but a few.",
    content3:
      "To round things off, why not try something light. Choose between a strawberry tagine, citrus fruits with a fresh mint granita or, to keep up that Moroccan feel, a Yanis guest house gazelle horn or an assortment of traditional pastries.",
  },
  {
    id: 2,
    url: "/src/assets/accommodations-photos/room2.jpg",
    link: "/home",
    buttonContent: "restaurants",
    title: "An exceptional setting for an unforgettable evening",
    content1:
      "And flavor indeed awaits! Yanis Guest House boasts a restaurant serving authentic Moroccan cuisine. Picture yourself savoring fragrant tagines, delicate couscous, and honey-drenched pastries under the open sky. The attentive staff ensures that every meal is a celebration a symphony of flavors that dance on your taste buds.",
    content2:
      "As the sun sets, retreat to the terrace, where lanterns flicker and the air carries the scent of jasmine. Sip on mint tea, listen to the distant call to prayer, and let the magic of Yanis Guest House envelope you. Whether you’re a seasoned traveler or a first-time adventurer, this Moroccan gem promises an unforgettable dining experience—one that lingers in your heart long after you’ve left its sun-kissed walls. 🌙🍽️",
  },
  {
    id: 3,
    url: "/src/assets/accommodations-photos/room4.jpg",
    link: "/activities",
    buttonContent: "activities",
    title: "opening hours",
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
