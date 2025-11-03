import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import pages
import { LandingPage } from "./Pages/LandingPage.jsx";

// Import components
import {
  AdityaSolarServices,
  Header,
  SolarSquarePromo,
  Footer,
  SolarBuyingGuide,
  ContactUs,
  Services,
} from "./Components/index.js";

// ✅ Import i18n config (important)
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  // Change language handler
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // remember choice
  };

  return (
    <Router>
      {/* ---------- HEADER + LANGUAGE SWITCH ---------- */}
      <Header changeLanguage={changeLanguage} />
{/* 
      <div style={{ textAlign: "right", padding: "10px 20px" }}>
        <button
          onClick={() => changeLanguage("en")}
          style={{
            marginRight: "8px",
            padding: "5px 10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("mr")}
          style={{
            padding: "5px 10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          मराठी
        </button>
      </div> */}

      {/* ---------- ROUTES ---------- */}
      <Routes>
        <Route path="/" element={<Navigate to="/LandingPage" />} />

        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/BuyingGuide" element={<SolarBuyingGuide />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </Router>
  );
}

export default App;


