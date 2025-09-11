import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalSidebar from "../../components/ModalSidebar";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <ModalSidebar />
  </>
);

export default Layout;
