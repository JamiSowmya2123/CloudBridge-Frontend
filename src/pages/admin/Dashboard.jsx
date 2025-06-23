import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">👮 Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">🗺️ Live SOS Map</h2>
          <p className="text-gray-600">Displays real-time SOS alerts with location.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">🚑 Resource Tracker</h2>
          <p className="text-gray-600">View and assign ambulance, boats, police.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">📢 Broadcast Alert</h2>
          <p className="text-gray-600">Send emergency messages to all users.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
// Admin Dashboard
