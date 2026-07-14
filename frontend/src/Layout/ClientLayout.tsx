import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ClientLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ClientLayout;