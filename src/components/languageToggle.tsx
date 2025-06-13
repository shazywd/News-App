import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/language/languageSlice";
import type { RootState } from "../app/store";
import i18n from "../i18n/i18";
import { TbWorld } from "react-icons/tb";

const LanguageToggle = () => {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang); // change language in i18n
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 border border-gray-400 py-0.5 px-2 rounded-md"
    >
      <TbWorld />
      {language === "en" ? "العربية" : " English"}
    </button>
  );
};

export default LanguageToggle;
