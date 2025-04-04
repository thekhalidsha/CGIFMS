import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import NewsNavbar from "../components/shared/NewsNavbar";
import SplashScreen from "../components/shared/SplashScreen";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <SplashScreen/> */}
      <NewsNavbar/>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;