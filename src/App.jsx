// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/user/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
