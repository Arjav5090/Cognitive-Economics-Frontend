import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ResourcesPage from "./pages/Resources";
import Research from "./pages/Research";
import ContactForm from "./pages/Contact";
import Forum from "./pages/Forum";
import Questionnaire from "./pages/Questionnaire";
import Chatbot from "./pages/Chatbot";

const App: React.FC = () => {
  return (
    <Router basename="/Cognitive-Economics-Frontend">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources/*" element={<ResourcesPage />} />
          <Route path="/research/*" element={<Research />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
