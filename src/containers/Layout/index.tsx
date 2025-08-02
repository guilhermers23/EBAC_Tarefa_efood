import { Outlet } from "react-router";
import Header from "../../components/Header";
import { Main } from "../../styles/GlobalStyles";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

const Layout = () => (
  <>
    <Header />
    <Banner />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

export default Layout;
