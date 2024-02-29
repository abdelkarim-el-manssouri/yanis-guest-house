import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "sp", lang: "Spanish" },
];

const languageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {languages.map((lng) => {
        return (
          <button key={lng.code} onClick={() => changeLanguage(lng.code)}>
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default languageSelector;
