import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

// -- Header & Footer Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Header1 from "./components/Header/Header1";

// -- Order Online Overlay Components
import DeclinedOverlayPage from "./components/OrderOnline/OverlayComponents/DeclinedOverlayPage";
import OrderConfirmOverlay from "./components/OrderOnline/OverlayComponents/OrderConfirmOverlay";
import PaymentOverlay from "./components/OrderOnline/OverlayComponents/PaymentOverlay";

// -- Main App Pages
import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import PriceComparisonPage from "./components/PriceComparisonPage";
import FindFuelStation from "./components/FindFuelStation";
import LandingPage from "./components/OrderOnline/LandingPage";
import SelectionPage from "./components/OrderOnline/SelectionPage";
import LoginPage from "./components/LoginPage";
import SharetankPage from "./components/SharetankPage";

// ✅ Mobile App Import
import MobileApp from "../mission5_mobile/mobile";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Routes where header/footer are hidden
  const excludedRoutes = ["/payment", "/order-confirm", "/declined"];

  // ✅ Automatically redirect to /mobile on smaller screens
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // If user is on mobile but not already in /mobile, redirect them
    if (isMobile && !location.pathname.startsWith("/mobile")) {
      navigate("/mobile");
    }

    // If user is on desktop but in /mobile, redirect them back to /
    if (!isMobile && location.pathname.startsWith("/mobile")) {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <>
      {/* ✅ Header hidden on overlay routes */}
      {!excludedRoutes.includes(location.pathname) && <Header />}
      {!excludedRoutes.includes(location.pathname) && <Header1 />}

      <Routes>
        {/* 🌐 Main Desktop Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/price-comparison" element={<PriceComparisonPage />} />
        <Route path="/find-station" element={<FindFuelStation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sharetank" element={<SharetankPage />} />

        {/* 💳 Overlay Pages (no header/footer) */}
        <Route path="/payment" element={<PaymentOverlay />} />
        <Route path="/order-confirm" element={<OrderConfirmOverlay />} />
        <Route path="/declined" element={<DeclinedOverlayPage />} />

        {/* 📱 Mobile Site */}
        <Route path="/mobile/*" element={<MobileApp />} />
      </Routes>

      {/* ✅ Footer hidden on overlay routes */}
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

// ✅ Wrap App in BrowserRouter (for useLocation to work)
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
