import { useEffect, useRef, useState } from "react";
import { headerSlideImages } from "../data/data";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

const Header2 = () => {
  return <HeaderImageReveal />;
};

export default Header2;

const HeaderImageReveal = () => {
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImg === 2) {
        setCurrentImg(0);
      } else {
        setCurrentImg(currentImg + 1);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentImg]);

  let runInterval = useRef();
  const [scope, animate] = useAnimate();
  const runAnimation = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 5 });
    await animate(scope.current, { opacity: 0.5 }, { duration: 5 });
  };

  const startAnimation = () => {
    runInterval.current = setInterval(() => {
      runAnimation();
    }, 5000);
  };

  const controls = useAnimation();
  const textRef = useRef(null);
  const isInView = useInView(textRef, {});

  useEffect(() => {
    const show = () => {
      controls.start("visible");
      let timeOut = setTimeout(async () => {
        await controls.start("hidden");
        controls.start("visible");
      }, 10000);
      return () => clearTimeout(timeOut);
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    startAnimation();
    return () => runInterval.current && clearInterval(runInterval.current);
  }, [isInView]);

  const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

  return (
    <>
      <motion.div
        ref={scope}
        style={{
          backgroundImage: `url(${headerSlideImages[currentImg].picture})`,
        }}
        className="h-full bg-center bg-cover overflow-clip opacity-50 relative"
      />
      <div className="absolute inset-0 h-full w-full grid place-content-center">
        <motion.p className="text-white [text-shadow:_1px_2px_0_rgb(0_0_0_/_40%)] text-xl md:text-4xl lg:text-5xl w-[25ch] text-center font-bold">
          <motion.span
            ref={textRef}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {text1.split(" ").map((word, ind) => (
              <span key={ind} className="inline-block">
                {word.split("").map((char, index) => (
                  <motion.span
                    className="inline-block"
                    variants={textAnimations}
                    key={index}
                  >
                    {char}
                  </motion.span>
                ))}
                <span>&nbsp;</span>
              </span>
            ))}
          </motion.span>
        </motion.p>
      </div>
    </>
  );
};

const textAnimations = {
  hidden: { opacity: 0, x: 5 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.5 },
  },
};
