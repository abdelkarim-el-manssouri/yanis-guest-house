import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmallParagraph from "../../UI/SmallParagraph";
import { IoTimerOutline } from "react-icons/io5";

const Activities = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>
      <ActivitiesHeader />
      <SmallParagraph text="lorem" />
      <WellBeing />
    </>
  );
};

export default Activities;

const ActivitiesHeader = () => {
  const firstTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: firstTextRef,
    offset: ["center center", "start start"],
  });
  const y = useTransform(scrollYProgress, [0.1, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/accommodations-photos/room1.jpg')",
      }}
      className="h-screen bg-black relative -mt-20 bg-cover bg-center z-50"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="flex flex-col justify-center z-[60] items-center h-full gap-y-16">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            stifness: 20,
            duration: 1,
            delay: 1.3,
          }}
          className="z-10 text-white font-bold text-3xl md:text-4xl lg:text-5xl font-Groillim tracking-wider capitalize underline underline-offset-8 decoration-2 [text-shadow:_1px_1px_0_#00464326]"
        >
          activities & wellbeing
        </motion.p>
      </div>
    </div>
  );
};

const WellBeing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto">
      {WellBeingData.map((i) => (
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          key={i.id}
          className="relative border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4">
            <h4 className="mt-4 font-black capitalize text-xl font-Marcellus">
              {i.genre}
            </h4>
            <p className="mt-2 text-sm text-pretty">{i.definition}</p>
            <div className="flex justify-between my-8 mx-2 md:mx-4">
              <p className="">
                <span className="font-semibold text-lg">${i.price}</span>
                &nbsp;
                <span className="text-xs">{i.person}</span>
              </p>
              <p className="flex justify-center items-center gap-2 font-semibold text-lg">
                <IoTimerOutline />
                {i.time}
              </p>
            </div>
            <div className="flex justify-center">
              <button className=" py-2 w-5/6 mx-auto border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg font-semibold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition">
                book
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const WellBeingData = [
  {
    id: 1,
    genre: "relaxing massage",
    definition:
      "Massage therapy that focuses on overall relaxation, muscle tension relief, and improved blood circulation.",
    time: "60 min",
    price: "40",
    person: "per person",
  },
  {
    id: 2,
    genre: "Toning Massage",
    definition:
      "A gentle form of massage used to aims to improve the body’s blood flow, body fluid balance, and immune function.",
    time: "60 min",
    price: "45",
    person: "per person",
  },
  {
    id: 3,
    genre: "draining massage",
    definition:
      "A gentle form of massage used to relieve painful swelling in your arms and legs caused by lymphedema.",
    time: "60 min",
    price: "50",
    person: "per person",
  },
  {
    id: 4,
    genre: "couple massage",
    definition:
      "A delightful experience where a couple receive a massage simultaneously in the same room but on separate massage tables.",
    time: "60 min",
    price: "100",
    person: "for couple",
  },
];

const cardVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
