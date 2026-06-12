import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientWelcomePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Client Dashboard Analytics Data Modules
  const clientAnalytics = {
    totalSpent: '₹3,45,000',
    activeTalent: 2,
    completedMilestones: 8
  };

  // Client Specific Project Progress Specifications
  const activeContracts = [
    {
      id: 'CON-2026-90',
      title: 'Senior React Developer for SaaS Dashboard',
      developer: 'Arjun Kumar',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      status: 'In Production',
      budget: '₹2,50,000',
      progress: 75,
      currentTask: 'Phase 3: State Optimization & GSAP Animations',
      tags: ['REACT', 'TAILWIND CSS', 'REDUX']
    },
    {
      id: 'CON-2026-94',
      title: 'MERN Stack Developer for E-commerce MVP',
      developer: 'Neha Mathews',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      status: 'Awaiting Review',
      budget: '₹1,80,000',
      progress: 90,
      currentTask: 'Phase 4: Custom API Endpoints & Escrow Connect',
      tags: ['NODE.JS', 'MONGODB', 'EXPRESS']
    }
  ];

  return (
    // Base Canvas Layout Shell - Set default body container color framework
    <div className="h-screen w-screen flex flex-col bg-[#F9F9F9] font-sans text-black overflow-hidden relative select-none">
      
      {/* =========================================================
          1. SHADY BLACK TOP NAVBAR
         ========================================================= */}
      <header className="h-12 bg-[#1A1A1D] border-b border-neutral-800 px-4 flex items-center justify-between shrink-0 z-40">
        
        {/* Left Section: Responsive Hamburger & History Path */}
        <div className="flex items-center gap-4">
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white text-md p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <button className="text-neutral-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m4.5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {/* Center Section: Search Input Module */}
        <div className="relative w-full max-w-xl mx-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Search jobs, messages, or files..." 
            className="w-full bg-[#2D2D30] border border-neutral-700 rounded-md pl-9 pr-4 py-1 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-all"
          />
        </div>

        {/* Right Section: Core Utility Controls (FIXED PRO VISUAL BELL LOGIC) */}
        <div className="flex items-center gap-4 relative">
          <button className="text-neutral-400 hover:text-white transition-all p-0.5">
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </button>
          
          {/* FIXED NOTIFICATION ICON: Enhanced text coloring constraints and layout visibility */}
          <button 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="text-neutral-400 hover:text-white transition-all relative p-1 flex items-center justify-center bg-transparent border-0 outline-none"
          >
            <svg className="w-5 h-5 text-neutral-400 hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.07 6.07 0 00-1-3.5M9 17v1a3 3 0 006 0v-1m-6 0H4l1.405-1.405A2.032 2.032 0 007 14.158V11a6.07 6.07 0 011-3.5M9 7.5a3.5 3.5 0 117 0v3.5m-7 0h7" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#EF4444]" />
          </button>

          {/* Alert List Flyout Menu */}
          {notificationsOpen && (
            <div className="absolute right-0 top-9 w-80 bg-white border border-neutral-200 rounded-md shadow-lg p-3 z-50 text-black animate-in fade-in duration-150">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-100 mb-2">
                <h4 className="text-[10px] font-black uppercase text-black tracking-wider">Workspace Alerts</h4>
                <button className="text-[9px] text-neutral-400 hover:text-black font-bold uppercase">Clear</button>
              </div>
              <div className="p-2 bg-[#F5F216]/5 border border-neutral-200 rounded-sm text-left">
                <p className="text-[11px] font-bold text-neutral-800 leading-normal">Arjun Kumar submitted Phase 3 code review requests.</p>
                <span className="text-[9px] text-neutral-400 block mt-0.5">10m ago</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* LOWER CONTAINER WORKSPACE CANVASES */}
      <div className="flex-1 flex h-full overflow-hidden relative">
        
        {/* =========================================================
            2. DOUBLE-TIER SIDEBAR PLATFORM LAYOUT
           ========================================================= */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 flex h-full shrink-0 transition-transform duration-300 lg:relative lg:transform-none pt-0
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          
          {/* FIRST TIER: Icon Dock Column (Black Strip Panel) */}
          <div className="w-[60px] bg-[#0A0A0A] border-r border-neutral-900 flex flex-col items-center py-4 justify-between">
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="w-9 h-9 bg-[#F5F216] rounded-md flex items-center justify-center font-black text-black text-sm cursor-pointer border border-black/10 shadow-sm">
                H
              </div>
              
              <div className="flex flex-col items-center gap-4 w-full px-2">
                <button onClick={() => setActiveTab('dashboard')} className={`w-10 h-10 flex items-center justify-center rounded-md transition-all ${activeTab === 'dashboard' ? 'text-[#F5F216] bg-neutral-900' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </button>

                <button onClick={() => setActiveTab('jobs')} className={`w-10 h-10 flex items-center justify-center rounded-md transition-all ${activeTab === 'jobs' ? 'text-[#F5F216] bg-neutral-900' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>

                <button onClick={() => setActiveTab('chats')} className={`w-10 h-10 flex items-center justify-center rounded-md transition-all ${activeTab === 'chats' ? 'text-[#F5F216] bg-neutral-900' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>

                <button onClick={() => setActiveTab('wallet')} className={`w-10 h-10 flex items-center justify-center rounded-md transition-all ${activeTab === 'wallet' ? 'text-[#F5F216] bg-neutral-900' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800 flex items-center justify-center text-xs text-neutral-400 cursor-pointer hover:border-white hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          {/* SECOND TIER: Category Directory Column (Dark Neutral Panel) */}
          <div className="w-[200px] bg-[#141414] text-white p-4 flex flex-col justify-between border-r border-black/10">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-900">
                <span className="font-black text-sm tracking-wide text-white uppercase">hadei system</span>
                <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden text-neutral-500 hover:text-white text-xs">✕</button>
              </div>

              {/* Navigation Directory Channels links */}
              <div className="space-y-4">
                <div>
                  <div className="text-[9px] font-black tracking-widest text-neutral-500 uppercase px-2 mb-1.5">Control Tower</div>
                  <div className="space-y-0.5">
                    {/* FIXED FONTS: Added text-sm and font-black / font-extrabold utility configurations to match specs */}
                    <button onClick={() => setActiveTab('dashboard')} className={`w-full text-left px-3 py-2 rounded-xs text-xs tracking-wide transition-all ${activeTab === 'dashboard' ? 'bg-[#222216] text-[#F5F216] font-black border-l-2 border-[#F5F216]' : 'text-neutral-400 font-extrabold hover:text-white hover:bg-neutral-900'}`}>
                      Dashboard
                    </button>
                    <button onClick={() => setActiveTab('jobs')} className={`w-full text-left px-3 py-2 rounded-xs text-xs tracking-wide transition-all ${activeTab === 'jobs' ? 'bg-[#222216] text-[#F5F216] font-black border-l-2 border-[#F5F216]' : 'text-neutral-400 font-extrabold hover:text-white hover:bg-neutral-900'}`}>
                      Open Job Briefs
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-[9px] font-black tracking-widest text-neutral-500 uppercase px-2 mb-1.5">Job Tracking</div>
                  <div className="space-y-0.5">
                    {/* FIXED FONTS: Replaced standard regular fonts with bold weights inside text rows */}
                    <button onClick={() => setActiveTab('contracts')} className={`w-full text-left px-3 py-2 rounded-xs text-xs tracking-wide transition-all ${activeTab === 'contracts' ? 'bg-[#222216] text-[#F5F216] font-black border-l-2 border-[#F5F216]' : 'text-neutral-400 font-extrabold hover:text-white hover:bg-neutral-900'}`}>
                      Active Contracts
                    </button>
                    <button onClick={() => setActiveTab('escrow')} className={`w-full text-left px-3 py-2 rounded-xs text-xs tracking-wide transition-all ${activeTab === 'escrow' ? 'bg-[#222216] text-[#F5F216] font-black border-l-2 border-[#F5F216]' : 'text-neutral-400 font-extrabold hover:text-white hover:bg-neutral-900'}`}>
                      Escrow Ledger
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions inside directory panel */}
            <div className="pt-4 border-t border-neutral-900 space-y-2">
              <button className="w-full bg-[#F5F216] text-black font-black text-[10px] py-2.5 px-3 rounded-xs text-center uppercase tracking-wider hover:bg-[#e2df14] transition-colors flex items-center justify-center gap-1">
                <span>+</span> Post New Job
              </button>
              <button onClick={() => navigate('/login')} className="w-full text-left text-neutral-500 hover:text-red-400 text-xs font-black px-3 py-2 rounded-xs transition-colors flex items-center gap-2">
                <span>➔</span> Log Out
              </button>
            </div>
          </div>
        </aside>

        {/* =========================================================
            3. MAIN CLIENT BODY CONTAINER (UNIFIED SYSTEM FILL)
           ========================================================= */}
        {/* FIXED CONTAINER COLOR: Changed bg-white to matching system canvas framework color bg-[#F9F9F9] */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#F9F9F9] flex flex-col xl:flex-row gap-8 custom-scrollbar">
          
          {/* Left Column Feed Canvas Area */}
          <div className="flex-1 space-y-6">
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl font-black text-black tracking-tight">
                Welcome back, Muhammed!
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm font-bold">
                Monitor live production parameters and active milestones for contracted talent.
              </p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-neutral-200 pb-2">
              <h2 className="text-xs font-black uppercase tracking-wider text-black">
                Active Project Pipelines
              </h2>
              <button className="border border-neutral-200 hover:border-black px-3 py-1.5 rounded-md font-black text-xs text-neutral-700 transition-colors flex items-center gap-1.5 bg-white">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Filter List
              </button>
            </div>

            {/* PRODUCTION ASSIGNED CONTRACTS LOOP */}
            <div className="space-y-4">
              {activeContracts.map((contract) => (
                <div key={contract.id} className="border border-neutral-200 rounded-md p-5 space-y-4 bg-white hover:border-black/20 transition-all shadow-xs">
                  
                  {/* Developer Identity Row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-50 pb-3">
                    <div className="flex items-center gap-3">
                      <img src={contract.avatar} alt={contract.developer} className="w-10 h-10 rounded-full object-cover border border-neutral-200" />
                      <div>
                        <span className="text-[9px] font-mono text-neutral-400 block">{contract.id}</span>
                        <h3 className="text-base font-black text-black tracking-tight uppercase">{contract.title}</h3>
                        <p className="text-xs font-bold text-neutral-500">
                          Assigned Professional: <span className="text-black font-black">{contract.developer}</span>
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-black text-[#F5F216] text-[9px] font-black uppercase tracking-wider rounded-sm shrink-0">
                      {contract.status}
                    </span>
                  </div>

                  {/* Financial Status parameters block */}
                  <div className="text-xs font-bold text-neutral-600 flex items-center gap-2">
                    <span>🔒 Escrow Funded: <strong className="text-black font-black">{contract.budget}</strong></span>
                  </div>

                  {/* Real-Time Custom Production Progress Slider Track */}
                  <div className="space-y-2 bg-neutral-50/60 p-4 rounded-md border border-neutral-100">
                    <div className="flex justify-between items-center text-xs text-neutral-600 font-medium">
                      <span className="truncate max-w-[80%]"><strong className="text-black font-black">Active Step:</strong> {contract.currentTask}</span>
                      <span className="font-black text-black shrink-0">{contract.progress}% Done</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#F5F216] border-r border-black/25" style={{ width: `${contract.progress}%` }} />
                    </div>
                  </div>

                  {/* Project Skill Tag matrices and operational CTA buttons */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {contract.tags.map((tag, idx) => (
                        <span key={idx} className="bg-neutral-50 text-neutral-500 border border-neutral-100 px-2 py-0.5 rounded-sm text-[9px] font-black tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full sm:w-auto bg-black text-white px-5 py-2 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-neutral-800 transition-all">
                      Review Deliverables
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column Canvas Area */}
          <div className="w-full xl:w-[280px] space-y-6 shrink-0">
            
            {/* Project Spent/Overview Cards component */}
            <div className="bg-white border border-neutral-200 rounded-md p-5 space-y-4 shadow-xs">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-black">
                Control Overview
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="border border-neutral-100 rounded-md p-3 bg-neutral-50/50 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase">Hired Talent</span>
                  <span className="text-xl font-black text-black">{clientAnalytics.activeTalent}</span>
                </div>
                <div className="border border-neutral-100 rounded-md p-3 bg-neutral-50/50 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase">Budget Transferred</span>
                  <span className="text-xl font-black text-black">{clientAnalytics.totalSpent}</span>
                </div>
              </div>
            </div>

            {/* Compliance Matrix Widget */}
            <div className="bg-white border border-neutral-200 rounded-md p-5 space-y-4 shadow-xs">
              <div className="flex justify-between items-center">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-black">
                  Network Framework Rules
                </h4>
                <button className="text-[10px] font-bold text-neutral-400 hover:text-black transition-colors uppercase">Rules ›</button>
              </div>
              <div className="border border-neutral-200 rounded-md overflow-hidden bg-white">
                <div className="p-4 space-y-1.5 bg-neutral-50/50">
                  <h5 className="text-xs font-black text-black uppercase tracking-tight leading-tight">
                    Milestone Escrow Guidelines
                  </h5>
                  <p className="text-[11px] text-neutral-500 font-bold leading-relaxed pt-1">
                    Funds are automatically kept secure inside custom escrow layers before any deployment processes take place.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}