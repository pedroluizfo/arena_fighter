import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
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
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/property1varianttwo"
            element={<Property1VariantTwo />}
          />
          <Route path="/landingpage" element={<Landingpage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
