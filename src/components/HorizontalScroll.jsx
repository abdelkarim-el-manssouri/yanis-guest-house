import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const HorizontalScroll = () => {
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
      className="group grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 h-[430px] lg:h-[500px] w-[350px] md:w-[600px] lg:w-[1000px] overflow-hidden  bg-gradient-to-l from-beige to-beige/50"
    >
      <div
      // style={{
      //   backgroundImage: `url(${card.url})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      // className="inset-0 transition-transform duration-1000 group-hover:scale-95"
      >
        <img
          src={card.url}
          alt="image"
          className="bg-cover inset-0 transition-transform duration-1000 group-hover:scale-105 h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="h-full grid place-content-center gap-3 m-2 p-3 md:m-6 lg:gap-6 lg:mx-6 overflow-y-scroll lg:overflow-y-hidden">
        <h3 className="font-semibold mt-16 md:mt-0 text-nowrap">
          something something something something
        </h3>
        <div className="text-sm">
          <p className="mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            neque earum facilis consectetur nemo modi esse mollitia quae
            temporibus eius sit, aspernatur voluptas doloremque! Eum quos
            consectetur expedita praesentium soluta.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            neque earum facilis consectetur nemo modi esse
          </p>
        </div>
        <div className="my-4 md:mb-6 flex justify-center lg:justify-start">
          <Link to={card.link}>
            <Button content={card.buttonContent} />
          </Link>
        </div>
      </div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "/src/assets/cozy-green-sofa.jpeg",
    link: "/accommodations",
    id: 1,
    buttonContent: "accommodations",
  },
  {
    url: "/src/assets/cozy-green-sofa.jpeg",
    link: "/home",
    id: 2,
    buttonContent: "restaurants",
  },
  {
    url: "/src/assets/cozy-green-sofa.jpeg",
    link: "/activities",
    id: 3,
    buttonContent: "activities",
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
