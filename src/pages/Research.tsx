import { Routes, Route, useLocation } from "react-router-dom";

import DataEngineeringCognitiveEconomicsPage from "../components/research/papers/dataeconmics";
import PsychologicalExpectedUtilityPage from "../components/research/papers/psychologicalpaper";
// New paper component
import { ResearchAccordion } from "../components/research/research-accordion";
import CognitiveEconomicModelingAndRationalInattentionPage from "../components/research/papers/economicmodeling";
import HumanAIInteractionsPage from "../components/research/papers/humanai";
import LifeCycleSavingsPage from "../components/research/papers/lifcyclesaving";
import JobTransitionsPage from "../components/research/papers/jobtransition";
import IndustrialOrganizationPage from "../components/research/papers/industrialorganization";
import StateDependenceMonetaryPolicyPage from "../components/research/papers/statedependence";
import PoliticalEconomyPage from "../components/research/papers/politicaleconomy";
import OperationsResearchPage from "../components/research/papers/operationresearch";
import PsychologicalFactorsPage from "../components/research/papers/psychologicalfactor";
import MarketDynamicsPage from "../components/research/papers/marketdynamics";
import HousingFinancePage from "../components/research/papers/housingfinance";
import { useEffect } from "react";
// Import other papers as needed

export default function Research() {

  const location = useLocation(); // Get the current location (route)

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // Trigger on route change
  return (
    <Routes>
      {/* Default path shows the ResearchAccordion */}
      <Route path="/" element={<ResearchAccordion />} />

      {/* Route for the first paper (Psychological Expected Utility) */}
      <Route
        path="/papers/psychology-anxiety-prediction-errors"
        element={<PsychologicalExpectedUtilityPage />}
      />

      {/* Route for the second paper (Data Engineering for Cognitive Economics) */}
      <Route
        path="papers/cognitive-data-engineering"
        element={<DataEngineeringCognitiveEconomicsPage />}
      />
      <Route
        path="papers/cognitive-economic-modeling-and-rational-inattention-theory"
        element={<CognitiveEconomicModelingAndRationalInattentionPage />}
      />
      <Route
        path="papers/human-ai-interactions-paper"
        element={<HumanAIInteractionsPage />}
      />
      {/* Route for Life Cycle Savings Paper */}
      <Route
        path="papers/life-cycle-savings-strategic-survey-questions"
        element={<LifeCycleSavingsPage />}
      />

      {/* Route for Job Transitions Paper */}
      <Route
        path="papers/job-transitions-career-dynamics"
        element={<JobTransitionsPage />}
      />

      {/* Route for Real Estate and Housing Finance Paper */}
      <Route
        path="papers/real-estate-housing-finance"
        element={<HousingFinancePage />}
      />

      {/* Route for Hidden Information and Market Dynamics Paper */}
      <Route
        path="papers/hidden-information-social-learning-market-dynamics"
        element={<MarketDynamicsPage />}
      />

      {/* Route for Industrial Organization and Markets Paper */}
      <Route
        path="papers/industrial-organization-markets"
        element={<IndustrialOrganizationPage />}
      />

      {/* Route for State Dependence and Monetary Policy Paper */}
      <Route
        path="papers/state-dependence-monetary-policy-paper"
        element={<StateDependenceMonetaryPolicyPage />}
      />

      {/* Route for Political Economy Paper */}
      <Route
        path="papers/political-economy"
        element={<PoliticalEconomyPage />}
      />

      {/* Route for Social Welfare and Policy Paper */}
      <Route
        path="papers/social-welfare-policy"
        element={<PsychologicalFactorsPage />}
      />

      {/* Route for Operations Research Paper */}
      <Route
        path="papers/operations-research-paper"
        element={<OperationsResearchPage />}
      />

      {/* Route for the third paper (Psychology Anxiety Prediction Errors) */}

      {/* Add additional routes for other papers as needed */}
      {/* Route for 404 / Paper Not Found */}
      <Route
        path="*"
        element={<div className="text-gray-500">Paper not found</div>}
      />
    </Routes>
  );
}
