import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";

const Blank = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Blank;