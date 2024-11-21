/* eslint-disable react/prop-types */
import SmallParagraph from "../../UI/SmallParagraph";
import EmailForm from "../../components/EmailForm";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Book = () => {
  const { t } = useTranslation("book");
  return (
    <>
      <Helmet>
        <title>Yanis Guest House book room page</title>
        <meta name="description" content="book room page" />
        <link rel="canonical" href="/book" />
      </Helmet>
      <BookHeader t={t} />
      <SmallParagraph text={t("firstText")} />
      <EmailForm t={t} />
      <SmallParagraph text={t("location")} />
      <OurLocation />
    </>
  );
};

export default Book;

const BookHeader = ({ t }) => {
  return (
    <div className="relative h-screen bg-cozyGreen -mt-20 grid place-content-center bg-[url('/images/bookBkg.webp')] bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/30" />
      <div className="flex justify-center z-10 items-center h-full">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            stifness: 20,
            duration: 1,
            delay: 1.3,
          }}
          className="z-10 text-white font-bold !font-Italiana uppercase text-3xl md:text-4xl lg:text-5xl tracking-wide underline underline-offset-8 decoration-[3px] [text-shadow:_1px_1px_0_#00464326]"
        >
          {t("heroTitle")}
        </motion.p>
      </div>
    </div>
  );
};

const OurLocation = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d13583.900147907623!2d-8.052479!3d31.6619027!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xdafeb44ce0e5cab%3A0xb70c52b8525dc823!2syanis%20guest%20house%20DR%20SOUDANI%20540%20Rte%20de%20Targa%20Marrakech%2040000!3m2!1d31.6619027!2d-8.052479!5e0!3m2!1sen!2sma!4v1716160140738!5m2!1sen!2sma"
        height="400"
        loading="lazy"
        className="mx-auto w-[97%] mb-32 shadow-xl rounded-2xl"
      ></iframe>
    </>
  );
};
