import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";

const imgs = [
  {
    id: 1,
    url: "/src/assets/accommodations-photos/3.jpg",
    price: 60,
    title: "chambre double",
    surface: 20,
    persones: "2 - 3",
    bed: "2 beds",
    bathroom: "1 bathroom",
  },
  {
    id: 2,
    url: "/src/assets/accommodations-photos/4.jpg",
    price: 80,
    title: "suite parental",
    surface: 25,
    persones: "2 - 3",
    bed: "1 double bed",
    bathroom: "1 bathroom",
  },
  {
    id: 3,
    url: "/src/assets/accommodations-photos/5.jpg",
    price: 120,
    title: "suite royale",
    surface: 30,
    persones: "2 - 4",
    bed: "1 double bed",
    bathroom: "1 bathroom",
  },
  {
    id: 4,
    url: "/src/assets/accommodations-photos/1.jpg",
    price: 180,
    title: "family suite of 6 members",
    surface: 60,
    persones: "4 - 7",
    bed: "2 double beds",
    bathroom: "1 bathroom",
  },
  {
    id: 5,
    url: "/src/assets/accommodations-photos/2.jpg",
    price: 190,
    title: "family suite of 7 members",
    surface: 60,
    persones: "4 - 8",
    bed: "2 double beds",
    bathroom: "1 bathroom",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
// const AUTO_DELAY = ONE_SECOND * 100000;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 150,
  damping: 50,
};

export const SwipeCarousel = () => {
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
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <>
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="relative aspect-carousel w-screen shrink-0 rounded-xl bg-neutral-800 object-cover hover:scale-125"
            >
              <div className="w-full h-full transition duration-[.6s] z-10 ease-in-out opacity-0 hover:opacity-100 hover:bg-cozyGreen/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <motion.div className="grid h-full w-full relative">
                  <div className="absolute left-4 top-4 uppercase px-5 py-2 w-fit h-fit font-semibold text-golden bg-gradient-to-tl from-black to-black/20 border border-solid border-golden">
                    from {imgSrc.price} $
                  </div>
                  <h2 className="flex justify-center items-end pb-5 font-bold text-4xl">
                    {imgSrc.title}
                  </h2>
                  <ul className="grid grid-cols-4 place-content-evenly gap-x-10 w-3/4 mx-auto">
                    <li className="flex justify-center items-center gap-4">
                      <TbRulerMeasure className="w-8 h-8" />
                      <span className="text-lg font-semibold">
                        {imgSrc.surface} m<sup>2</sup>
                      </span>
                    </li>
                    <li className="flex justify-center items-center gap-4">
                      <HiOutlineUsers className="w-8 h-8" />
                      <span className="text-lg font-semibold capitalize">
                        {imgSrc.persones} persones
                      </span>
                    </li>
                    <li className="flex justify-center items-center gap-4">
                      <IoBedOutline className="w-8 h-8" />
                      <span className="text-lg font-semibold capitalize">
                        {imgSrc.bed}
                      </span>
                    </li>
                    <li className="flex justify-center items-center gap-4">
                      <GiBathtub className="w-8 h-8" />
                      <span className="text-lg font-semibold capitalize">
                        {imgSrc.bathroom}
                      </span>
                    </li>
                  </ul>
                  <Link
                    to="/accommodations"
                    className="px-10 py-2 flex justify-self-center self-center w-fit h-fit font-semibold text-golden bg-gradient-to-br from-black to-black/20 relative before:absolute before:w-full before:h-0.5 before:left-0 before:-bottom-2 before:bg-gradient-to-bl before:from-black before:to-black/20 before:scale-x-0 before:transition before:delay-75 hover:before:scale-x-100"
                  >
                    view
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex
                ? "bg-gradient-to-br from-beige via-bordeaux/10 to-beige/10"
                : "bg-gradient-to-br from-aubergine via-beige/10 to-aubergine/10"
            }`}
          />
        );
      })}
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
