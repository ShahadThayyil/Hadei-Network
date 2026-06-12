import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './pages/public/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import SuccessfulLogin from './pages/auth/SuccessfulLogin'

import ClientWelcome from './pages/client/ClientWelcomePage'

// Freelancer Pre-Dashboard Pages
import FreelancerOnboarding from './pages/freelancer/FreelancerOnboarding'
import FreelancerTutorials from './pages/freelancer/FreelancerTutorials'
import FreelancerVideoPlayer from './pages/freelancer/FreelancerVideoPlayer'

// Freelancer Dashboard Pages
import FreelancerLayout from './pages/freelancer/FreelancerLayout'
import FreelancerHome from './pages/freelancer/FreelancerHome'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login-success" element={<SuccessfulLogin />} />

        {/* Client Routes */}
        <Route
          path="/dashboard/client"
          element={<ClientWelcome />}
        />

        {/* Freelancer Pre-Dashboard Routes */}
        <Route 
          path="/onboarding/freelancer" 
          element={<FreelancerOnboarding />} 
        />
        <Route 
          path="/tutorial/freelancer" 
          element={<FreelancerTutorials />} 
        />
        <Route 
          path="/tutorial/watch/:id" 
          element={<FreelancerVideoPlayer />} 
        />

        {/* Freelancer Dashboard Routes (Nested) */}
        <Route path="/dashboard/freelancer" element={<FreelancerLayout />}>
          {/* This renders FreelancerHome inside the <Outlet /> of FreelancerLayout */}
          <Route index element={<FreelancerHome />} />
          
          {/* Future dashboard pages will be added here */}
          {/* <Route path="my-jobs" element={<FreelancerMyJobs />} /> */}
          {/* <Route path="chats" element={<FreelancerChats />} /> */}
        </Route>

        {/* Catch-all: redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}