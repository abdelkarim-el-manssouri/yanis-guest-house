/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./../css/photos.css";
import { PhotosImages } from "../data/data";
import { motion } from "framer-motion";
import GalleryModal from "../components/GalleryModal";
import { useTranslation } from "react-i18next";

const imgTransition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

// import requireContext from 'require-context';
// const images = require('./../assets/header-images', true);
// const imageList = images.keys().map(image => images(image));
let dir = "./../assets/";
// let files = fs.readdirSync(dir)
const Photos = () => {
  let [url_array, setUrlArray] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    PhotosImages?.map((el) =>
      el?.data?.map((src, i) =>
        import(dir + el.folder + src).then((res) =>
          // <img key={i} src={res?.default} />
          setUrlArray((prev) => [...prev, res.default])
        )
      )
    );

    setUrlArray([...new Set(url_array)]);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [null]);

  return (
    <>
      <GalleryHeader />
      <div className="w-[95%] mx-auto py-12">
        {/* <img src={"/src/assets/header-images/backround1.png?t=1710498099294"} /> */}
        <div className="gallery">
          {[...new Set(url_array)]?.map((el, i) => {
            return (
              <div
                key={i}
                className={`element-item ${
                  Math.floor(Math.random() * 3 + 1) == 2 ? "tall" : ""
                } group overflow-hidden shadow-sm`}
              >
                <motion.img
                  layoutId={`image-${el}`}
                  src={el}
                  // className="hover:shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={imgTransition}
                  onClick={() => {
                    setSelected(el);
                  }}
                />
              </div>
            );
            // return <img key={i} src={el} style={{ gridColumnStart: `${x % 2 == 0 ? 'span 2 / span 2' : 'span 1 / span 1'}` }} className={`w-full h-52 ${i % 2 == 0 ? 'odd' : 'even'}`} />
          })}
        </div>
      </div>

      <GalleryModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Photos;

const GalleryHeader = () => {
  const { t } = useTranslation("gallery");
  return (
    <motion.div
      variants={galleryHeaderVariants}
      initial="initial"
      animate="animate"
      className="my-5 md:my-10 py-10 w-full grid place-content-center text-center bg-gradient-to-b from-black to-cozyGreen shadow-xl"
    >
      <p className="uppercase text-2xl md:text-3xl !font-Italiana font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-background to-golden">
        {t("photo")}
      </p>
      <p className="text-xl md:text-2xl !font-PoiretOne capitalize font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-background to-golden">
        yanis guest house
      </p>
    </motion.div>
  );
};

const galleryHeaderVariants = {
  initial: {
    y: "-70%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.5,
      delay: 1,
    },
  },
};
