/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { IoBedOutline, IoChevronBack } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { imgs, rooms } from "../data/data";
import RoomModal from "./RoomModal";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 30;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 150,
  damping: 50,
};

export const SwipeCarousel = ({ t }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-cozyGreen py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab active:cursor-grabbing items-center"
      >
        <Images imgIndex={imgIndex} t={t} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex, t }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      {rooms.map((image) => {
        return (
          <motion.div
            key={image.id}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === image.id ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="relative aspect-carousel w-screen shrink-0 rounded-xl bg-neutral-800 object-cover hover:scale-125"
          >
            <div className="absolute w-full h-full transition duration-[.6s] z-10 ease-in-out opacity-0 hover:opacity-100 hover:bg-cozyGreen/50 backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <div className="grid h-full w-full relative">
                <div className="absolute left-2 md:left-4 top-2 md:top-4 uppercase !font-PoiretOne text-xs md:text-sm px-1.5 md:px-3 lg:px-5 py-1 lg:py-2 w-fit h-fit font-semibold text-golden bg-gradient-to-tl from-black to-black/20 border border-solid border-golden">
                  {t("start")} {image?.price} $
                </div>
                <h2 className="flex justify-center !font-Italiana capitalize items-end md:pb-5 font-bold text-xl md:text-3xl lg:text-4xl">
                  {`${t(image?.title)}`}
                </h2>
                <ul className="grid grid-cols-4 place-content-evenly md:gap-x-10 w-full md:w-3/4 mx-auto !font-PoiretOne">
                  <li className="flex justify-center items-center gap-1.5 md:gap-2.5 lg:gap-4">
                    <TbRulerMeasure className="w-6 lg:w-8 h-6 lg:h-8" />
                    <span className="text-sm md:text-base lg:text-lg font-semibold">
                      {image.surface} m<sup>2</sup>
                    </span>
                  </li>
                  <li className="flex justify-center items-center md:gap-2.5 lg:gap-4">
                    <HiOutlineUsers className="w-6 lg:w-8 h-6 lg:h-8" />
                    <span className="text-sm md:text-base lg:text-lg font-semibold capitalize">
                      {image.persones} {t("persons")}
                    </span>
                  </li>
                  <li className="flex justify-center items-center gap-1.5 md:gap-2.5 lg:gap-4">
                    <IoBedOutline className="w-6 lg:w-8 h-6 lg:h-8" />
                    <span className="text-sm md:text-base lg:text-lg font-semibold capitalize">
                      {`${t(image.bed)}`}
                    </span>
                  </li>
                  <li className="flex justify-center items-center gap-1.5 md:gap-2.5 lg:gap-4">
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
                  }}
                  // to="/accommodations"
                  className="px-5 md:px-7 lg:px-10 py-0.5 md:py-1 lg:py-2 flex justify-self-center self-center w-fit h-fit text-sm md:text-base lg:text-lg font-bold uppercase !font-PoiretOne text-golden bg-gradient-to-br from-black to-black/20 relative before:absolute before:w-full before:h-0.5 before:left-0 before:-bottom-2 before:bg-gradient-to-bl before:from-black before:to-black/20 before:scale-x-0 before:transition before:delay-75 hover:before:scale-x-100"
                >
                  {t("view")}
                </Link>
              </div>
            </div>
            <RoomModal selected={selected} setSelected={setSelected} t={t} />
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  const goToPrev = () => {
    const isFirstSlide = imgIndex === 0;
    const newIndex = isFirstSlide ? imgs.length - 1 : imgIndex - 1;
    setImgIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = imgIndex === imgs.length - 1;
    const newIndex = isLastSlide ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
  };
  return (
    <div className="mt-4 flex w-full justify-center items-center gap-2">
      <button className="sr-only">prev</button>
      <button
        onClick={goToPrev}
        className="size-1 lg:size-5 group rounded-xl shadow-xl p-4 mr-10 lg:mr-20 grid place-content-center active:shadow-none hover:scale-110 transition-all bg-gradient-to-tl from-cozyGreen to-golden"
      >
        <span className="group-active:scale-90 text-background">
          <IoChevronBack />
        </span>
      </button>

      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition-colors ${
              idx === imgIndex
                ? "bg-gradient-to-br from-golden via-bordeaux/10 to-golden/20"
                : "bg-gradient-to-br from-aubergine via-beige/10 to-aubergine/10"
            }`}
          />
        );
      })}
      <button
        onClick={goToNext}
        className="size-5 group rounded-xl shadow-xl p-4 ml-10 lg:ml-20 grid place-content-center active:shadow-none hover:scale-110 transition-all bg-gradient-to-tr from-cozyGreen to-golden"
      >
        <span className="rotate-180 group-active:scale-90 text-background">
          <IoChevronBack />
        </span>
      </button>
      <button className="sr-only">next</button>
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/30 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/30 to-neutral-950/0" />
    </>
  );
};
