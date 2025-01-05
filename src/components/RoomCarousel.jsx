import { Link } from "react-router-dom";
import Button from "../UI/Button";
import RoomModal from "./RoomModal";
import { motion, useTransform } from "framer-motion";
import { useState } from "react";
import { rooms } from "../data/data";

const ImageRoom = ({ scrollYProgress, t }) => {
  const [selected, setSelected] = useState(false);
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [-0.4, 0.6], [0, 1]);
  return (
    <>
      <motion.section
        style={{ scale, opacity }}
        className="h-[160vh] mt-[-100vh] bg-gradient-to-b from-transparent via-golden to-transparent relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-[calc(100vh+2.5rem)] pb-10 flex items-center gap-5 overflow-x-auto snap-x snap-mandatory px-5">
            {rooms.map((image) => (
              <div
                key={image.id}
                className="shrink-0 aspect-[7/16] shadow-2xl md:aspect-video w-[65vw] md:w-[60vw] rounded-2xl overflow-clip relative snap-center snap-always"
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
    </>
  );
};

export default ImageRoom;
