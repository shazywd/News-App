import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../features/language/languageSlice";
import themeSlice from "../features/theme/themeSlice";
import { api } from "../features/news/newsApi";

const store = configureStore({
  reducer: {
    language: languageSlice,
    theme: themeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
