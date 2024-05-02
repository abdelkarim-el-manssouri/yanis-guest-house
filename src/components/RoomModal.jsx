import { AnimatePresence, motion } from "framer-motion";
import { IoBedOutline, IoRestaurantOutline } from "react-icons/io5";
import { GiBathtub, GiRotaryPhone, GiWindow } from "react-icons/gi";
import {
  TbAirConditioning,
  TbMassage,
  TbParking,
  TbRulerMeasure,
  TbWashDryDip,
} from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiSafe2Fill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { LiaDumbbellSolid, LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdOutlineRoomService } from "react-icons/md";

const hairDryerSvg = (
  <svg
    fill="#000000"
    height="26px"
    width="26px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 392.591 392.591"
  >
    <g>
      <g>
        <path
          d="M283.475,43.295c-36.137,0-65.551,29.285-65.551,65.293c0,36.008,29.414,65.293,65.551,65.293
			s65.552-29.285,65.552-65.293C349.091,72.58,319.677,43.295,283.475,43.295z M283.475,152.03
			c-24.113,0-43.766-19.459-43.766-43.442c0-23.984,19.653-43.442,43.766-43.442s43.766,19.459,43.766,43.442
			S307.653,152.03,283.475,152.03z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M391.887,96.305c-5.624-50.747-46.804-91.087-98.069-95.806c-20.105-1.875-39.822,1.681-57.729,10.279
			c-32.517,15.709-69.172,26.505-111.968,32.905l-47.127,7.111L14.998,25.776C3.232,22.608,0,32.24,0,35.925V181.25
			c1.358,13.059,13.705,10.667,14.998,10.15l61.867-25.018l54.885,8.275c36.267,5.495,68.848,15.063,97.228,28.38l-40.404,176.162
			c-0.776,3.232-0.129,13.382,10.667,13.382h73.438c5.107,0,9.503-3.491,10.667-8.469l39.951-174.481
			c15.838-6.206,30.19-15.903,41.697-28.832C385.81,157.525,395.378,127.529,391.887,96.305z M64.84,147.699l-42.99,17.39V52.022
			l42.99,17.39V147.699z M263.952,370.794h-51.006l36.461-159.095c15.903,5.236,33.228,6.723,49.972,4.331L263.952,370.794z
			 M348.703,166.252c-34.457,39.564-92.057,26.052-104.21,19.911c-31.677-15.838-68.461-26.958-109.446-33.164l-48.42-7.37V71.416
			l40.792-6.206c44.994-6.788,83.588-18.166,118.174-34.844c14.287-6.852,30.125-9.762,46.287-8.275
			c40.986,3.814,73.891,35.943,78.352,76.477C372.945,123.65,365.123,147.376,348.703,166.252z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M192.259,220.555c-5.883-1.487-11.766,2.133-13.123,8.016l-12.541,51.265c-1.422,5.883,2.133,11.895,8.016,13.123
			c5.818,1.228,11.96-3.038,13.123-8.016l12.541-51.2C201.632,227.925,198.077,221.978,192.259,220.555z"
        />
      </g>
    </g>
  </svg>
);

const modalVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.6, 0.01, 0.05, 0.9],
      },
    },
  },
};

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

