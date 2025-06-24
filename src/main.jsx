import UserDashboard from './pages/user/UserDashboard';

<Route path="/user" element={<UserDashboard />} />

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
