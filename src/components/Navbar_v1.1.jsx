import { Link } from "react-router-dom";
import AnimatedButton from "../UI/AnimatedButton";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";
// import Menu from "./Menu";

const Navbar_v1 = () => {
  const { t } = useTranslation("translation");

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-secondary/50 backdrop-blur-sm p-3 text-neutral-200">
        <Link
          to="/home"
          className="grid col-span-2 md:col-span-1 place-content-center md:place-content-start md:w-fit"
        >
          <img
            src="https://yanisguesthouse.com/images/logo.png"
            alt="logo"
            className="w-28 h-14"
          />
        </Link>

        <div className="grid pl-4 mt-4 md:mt-0 md:pl-0 md:place-content-around md:col-span-2 lg:col-span-3">
          <div className="flex md:justify-center items-center h-fit gap-2">
            <Link to="/">something</Link>
            <Link to="/photos">something</Link>
            <Link to="/accommodations">something</Link>
          </div>
        </div>

        <div className="flex justify-end items-center pr-4 mt-4 md:mt-0">
          <Link
            to="/accommodations"
            // className="flex items-center gap-1 rounded-full w-fit h-8 px-3 py-1.5 text-sm capitalize transition-colors hover:bg-neutral-800 hover:text-neutral-100 text-neutral-400"
          >
            {/* {t("navContent.book")} */}
            {/* <Menu /> */}
            <AnimatedButton text={t("navContent.book")} />
            <Button content="book" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar_v1;
