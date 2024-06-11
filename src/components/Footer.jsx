import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { footerLinks } from "../data/data";
// import { AnimatedText } from "../UI/AnimatedText";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { t } = useTranslation("footer");
  return (
    <footer>
      <div className="bg-gradient-to-b from-secondary/40 via-beige to-golden !font-PoiretOne font-bold h-screen grid grid-rows-5 md:grid-rows-6">
        <section className="h-fit bg-gradient-to-b from-black to-cozyGreen text-white p-4 md:p-6 flex justify-center items-center flex-wrap tracking-wide">
          <p className="w-full text-center">{t("location")}</p>
          <p className="w-full text-center">{t("contact")}</p>
        </section>
        <section className="grid h-full items-center">
          <ul className="flex flex-wrap justify-evenly md:justify-center md:gap-x-20">
            {footerLinks.map((link) => {
              return (
                <Link
                  key={link.code}
                  to={link.link}
                  className="relative after:block after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition after:delay-75 after:ease-in after:rounded-full hover:after:scale-x-100"
                >
                  {t(link.link)}
                </Link>
              );
            })}
          </ul>
        </section>
        <section className="grid place-content-center h-full md:row-span-2">
          <img
            src="https://yanisguesthouse.com/images/logo.png"
            alt="yanis guest house logo"
            className="h-28 w-56 md:h-32 md:w-64 lg:h-40 lg:w-80"
            loading="lazy"
          />
        </section>
        <section className="flex justify-center flex-wrap h-fit">
          <p className="flex justify-center text-xl w-full mt-4 md:mt-0">
            {t("join")}
          </p>
          <div className="flex justify-center gap-7 md:gap-10 my-5 md:my-6">
            <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
              <a
                target="_blank"
                href="https://www.instagram.com/yanisguesthouse/?igshid=YmMyMTA2M2Y%3D"
              >
                <FiInstagram className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
              </a>
            </span>
            <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
              <FiFacebook className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
            </span>
            <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
              <a target="_blank" href="tel:0808651872">
                <FiPhone className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
              </a>
            </span>
            <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
              <a target="_blank" href="https://wa.me/+212632219063">
                <FaWhatsapp className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
              </a>
            </span>
            <span className="size-7 md:size-9 group rounded-xl shadow-xl p-2 md:p-4 grid place-content-center active:shadow-none hover:scale-110 transition-all">
              <a target="_blank" href="mailto:contact@yanisguesthouse.com">
                <FiMail className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90" />
              </a>
            </span>
          </div>
        </section>
        <section className="h-full grid items-center">
          <div className="flex justify-center mx-8 pt-4 text-center relative before:absolute before:top-0 before:h-[0.5px] before:w-full before:bg-primary before:rounded-full">
            &copy; {t("rights")} - {currentYear}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
