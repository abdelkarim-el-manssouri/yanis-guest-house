import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedButton from "../UI/AnimatedButton";
import { Link } from "react-router-dom";

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
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
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
      className="group relative h-[430px] lg:h-[500px] w-[400px] md:w-[600px] lg:w-[1000px] overflow-hidden bg-gradient-to-br from-beige to-beige/0"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inline w-3/4 md:w-3/4 inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
      ></div>
      <div className="absolute md:w-1/2 left-16 h-full md:left-[35%] z-0 grid place-content-center gap-10 ">
        <p className="mx-5 p-4 lg:p-5 text-[0.9em] text-aubergine md:mx-10 w-[35ch] md:w-[40ch] lg:w-[60ch] bg-gradient-to-br from-beige via-background-button/10 to-beige/20 relative after:absolute after:w-0.5 after:h-full after:bg-neutral-200 after:-left-1.5 after:top-0 before:absolute before:w-1 before:h-full before:bg-neutral-200 before:-left-3 before:top-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          neque earum facilis consectetur nemo modi esse mollitia quae
          temporibus eius sit, aspernatur voluptas doloremque! Eum quos
          consectetur expedita praesentium soluta.
        </p>
        <div className="mx-10 bg-background-button w-fit rounded-md text-aubergine">
          <Link to={card.link}>
            <AnimatedButton text={card.buttonContent} />
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
