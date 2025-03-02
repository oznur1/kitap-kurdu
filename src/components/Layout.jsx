import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Child eleman */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;