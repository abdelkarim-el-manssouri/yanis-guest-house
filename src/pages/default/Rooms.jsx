import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import "../../css/rooms.css";
import { imgs } from "../../data/data";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "../../UI/Button";

const Rooms = () => {
  return (
    <>
      <RevealText />
      <ImageRoom />
    </>
  );
};

export default Rooms;

const RevealText = () => {
  return (
    <section className="mt-[-100vh] h-[400vh] [view-timeline-name:--reveal-wrapper] bg-background relative z-10">
      <div className="min-h-screen sticky top-0 flex justify-center items-center w-3/4 mx-auto text-justify">
        <div>
          <p className="text-3xl supports-[animation-timeline]:reveal-text text-black">
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
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const postersScale = useTransform(scrollYProgress, [0.6, 0.66], [0.5, 1]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.section
      animate={carouselVariant}
      ref={carouselWrapperRef}
      className="h-[250vh] mt-[-100vh] bg-cozyGreen"
    >
      <div className="sticky top-0 h-screen flex justify-center items-center gap-5 overflow-clip">
        {/* <div className="shrink-0 aspect-[9/16] md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip">
          <img
            className="w-full h-full object-cover"
            src={imgs[0].url}
            alt={imgs[0].title}
          />
        </div>*/}
        {/* <motion.div
          style={{ opacity: postersOpacity, scale: postersScale }}
          className="shrink-0 aspect-[9/16] md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip"
        >
          <img
            className="w-full h-full object-cover"
            src={imgs[1].url}
            alt={imgs[1].title}
          />
        </motion.div> */}

        {imgs.map((image) => {
          return (
            <motion.div
              key={image.id}
              style={{ scale }}
              className="shrink-0 aspect-[9/16] md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative"
            >
              <img
                className="w-full h-full object-cover"
                src={image.url}
                alt={image.title}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute left-0 bottom-0 px-4 md:px-6 lg:px-8 py-8 md:py-8 lg:py-12 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-white lg:text-lg w-full bg-gradient-to-t from-black/90 to-black/0"
              >
                <p>Lorem ipsum dolor sit.</p>
                <div className="">
                  <Button content="show more" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* <motion.div
          style={{ opacity: postersOpacity, scale: postersScale }}
          className="shrink-0 aspect-[9/16] md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip"
        >
          <img
            className="w-full h-full object-cover"
            src={imgs[3].url}
            alt={imgs[3].title}
          />
        </motion.div>
        <div className="shrink-0 aspect-[9/16] md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip">
          <img
            className="w-full h-full object-cover"
            src={imgs[4].url}
            alt={imgs[4].title}
          />
        </div> */}
      </div>
    </motion.section>
  );
};
