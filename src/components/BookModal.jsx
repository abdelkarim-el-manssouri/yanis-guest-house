import { motion } from "framer-motion";
import { forms } from "../data/data";
import { Link } from "react-router-dom";

const BookModal = ({ selected, setSelected, t }) => {
  if (!selected) return;
  return (
    <motion.div
      variants={bgModalVariants}
      initial="initial"
      animate="animate"
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-background z-[700] cursor-pointer pr-10 w-[calc(100%+2.5rem)]"
    >
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[85%] max-w-xs md:max-w-2xl lg:max-w-[950px] mx-auto mt-8 mb-20 py-3 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 cursor-default bg-lightGreen hover:bg-secondary/20 transition-colors duration-500 rounded-xl shadow-2xl"
      >
        <div className="grid place-content-center fixed top-2 right-2 size-10">
          <button onClick={() => setSelected(!selected)} className="">
            <span className="bg-bordeaux h-px w-1/2 rounded rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
            <span className="bg-bordeaux h-px w-1/2 rounded -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </button>
        </div>

        <div className="mx-auto w-4/5 py-10 mt-5">
          <p className="!font-Italiana uppercase font-bold text-xl">
            {t("your")} :
          </p>
          <ul className="ml-5 mt-6">
            {forms.map((form) => (
              <li
                key={form.id}
                className="relative my-3 capitalize !font-PoiretOne font-bold text-lg before:absolute before:h-4/5 before:mt-[1%] before:w-0.5 before:rounded-full before:-left-3 before:top-0 before:bg-golden"
              >
                <Link to={`/${form.link}`}>{t(form.name)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src="https://yanisguesthouse.com/images/logo.png"
            alt="logo"
            className="w-28 h-14"
          />
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
