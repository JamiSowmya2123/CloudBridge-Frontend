import React from "react";

const Home = () => {
  const handleEmergencyClick = () => {
    alert("🚨 Emergency SOS Sent!");
    // You can trigger backend call or SNS here in real app
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-100 to-orange-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Emergency Help</h1>
        <p className="text-gray-700 mb-6">Tap below to send an SOS alert</p>
        <button
          onClick={handleEmergencyClick}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md"
        >
          🚨 Send SOS
        </button>
      </div>
    </div>
  );
};

export default Home;
