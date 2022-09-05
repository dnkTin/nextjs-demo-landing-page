import Navbar from "./Navbar";
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="mainPage">
        {children}
      </div>
      <Footer />

    </div>
  );
}

export default Layout;