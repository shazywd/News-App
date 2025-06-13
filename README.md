# 📰 React News Website

A responsive news website built with React, Redux Toolkit, RTK Query, Tailwind CSS, and i18n for multilang support. This project fetches mock posts and author details from JSONPlaceholder.

---

## Features

React + Vite setup
Redux Toolkit for state management
RTK Query for data fetching
Light/Dark theme toggle (stored in Redux)
Language switcher with i18next (supports English and Arabic)
News listing and detailed view with user info
Persistent language using localStorage
Fully responsive design with Tailwind CSS

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [i18next + react-i18next](https://react.i18next.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (Fake API)

## 📂 Folder Structure

src/
├── app/
│ └── store.ts
├── features/
│ ├── theme/
│ │ └── themeSlice.ts
│ ├── language/
│ │ └── languageSlice.ts
│ ├── news/
│ │ ├── NewsList.tsx
│ │ └── newsApi.ts
├── components/
│ ├── Skeleton.tsx
│ ├── NewsDetailPage.tsx
│ ├── ThemeToggle.tsx
│ ├── LanguageToggle.tsx
│ └── NewsCard.tsx
├── i18n/
│ ├── index.ts
│ ├── en.json
│ └── ar.json
|
└── layout.tsx
└── main.tsx
