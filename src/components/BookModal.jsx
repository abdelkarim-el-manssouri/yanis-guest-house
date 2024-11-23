/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BookModal = ({ selected, setSelected, t }) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", selected);
  }, [selected]);
  if (!selected) return;
  return (
    <motion.div
      variants={bgModalVariants}
      initial="initial"
      animate="animate"
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-background h-screen z-[1000] cursor-pointer w-full md:mx-auto flex items-center"
    >
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        className="flex items-center justify-center w-full h-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="h-[80%] lg:h-[65%] w-full max-w-xs md:max-w-2xl lg:max-w-[950px] mx-auto py-3 md:py-4 px-4 md:px-6 lg:px-8 cursor-default bg-lightGreen hover:bg-secondary/20 hover:shadow-xl transition duration-500 rounded-xl shadow-2xl"
        >
          <div className="px-4 pt-14 md:py-0 md:ml-10 h-full flex-row md:flex justify-between items-center relative">
            <div className="grid place-content-center absolute top-0 -right-1 md:top-0 md:-right-3 size-8 md:size-10 bg-secondary/10 rounded-full">
              <button onClick={() => setSelected(!selected)}>
                <span className="bg-bordeaux h-px w-1/2 rounded rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                <span className="bg-bordeaux h-px w-1/2 rounded -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>

            <div>
              <p className="!font-Italiana uppercase font-bold text-xl lg:text-2xl">
                {t("your")} :
              </p>
              <ul className="ml-10 mt-4">
                <li
                  onClick={() => setSelected(!selected)}
                  className="relative w-fit my-3 lg:my-5 first:mt-0 last:mb-0 capitalize !font-PoiretOne font-bold text-lg lg:text-xl text-black/70 hover:text-black transition-colors duration-500 before:absolute h-full before:h-4/5 before:mt-[1%] md:before:mt-[0.5%] before:w-0.5 before:rounded-full before:-left-3 before:top-0 before:bg-golden hover:after:absolute hover:after:-bottom-1 after:duration-300 after:bg-black after:left-0 after:-bottom-4 after:h-0.5 after:w-full"
                >
                  <a
                    href="https://yanis-guest-house.amenitiz.io/fr/bookingroom"
                    target="_blank"
                  >
                    {t("stay")}
                  </a>
                </li>
                <li
                  onClick={() => setSelected(!selected)}
                  className="relative w-fit my-3 lg:my-5 first:mt-0 last:mb-0 capitalize !font-PoiretOne font-bold text-lg lg:text-xl text-black/70 hover:text-black transition-colors duration-500 before:absolute h-full before:h-4/5 before:mt-[1%] md:before:mt-[0.5%] before:w-0.5 before:rounded-full before:-left-3 before:top-0 before:bg-golden hover:after:absolute hover:after:-bottom-1 after:duration-300 after:bg-black after:left-0 after:-bottom-4 after:h-0.5 after:w-full"
                >
                  <Link to="/selfCareForm">{t("massage")}</Link>
                </li>
              </ul>
            </div>

            <div className="flex justify-center md:self-end mt-20 md:mt-0">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-28 h-14 md:w-32 md:h-16 lg:w-36 lg:h-20"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookModal;

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
  },
};
