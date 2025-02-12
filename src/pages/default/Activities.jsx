/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion } from "framer-motion";
import SmallParagraph from "../../UI/SmallParagraph";
import { IoTimerOutline } from "react-icons/io5";
import { PiWarningOctagonBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  WellBeingData,
  agafayImages,
  massageImages,
  moreOfMarrakeshImages,
  selfCareImages,
} from "../../data/data";
import { Helmet } from "react-helmet-async";

const Activities = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { t } = useTranslation("activities");
  return (
    <>
      <Helmet>
        <title>Yanis Guest House activities & wellbeing page</title>
        <meta
          name="description"
          content="massage relaxant​ massage marrakech​ massage thai marrakech​ massage marrakech pas cher​ massage pas cher marrakech marrakech massage massage in marrakech"
        />
        <meta
          name="description"
          content="best massage marrakech meilleur massage marrakech massage couple marrakech cheap massage marrakech massage duo marrakech massage tonifiant​ massage relaxant et tonifiant"
        />
        <meta
          name="description"
          content="massage drainant anti cellulite​ massage drainant​ massage couple​ massage couple marrakech​ cadeau massage couple​ massage pour couple massage en couple"
        />
        <meta
          name="description"
          content="​facial treatment​ soin facial ​vol montgolfiere marrakech ​massage des couples massage en couple marrakech​"
        />
        <meta
          name="description"
          content="manicure & pedicure salon​ manicure pedicure manicure and pedicure manicure marrakech anti aging facial treatment mesotherapy facial treatment​ natural facial treatment"
        />
        <meta
          name="description"
          content="agafay desert desert d agafay desert agafay agafay desert luxury camp​ agafay desert camp la pause agafay desert​ desert agafay marrakech agafay desert day trip"
        />
        <meta
          name="description"
          content="agafay desert marrakech agafay desert tours​ quad desert agafay agafay desert dinner​ agafay desert morocco excursion desert agafay le montgolfiere​ prix"
        />
        <meta
          name="description"
          content="valley day trip cheval marrakech​ equitation marrakech equitation a marrakech"
        />
        <meta
          name="description"
          content="ourika valley ourika valley waterfalls​ ourika waterfalls vallée de l ourika​ ourika marrakech cascade ourika la muraille de l ourika ourika valley marrakech​ ourika"
        />
        <link
          rel="canonical"
          href="https://yanisguesthouse.com/activities&wellbeing"
        />
      </Helmet>
      <ActivitiesHeader t={t} />
      <SmallParagraph text={t("parag1")} />
      <Heading heading={t("heading1")} />
      <WellBeing t={t} />
      <Heading heading={t("heading2")} />
      <SelfCare t={t} />
      <SmallParagraph text={t("parag2")} />
      <Heading heading={t("heading3")} />
      <ExternalActivities t={t} />
      <Heading heading={t("heading4")} />
      <MoreOfMarrakesh t={t} />
    </>
  );
};

export default Activities;

const ActivitiesHeader = ({ t }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('/images/activities&wellbeing/activitiesBkg.webp')",
      }}
      className="h-screen bg-black relative -mt-20 bg-cover bg-center z-50"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="flex justify-center z-[60] items-center h-full gap-y-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            stifness: 20,
            duration: 1,
            delay: 1.3,
          }}
          className="z-10 text-white font-bold !font-Italiana uppercase text-3xl md:text-4xl lg:text-5xl tracking-wide [text-shadow:_1px_1px_0_#00464326]"
        >
          {t("headerTitle")}
        </motion.h1>
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
      viewport={{
        once: true,
      }}
      className="text-center md:w-[50ch] mx-auto text-xl md:text-3xl underline xl:text-4xl !font-Italiana font-bold capitalize text-transparent bg-clip-text bg-gradient-to-br from-golden to-black my-10"
    >
      {heading}
    </motion.h3>
  );
};

