import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Leaderboard = React.lazy(() => import("pages/Leaderboard"));
const SOBRE = React.lazy(() => import("pages/SOBRE"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/sobre" element={<SOBRE />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
