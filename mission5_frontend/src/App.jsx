import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

/* ---------- Header & Footer ---------- */
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Header1 from "./components/Header/Header1";

/* ---------- Order Online Overlays (no header/footer) ---------- */
import DeclinedOverlayPage from "./components/OrderOnline/OverlayComponents/DeclinedOverlayPage";
import OrderConfirmOverlay from "./components/OrderOnline/OverlayComponents/OrderConfirmOverlay";
import PaymentOverlay from "./components/OrderOnline/OverlayComponents/PaymentOverlay";

/* ---------- Desktop Pages ---------- */
import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import PriceComparisonPage from "./components/PriceComparisonPage";
import FindFuelStation from "./components/FindFuelStation";
import LandingPage from "./components/OrderOnline/LandingPage";
import SelectionPage from "./components/OrderOnline/SelectionPage";
import LoginPage from "./components/LoginPage";
import SharetankPage from "./components/SharetankPage";

/* ---------- NEW: Desktop Payment Page ---------- */
import PaymentPage from "./components/PaymentPage"; // ✅ Your new page

/* ---------- Mobile Site ---------- */
import MobileApp from "../../mission5_mobile/mobile.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  /* Routes where the header and footer should be hidden */
  const excludedRoutes = [
    "/payment",
    "/order-confirm",
    "/declined",
    "/mobile",
    "/payment-page", // ✅ hide for new desktop payment page if you want
  ];

  /* Automatically switch between desktop and mobile based on screen size */
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const onMobilePath = location.pathname.startsWith("/mobile");

      if (isMobile && !onMobilePath) {
        navigate("/mobile", { replace: true });
      } else if (!isMobile && onMobilePath) {
        navigate("/", { replace: true });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname, navigate]);

  /* Check if header/footer should be removed */
  const isExcludedRoute = excludedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {/* Show header only when not excluded */}
      {!isExcludedRoute && <Header />}
      {!isExcludedRoute && <Header1 />}

      <Routes>
        {/* ---------- Desktop Pages ---------- */}
        <Route path="/" element={<Homepage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/price-comparison" element={<PriceComparisonPage />} />
        <Route path="/find-station" element={<FindFuelStation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sharetank" element={<SharetankPage />} />

        {/* ---------- NEW DESKTOP PAYMENT PAGE ---------- */}
        <Route path="/payment-page" element={<PaymentPage />} />

        {/* ---------- Overlays (no header/footer) ---------- */}
        <Route path="/payment" element={<PaymentOverlay />} />
        <Route path="/order-confirm" element={<OrderConfirmOverlay />} />
        <Route path="/declined" element={<DeclinedOverlayPage />} />

        {/* ---------- Mobile Site ---------- */}
        <Route path="/mobile/*" element={<MobileApp />} />
      </Routes>

      {/* Show footer only when not excluded */}
      {!isExcludedRoute && <Footer />}
    </>
  );
}

/* Wrap App with BrowserRouter */
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
