import { useRef } from "react";
import SmallParagraph from "../../UI/SmallParagraph";
import EmailForm from "../../components/EmailForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { t } = useTranslation("book");
  return (
    <>
      <BookHeader t={t} />
      <SmallParagraph text={t("firstText")} />
      <EmailForm t={t} />
      <SmallParagraph text={t("location")} />
      <OurLocation t={t} />
    </>
  );
};

export default Book;

const BookHeader = ({ t }) => {
  const firstTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: firstTextRef,
    offset: ["center center", "start start"],
  });
  const y = useTransform(scrollYProgress, [0.1, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  return (
    <div className="relative h-screen bg-cozyGreen -mt-20 grid place-content-center bg-[url('/src/assets/accommodations-photos/room2.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/30" />
      <div className="flex flex-col justify-center z-10 items-center h-full gap-y-16">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            stifness: 50,
            duration: 1,
            delay: 1.3,
          }}
          ref={firstTextRef}
          style={{ y, opacity }}
          src="https://yanisguesthouse.com/images/logo.png"
          alt="logo"
          className="w-44 h-20 md:w-52 lg:w-60 md:h-24 lg:h-32"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            stifness: 20,
            duration: 1,
            delay: 1.3,
          }}
          className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-Groillim  tracking-wider capitalize underline underline-offset-8 decoration-2 [text-shadow:_1px_1px_0_#00464326]"
        >
          {t("heroTitle")}
        </motion.p>
      </div>
    </div>
  );
};

const OurLocation = ({ t }) => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d13583.900147907623!2d-8.052479!3d31.6619027!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xdafeb44ce0e5cab%3A0xb70c52b8525dc823!2syanis%20guest%20house%20DR%20SOUDANI%20540%20Rte%20de%20Targa%20Marrakech%2040000!3m2!1d31.6619027!2d-8.052479!5e0!3m2!1sen!2sma!4v1716160140738!5m2!1sen!2sma"
        height="400"
        loading="lazy"
        className="mx-auto w-full mb-32 shadow-xl rounded-2xl"
      ></iframe>
    </>
  );
};
