/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { AnimatedText } from "../../UI/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScroll from "../../components/HorizontalScroll";
import { SwipeCarousel } from "../../components/Carousel2";
import SmallParagraph from "../../UI/SmallParagraph";
import Header2 from "../../components/Header2";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const fadeInLeftXAxisAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const fadeInRightXAxisAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const welcomeVariants = {
  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
    },
  },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const { t } = useTranslation("home");
  return (
    <motion.div variants={welcomeVariants} initial="initial" animate="animate">
      <Helmet>
        <title>Yanis Guest House home page</title>
        <meta name="description" content="home page" />
        <link rel="canonical" href="/home" />
      </Helmet>
      <div className="w-full h-dvh overflow-hidden bg-black z-20 backdrop-blur-md -mt-20">
        <Header2 t={t} />
      </div>
      <motion.section
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        ref={ref}
        className="flex relative justify-center h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('/images/accommodation/Family-Suite-of-7-Peoples/room5Image4.webp')]"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="grid place-content-center z-10 -mt-44 leading-8 !font-Italiana w-[25ch] md:w-[50ch] lg:w-[80ch] uppercase [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
          <AnimatedText text={t("textContent")} />
        </div>
      </motion.section>
      <SmallParagraph text={t("text1")} />
      <section className="z-20">
        <HorizontalScroll t={t} />
      </section>
      <motion.section
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", stiffness: 100 }}
        className="h-3/4 grid gap-y-4 md:gap-y-0 md:grid-cols-3 mt-10 md:my-16 md:w-11/12 mx-auto"
      >
        <div className="h-full w-full md:flex order-2 md:order-none lg:justify-center lg:items-end md:relative">
          <div className="md:z-10 md:absolute flex-row md:flex-none justify-center items-center md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[90%] md:p-5 mx-auto">
            <motion.h3
              variants={fadeInLeftXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1 }}
              viewport={{
                once: true,
              }}
              className="!font-Italiana font-bold uppercase mx-auto p-1.5 lg:p-3 my-3 lg:my-5 text-sm text-mainText md:text-lg lg:text-2xl md:whitespace-nowrap text-center md:text-left w-[30ch] md:w-[45ch] bg-background backdrop-blur-sm md:relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-right-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-right-3 md:before:top-0"
            >
              {t("toReturnTitle")}
            </motion.h3>
            <motion.div
              variants={fadeInLeftXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1.2 }}
              viewport={{
                once: true,
              }}
              className="p-1.5 md:p-3 md:mt-0 lg:p-6 mx-auto w-full !font-PoiretOne font-bold text-sm lg:text-base md:w-[40ch] lg:w-[45ch] text-mainText text-justify bg-background backdrop-blur-sm relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-right-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-right-3 md:before:top-0"
            >
              <p className="mb-2 md:mb-3 lg:mb-4">{t("toReturnContent1")}</p>
              <p>{t("toReturnContent2")}</p>
            </motion.div>
          </div>
        </div>
        <div className="md:col-span-2 md:shadow-2xl relative">
          <div className="absolute inset-0 bg-black/20" />
          <img
            src="/images/homePage/homeToReturn.webp"
            alt="image"
            className="lg:h-96 object-cover object-center rounded-sm w-full"
            loading="lazy"
          />
        </div>
      </motion.section>
      <motion.section
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", stiffness: 100 }}
        className="h-3/4 grid gap-y-4 md:gap-y-0 md:grid-cols-3 mt-4 mb-8 md:my-16 md:w-11/12 mx-auto overflow-hidden"
      >
        <div className="md:col-span-2 mt-4 md:mt-0 md:shadow-xl relative">
          <div className="absolute inset-0 bg-black/20" />
          <img
            src="/images/homePage/homeDiscover.webp"
            alt="image"
            className="lg:h-96 w-full object-cover object-center rounded-sm"
            loading="lazy"
          />
        </div>
        <div className="h-full w-full md:flex md:justify-center md:items-end md:relative">
          <div className="md:z-10 md:absolute md:top-1/2 md:right-3/4 md:-translate-x-60 md:-translate-y-1/2 w-[90%] md:p-5 mx-auto">
            <motion.h3
              variants={fadeInRightXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1 }}
              viewport={{
                once: true,
              }}
              className="uppercase !font-Italiana mx-auto p-1.5 lg:p-3 my-3 lg:my-5 md:ml-10 lg:ml-0 text-sm md:text-lg lg:text-2xl font-semibold md:whitespace-nowrap text-center md:text-left w-[30ch] md:w-[45ch] bg-background text-mainText backdrop-blur-sm md:relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-left-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-left-3 md:before:top-0"
            >
              {t("uniqueTitle")}
            </motion.h3>
            <motion.div
              variants={fadeInRightXAxisAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ type: "tween", duration: 1.5 }}
              viewport={{
                once: true,
              }}
              className="p-1.5 md:p-3 !font-PoiretOne font-bold md:mt-0 md:ml-28 lg:p-6 mx-auto w-full text-sm lg:text-base md:w-[40ch] lg::w-[45ch] text-justify bg-background text-mainText backdrop-blur-sm relative md:after:absolute md:after:w-0.5 md:after:h-full md:after:bg-beige md:after:-left-1.5 md:after:top-0 md:before:absolute md:before:w-1 md:before:h-full md:before:bg-beige md:before:-left-3 md:before:top-0"
            >
              <p className="mb-2 md:mb-3 lg:mb-4">{t("uniqueContent1")}</p>
              <p>{t("uniqueContent2")}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <SwipeCarousel t={t} />
      <EnjoyStay t={t} />
      {/* <div className="w-full h-[600px] bg-cozyGreen grid place-content-center">
        <iframe
          className="w-[1000px] h-[500px]"
          src="https://yanis-guest-house.amenitiz.io/fr/bookingroom"
          // style={{"border:0px, bo #FFFFFF none"}}
          name="myiFrame"
          // scrolling="no"
          // frameBorder="1"
          // marginHeight="0px"
          // marginWidth="0px"
          // height="500px"
          // width="auto"
          // allowfullscreen
        ></iframe>
      </div> */}
    </motion.div>
  );
};

export default Home;

const EnjoyStay = ({ t }) => {
  const enjoyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: enjoyRef,
  });
  const play = useTransform(scrollYProgress, [0.6, 0.9], [5000, -500]);
  return (
    <motion.section className="my-16 md:my-0 md:h-screen flex items-center overflow-hidden bg-gradient-to-b from-bordeaux via-bordeaux to-black">
      <div className="aspect-video lg:aspect-carousel2 w-full bg-cover bg-[url('/images/homePage/homeExplore.webp')] bg-bottom relative">
        <div className="absolute inset-0 bg-black/20" />
        <motion.h2
          style={{
            x: play,
          }}
          className="flex items-end w-full h-full whitespace-nowrap text-white capitalize text-[3.5em] md:text-[7em] lg:text-[8em] font-bold !font-Italiana transition-all duration-500 ease-move-mouse"
        >
          {t("enjoy")}
        </motion.h2>
      </div>
    </motion.section>
  );
};
