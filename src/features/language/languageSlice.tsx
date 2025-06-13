import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n/i18";

const initialState = {
  currentLanguage: localStorage.getItem("i18nextLng") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const newLang = state.currentLanguage === "en" ? "ar" : "en";
      state.currentLanguage = newLang;

      i18n.changeLanguage(newLang);
      localStorage.setItem("i18nextLng", newLang); // ✅ manual storage

      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    },
    setLanguage: (state, action) => {
      const lang = action.payload === "ar" ? "ar" : "en";
      state.currentLanguage = lang;
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
