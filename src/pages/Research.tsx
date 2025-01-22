import { ResearchAccordion } from "../components/research/research-accordion";
import { Routes, Route, Navigate } from "react-router-dom";
import PaperPage from "../components/research/papers/PaperPage";

export default function Research() {
  return (

  

      <Routes>
        {/* Default path shows the ResearchAccordion */}
        <Route path="/" element={<ResearchAccordion />} />

        {/* Route for the first paper */}
        <Route
          path="papers/cognitive-economics-intro"
          element={<PaperPage />}
        />

        {/* Additional routes for other papers can be added here */}
        <Route
          path="papers/:id"
          element={<div className="text-gray-500">Paper not found</div>}
        />

        {/* Redirect to the first paper as default */}
        <Route
          path="*"
          element={<Navigate to="papers/cognitive-economics-intro" replace />}
        />
      </Routes>

  );
}
