/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";
import "../../css/rooms.css";
import { rooms } from "../../data/data";
import { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import RoomModal from "../../components/RoomModal";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const { t } = useTranslation("home");
  return (
    <>
      <Helmet>
        <title>Yanis Guest House accommodations page</title>
        <meta name="description" content="accommodations page" />
        <link rel="canonical" href="/accommodations" />
      </Helmet>
      <RoomsHeader t={t} />
      <RevealText scrollYProgress={scrollYProgress} t={t} />
      <ImageRoom scrollYProgress={scrollYProgress} t={t} />
    </>
  );
};

export default Rooms;

const RoomsHeader = ({ t }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('/images/accommodation/Family-Suite-of-6-Peoples/image1-3.webp')",
      }}
      className="h-screen bg-black relative -mt-20 bg-cover bg-center z-50"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="flex justify-center z-[60] items-center h-full gap-y-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            stifness: 20,
            duration: 1,
            delay: 1.3,
          }}
          className="z-10 text-white font-bold !font-Italiana uppercase text-3xl md:text-4xl lg:text-5xl tracking-wide underline underline-offset-8 decoration-[3px] [text-shadow:_1px_1px_0_#00464326]"
        >
          {t("title")}
        </motion.p>
      </div>
    </div>
  );
};

const RevealText = ({ scrollYProgress, t }) => {
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.55], [1, 0]);
  return (
    <motion.section
      style={{ scale, opacity }}
      className="mt-[-100vh] h-[350vh] [view-timeline-name:--reveal-wrapper] bg-background relative z-10"
    >
      <div className="min-h-screen sticky top-0 flex justify-center items-center w-3/4 mx-auto text-justify lg:text-center">
        <div>
          <p className="text-xl md:text-3xl supports-[animation-timeline]:reveal-text !font-PoiretOne font-bold md:leading-[2.3rem] lg:leading-[3rem] text-black [text-shadow:_0.5px_0.5px_0_#00464326]">
            {t("revealTextRoom")}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

const ImageRoom = ({ scrollYProgress, t }) => {
  const [selected, setSelected] = useState(false);
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [-0.4, 0.6], [0, 1]);
  return (
    <>
      <motion.section
        style={{ scale, opacity }}
        className="h-[160vh] mt-[-100vh] bg-cozyGreen relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-[calc(100vh+2.5rem)] pb-10 flex items-center gap-5 overflow-x-auto snap-x snap-mandatory px-5">
            {rooms.map((image) => (
              <div
                key={image.id}
                className="shrink-0 aspect-[9/16] shadow-2xl md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative snap-center snap-always"
              >
                <img
                  className="w-full h-full object-cover"
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                />
                <motion.div className="absolute left-0 bottom-0 px-4 md:px-6 lg:px-8 py-8 md:py-8 lg:py-12 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-white lg:text-lg w-full bg-gradient-to-t from-black/90 to-black/0">
                  <p className="font-extrabold !font-Italiana tracking-wide capitalize relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-white">
                    {`${t(image.title)}`}
                  </p>
                  <Link
                    onClick={() => {
                      setSelected(true);
                      setSelected(image);
                    }}
                    className="font-extrabold !font-PoiretOne"
                  >
                    <Button content={t("show")} />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <RoomModal selected={selected} setSelected={setSelected} t={t} />
      </motion.section>

      <section>
        <RoomsOutro t={t} />
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

const RoomsOutro = ({ t }) => {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 p-5 lg:p-14 gap-y-4 md:gap-y-0 lg:gap-x-10">
      <div className=" p-4 md:p-8 lg:p-10 grid place-content-center">
        <motion.h1
          variants={titleRevealVariant}
          initial="initial"
          whileInView="animate"
          className="mb-4 lg:mb-8 text-center !font-Italiana italic text-xl lg:text-2xl font-bold capitalize"
        >
          {t("outroTitle")}
        </motion.h1>
        <motion.p
          variants={paragraphRevealVariant}
          initial="initial"
          whileInView="animate"
          className="text-center md:text-justify !font-PoiretOne text-sm lg:text-base font-bold first-letter:uppercase first-letter:text-xl"
        >
          {t("outroParag")}
        </motion.p>
      </div>
      <motion.div
        variants={imageRevealVariant}
        initial="initial"
        whileInView="animate"
        style={{
          backgroundImage: "url('/images/accommodation/roomsPageOutro.webp')",
        }}
        className="md:order-2 bg-cover bg-center shadow-xl overflow-hidden rounded-md relative before:absolute before:left-0 before:top-0 before:h-full before:w-[30%] before:bg-gradient-to-r before:from-black/70 before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-[30%] after:bg-gradient-to-l after:from-black/70 after:to-transparent"
      />
    </div>
  );
};
