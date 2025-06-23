import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-20 text-3xl">🌐 Welcome to CloudBridge</h1>} />
        <Route path="/user" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
  console.log("✅ Loaded App.js Successfully");

      </Routes>
    </Router>
  );
}

export default App;
