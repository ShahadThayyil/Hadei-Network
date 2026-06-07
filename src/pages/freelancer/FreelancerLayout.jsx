import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Briefcase, 
  Search, 
  MessageSquare, 
  CreditCard, 
  User, 
  Bell, 
  HelpCircle, 
  Menu, 
  X, 
  ChevronDown,
  Hash,
  Clock,
  Compass
} from 'lucide-react'

export default function FreelancerLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Primary Nav Items (Far Left Rail)
  const primaryNav = [
    { id: 'home', icon: Home, path: '/dashboard/freelancer', label: 'Home' },
    { id: 'jobs', icon: Briefcase, path: '/dashboard/freelancer/my-jobs', label: 'My Jobs' },
    { id: 'discover', icon: Compass, path: '/dashboard/freelancer/other-jobs', label: 'Discover' },
    { id: 'chats', icon: MessageSquare, path: '/dashboard/freelancer/chats', label: 'Chats' },
    { id: 'finance', icon: CreditCard, path: '/dashboard/freelancer/payments', label: 'Payments' },
  ]

  // Secondary Nav Items (Wider Sidebar Menu)
  const menuSections = [
    {
      title: 'Platform',
      items: [
        { label: 'Dashboard', path: '/dashboard/freelancer', icon: Hash },
        { label: 'Platform Jobs', path: '/dashboard/freelancer/jobs', icon: Hash },
        { label: 'Community Posts', path: '/dashboard/freelancer/posts', icon: Hash },
      ]
    },
    {
      title: 'Job Tracking',
      items: [
        { label: 'Applied Jobs', path: '/dashboard/freelancer/applied', icon: Hash },
        { label: 'My Uploaded Jobs', path: '/dashboard/freelancer/my-jobs', icon: Hash },
        { label: 'Peer Jobs', path: '/dashboard/freelancer/other-jobs', icon: Hash },
      ]
    }
  ]

  return (
    <div className="h-screen w-full flex flex-col bg-white overflow-hidden font-sans">
      
      {/* ==================== TOP COMMAND BAR ==================== */}
      <header className="flex-shrink-0 h-12 w-full bg-[#111111] flex items-center justify-between px-4 z-50">
        
        {/* Left: Mobile Menu Toggle & Spacer */}
        <div className="flex items-center w-1/4">
          <button 
            className="md:hidden text-gray-300 hover:text-white mr-4 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="hidden md:flex items-center gap-4 text-gray-400">
            <Clock size={16} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* Center: Global Search (Slack Style) */}
        <div className="flex-1 max-w-2xl flex justify-center">
          <div className="w-full max-w-xl bg-[#2A2A2A] border border-gray-700 rounded-md flex items-center px-3 py-1 hover:bg-[#333333] transition-colors focus-within:bg-[#333333] focus-within:border-gray-500">
            <Search size={14} className="text-gray-400 mr-2 shrink-0" />
            <input 
              type="text" 
              placeholder="Search jobs, messages, or files..." 
              className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center justify-end w-1/4 gap-4">
          <HelpCircle size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors hidden sm:block" />
          <div className="relative">
            <Bell size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F5F216] rounded-full border border-[#111111]"></span>
          </div>
        </div>
      </header>

      {/* ==================== MAIN WORKSPACE ==================== */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* 1. FAR LEFT PRIMARY RAIL (Hidden on mobile) */}
        <nav className="hidden md:flex flex-col items-center w-[70px] bg-[#111111] border-t border-[#222222] py-4 z-40">
          
          {/* Minimal Icon Logo */}
          <div className="w-10 h-10 bg-[#222222] rounded-md flex items-center justify-center mb-6 cursor-pointer hover:bg-[#333333] transition-colors border border-gray-800">
            <span className="font-bold text-lg text-[#F5F216]">H</span>
          </div>

          {/* Vertical Nav Icons */}
          <div className="flex flex-col gap-4 flex-1 w-full items-center">
            {primaryNav.map((item) => {
              // Ensure perfect active state matching
              const isActive = location.pathname === item.path || (item.id !== 'home' && location.pathname.startsWith(item.path))
              return (
                <Link 
                  key={item.id} 
                  to={item.path}
                  className="group relative flex flex-col items-center justify-center w-full"
                >
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                    isActive 
                      ? 'bg-[#2A2A2A] text-white border border-gray-700' 
                      : 'text-gray-400 hover:bg-[#222222] hover:text-gray-200'
                  }`}>
                    <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Bottom Profile Settings */}
          <Link to="/dashboard/freelancer/profile" className="mt-auto group relative w-full flex justify-center">
            <div className="w-10 h-10 rounded-md bg-[#222222] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333333] transition-colors">
              <User size={20} />
            </div>
            <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
              Profile
            </span>
          </Link>
        </nav>

        {/* 2. SECONDARY SIDEBAR MENU (Slack Channels Style) */}
        <aside className={`absolute md:relative w-64 h-full bg-[#1A1A1A] border-r border-[#222222] flex flex-col transition-transform duration-300 z-30 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
          
          {/* Workspace Header with Brand Logo */}
          <div className="h-14 flex items-center justify-between px-4 border-b border-[#222222] cursor-pointer hover:bg-[#222222] transition-colors">
            <img
              src="https://res.cloudinary.com/dmtzmgbkj/image/upload/v1780479006/f_webp/WhatsApp_Image_2026-05-22_at_2.18.05_PM__1_-removebg-preview_befo5g.png"
              alt="Hadei Network"
              className="h-6 w-auto object-contain filter invert opacity-90" // Inverted to look good on dark background
            />
            <ChevronDown size={16} className="text-gray-400" />
          </div>

          {/* Scrollable Menu Items */}
          <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
            {menuSections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <div className="px-4 flex items-center justify-between mb-1 group cursor-pointer">
                  <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase group-hover:text-gray-300 transition-colors">
                    {section.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-0.5">
                  {section.items.map((item, itemIdx) => {
                    const isItemActive = location.pathname === item.path
                    return (
                      <li key={itemIdx}>
                        <Link 
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-2 px-4 py-1.5 mx-2 rounded-md text-sm transition-colors ${
                            isItemActive 
                              ? 'bg-[#F5F216]/10 text-[#F5F216] font-medium' 
                              : 'text-gray-300 hover:bg-[#2A2A2A]'
                          }`}
                        >
                          <item.icon size={14} className={isItemActive ? 'text-[#F5F216]' : 'text-gray-500'} />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Mobile Overlay Background */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* 3. MAIN CONTENT AREA */}
        <main className="flex-1 h-full overflow-y-auto bg-white relative">
          <div className="min-h-full">
            {/* The individual page components (Home, Jobs, Chats) render here */}
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  )
}