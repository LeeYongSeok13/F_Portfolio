import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Project from "./pages/Project.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
