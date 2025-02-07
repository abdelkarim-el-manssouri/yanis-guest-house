import { headerSlideImages } from "../data/data";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "tween",
  duration: ".5",
};

const Header = ({ t }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === headerSlideImages.length - 1) {
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

    if (x <= -DRAG_BUFFER && imgIndex < headerSlideImages.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
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
          opacity: 1,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center"
      >
        <Images t={t} />
      </motion.div>
      <div className="w-full fixed left-0 bottom-10"></div>
    </div>
  );
};

export default Header;

const Images = ({ t }) => {
  return (
    <>
      {headerSlideImages.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            transition={SPRING_OPTIONS}
            className="h-dvh w-full shrink-0 object-cover relative"
          >
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            <div className="grid place-content-center h-full">
              <p className="h-full mx-auto z-50 text-background !font-Italiana font-bold tracking-wide w-3/4 lg:w-5/6 [text-shadow:_1px_2px_0_rgb(0_0_0_/_40%)] text-center text-2xl lg:text-4xl 2xl:text-6xl">
                {t(`${imgSrc.title}`)}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
