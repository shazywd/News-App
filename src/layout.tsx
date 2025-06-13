// components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./components/skeleton";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
