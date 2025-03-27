import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/*" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
