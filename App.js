import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverviewPage from "./OverviewPage";
import DetailPage from "./DetailPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/detail/:moduleId" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
