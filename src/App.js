import { useLocation } from "react-router-dom";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./ShearedComponents/Header/Header";
import Footer from "./ShearedComponents/Footer/Footer";
import AllRoutes from "./AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  const location = useLocation();

  const isNotFoundPage = location.pathname === "/404";

  return (
    <div className="bg-main">
      {!isNotFoundPage && <Header />}
      <AllRoutes />
      {!isNotFoundPage && <Footer />}
    </div>
  );
}

export default App;
