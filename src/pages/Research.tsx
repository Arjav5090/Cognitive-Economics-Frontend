import { Routes, Route, useLocation } from "react-router-dom";
import DataEngineeringCognitiveEconomicsPage from "../components/research/papers/dataeconmics";
import PsychologicalExpectedUtilityPage from "../components/research/papers/psychologicalpaper";
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
import { Helmet } from "react-helmet-async";

export default function Research() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Research | Andrew Caplin - Cognitive Economics</title>
        <meta
          name="description"
          content="Explore research papers by Andrew Caplin on cognitive economics, AI decision-making, and behavioral finance."
        />
        <meta
          property="og:title"
          content="Research | Andrew Caplin - Cognitive Economics"
        />
        <meta
          property="og:description"
          content="Discover research papers on AI, economics, and cognitive decision-making."
        />

        <meta property="og:url" content="https://andrewcaplin.com/research" />
        <link rel="canonical" href="https://andrewcaplin.com/research" />
      </Helmet>

      <Routes>
        <Route path="/" element={<ResearchAccordion />} />

        <Route
          path="/papers/psychology-anxiety-prediction-errors"
          element={<PsychologicalExpectedUtilityPage />}
        />

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

        <Route
          path="papers/life-cycle-savings-strategic-survey-questions"
          element={<LifeCycleSavingsPage />}
        />

        <Route
          path="papers/job-transitions-career-dynamics"
          element={<JobTransitionsPage />}
        />

        <Route
          path="papers/real-estate-housing-finance"
          element={<HousingFinancePage />}
        />

        <Route
          path="papers/hidden-information-social-learning-market-dynamics"
          element={<MarketDynamicsPage />}
        />

        <Route
          path="papers/industrial-organization-markets"
          element={<IndustrialOrganizationPage />}
        />

        <Route
          path="papers/state-dependence-monetary-policy-paper"
          element={<StateDependenceMonetaryPolicyPage />}
        />

        <Route
          path="papers/political-economy"
          element={<PoliticalEconomyPage />}
        />

        <Route
          path="papers/social-welfare-policy"
          element={<PsychologicalFactorsPage />}
        />

        <Route
          path="papers/operations-research-paper"
          element={<OperationsResearchPage />}
        />

        <Route
          path="*"
          element={
            <div className="text-black font-outfit">Paper not found</div>
          }
        />
      </Routes>
    </>
  );
}
