import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './pages/public/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import SuccessfulLogin from './pages/auth/SuccessfulLogin'

// FIXED IMPORT: Directing the routing path to your newly rewritten ClientWelcomePage layout file
import ClientWelcome from './pages/client/ClientWelcomePage' 
import FreelancerWelcome from './pages/freelancer/FreelancerWelcomePage'
import ClientOnboarding from './pages/client/ClientOnboarding' 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login-success" element={<SuccessfulLogin />} />

        {/* Onboarding Pipeline */}
        <Route path="/client/onboarding" element={<ClientOnboarding />} />

        {/* Client Dashboard Render Target */}
        <Route
          path="/dashboard/client"
          element={<ClientWelcome />}
        />

        {/* Freelancer Dashboard Render Target */}
        <Route
          path="/dashboard/freelancer"
          element={<FreelancerWelcome />}
        />

        {/* Catch-all fallback routing configuration */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}