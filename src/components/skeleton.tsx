import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { NewsList } from "../features/news/newsList";
import { useGetPostsQuery } from "../features/news/newsApi";
import LanguageToggle from "./languageToggle";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./themeToggle";
import { useEffect } from "react";
import { setLanguage } from "../features/language/languageSlice";

export const Skeleton = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    dispatch(setLanguage(savedLang));
  }, []);

  const { isLoading } = useGetPostsQuery();
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <>
      <div
        id="body"
        className={`${
          theme === "dark"
            ? "!bg-[#111827] !text-white"
            : "!bg-[#F9FAFB] !text-black"
        } px-24 flex py-10 gap-11`}
      >
        {/* Card Skeleton */}
        {isLoading ? (
          <div className="flex flex-wrap  justify-evenly gap-4">
            {[0, 1, 2, 3, 4, 5].map((item: number) => (
              <div
                key={item}
                id="card"
                className={`border-[1px] rounded-lg w-[350px] ${
                  theme === "dark"
                    ? "bg-[#1F2937] text-white border-gray-600"
                    : "bg-white text-black border-gray-200"
                }`}
              >
                <div className="h-44 rounded-t-lg w-full object-cover border-none  bg-gray-200" />

                <div className="flex flex-col px-3 gap-5 pt-4 pb-5 ">
                  <div className="w-full line-clamp-2 min-h-[3rem]  bg-gray-200" />
                  <div className="w-full line-clamp-2 min-h-[1.5rem]  bg-gray-200" />

                  <div className="w-full line-clamp-2 min-h-[1.5rem]  bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NewsList />
        )}
      </div>
    </>
  );
};

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const { t } = useTranslation();

  return (
    <div
      id="header"
      className={`py-2 px-24 border-b-[1px] flex items-center justify-between border-gray-200 ${
        theme === "dark" ? "bg-[#111827] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex gap-1 flex-col">
        <h6 className="text-2xl font-bold">{t("welcome")}</h6>
        <p>{t("stay_updated")}</p>
      </div>
      <div className="flex gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Header;
