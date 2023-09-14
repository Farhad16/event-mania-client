import AlterFooter from "../AlterFooter";
import Footer from "../Footer";
import NavTop from "../NavTop";
import Navbar from "../Navbar";

function Layout({ children, showNav = true }: any) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavTop />
      {showNav && <Navbar />}
      {children}
      {showNav ? <Footer /> : <AlterFooter />}
    </div>
  );
}

export default Layout;
