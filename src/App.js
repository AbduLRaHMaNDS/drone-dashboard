import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SystemMonitor from './pages/SystemMonitor';
import DetectionAlerts from './pages/DetectionAlerts';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome to the Drone Dashboard</h2>} />
        <Route path="/system" element={<SystemMonitor />} />
        <Route path="/alerts" element={<DetectionAlerts />} />
      </Routes>
    </Router>
  );
}

export default App;
