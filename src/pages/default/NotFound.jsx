import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const COLORS_TOP = [
  "#073135",
  "#1E67C6",
  "#CE84CF",
  "#DD335C",
  "#f3f0e9",
  "#cfb36c",
];

const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const { t } = useTranslation("footer");

  return (
    <>
      <Helmet>
        <title>not found page</title>
        <meta name="description" content="not found page" />
        <link rel="canonical" href="https://yanisguesthouse.com/*" />
      </Helmet>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col items-center !font-Italiana">
          <h1 className="max-w-3xl capitalize bg-gradient-to-br from-background to-cozyGreen bg-clip-text text-transparent text-center text-[8em] lg:-mt-20 font-medium leading-tight sm:text-5xl sm:leading-tight md:text-[14em] md:leading-tight">
            <span className="font-Arapey">404</span>
            <br />
            <p className="text-4xl md:text-5xl md:-mt-4 mb-20 font-black">
              {t("notFound")}
            </p>
          </h1>
          <Link to="/">
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 !font-PoiretOne font-bold rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              {t("back")}
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12 mt-0.5" />
            </motion.button>
          </Link>
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};

export default AuroraHero;
