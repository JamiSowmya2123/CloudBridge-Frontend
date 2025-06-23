export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🛠️ Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">📍 Live Map</h2>
          <p className="text-gray-600">View real-time locations of SOS triggers.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-green-600">🧰 Resources</h2>
          <p className="text-gray-600">Manage emergency resources & contacts.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-600">📢 Broadcast</h2>
          <p className="text-gray-600">Send announcements to all users instantly.</p>
        </div>
      </div>
    </div>
  );
}
