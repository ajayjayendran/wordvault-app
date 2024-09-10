import React from "react";
import { Routes, Route } from "react-router-dom";
import { WordSearch } from "./pages/WordSearch";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WordSearch />} />
    </Routes>
  );
};

export default AppRoutes;