const WellBeing = ({ t }) => {
  return (
    <>
      <ul className="group h-[80vh] mb-20 flex justify-center items-center p-4 gap-4 overflow-hidden">
        {massageImages.map((image, i) => (
          <motion.li
            variants={imagesFadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            key={i}
            className="relative h-[80%] w-full hover:w-[300%] odd:mt-[10%] grayscale hover:grayscale-0 transition-all duration-700 ease-hover-image [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-full before:absolute before:bg-transparent before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] even:hover:shadow-2xl shadow-cozyGreen/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={image.imageUrl}
                alt="massage image"
                className="absolute w-full h-full object-cover object-center max-w-none rounded-lg"
              />

              <div className="opacity-0 translate-x-10 hover:translate-x-0 hover:opacity-100 absolute left-0 bottom-0 p-5 text-white w-full h-full flex items-end">
                <div className="absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent flex items-center px-5 !font-Italiana font-extrabold tracking-wide">
                  <p className="first-letter:uppercase hidden md:block underline underline-offset-[3px]">
                    {t(image.imageDescription)}
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-20">
        {WellBeingData.map((i, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            key={index}
            custom={index}
            className="relative border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
          >
            <div className="relative w-1/2 h-px rounded-xl bg-golden" />
            <div className="mx-2 md:mx-4 grid grid-rows-[auto_1fr_auto_auto] min-h-full">
              <h4 className="mt-4 font-black capitalize text-xl !font-Italiana">
                {t(i.genre)}
              </h4>
              <p className="mt-2 text-pretty !font-PoiretOne font-bold">
                {t(i.definition)}
              </p>
              <div className="flex justify-between my-8 mx-2 md:mx-4 !font-PoiretOne font-bold">
                <p>
                  <span className="text-lg">€{i.price}</span>
                  &nbsp;
                  <span className="text-sm">/ {t(i.person)}</span>
                </p>
                <p className="flex justify-center items-center gap-2 font-semibold text-lg">
                  <IoTimerOutline />
                  {i.time}
                </p>
              </div>
              {/* <a
                href="https://yanis-guest-house.hotelrunner.com/bv3"
                target="_blank"
              > */}
              <div className="flex justify-center">
                <Link
                  to="/selfCareForm"
                  className=" py-2 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg !font-PoiretOne font-bold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
                >
                  {t("book")}
                </Link>
              </div>
              {/* </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const SelfCare = ({ t }) => {
  return (
    <>
      <ul className="group h-[80vh] mb-20 flex justify-center items-center p-4 gap-4 overflow-hidden">
        {selfCareImages.map((care, i) => (
          <motion.li
            variants={imagesFadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            key={i}
            className="relative h-[80%] w-full hover:w-[300%] lg:hover:w-[200%] odd:mt-[10%] grayscale hover:grayscale-0 transition-all duration-700 ease-hover-image [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-full before:absolute before:bg-transparent before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] even:hover:shadow-xl shadow-cozyGreen/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={care.imageUrl}
                alt="selfcare image"
                className="absolute w-full h-full object-cover object-center max-w-none rounded-lg"
              />
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-20">
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4 grid grid-rows-[auto_1fr_auto_auto] min-h-full">
            <h4 className="mt-4 font-bold capitalize text-xl !font-Italiana">
              {t("manicure")}
            </h4>
            <p className="mt-2 !font-PoiretOne font-bold text-pretty first-letter:uppercase">
              {t("manDescription")}
            </p>
            <div className="flex justify-center my-8 mx-2 md:mx-4 !font-PoiretOne font-bold">
              <p className="">
                <span className="text-xl">€40</span>
                &nbsp;
                <span className="text-sm">/ {t("each")}</span>
              </p>
            </div>
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            <div className="flex justify-center">
              <Link
                to="/selfCareForm"
                className=" py-2 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg !font-PoiretOne font-bold capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
              >
                {t("book")}
              </Link>
            </div>
            {/* </a> */}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4 grid grid-rows-[auto_auto_1fr_auto] min-h-full">
            <h4 className="mt-4 font-bold capitalize text-xl !font-Italiana">
              {t("facial")}
            </h4>
            <div className="mt-2 !font-PoiretOne font-bold text-pretty grid lg:grid-cols-card gap-x-12 gap-y-1 lg:gap-y-0">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">{t("pulls")}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">{t("scrub")}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">{t("mask")}</p>
              </div>

              <div className="flex gap-2 lg:mt-2">
                <div className="size-3 mt-1 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">{t("antiAging")}</p>
              </div>
            </div>
            <div className="flex justify-center my-6 mx-2 md:mx-4 mt-auto">
              <p className="font-bold !font-PoiretOne text-xl">€50</p>
            </div>
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            <div className="flex justify-center">
              <Link
                to="/selfCareForm"
                className=" py-2 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg font-bold !font-PoiretOne capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
              >
                {t("book")}
              </Link>
            </div>
            {/* </a> */}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="relative grid place-content-center !font-PoiretOne font-bold tracking-wide p-8 w-[90%] md:w-3/4 lg:w-1/2 mx-auto rounded-xl shadow-lg shadow-red-200 hover:shadow-red-300 hover:shadow-xl transition duration-300 bg-gradient-to-br from-cozyGreen to-black text-background mb-20">
          <div className="absolute top-2 left-2">
            <PiWarningOctagonBold size="20" />
          </div>
          <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center">
            <p className="first-letter:uppercase">{t("rdv")}</p>
            <div>
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-gradient-to-bl from-golden to-cozyGreen" />
                <p className="first-letter:uppercase">{t("afternoon")}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-gradient-to-bl from-golden to-cozyGreen" />
                <p className="first-letter:uppercase">{t("morning")}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ExternalActivities = ({ t }) => {
  return (
    <>
      <ul className="group h-[80vh] mb-20 flex justify-center items-center p-4 gap-4 overflow-hidden">
        {agafayImages.map((agafay, i) => (
          <motion.li
            variants={imagesFadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            key={i}
            className="relative h-[80%] w-full hover:w-[300%] lg:hover:w-[200%] first:-mt-[10%] last:-mt-[10%] mt-[5%] grayscale hover:grayscale-0 transition-all duration-700 ease-hover-image [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-full before:absolute before:bg-transparent before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] first:hover:shadow-2xl last:hover:shadow-2xl shadow-cozyGreen/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={agafay.imageUrl}
                alt="agafay image"
                className="absolute w-full h-full object-cover object-center max-w-none rounded-lg"
              />
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto text-background mb-10">
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative border border-cozyGreen/10 border-dashed bg-gradient-to-bl from-lightGreen to-background text-cozyGreen rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden mb-3" />
          <div className="mx-2 md:mx-4 md:my-2">
            <h4 className="my-4 font-bold capitalize text-xl !font-Italiana">
              {t("pack1")}
            </h4>
            <ul className="flex flex-wrap gap-y-1 !font-PoiretOne font-bold">
              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("quad")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("dromadaire")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("the")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("photo")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase ">{t("transport")}</li>
              </div>
            </ul>
          </div>
          <div className="flex justify-center my-8 mx-2 md:mx-4 !font-PoiretOne font-bold">
            <p>
              <span className="text-xl">€55</span>
              &nbsp;
              <span className="text-sm">/ {t("perPerson")}</span>
            </p>
          </div>
          {/* <a
            href="https://yanis-guest-house.hotelrunner.com/bv3"
            target="_blank"
          > */}
          <div className="flex justify-center">
            <Link
              to="/selfCareForm"
              className="py-1.5 w-5/6 mx-auto text-center !font-PoiretOne font-bold border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
            >
              {t("book")}
            </Link>
          </div>
          {/* </a> */}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative border border-cozyGreen/10 !font-PoiretOne font-bold border-dashed bg-gradient-to-bl from-lightGreen to-background text-cozyGreen rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden mb-3" />
          <div className="mx-2 md:mx-4 md:my-2">
            <h4 className="my-4 font-black capitalize text-xl !font-Italiana">
              {t("pack2")}
            </h4>
            <ul className="flex flex-wrap gap-y-1">
              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("quad2")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("the")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("photo")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase ">{t("transport")}</li>
              </div>

              <div className="invisible flex items-center gap-1.5 basis-full lg:basis-1/2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase ">.</li>
              </div>
            </ul>
          </div>
          <div className="flex justify-center my-8 mx-2 md:mx-4">
            <p>
              <span className="text-xl">€55</span>
              &nbsp;
              <span className="text-sm">/ {t("perPerson")}</span>
            </p>
          </div>
          {/* <a
            href="https://yanis-guest-house.hotelrunner.com/bv3"
            target="_blank"
          > */}
          <div className="flex justify-center">
            <Link
              to="/selfCareForm"
              className="py-1.5 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
            >
              {t("book")}
            </Link>
          </div>
          {/* </a> */}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative mb-6 border md:col-span-2 !font-PoiretOne font-bold border-cozyGreen/10 border-dashed bg-gradient-to-bl from-lightGreen to-background text-cozyGreen rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden mb-3" />
          <div className="mx-2 md:mx-4 md:my-2">
            <h4 className="my-4 font-black capitalize text-xl !font-Italiana">
              {t("pack3")}
            </h4>
            <ul className="flex flex-wrap gap-y-2">
              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("culinaire")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("dinner")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("spectacle")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase">{t("quad")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase ">{t("dromadaire")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase ">{t("the")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase ">{t("photo")}</li>
              </div>

              <div className="flex items-center gap-1.5 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <li className="first-letter:uppercase ">{t("transport")}</li>
              </div>
            </ul>
          </div>
          <div className="flex justify-center my-8 mx-2 md:mx-4">
            <p>
              <span className="text-xl">€80</span>
              &nbsp;
              <span className="text-sm">/ {t("perPerson")}</span>
            </p>
            <p className="flex justify-center items-center gap-2 font-semibold text-lg"></p>
          </div>
          {/* <a
            href="https://yanis-guest-house.hotelrunner.com/bv3"
            target="_blank"
          > */}
          <div className="flex justify-center">
            <Link
              to="/selfCareForm"
              className="py-1.5 w-5/6 md:w-1/2 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
            >
              {t("book")}
            </Link>
          </div>
          {/* </a> */}
        </motion.div>
      </div>
    </>
  );
};

const MoreOfMarrakesh = ({ t }) => {
  return (
    <>
      <ul className="group h-[80vh] mb-20 flex justify-center items-center p-4 gap-4 overflow-hidden">
        {moreOfMarrakeshImages.map((agafay, i) => (
          <motion.li
            variants={imagesFadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            key={i}
            className="relative h-[80%] w-full hover:w-[300%] odd:mt-[10%]  grayscale hover:grayscale-0 transition-all duration-700 ease-hover-image [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-full before:absolute before:bg-transparent before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] even:hover:shadow-2xl shadow-cozyGreen/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={agafay.imageUrl}
                alt="countryside image"
                className="absolute w-full h-full object-cover object-center max-w-none rounded-lg"
              />

              <div className="opacity-0 translate-x-10 hover:translate-x-0 hover:opacity-100 absolute left-0 bottom-0 p-5 text-white w-full h-full flex items-end">
                <div className="absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent flex items-center px-5 !font-Italiana font-extrabold tracking-wide">
                  <p className="first-letter:uppercase hidden md:block underline underline-offset-[3px]">
                    {t(agafay.imgDescription)}
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-20">
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative !font-PoiretOne font-bold border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4">
            <h4 className="mt-4 font-black capitalize text-xl !font-Italiana">
              {t("balloonTitle")}
            </h4>
            <p className="mt-2 text-pretty first-letter:uppercase">
              {t("balloonDiscrip")}
            </p>
            <div className="flex justify-center my-8 mx-2 md:mx-4">
              <p>
                <span className="text-xl">€190</span>
                &nbsp;
                <span className="text-sm">/ {t("perPerson")}</span>
              </p>
            </div>
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            <div className="flex justify-center">
              <Link
                to="/selfCareForm"
                className="py-2 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
              >
                {t("book")}
              </Link>
            </div>
            {/* </a> */}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative !font-PoiretOne font-bold border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4">
            <h4 className="mt-4 font-black capitalize text-xl !font-Italiana">
              {t("ourikaTitle")}
            </h4>
            <p className="mt-2 text-pretty first-letter:uppercase">
              {t("balloonDisc")}
            </p>
            <div className="flex justify-center my-8 mx-2 md:mx-4">
              <p>
                <span className="text-xl">€100</span>
                &nbsp;
                <span className="text-sm">/ {t("perPerson")}</span>
              </p>
            </div>
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            <div className="flex justify-center">
              <Link
                to="/selfCareForm"
                className=" py-2 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
              >
                {t("book")}
              </Link>
            </div>
            {/* </a> */}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative !font-PoiretOne font-bold border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4 grid grid-rows-[auto_1fr_auto_auto] min-h-full">
            <h4 className="mt-4 font-black capitalize text-xl !font-Italiana">
              {t("HorsebackTitle")}
            </h4>
            <p className="mt-2 text-pretty first-letter:uppercase">
              {t("HorsebackDisc")}
            </p>
            <div className="flex justify-center my-8 mx-2 md:mx-4">
              <p>
                <span className="text-xl">€45</span>
                &nbsp;
                <span className="text-sm">/ {t("perPerson")}</span>
              </p>
            </div>
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            <div className="flex justify-center">
              <Link
                to="/selfCareForm"
                className=" py-2 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
              >
                {t("book")}
              </Link>
            </div>
            {/* </a> */}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative !font-PoiretOne font-bold border border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4">
            <h4 className="mt-4 font-black capitalize text-xl !font-Italiana">
              {t("AliTitle")}
            </h4>
            <p className="mt-2 text-pretty first-letter:uppercase">
              {t("aliDisc")}
            </p>
            <div className="flex justify-center my-8 mx-2 md:mx-4">
              <p>
                <span className="text-xl">€60</span>
                &nbsp;
                <span className="text-sm">/ {t("perPerson")}</span>
              </p>
            </div>
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            <div className="flex justify-center">
              <Link
                to="/selfCareForm"
                className=" py-2 w-5/6 mx-auto text-center border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
              >
                {t("book")}
              </Link>
            </div>
            {/* </a> */}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative !font-PoiretOne font-bold border md:col-span-2 border-cozyGreen/10 border-dashed rounded-lg transition-shadow hover:shadow-sm shadow-lg p-6 bg-gradient-to-bl from-lightGreen to-background text-cozyGreen after:absolute after:right-6 after:bottom-[10%] after:w-px after:h-[40%] after:rounded-xl after:bg-golden"
        >
          <div className="relative w-1/2 h-px rounded-xl bg-golden" />
          <div className="mx-2 md:mx-4">
            <h4 className="mt-4 font-black capitalize text-xl !font-Italiana">
              {t("CircuitTitle")}
            </h4>
            <p className="my-4 text-pretty first-letter:uppercase">
              {t("CircuitDisc")}
            </p>
            <div className="my-4 text-pretty flex justify-evenly gap-x-12 gap-y-1 lg:gap-y-0">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">{t("pDriver")}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gradient-to-bl from-golden to-background" />
                <p className="first-letter:uppercase">{t("guide")}</p>
              </div>
            </div>
            <div className="flex justify-center my-8 mx-2 md:mx-4">
              <p>
                <span className="text-xl">€160</span>
                &nbsp;
                <span className="text-sm">/ {t("jusqua")}</span>
              </p>
            </div>
            {/* <a
              href="https://yanis-guest-house.hotelrunner.com/bv3"
              target="_blank"
            > */}
            <div className="flex justify-center">
              <Link
                to="/selfCareForm"
                className="py-2 lg:w-1/2 w-5/6 text-center mx-auto border border-cozyGreen/10 border-dashed shadow-md hover:shadow-sm rounded-lg capitalize bg-gradient-to-bl active:scale-95 active:shadow-none active:border-none transition"
              >
                {t("book")}
              </Link>
            </div>
            {/* </a> */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const cardVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: index * 0.3,
    },
  }),
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

const imagesFadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * i,
      type: "tween",
    },
  }),
};
