import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import "../../css/rooms.css";
import { rooms, imgs } from "../../data/data";
import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
// import { FiChevronsLeft } from "react-icons/fi";
import RoomModal from "../../components/RoomModal";

const Rooms = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <RoomsHeader />
      <RevealText />
      <ImageRoom />
    </>
  );
};

export default Rooms;

const RoomsHeader = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/src/assets/accommodations-photos/room1.jpg')",
        }}
        className="h-screen bg-black absolute z-50 bg-cover bg-center inset-0"
      >
        <div className="flex flex-col justify-center items-center h-full gap-y-16">
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              stifness: 50,
              duration: 1,
              delay: 1.3,
            }}
            src="https://yanisguesthouse.com/images/logo.png"
            alt="logo"
            className="w-44 h-20 md:w-52 lg:w-60 md:h-24 lg:h-32"
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
            className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-Groillim tracking-wider capitalize underline underline-offset-8 [text-shadow:_1px_1px_0_#00464326]"
          >
            the accommodations
          </motion.p>
        </div>
      </div>
    </>
  );
};

const RevealText = () => {
  return (
    <section className="mt-[-100vh] h-[400vh] [view-timeline-name:--reveal-wrapper] bg-background relative z-10">
      <div className="min-h-screen sticky top-0 flex justify-center items-center w-3/4 mx-auto md:text-justify">
        <div>
          <p className="text-xl md:text-3xl supports-[animation-timeline]:reveal-text font-Groillim font-bold leading-[2.5rem] md:leading-[3rem] text-black [text-shadow:_0.5px_0.5px_0_#00464326]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            delectus repudiandae. At sed labore aperiam quasi aut qui beatae
            ullam recusandae expedita dignissimos, iure numquam voluptatem esse
            nobis soluta animi.
          </p>
        </div>
      </div>
    </section>
  );
};

const ImageRoom = () => {
  const [selected, setSelected] = useState(false);
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef(null);
  const [carouselVariant, setCarouselVariant] = useState("inactive");
  const { scrollYProgress } = useScroll({
    target: { carouselWrapperRef },
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    // const xScale = 2;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0.3, 1]);
  const postersScale = useTransform(scrollYProgress, [0.6, 0.66], [0.8, 1]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.6) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <>
      <motion.section
        animate={carouselVariant}
        ref={carouselWrapperRef}
        className="h-[550vh] md:h-[450vh] mt-[-100vh] bg-cozyGreen relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-[calc(100vh+2.5rem)] pb-10 flex items-center gap-5 overflow-x-auto snap-x snap-mandatory px-5">
            <motion.div
              style={{ scale }}
              className="shrink-0 aspect-[9/16] shadow-2xl md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative snap-center snap-always"
            >
              <img
                className="w-full h-full object-cover"
                src={imgs[2].url}
                alt={imgs[2].title}
                loading="lazy"
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute left-0 bottom-0 px-4 md:px-6 lg:px-8 py-8 md:py-8 lg:py-12 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-white lg:text-lg w-full bg-gradient-to-t from-black/90 to-black/0"
              >
                <p className="font-extrabold font-Arapey tracking-wide capitalize relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-white">
                  {imgs[2].title}
                </p>
                <Link
                  onClick={() => {
                    setSelected(true);
                    setSelected(imgs[2]);
                  }}
                  className="font-extrabold font-Arapey"
                >
                  <Button content="show more" />
                </Link>
              </motion.div>
            </motion.div>

            {rooms.map((image) => (
              <motion.div
                key={image.id}
                style={{ opacity: postersOpacity, scale: postersScale }}
                className="shrink-0 aspect-[9/16] shadow-2xl md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative snap-center snap-always"
              >
                <img
                  className="w-full h-full object-cover"
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                />
                <motion.div
                  variants={{
                    active: { opacity: 1 },
                    inactive: { opacity: 0 },
                  }}
                  className="absolute left-0 bottom-0 px-4 md:px-6 lg:px-8 py-8 md:py-8 lg:py-12 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-white lg:text-lg w-full bg-gradient-to-t from-black/90 to-black/0"
                >
                  <p className="font-extrabold font-Arapey tracking-wide capitalize relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-white">
                    {image.title}
                  </p>
                  <Link
                    onClick={() => {
                      setSelected(true), setSelected(image);
                    }}
                    className="font-extrabold font-Arapey"
                  >
                    <Button content="show more" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}

            {/* <motion.div
              style={{ opacity: postersOpacity, scale: postersScale }}
              className="shrink-0 aspect-[9/16] shadow-2xl md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative snap-center snap-always"
            >
              <img
                className="w-full h-full object-cover"
                src={imgs[1].url}
                alt={imgs[1].title}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute left-0 bottom-0 px-4 md:px-6 lg:px-8 py-8 md:py-8 lg:py-12 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-white lg:text-lg w-full bg-gradient-to-t from-black/90 to-black/0"
              >
                <p className="font-extrabold font-Arapey tracking-wide capitalize relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-white">
                  {imgs[1].title}
                </p>
                <Link to="/" className="font-extrabold font-Arapey">
                  <Button content="show more" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: postersOpacity, scale: postersScale }}
              className="shrink-0 aspect-[9/16] shadow-2xl md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative snap-center snap-always"
            >
              <img
                className="w-full h-full object-cover"
                src={imgs[3].url}
                alt={imgs[3].title}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute left-0 bottom-0 px-4 md:px-6 lg:px-8 py-8 md:py-8 lg:py-12 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-white lg:text-lg w-full bg-gradient-to-t from-black/90 to-black/0"
              >
                <p className="font-extrabold font-Arapey tracking-wide capitalize relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-white">
                  {imgs[3].title}
                </p>
                <Link to="/" className="font-extrabold font-Arapey">
                  <Button content="show more" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: postersOpacity, scale: postersScale }}
              className="shrink-0 aspect-[9/16] shadow-2xl md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative snap-center snap-always"
            >
              <img
                className="w-full h-full object-cover"
                src={imgs[4].url}
                alt={imgs[4].title}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute left-0 bottom-0 px-4 md:px-6 lg:px-8 py-8 md:py-8 lg:py-12 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-white lg:text-lg font-extrabold w-full bg-gradient-to-t from-black/90 to-black/0"
              >
                <p className="font-extrabold font-Arapey tracking-wide capitalize relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-white">
                  {imgs[4].title}
                </p>
                <Link to="/" className="font-extrabold font-Arapey">
                  <Button content="show more" />
                </Link>
              </motion.div>
            </motion.div> */}
          </div>
        </div>

        {/* <div className="hidden md:block">
          <div className="absolute left-1/2 bottom-11 -translate-x-1/2 md:flex w-full justify-evenly">
            <div className="text-white rounded-xl shadow-xl flex items-center gap-2 justify-center p-2">
              <span className="mt-1 flex">
                <FiChevronsLeft />
              </span>
              <span>scroll for more</span>
            </div>
            <div className=" text-white rounded-xl shadow-xl flex gap-3 items-center justify-between p-2">
              <span>scroll for more</span>
              <span className="rotate-180 mt-1 flex">
                <FiChevronsLeft />
              </span>
            </div>
          </div>
        </div> */}

        <RoomModal selected={selected} setSelected={setSelected} />
      </motion.section>

      <section>
        <RoomsOutro />
      </section>
    </>
  );
};

const titleRevealVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stifness: 30,
      duration: 1,
      delay: 0.3,
    },
  },
};

const paragraphRevealVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stifness: 30,
      duration: 1,
      delay: 0.7,
    },
  },
};

const imageRevealVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stifness: 30,
      duration: 1,
      delay: 1.3,
    },
  },
};

const RoomsOutro = () => {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 p-5 lg:p-14 gap-y-4 md:gap-y-0 lg:gap-x-10">
      <div className=" p-4 md:p-8 lg:p-10 grid place-content-center">
        <motion.h3
          variants={titleRevealVariant}
          initial="initial"
          whileInView="animate"
          className="mb-4 lg:mb-8 text-center font-Marcellus italic text-xl lg:text-2xl font-extrabold capitalize"
        >
          enjoy our various list of rooms and suits
        </motion.h3>
        <motion.p
          variants={paragraphRevealVariant}
          initial="initial"
          whileInView="animate"
          className="text-center md:text-justify font-Dancing text-sm lg:text-base"
        >
          Located on the various floors of the hotel, each of our rooms reserves
          a special something to enhance your stay and make it truly
          unforgettable. Offering views over the Gardens, the Hivernage area or
          the Koutoubia Mosque, some with a balcony where you can enjoy a book
          or simply sit back and relax, and exuding comfort and charm, the rooms
          at La Mamounia are a lavish invitation to let time stand still in the
          most delightful of ways.{" "}
        </motion.p>
      </div>
      <motion.div
        variants={imageRevealVariant}
        initial="initial"
        whileInView="animate"
        style={{
          backgroundImage: "url('/src/assets/accommodations-photos/room1.jpg')",
        }}
        className="md:order-2 bg-cover bg-center shadow-xl overflow-hidden rounded-md relative before:absolute before:left-0 before:top-0 before:h-full before:w-[30%] before:bg-gradient-to-r before:from-black/70 before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-[30%] after:bg-gradient-to-l after:from-black/70 after:to-transparent"
      />
    </div>
  );
};
