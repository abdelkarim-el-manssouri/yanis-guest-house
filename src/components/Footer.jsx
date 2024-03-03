import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
// import { AnimatedText } from "../UI/AnimatedText";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { code: "ho", link: "home" },
    { code: "ro", link: "rooms" },
    { code: "re", link: "restoration" },
    { code: "gal", link: "galery" },
  ];
  const { t } = useTranslation("translation");
  return (
    <>
      <div className="bg-beige h-screen grid grid-rows-5 md:grid-rows-6">
        <section className="h-fit bg-yellow-700 text-white p-4 md:p-6 flex justify-center items-center flex-wrap tracking-widest">
          <p className="w-full text-center">{t("footer.location")}</p>
          <p className="w-full text-center">{t("footer.contact")}</p>
        </section>
        <section className="grid h-full items-center">
          <ul className="flex flex-wrap justify-evenly md:justify-center md:gap-x-20">
            {links.map((link) => {
              return (
                <Link
                  key={link.code}
                  to={link.link}
                  className="relative after:block after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition after:delay-75 after:ease-in after:origin-left after:rounded-full hover:after:scale-x-100"
                >
                  {link.link}
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
        {/* <section className="uppercase my-4">
          <AnimatedText text="your marrakesh house" />
        </section> */}
        <section className="flex justify-center flex-wrap h-fit">
          <p className="flex justify-center text-xl w-full mt-4 md:mt-0">
            {t("footer.join")}
          </p>
          <div className="flex justify-center gap-6 my-5 md:my-6">
            <span className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10  rounded-full hover:shadow-xl hover:shadow-gray-500 transition delay-[50] ease-in">
              <a href="https://www.instagram.com/yanisguesthouse/?igshid=YmMyMTA2M2Y%3D">
                <FiInstagram className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            </span>
            <span className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full hover:shadow-xl hover:shadow-gray-500 transition delay-[50] ease-in">
              <FiFacebook className="w-4 h-4 md:w-6 md:h-6" />
            </span>
            <span className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full hover:shadow-xl hover:shadow-gray-500 transition delay-[50] ease-in">
              <a href="tel:0808651872">
                <FiPhone className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            </span>
            <span className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full hover:shadow-xl hover:shadow-gray-500 transition delay-[50] ease-in">
              <a href="https://wa.me/+212632219063">
                <FaWhatsapp className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            </span>
            <span className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full hover:shadow-xl hover:shadow-gray-500 transition delay-[50] ease-in">
              <a href="mailto:contact@yanisguesthouse.com">
                <FiMail className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            </span>
          </div>
        </section>
        <section className="h-full grid items-center">
          <div className="flex justify-center mx-8 pt-4 text-center relative before:absolute before:top-0 before:h-[0.5px] before:w-full before:bg-primary before:rounded-full">
            &copy; {t("footer.rights")} - {currentYear}
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
