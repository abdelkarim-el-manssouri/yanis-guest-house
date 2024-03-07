import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  // const parallax_el = document.querySelector(".parallax");
  // let xValue = 0,
  //   yValue = 0;
  // window.addEventListener("mousemove", (e) => {
  //   xValue = e.clientX - window.innerWidth / 2;
  //   yValue = e.clientY - window.innerHeight / 2;

  //   parallax_el.forEach((el) => {
  //     let speedx = el.dataset.speedx;
  //     let speedy = el.dataset.speedy;
  //     el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  //   });

  // const [xValue, setXValue] = useState(0);
  // const [yValue, setYValue] = useState(0);

  // const handleMouseMove = (e) => {
  //   setXValue(e.clientX - window.innerWidth / 2);
  //   setYValue(e.clientY - window.innerHeight / 2);
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // const [xValue, setXValue] = useState(0);
  // const [yValue, setYValue] = useState(0);
  // const [rotateDegree, setRotateDegree] = useState(0);
  // const [zValue, setZValue] = useState(0);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0.2, 1], ["0%", "100%"]);
  const palm = useTransform(scrollYProgress, [0.1, 1], ["0%", "100%"]);
  const s9aya = useTransform(scrollYProgress, [0.25, 1], ["0%", "100%"]);
  const wall = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0.2, 1], ["0%", "200%"]);
  const fontain = useTransform(scrollYProgress, [0.2, 1], ["0%", "85%"]);
  const silhouette = useTransform(scrollYProgress, [0.2, 1], ["0%", "100%"]);
  const kotoubia = useTransform(scrollYProgress, [0.2, 1], ["0%", "85%"]);
  const menara = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  // const update = () => {
  //   const parallaxElements = document.querySelectorAll(".parallax");
  //   parallaxElements.forEach((el) => {
  //     const speedx = parseFloat(el.getAttribute("data-speedx"));
  //     const speedy = parseFloat(el.getAttribute("data-speedy"));
  //     // const rotateSpeed = el.dataset.rotation;
  //     // const speedx = el.dataset.speedx;
  //     // const speedy = el.dataset.speedy;
  //     // const speedz = el.dataset.speedz;

  //     // let isInLeft =
  //     //   parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

  //     // let zValue =
  //     //   (el.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
  //     // perspective(2300px) translateZ(${zValue * speedz}px)

  //     // rotateY(${rotateDegree * rotateSpeed}deg)

  //     el.style.transform = `
  //   translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${
  //       yValue * speedy
  //     }px)) `;
  //   });

  //   // const timeline = gsap.timeline();

  //   // parallaxElements.forEach((el) => {
  //   //   timeline.from(el, {
  //   //     top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
  //   //     duration: 3.5,
  //   //   });
  //   // });
  // };

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const newXValue = e.clientX - window.innerWidth / 2;
  //     const newYValue = e.clientY - window.innerHeight / 2;
  //     // const newRotateDegree =
  //     //   (xValue / (e.clientX - window.innerWidth / 2)) * 20;
  //     // const newZValue =
  //     //   (e.clientX - parseFloat(getComputedStyle(e).left)) * isInLeft * 0.1;

  //     setXValue(newXValue);
  //     setYValue(newYValue);
  //     // setRotateDegree(newRotateDegree);
  //     // setZValue(newZValue);
  //   };
  //   update();

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <main
      ref={ref}
      className="h-screen w-full overflow-hidden relative pointer-events-none"
    >
      <motion.img
        style={{ y: backgroundY }}
        // data-speedx="0.02"
        // data-speedy="0.25"
        // data-distance="-200"
        // data-speedz="0"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax bg-img absolute h-[110%] w-full md:-top-14 lg:-top-20 left-0 z-[1] bg-cover pointer-events-none"
        src="src/assets/header-images/backround1.png"
        alt="bg"
        loading="lazy"
      />
      <motion.img
        style={{ y: s9aya }}
        // data-speedx="0.03"
        // data-speedy="0.1"
        // data-distance="700"
        // data-speedz="0.2"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute w-[120px] md:w-[150px] lg:w-[17.58%] top-72 md:top-60 lg:top-80 left-0 z-[2] pointer-events-none"
        src="src/assets/header-images/s9aya2.png"
        alt="fontain"
        loading="lazy"
      />
      <motion.img
        style={{ y: palm }}
        // data-speedx="0.03"
        // data-speedy="0.1"
        // data-distance="700"
        // data-speedz="0.2"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute w-[150px] md:w-[180px] lg:w-[200px] h-[350px] md:h-[400px] lg:h-[550px] top-36 md:top-20 lg:top-20 -left-10 md:left-0 z-[8] pointer-events-none"
        src="src/assets/header-images/dark-palm-ltr.png"
        alt="palm"
        loading="lazy"
      />
      <motion.img
        style={{ y: wall }}
        // data-speedx="0.03"
        // data-speedy="0.3"
        // data-distance="850"
        // data-speedz="0"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute w-[190px] lg:w-[300px] top-80 md:top-72 lg:top-96 z-[3] right-0 pointer-events-none"
        src="src/assets/header-images/islamic_wall3.png"
        alt="wall"
        loading="lazy"
      />
      <motion.div
        style={{ y: textY }}
        // data-speedx="0.02"
        // data-speedy="0.032"
        // data-distance="900"
        // data-speedz="0.4"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute z-[7] left-0 top-24 md:top-24 lg:top-28 text-center text-white uppercase w-full pointer-events-none"
      >
        <h1 className="font-thin text-5xl md:text-6xl lg:text-8xl leading-10 [text-shadow:_1px_2px_0_rgb(0_0_0_/_40%)] pointer-events-auto selection:bg-bordeaux selection:text-beige">
          yanis
        </h1>
        <h2 className="font-bold text-5xl md:text-6xl lg:text-8xl leading-tight [text-shadow:_1px_2px_0_rgb(0_0_0_/_40%)] pointer-events-auto selection:bg-bordeaux selection:text-beige">
          guest house
        </h2>
      </motion.div>
      <motion.img
        style={{ y: fontain }}
        // data-speedx="0.08"
        // data-speedy="0.1"
        // data-distance="1100"
        // data-speedz="0"
        // data-rotation="0.3"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }
        className="parallax absolute w-[130px] md:w-[150px] lg:w-[180px] top-40 md:top-24 lg:top-32 right-20 md:right-32 lg:right-64 z-[5] pointer-events-none"
        src="src/assets/header-images/fontain4.png"
        alt="fontain"
        loading="lazy"
      />
      <motion.img
        style={{ y: palm }}
        // data-speedx="0.09"
        // data-speedy="0.25"
        // data-distance="1200"
        // data-speedz="0.2"
        // data-rotation="0.5"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute w-[150px] md:w-[180px] lg:w-[200px] h-[350px] md:h-[400px] lg:h-[550px] top-36 md:top-20 -right-10 md:right-0 z-[8] pointer-events-none"
        src="src/assets/header-images/dark-palm5.png"
        alt="palm"
        loading="lazy"
      />
      <motion.img
        style={{ y: silhouette }}
        // data-speedx="0.07"
        // data-speedy="0.07"
        // data-distance="1400"
        // data-speedz="0"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute w-[250px] md:w-[250px] lg:w-[350px] top-32 md:top-10 lg:top-5 -right-16 md:right-0 z-[6] pointer-events-none"
        src="src/assets/header-images/silhouette-of-palm-rtl6.png"
        alt="silhouette-of-palm"
        loading="lazy"
      />
      <motion.img
        style={{ y: silhouette }}
        // data-speedx="0.07"
        // data-speedy="0.07"
        // data-distance="1500"
        // data-speedz="0"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute w-[250px] lg:w-[350px] top-32 md:top-5 lg:top-5 -left-16 md:left-0 z-[7] pointer-events-none"
        src="src/assets/header-images/silhouette-of-palm-ltr7.png"
        alt="silhouette-of-palm"
        loading="lazy"
      />
      <motion.img
        style={{ y: kotoubia }}
        // data-speedx="0.08"
        // data-speedy="0.1"
        // data-distance="1600"
        // data-speedz="0"
        // data-rotation="0.4"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute w-[230px] md:w-[280px] lg:w-[350px] top-36 md:top-14 lg:top-16 left-10 md:left-24 lg:left-40 z-[3] lg:z-[6] pointer-events-none"
        src="src/assets/header-images/kotoubia8.png"
        alt="kotoubia"
        loading="lazy"
      />
      <motion.img
        style={{ y: menara }}
        // data-speedx="0"
        // data-speedy="0.09"
        // data-distance="0"
        // data-speedz="0"
        // data-rotation="0"
        // style={{
        //   transform: `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`,
        // }}
        className="parallax absolute top-[70%] md:top-60 lg:top-[35%] left-0 z-[8] pointer-events-none"
        src="src/assets/header-images/menara9.png"
        alt="menara"
        loading="lazy"
      />
    </main>
  );
};

export default Header;