const RoomModal = ({ selected, images, roomID, setSelected }) => {
  let singleImage = {};
  if (roomID != 0) {
    singleImage = images?.filter((image) => image?.id == roomID)[0]

  }
  console.log('roomID ', singleImage);
  if (!selected) return;
  return (
    // <AnimatePresence>
    <motion.div
      variants={bgModalVariants}
      initial="initial"
      animate="animate"
      // exit="exit"
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-background z-[700] cursor-pointer pr-10 w-[calc(100%+2.5rem)] overflow-y-scroll"
    >
      <motion.div
        key="modal"
        variants={modalVariants}
        initial="initial"
        animate="animate"
        // exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xs md:max-w-2xl lg:max-w-[950px] mx-auto my-8 py-3 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 cursor-default bg-lightGreen hover:bg-secondary/20 transition-colors duration-500 rounded-xl shadow-2xl"
      >
        <div className="flex justify-end mr-1">
          <button onClick={() => setSelected(!selected)} className="p-4">
            <span className="fixed bg-bordeaux h-px w-5 rotate-45" />
            <span className="fixed bg-bordeaux h-px w-5 -rotate-45" />
          </button>
        </div>

        <div className="w-4/5 mx-auto">
          <h3 className="relative text-center font-lora italic capitalize text-xl md:text-3xl lg:text-4xl font-bold text-bordeaux before:absolute before:left-0 before:-bottom-2 md:before:-bottom-5 before:w-full before:h-0.5 before:bg-bordeaux before:rounded-full">
            {singleImage?.title}
          </h3>

          <p className="mt-6 md:mt-11 lg:mt-14 text-justify">
            2 suites and modern living room on the ground floor of the city with
            a total area of 60 M². Elegant and modern suite with a traditional
            touch and nicely decorated. They are very welcoming, create a
            feeling of comfort, perfect for those special moments and for a
            relaxing stay.
          </p>

          <div className="mt-12 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-3 text-sm lg:text-base capitalize">
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <IoBedOutline className="size-6 lg:size-8" />
              <div>{singleImage?.bed}</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <HiOutlineUsers className="size-6 lg:size-8" />
              <div>{singleImage?.persones}</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <TbRulerMeasure className="size-6 lg:size-8" />
              <div>
                {singleImage?.surface} m<sup>2</sup>
              </div>
            </div>

            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <GiWindow className="size-6 lg:size-8" />
              <div>{singleImage?.view}</div>
            </div>
          </div>

          <h4 className="my-10 capitalize text-xl md:text-2xl lg:text-3xl font-semibold w-fit underline underline-offset-[6px]">
            Room amenities
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-3 md:gap-y-6 lg:gap-y-3 text-sm lg:text-base mt-8 md:mt-10 capitalize">
            <div className="flex flex-col items-center lg:p-5 gap-y-1 shadow-lg md:shadow-md md:gap-y-2 p-1 rounded-lg">
              <GiBathtub className="size-6 lg:size-8" />
              <div>shower</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <RiSafe2Fill className="size-6 lg:size-8" />
              <div>safe</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <FaWifi className="size-6 lg:size-8" />
              <div>wifi</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <TbAirConditioning className="size-6 lg:size-8" />
              <div>air conditioner</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <GiRotaryPhone className="size-6 lg:size-8" />
              <div>phone</div>
            </div>
            <div className="flex flex-col items-center uppercase lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <PiTelevisionSimple className="size-6 lg:size-8" />
              <div>tv</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <TbWashDryDip className="size-6 lg:size-8" />
              <div>heater</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <span className="size-6 lg:size-8">{hairDryerSvg}</span>
              <div>hair dryer</div>
            </div>
          </div>

          <h4 className="my-10 capitalize text-xl md:text-2xl lg:text-3xl font-semibold w-fit underline underline-offset-[6px]">
            hotel amenities
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-3 md:gap-y-6 lg:gap-y-3 text-sm lg:text-base mt-8 md:mt-10 capitalize">
            <div className="flex flex-col items-center uppercase lg:p-5 gap-y-1 shadow-lg md:shadow-md md:gap-y-2 p-1 rounded-lg">
              <LiaDumbbellSolid className="size-6 lg:size-8" />
              <div>gym</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <TbParking className="size-6 lg:size-8" />
              <div>parking</div>
            </div>
            <div className="flex flex-col items-center uppercase lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <TbMassage className="size-6 lg:size-8" />
              <div>spa</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <IoRestaurantOutline className="size-6 lg:size-8" />
              <div>restaurant</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <MdOutlineRoomService className="size-6 lg:size-8" />
              <div>room service</div>
            </div>
            <div className="flex flex-col items-center lg:p-5 gap-y-1 md:gap-y-2 p-1 shadow-lg md:shadow-md rounded-lg">
              <LiaSwimmingPoolSolid className="size-6 lg:size-8" />
              <div>swimming pool</div>
            </div>
          </div>
          <div className="h-0.5 w-3/4 mx-auto bg-bordeaux rounded-full my-10 md:my-16" />

          <div className="my-10">
            <ul>
              <li>
                {singleImage?.url?.map((image, i) => (
                  // console.log(image)
                  <img
                    key={i}
                    src={image}
                    alt={`${singleImage?.title} image`}
                  />

                ))}
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
    // </AnimatePresence>
  );
};

export default RoomModal;

// import { imgs } from "../data/data";

// const RoomImages = () => {
//   return (
//     <>
//       <ul>
//         {imgs.map((roomImg) => {
//           return <li key={roomImg.id}>{roomImg.url}</li>;
//         })}
//       </ul>
//     </>
//   );
// };
