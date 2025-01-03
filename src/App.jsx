import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import AboutPage from "./pages/AboutPage";
// import ProductsPage from "./pages/ProductsPage";
// import ContactPage from "./pages/ContactPage";
import ProductDetails from "./pages/ProductDetails";
import ProductSection from "./components/ProductSection";
import CropInfomation from "./components/CropInfomation";
import Safety from "./components/Safety";
import FarmerToolBox from "./components/FarmerToolBox";
import CropDetails from "./pages/CropDetails";
import AboutUs from "./components/AboutUs";
import Error from "./pages/Error";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  }, [location]); // Trigger when location changes

  return null; // This component doesn't render anything
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/fertilisers" element={<ProductSection />} />
        <Route path="/crop-info" element={<CropInfomation />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/toolbox" element={<FarmerToolBox />} />
        <Route path="/crop/:id" element={<CropDetails />} />
        <Route path="/crop/:id" element={<CropDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
