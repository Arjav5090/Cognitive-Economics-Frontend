import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ResourcesSidebar } from "../components/resource/resource-sidebar";
import ApplicationPage from "../components/resource/application";

import FoundationPage from "../components/resource/foundation";
import HousingPage from "../components/resource/housing";
import ManufacturingPage from "../components/resource/manufacturing";
import TrainingPage from "../components/resource/training";
import AcceleratorPage from "../components/resource/accelerator";
import ImportanceandProblemPage from "../components/resource/importanceandproblems";
import CaseandLessonPage from "../components/resource/caseandlesson";
import FutureandReferencesPage from "../components/resource/futureandreferences";
import CalibrationandReferencesPage from "../components/resource/caliberationandreferences";
import CareerTrajectoryPage from "../components/resource/careertrajectory";
import PreparingWorkersPage from "../components/resource/preparingworkers";
import OngoingProjectsPage from "../components/resource/ongoingproject";
import DecisionMakingPage from "../components/resource/decisionmaking";
import BusinessandPolicyPage from "../components/resource/businessandpolicy";

export default function ResourcesPage() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the route changes
  }, [location.pathname]); // Trigger on path changes

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-items-center ">
      <ResourcesSidebar />
      <main className="flex-1">
        <Routes>
          {/* Default route for ResourcesContent */}
          <Route path="/application" element={<ApplicationPage />} />

          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/housing" element={<HousingPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/accelerator" element={<AcceleratorPage />} />
          <Route
            path="/importanceandproblem"
            element={<ImportanceandProblemPage />}
          />
          <Route path="/caseandlesson" element={<CaseandLessonPage />} />
          <Route
            path="/futureandreferences"
            element={<FutureandReferencesPage />}
          />
          <Route
            path="/caliberationandreferences"
            element={<CalibrationandReferencesPage />}
          />
          <Route path="/career" element={<CareerTrajectoryPage />} />
          <Route path="/preparingworkers" element={<PreparingWorkersPage />} />
          <Route path="/projectsandfuture" element={<OngoingProjectsPage />} />
          <Route path="/decision" element={<DecisionMakingPage />} />
          <Route
            path="/businessandpolicy"
            element={<BusinessandPolicyPage />}
          />
          <Route
            path="*"
            element={<div>Select a valid topic from the sidebar.</div>}
          />
        </Routes>
      </main>
    </div>
  );
}
