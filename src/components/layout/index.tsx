import AlterFooter from "../AlterFooter";
import Footer from "../Footer";
import NavTop from "../NavTop";
import Navbar from "../Navbar";

function Layout({ children, showNav = true }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <NavTop />
        {showNav && <Navbar />}
        {children}
      </div>
      {showNav ? <Footer /> : <AlterFooter />}
    </div>
  );
}

export default Layout;
