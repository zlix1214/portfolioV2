import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";
import { MdGTranslate } from "react-icons/md";
const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
    // 可選：儲存到 localStorage
    localStorage.setItem("language", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={t("navbar.language")}
      className="switcher"
    >
      {/* <MdGTranslate className="icon" /> */}
      <p>{i18n.language === "en" ? "中文" : "English"}</p>
    </button>
  );
};

export default LanguageSwitcher;
