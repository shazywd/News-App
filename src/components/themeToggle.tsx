import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";
import type { RootState } from "../app/store";
import { useTranslation } from "react-i18next";
import { FaRegMoon } from "react-icons/fa";
const ThemeToggle = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const handleToggle = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="inline-flex items-center gap-2 border-[1px] border-gray-400 py-0.5 rounded-md px-1"
    >
      {currentTheme === "light" ? (
        <>
          <FaMoon />
          {t("dark_mode")}
        </>
      ) : (
        <>
          <FaRegMoon />

          {t("light_mode")}
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
