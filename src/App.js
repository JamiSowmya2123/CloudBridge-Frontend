import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/" element={<h1 className="text-center mt-20 text-2xl">Welcome to CloudBridge 🚀</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
