/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useCallback, useMemo, useRef, useState } from "react";
import { IoChevronBack } from "react-icons/io5";

const slideWidth = 750;
const sliderGap = 20;
const scrollToSlide = (slider, slideIndex) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + sliderGap),
    behavior: "smooth",
  });
};

const RoomsImagesCarouselModal = ({ clickedImg, setClickedImg, selected }) => {
  if (!clickedImg) return <></>;

  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (slideWidth + sliderGap));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);
  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <motion.div
      variants={bgModalVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      onClick={() => setClickedImg(null)}
      className="fixed grid place-content-center inset-0 bg-black/50 z-[700] cursor-pointer backdrop-blur-md overflow-y-scroll lg:w-[calc(100%+2.5rem)]"
    >
      <div className="size-9 rounded-full bg-black/30 right-5 md:right-12 top-4 absolute grid place-content-center">
        <span className="w-1/2 h-0.5 bg-background rounded rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <span className="w-1/2 h-0.5 bg-background rounded -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>
      <button
        disabled={currentSlide === 0}
        onClick={(e) => {
          e.stopPropagation();
          goToPreviousSlide();
        }}
        className="hidden lg:absolute top-1/2 -translate-y-1/2 left-[10%] size-5 group active:scale-95 disabled:bg-none disabled:shadow-none bg-gradient-to-bl from-transparent to-black group rounded-xl shadow-xl p-4 lg:grid place-content-center active:shadow-none hover:scale-110 transition-all"
      >
        <span className="sr-only">previous</span>
        <IoChevronBack className="group-active:scale-90 text-background group-disabled:text-transparent" />
      </button>
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        onClick={(e) => e.stopPropagation()}
        className="w-full md:max-w-[75%] lg:max-w-[70%] mx-auto px-8 cursor-default"
      >
        <ul>
          <li className="h-[500px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <div
              ref={sliderRef}
              onScroll={(ev) => {
                setSliderPosition(ev.currentTarget.scrollLeft);
              }}
              className="snap-x snap-mandatory lg:w-full h-[540px] md:h-[440px] lg:h-[540px] pb-10 flex shrink-0 gap-x-5 overflow-x-auto"
            >
              {selected?.roomImages?.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${selected?.title} image`}
                  onClick={() => {
                    setClickedImg(true);
                    setClickedImg(image);
                  }}
                  className="snap-center snap-always rounded-xl object-cover bg-center aspect-[9/16] md:aspect-[16] md:w-[100vw]"
                  loading="lazy"
                />
              ))}
            </div>
          </li>
        </ul>
      </motion.div>
      <button
        disabled={
          scrolledToEndOfSlider ||
          currentSlide === selected?.roomImages?.length - 1
        }
        onClick={(e) => {
          e.stopPropagation();
          goToNextSlide();
        }}
        className="hidden lg:absolute top-1/2 -translate-y-1/2 right-[10%] size-5 active:scale-95 disabled:bg-none disabled:shadow-none group bg-gradient-to-br from-transparent to-black rounded-xl shadow-xl p-4 lg:grid place-content-center active:shadow-none hover:scale-110 transition-all"
      >
        <span className="sr-only">next</span>
        <IoChevronBack className="rotate-180 group-active:scale-90 text-background group-disabled:text-transparent" />
      </button>
    </motion.div>
  );
};

export default RoomsImagesCarouselModal;

const bgModalVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const modalVariants = {
  initial: {
    opacity: 0,
    y: "-20%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.2,
    },
  },
};
