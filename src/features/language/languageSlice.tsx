import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n/i18";

const initialState = {
  currentLanguage: localStorage.getItem("i18nextLng") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const lang = action.payload === "ar" ? "ar" : "en";
      state.currentLanguage = lang;
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
