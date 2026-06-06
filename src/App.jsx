import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './pages/public/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import SuccessfulLogin from './pages/auth/SuccessfulLogin'

import ClientWelcome from './pages/client/ClientWelcomePage'
import FreelancerWelcome from './pages/freelancer/FreelancerWelcomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login-success" element={<SuccessfulLogin />} />

        {/* Dummy Dashboard Routes */}
        <Route
          path="/dashboard/client"
          element={<ClientWelcome />}
        />

        <Route
          path="/dashboard/freelancer"
          element={<FreelancerWelcome />}
        />

        {/* Catch-all: redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}