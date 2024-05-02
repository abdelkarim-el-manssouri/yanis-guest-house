import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import "../../css/rooms.css";
import { rooms, imgs } from "../../data/data";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi";
import RoomModal from "../../components/RoomModal";

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
      <div className="min-h-screen sticky top-0 flex justify-center items-center w-3/4 mx-auto md:text-justify">
        <div>
          <p className="text-3xl supports-[animation-timeline]:reveal-text text-black [text-shadow:_0.5px_0.5px_0_#00464326]">
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
  const [roomID, setRoomID] = useState(0);
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef(null);
  const [carouselVariant, setCarouselVariant] = useState("inactive");
  const { scrollYProgress } = useScroll({
    target: { carouselWrapperRef },
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    // const xScale = 1.66667;
    const xScale = 2;
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
    <>
      <motion.section
        animate={carouselVariant}
        ref={carouselWrapperRef}
        className="h-[250vh] mt-[-100vh] bg-cozyGreen relative"
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
                  src={image.url[0]}
                  alt={image.title}
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
                      setRoomID(image.id);
                      console.log(image.id);
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

        <div className="hidden md:block">
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
        </div>

        <RoomModal selected={selected} images={rooms} roomID={roomID} setSelected={setSelected} />
      </motion.section>
    </>
  );
};
