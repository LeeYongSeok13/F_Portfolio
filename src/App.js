import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Project from './pages/Project';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import ProjectData from './project.json';

function App() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(ProjectData);
  }, [])
  console.log(ProjectData);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/Project' element={<Project project={project}/>} />
        <Route path='/Profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
