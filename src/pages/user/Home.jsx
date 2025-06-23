export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">🚨 Emergency SOS</h1>
        <p className="text-gray-700 mb-6">If you're in danger, tap the button below to send an alert.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition">
          Send SOS
        </button>
      </div>
    </div>
  );
}
