import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmallParagraph from "../../UI/SmallParagraph";
import { IoTimerOutline } from "react-icons/io5";
import { PiWarningOctagonBold } from "react-icons/pi";

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
      <Heading heading="our massage collection" />
      <WellBeing />
      <Heading heading="discover also" />
      <SelfCare />
      <SmallParagraph text="enjoy our various collection of excursions" />
      <Heading heading="Agafay" />
      <ExternalActivities />
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

const Heading = ({ heading }) => {
  return (
    <motion.h3
      variants={headingVariants}
      initial="initial"
      whileInView="animate"
      className="text-center md:w-[50ch] mx-auto text-xl md:text-2xl font-bold capitalize text-transparent bg-clip-text bg-gradient-to-br from-golden to-black my-10"
    >
      {heading}
    </motion.h3>
  );
};

const WellBeing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-20">
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

const SelfCare = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-20">
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          className="relative border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4">
            <h4 className="mt-4 font-black capitalize text-xl font-Marcellus">
              manicure & pedicure
            </h4>
            <p className="mt-2 text-sm text-pretty first-letter:uppercase">
              in this welcoming and intimate setting. Pamper yourself with these
              flawlessly executed services.
            </p>
            <div className="flex justify-center my-8 mx-2 md:mx-4">
              <p className="">
                <span className="font-semibold text-xl">$40</span>
                &nbsp;
                <span className="text-xs">each</span>
              </p>
              <p className="flex justify-center items-center gap-2 font-semibold text-lg">
                {/* <IoTimerOutline />
                {i.time} */}
              </p>
            </div>
            <div className="flex justify-center">
              <button className=" py-2 w-5/6 mx-auto border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg font-semibold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition">
                book
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          className="relative border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4">
            <h4 className="mt-4 font-black capitalize text-xl font-Marcellus">
              facial treatments
            </h4>
            <div className="mt-2 text-sm text-pretty grid lg:grid-cols-card gap-x-12 gap-y-1 lg:gap-y-0">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">pulls comedones</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">dead skin scrub</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">lightening mask</p>
              </div>

              <div className="flex gap-2 lg:mt-2">
                <div className="size-3 mt-1 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">
                  anti-aging modeling with argan oil
                </p>
              </div>
            </div>
            <div className="flex justify-center my-6 mx-2 md:mx-4">
              <p className="font-semibold text-xl">$50</p>
              <p className="flex justify-center items-center gap-2 font-semibold text-lg">
                {/* <IoTimerOutline />
                {i.time} */}
              </p>
            </div>
            <div className="flex justify-center">
              <button className=" py-2 w-5/6 mx-auto border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg font-semibold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition">
                book
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        className="relative grid place-content-center p-8 w-[90%] md:w-3/4 lg:w-1/2 mx-auto rounded-xl shadow-lg shadow-red-200 hover:shadow-red-300 hover:shadow-xl transition duration-300 bg-gradient-to-br from-cozyGreen to-black text-background font-semibold mb-20"
      >
        <div className="absolute top-2 left-2">
          <PiWarningOctagonBold size="20" />
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center">
          <p className="first-letter:uppercase">making an appointment:</p>
          <div>
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-gradient-to-bl from-golden to-cozyGreen" />
              <p className="first-letter:uppercase">
                the afternoon for the next day.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-gradient-to-bl from-golden to-cozyGreen" />
              <p className="first-letter:uppercase">
                in the morning for the afternoon.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ExternalActivities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] lg:w-[95%] mx-auto text-background mb-10">
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        className="relative border border-cozyGreen/10 border-dashed bg-gradient-to-bl from-lightGreen to-background text-cozyGreen rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
      >
        <div className="relative w-1/2 h-px rounded-xl bg-golden mb-3" />
        <div className="mx-2 md:mx-4 md:my-2">
          <h4 className="my-4 font-black capitalize text-xl font-Marcellus">
            pack 1
          </h4>
          <ul className="flex flex-wrap gap-y-1">
            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">1hr de quad</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">
                1hr de dromadaire
              </li>
            </div>

            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">pause the</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">pause photo</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase ">
                transport allez retour
              </li>
            </div>
          </ul>
        </div>
        <div className="flex justify-center my-8 mx-2 md:mx-4">
          <p className="font-semibold text-xl">$55</p>
          <p className="flex justify-center items-center gap-2 font-semibold text-lg"></p>
        </div>
        <div className="flex justify-center">
          <button className="py-1.5 w-5/6 mx-auto border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg font-semibold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition">
            book
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        className="relative border border-cozyGreen/10 border-dashed bg-gradient-to-bl from-lightGreen to-background text-cozyGreen rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
      >
        <div className="relative w-1/2 h-px rounded-xl bg-golden mb-3" />
        <div className="mx-2 md:mx-4 md:my-2">
          <h4 className="my-4 font-black capitalize text-xl font-Marcellus">
            pack 2
          </h4>
          <ul className="flex flex-wrap gap-y-1">
            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">2hr de quad</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">pause the</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">pause photo</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase ">
                transport allez retour
              </li>
            </div>

            <div className="invisible flex items-center gap-1.5 basis-full lg:basis-1/2">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase ">
                transport allez retour
              </li>
            </div>
          </ul>
        </div>
        <div className="flex justify-center my-8 mx-2 md:mx-4">
          <p className="">
            <span className="font-semibold text-xl">$55</span>
          </p>
          <p className="flex justify-center items-center gap-2 font-semibold text-lg"></p>
        </div>
        <div className="flex justify-center">
          <button className="py-1.5 w-5/6 mx-auto border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg font-semibold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition">
            book
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        className="relative border md:col-span-2 border-cozyGreen/10 border-dashed bg-gradient-to-bl from-lightGreen to-background text-cozyGreen rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
      >
        <div className="relative w-1/2 h-px rounded-xl bg-golden mb-3" />
        <div className="mx-2 md:mx-4 md:my-2">
          <h4 className="my-4 font-black capitalize text-xl font-Marcellus">
            pack 3
          </h4>
          <ul className="flex flex-wrap gap-y-2">
            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">
                experience culinaire
              </li>
            </div>

            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">
                dinner sous les etoiles d'agafay
              </li>
            </div>

            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">
                spectacle et animation
              </li>
            </div>

            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase">1hr quad</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase ">
                1hr dromadaire
              </li>
            </div>

            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase ">pause the</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase ">pause photo</li>
            </div>

            <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
              <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
              <li className="text-sm first-letter:uppercase ">
                transport allez retour
              </li>
            </div>
          </ul>
        </div>
        <div className="flex justify-center my-8 mx-2 md:mx-4">
          <p className="font-semibold text-xl">$80</p>
          <p className="flex justify-center items-center gap-2 font-semibold text-lg"></p>
        </div>
        <div className="flex justify-center">
          <button className="py-1.5 w-5/6 md:w-1/2 mx-auto border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg font-semibold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition">
            book
          </button>
        </div>
      </motion.div>
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
      delay: 0.3,
    },
  },
};

const headingVariants = {
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
