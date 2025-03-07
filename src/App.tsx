import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ResourcesPage from "./pages/Resources";
import Research from "./pages/Research";
import ContactForm from "./pages/Contact";
import Forum from "./pages/Forum";
import Questionnaire from "./pages/Questionnaire";
import Chatbot from "./pages/Chatbot";
import ReactGA from "react-ga4";
import { HelmetProvider } from "react-helmet-async";

const TRACKING_ID = "G-M424D013QG";
ReactGA.initialize(TRACKING_ID);

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });

    ReactGA.event({
      category: "Navigation",
      action: "Page View",
      label: location.pathname,
    });
  }, [location]);
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router basename="/">
        <MainLayout>
          <PageTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources/*" element={<ResourcesPage />} />
            <Route path="/research/*" element={<Research />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
          </Routes>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
};

const PageTracker = () => {
  usePageTracking();
  return null;
};

export default App;
