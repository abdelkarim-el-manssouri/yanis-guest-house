// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

const AnimatedButton = (props) => {
  // const text = props.text;
  return <div>{/* <SpotlightButton text={text} /> */}</div>;
};

// const SpotlightButton = ({ text }) => {
//   const btnRef = useRef(null);
//   const spanRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { width } = e.target.getBoundingClientRect();
//       const offset = e.offsetX;
//       const left = `${(offset / width) * 100}%`;

//       spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
//     };

//     const handleMouseLeave = () => {
//       spanRef.current.animate(
//         { left: "50%" },
//         { duration: 100, fill: "forwards" }
//       );
//     };

//     btnRef.current.addEventListener("mousemove", handleMouseMove);
//     btnRef.current.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       btnRef.current.removeEventListener("mousemove", handleMouseMove);
//       btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <motion.button
//       whileTap={{ scale: 0.985 }}
//       ref={btnRef}
//       className="relative w-fit max-w-xs overflow-hidden rounded-full bg-black px-4 py-1 text-sm font-light text-white"
//       // className="flex items-center gap-1 rounded-full w-fit h-8 px-3 py-1.5 text-sm capitalize transition-colors hover:bg-neutral-800 hover:text-neutral-100 text-neutral-400"
//     >
//       <span className="pointer-events-none relative z-10 mix-blend-difference">
//         {text}
//       </span>
//       <span
//         ref={spanRef}
//         className="pointer-events-none absolute left-[50%] top-[50%] h-10 w-10 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
//       />
//     </motion.button>
//   );
// };

export default AnimatedButton;
