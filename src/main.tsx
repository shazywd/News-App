// main.tsx or index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { Provider } from "react-redux";
import store from "./app/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import { Skeleton } from "./components/skeleton";
import NewsDetailPage from "./components/newsDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This means the default route inside Layout (`/`)
        element: <Skeleton />,
      },
      {
        path: "post/:postId",
        element: <NewsDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
