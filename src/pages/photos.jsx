/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./../css/photos.css";
import { PhotosImages } from "../data/data";
import { motion } from "framer-motion";
import GalleryModal from "../components/GalleryModal";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const imgTransition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

let dir = "/images/";
const Photos = () => {
  let [url_array, setUrlArray] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    PhotosImages?.map((el) =>
      el?.data?.map((src, i) => {
        setUrlArray((prev) => [
          ...prev,
          new URL(`${dir}gallery/${src}`, import.meta.url).href,
        ]);
      })
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [null]);

  return (
    <>
      <Helmet>
        <title>Yanis Guest House gallery page</title>
        <meta name="description" content="gallery page" />
        <link rel="canonical" href="https://yanisguesthouse.com/gallery" />
      </Helmet>
      <GalleryHeader />
      <div className="w-[95%] mx-auto py-12">
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
                  alt="gallery image"
                  layoutId={`image-${el}`}
                  src={el}
                  whileHover={{ scale: 1.1 }}
                  transition={imgTransition}
                  onClick={() => {
                    setSelected(el);
                  }}
                  className="cursor-zoom-in"
                />
              </div>
            );
          })}
        </div>
      </div>

      <GalleryModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Photos;

const GalleryHeader = () => {
  const { t } = useTranslation("footer");
  return (
    <div className="my-5 md:my-10 py-10 w-full grid place-content-center text-center bg-gradient-to-b from-black to-cozyGreen shadow-xl">
      <p className="uppercase text-2xl md:text-3xl !font-Italiana font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-background to-golden">
        {t("photo")}
      </p>
      <p className="text-xl md:text-2xl !font-PoiretOne capitalize font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-background to-golden">
        yanis guest house
      </p>
    </div>
  );
};
