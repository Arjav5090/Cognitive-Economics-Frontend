import { Route, Routes } from "react-router-dom";
import { ResourcesContent } from "../components/resource/resource-content";
import { ResourcesSidebar } from "../components/resource/resource-sidebar";
import ApplicationPage from "../components/resource/application";
import CalibrationPage from "../components/resource/calibration";
import FoundationPage from "../components/resource/foundation";
import HousingPage from "../components/resource/housing";
import ManufacturingPage from "../components/resource/manufacturing";
import TrainingPage from "../components/resource/training";
import WorkersPage from "../components/resource/workers";
import ProtocolsPage from "../components/resource/protocols";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col md:flex-row ml-5 pl-5 justify-items-center ">
      <ResourcesSidebar />
      <main className="flex-1 ">
        <Routes>
          {/* Default route for ResourcesContent */}
          <Route path="/" element={<ResourcesContent />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/calibration" element={<CalibrationPage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/housing" element={<HousingPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/workers" element={<WorkersPage />} />
          <Route path="/protocols" element={<ProtocolsPage />} />

          <Route
            path="*"
            element={<div>Select a valid topic from the sidebar.</div>}
          />
        </Routes>
      </main>
    </div>
  );
}
