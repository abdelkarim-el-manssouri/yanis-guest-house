import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/language-selector";

function App() {
  // const [t, i18n] = useTranslation("global");
  // const changeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  const { t } = useTranslation();

  const { line1, line2 } = t("description");

  return (
    <>
      <LanguageSelector />
      <h2>{t("greeting")}</h2>
      <p>{line1}</p>
      <p>{line2}</p>
      <div className="mt-20">
        <div className="container h-20 bg-[#004643] text-white mx-auto w-full"></div>
        <div className="container h-20 bg-[#232946] text-white mx-auto w-full"></div>
        <div className="container h-20 bg-[#f9f4ef] text-white mx-auto w-full"></div>
        <div className="container h-20 bg-[#fffffe] text-white mx-auto w-full"></div>
        <div className="container h-20 bg-[#fec7d7] text-white mx-auto w-full"></div>
        <div className="container h-20 bg-[#0f0e17] text-white mx-auto w-full"></div>
      </div>
    </>
  );
}

export default App;
