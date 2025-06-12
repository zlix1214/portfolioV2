import { useTranslation } from "react-i18next";

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
      className="language-switcher" // 你可以加入自己的 CSS class
    >
      {i18n.language === "en" ? "中文" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
