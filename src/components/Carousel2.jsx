/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoBedOutline, IoChevronBack } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { rooms } from "../data/data";
import RoomModal from "./RoomModal";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 250,
  damping: 50,
};

export const SwipeCarousel = ({ t }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-transparent via-golden to-transparent z-[99999]">
      <Images imgIndex={imgIndex} setImgIndex={setImgIndex} t={t} />
    </div>
  );
};

const Images = ({ imgIndex, setImgIndex, t }) => {
  const [selected, setSelected] = useState(false);
  const goToPrev = () => {
    const isFirstSlide = imgIndex === 0;
    const newIndex = isFirstSlide ? rooms.length - 1 : imgIndex - 1;
    setImgIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = imgIndex === rooms.length - 1;
    const newIndex = isLastSlide ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
  };
  return (
    <>
      <motion.section className="">
        <div className="overflow-hidden h-[620px]">
          <div className="pb-10 h-[calc(620px+2.5rem)] flex items-center snap-x snap-mandatory overflow-x-auto px-5">
            <button className="sr-only">prev</button>
            <button
              onClick={goToPrev}
              className="hidden size-1 lg:size-10 absolute top-1/2 -translate-y-1/2 left-5 md:left-24 lg:grid group p-4 mr-10 lg:mr-20 place-content-center active:shadow-none hover:scale-110 active:scale-95 transition-all z-[999999]"
            >
              <span className="group-active:scale-90 text-black">
                <IoChevronBack className="size-9 md:size-12" />
              </span>
            </button>

            {rooms.map((image) => {
              return (
                <motion.div
                  key={image.id}
                  style={{
                    backgroundImage: `url(${image.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{
                    translate: "-50%",
                    left: "50%",
                    top: "0",
                  }}
                  animate={{
                    translateX: `-${imgIndex * 100}%`,
                    scale: 0.9,
                    // // marginTop: imgIndex === image.id ? 0 : "20px",
                    // filter: imgIndex === image.id ? "blur(0px)" : "blur(5px)",
                  }}
                  transition={SPRING_OPTIONS}
                  className="shrink-0 aspect-[10/20] shadow-md md:aspect-video w-[65vw] md:w-[80vw] lg:w-[1000px] 2xl:w-[1100px] rounded-md overflow-clip relative snap-center snap-always"
                >
                  <div className="absolute w-full h-full transition duration-[.6s] z-10 ease-in-out opacity-0 hover:opacity-100 hover:bg-black/50 backdrop-blur-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <div className="grid h-full w-full relative">
                      <div className="absolute left-1/2 md:left-4 top-6 md:top-4 -translate-x-1/2 md:translate-x-0 uppercase !font-PoiretOne text-xs md:text-sm px-3 lg:px-5 py-2 w-fit h-fit font-semibold text-golden bg-gradient-to-tl from-black to-black/20 border border-solid border-golden">
                        {t("start")} {image?.price} €
                      </div>
                      <h2 className="flex justify-center !font-Italiana capitalize items-end md:pb-5 font-bold text-2xl md:text-3xl lg:text-4xl">
                        {`${t(image?.title)}`}
                      </h2>
                      <ul className="grid grid-cols-2 md:grid-cols-4 place-content-evenly md:gap-x-10 w-full md:w-3/4 mx-auto !font-PoiretOne">
                        <li className="flex flex-col md:flex-row justify-center items-center gap-1.5 md:gap-2.5 lg:gap-4">
                          <TbRulerMeasure className="w-6 lg:w-8 h-6 lg:h-8" />
                          <span className="text-sm md:text-base lg:text-lg font-semibold">
                            {image.surface} m<sup>2</sup>
                          </span>
                        </li>
                        <li className="flex flex-col md:flex-row justify-center items-center gap-1.5 md:gap-2.5 lg:gap-4">
                          <HiOutlineUsers className="w-6 lg:w-8 h-6 lg:h-8" />
                          <span className="text-sm md:text-base lg:text-lg font-semibold capitalize">
                            {image.persones} {t("persons")}
                          </span>
                        </li>
                        <li className="flex flex-col md:flex-row justify-center items-center gap-1.5 md:gap-2.5 lg:gap-4">
                          <IoBedOutline className="w-6 lg:w-8 h-6 lg:h-8" />
                          <span className="text-sm md:text-base lg:text-lg font-semibold capitalize">
                            {`${t(image.bed)}`}
                          </span>
                        </li>
                        <li className="flex flex-col md:flex-row justify-center items-center gap-1.5 md:gap-2.5 lg:gap-4">
                          <GiBathtub className="w-6 lg:w-8 h-6 lg:h-8" />
                          <span className="text-sm md:text-base lg:text-lg font-semibold capitalize">
                            {`${t(image.bathroom)}`}
                          </span>
                        </li>
                      </ul>
                      <Link
                        onClick={() => {
                          setSelected(true);
                          setSelected(image);
                          window.scrollTo({
                            top: 0,
                          });
                        }}
                        // to="/accommodations"
                        className="px-7 lg:px-10 py-1.5 lg:py-2 flex justify-self-center self-center w-fit h-fit text-sm md:text-base lg:text-lg font-bold uppercase !font-PoiretOne text-golden bg-gradient-to-br from-black to-black/20 relative before:absolute before:w-full before:h-0.5 before:left-0 before:-bottom-2 before:bg-gradient-to-bl before:from-black before:to-black/20 before:scale-x-0 before:transition before:delay-75 hover:before:scale-x-100"
                      >
                        {t("view")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <button
              onClick={goToNext}
              className="hidden size-5 md:size-10 absolute top-1/2 -translate-y-1/2 right-5 md:right-24 group p-4 ml-10 lg:ml-20 lg:grid place-content-center active:shadow-none hover:scale-110 active:scale-95 transition-all"
            >
              <span className="rotate-180 group-active:scale-90 text-black">
                <IoChevronBack className="size-9 md:size-12" />
              </span>
            </button>
            <button className="sr-only">next</button>
          </div>
        </div>
        {/* <div>
          <button className="sr-only">prev</button>
          <button
            onClick={goToPrev}
            className="hidden size-1 lg:size-10 absolute top-1/2 -translate-y-1/2 left-5 md:left-24 lg:grid group p-4 mr-10 lg:mr-20 place-content-center active:shadow-none hover:scale-110 active:scale-95 transition-all z-[999999]"
          >
            <span className="group-active:scale-90 text-black">
              <IoChevronBack className="size-9 md:size-12" />
            </span>
          </button>

          <button
            onClick={goToNext}
            className="hidden size-5 md:size-10 absolute top-1/2 -translate-y-1/2 right-5 md:right-24 group p-4 ml-10 lg:ml-20 lg:grid place-content-center active:shadow-none hover:scale-110 active:scale-95 transition-all"
          >
            <span className="rotate-180 group-active:scale-90 text-black">
              <IoChevronBack className="size-9 md:size-12" />
            </span>
          </button>
          <button className="sr-only">next</button>
        </div> */}
      </motion.section>
      <div
        className="!w-full !h-screen !overflow-x-hidden !overflow-y-auto"
        style={{
          position: "fixed",
          top: "-2px",
          left: "0",
          width: "100% !important",
          height: "100vh !important",
          paddingTop: "90px !important",
          zIndex: 9999999,
        }}
      >
        <RoomModal
          selected={selected}
          setSelected={setSelected}
          t={t}
          position="absolute"
        />
      </div>
    </>
  );
};
