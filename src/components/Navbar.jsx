import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ShiftingDropDown = () => {
  const { t } = useTranslation("translation");
  return (
    <>
      <div className="md:grid md:grid-cols-3 justify-center md:gap-0 max-h-fit w-full bg-neutral-950 p-6 text-neutral-200">
        <Link
          to="/home"
          className="flex justify-center md:justify-start md:w-fit"
        >
          <img
            src="https://yanisguesthouse.com/images/logo.png"
            alt="logo"
            className="w-28 h-14"
          />
        </Link>
        <div className="flex justify-between items-center md:justify-end lg:justify-between pl-1.5 md:pr-3 lg:pl-14 mt-4 md:mt-0 gap-3 md:gap-0 md:col-span-2">
          <Tabs />
          <div className="md:flex">
            <Link className="flex items-center gap-1 rounded-full w-fit h-8 px-3 py-1.5 text-sm capitalize transition-colors hover:bg-neutral-800 hover:text-neutral-100 text-neutral-400">
              {t("navContent.book")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex md:justify-center items-center h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Language = () => {
  const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "sp", lang: "Spanish" },
  ];
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [t] = useTranslation(["translation", "footer"]);

  return (
    <>
      <h3 className="mb-2 text-sm font-medium capitalize">
        {t("navContent.language")}
      </h3>
      <div className="flex justify-around">
        {languages.map((lng) => {
          return (
            <button
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className="text-sm text-neutral-400 my-3 hover:text-neutral-50 duration-200 relative after:absolute after:top-0.5 after:ml-[38px] after:bg-neutral-400 after:w-0.5 after:h-full after:rounded-md"
            >
              {lng.lang}
            </button>
          );
        })}
      </div>
    </>
  );
};

const Pages = () => {
  const { t } = useTranslation("translation");
  return (
    <>
      <h3 className="mb-2 text-sm font-medium capitalize">
        {t("navContent.navigate")}
      </h3>
      <div className="flex justify-around">
        <Link
          to="/"
          className="text-sm text-neutral-400 my-3 hover:text-neutral-50 duration-200 relative after:absolute after:top-0.5 after:ml-5 after:bg-neutral-400 after:w-0.5 after:h-full after:rounded-md"
        >
          {t("navContent.links.home")}
        </Link>
        <Link
          to="/"
          className="text-sm text-neutral-400 my-3 hover:text-neutral-50 duration-200 relative after:absolute after:top-0.5 after:ml-5 after:bg-neutral-400 after:w-0.5 after:h-full after:rounded-md"
        >
          {t("navContent.links.rooms")}
        </Link>
        <Link
          to="/"
          className="text-sm text-neutral-400 my-3 hover:text-neutral-50 duration-200 relative after:absolute after:top-0.5 after:ml-5 after:bg-neutral-400 after:w-0.5 after:h-full after:rounded-md"
        >
          {t("navContent.links.resto")}
        </Link>
        <Link
          to="/"
          className="text-sm text-neutral-400 my-3 hover:text-neutral-50 duration-200 relative after:absolute after:top-0.5 after:ml-5 after:bg-neutral-400 after:w-0.5 after:h-full after:rounded-md"
        >
          {t("navContent.links.gal")}
        </Link>
      </div>
    </>
  );
};

// const Pricing = () => {
//   return (
//     <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
//       <a
//         href="#"
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
//       >
//         <FiHome className="mb-2 text-xl text-indigo-300" />
//         <span className="text-xs">Startup</span>
//       </a>
//       <a
//         href="#"
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
//       >
//         <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
//         <span className="text-xs">Scaleup</span>
//       </a>
//       <a
//         href="#"
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
//       >
//         <FiPieChart className="mb-2 text-xl text-indigo-300" />
//         <span className="text-xs">Enterprise</span>
//       </a>
//     </div>
//   );
// };

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const TABS = [
  {
    title: "Language",
    Component: Language,
  },
  {
    title: "Pages",
    Component: Pages,
  },
  // {
  //   title: "Pricing",
  //   Component: Pricing,
  // },
  {
    title: "Blog",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
