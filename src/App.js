import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Project from "./pages/Project.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
