import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const Property1VariantTwo = React.lazy(
  () => import("pages/Property1VariantTwo"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="*" element={<NotFound />} />
       
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
