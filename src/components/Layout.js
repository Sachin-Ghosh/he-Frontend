import Footer from "./Footer";
import Navbar from "./Navbar";
import Provider from "./Providers";

const Layout = ({ children }) => {
  return (
    <>
      <Provider>
      <Navbar />
      <div  className="bg-base-300">
      {children}
      </div>
      <Footer />
      </Provider>
    </>
  );
};
export default Layout;