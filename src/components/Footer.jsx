import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { footerLinks } from "../data/data";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation("footer");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gradient-to-b from-secondary/40 via-beige to-golden !font-PoiretOne font-bold overflow-x-hidden">
      <div className="h-fit bg-gradient-to-b from-black to-cozyGreen text-white p-4 md:p-6 flex justify-center items-center flex-wrap tracking-wide">
        <p className="w-full text-center">{t("location")}</p>
        <p className="w-full text-center">{t("contact")}</p>
      </div>
      <div className="my-10">
        <ul className="flex flex-wrap gap-x-10 gap-y-2 justify-center md:justify-center md:gap-x-14">
          {footerLinks.map((link) => {
            return (
              <li key={link.code}>
                <Link
                  to={link.link}
                  className="relative after:block after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition after:delay-75 after:ease-in after:rounded-full hover:after:scale-x-100 capitalize"
                >
                  {t(link.link)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid place-content-center h-full">
        <img
          src="/images/YanisGeustHouseLogo.webp"
          alt="yanis guest house logo"
          className="w-60 lg:w-80 aspect-video"
        />
      </div>
      <div className="flex justify-center flex-wrap h-fit">
        <p className="flex justify-center text-xl w-full mt-4 md:mt-0">
          {t("join")}
        </p>
        <div className="flex justify-center gap-7 md:gap-10 my-5 md:my-6">
          <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
            <a
              target="_blank"
              href="https://www.instagram.com/yanisguesthouse/?igshid=YmMyMTA2M2Y%3D"
            >
              <span className="sr-only">yanis guest house instagram</span>
              <FiInstagram className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
            </a>
          </span>
          <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61554812918518"
            >
              <span className="sr-only">yanis guest house facebook</span>
              <FiFacebook className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
            </a>
          </span>
          <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
            <a target="_blank" href="tel:0808651872">
              <span className="sr-only">yanis guest house phone</span>
              <FiPhone className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
            </a>
          </span>
          <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
            <a target="_blank" href="https://wa.me/+212632219063">
              <span className="sr-only">yanis guest house whatsapp</span>
              <FaWhatsapp className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
            </a>
          </span>
          <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
            <a target="_blank" href="mailto:contact@yanisguesthouse.com">
              <span className="sr-only">yanis guest house email</span>
              <FiMail className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
            </a>
          </span>
        </div>
      </div>
      <div className="h-full grid items-center">
        <div className="flex justify-center mx-8 py-4 text-center relative before:absolute before:top-0 before:h-[0.5px] before:w-full before:bg-primary before:rounded-full capitalize">
          &copy; {t("rights")} - {currentYear}
        </div>
      </div>
      <motion.div
        variants={scrollToTopButtonVariants}
        initial="initial"
        whileInView="animate"
      >
        <button
          onClick={scrollToTop}
          className="absolute right-10 bottom-10 z-20 bg-gradient-to-b from-black to-cozyGreen p-3 rounded-full hover:scale-105 active:scale-95 transition duration-300 shadow-lg"
        >
          <span className="sr-only">scroll to top</span>
          <FaArrowDownLong className="rotate-180 size-5 text-background" />
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;

const scrollToTopButtonVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
