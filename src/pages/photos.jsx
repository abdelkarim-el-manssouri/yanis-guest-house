/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./../css/photos.css";
import { PhotosImages } from "../data/data";

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
              <img
                src={el}
                className="duration-200 group-hover:rotate-3 group-hover:scale-[1.3]"
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
