/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./../css/photos.css";
import { PhotosImages } from "../data/data";
import { motion } from "framer-motion";

const imgTransition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

// import requireContext from 'require-context';
// const images = require('./../assets/header-images', true);
// const imageList = images.keys().map(image => images(image));
let dir = "./../assets/";
// let files = fs.readdirSync(dir)
const Photos = () => {
  let [url_array, setUrlArray] = useState([]);

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
    <div className="container mx-auto py-12">
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
                src={el}
                // className="hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                transition={imgTransition}
              />
            </div>
          );
          // return <img key={i} src={el} style={{ gridColumnStart: `${x % 2 == 0 ? 'span 2 / span 2' : 'span 1 / span 1'}` }} className={`w-full h-52 ${i % 2 == 0 ? 'odd' : 'even'}`} />
        })}
      </div>
    </div>
  );
};

export default Photos;
