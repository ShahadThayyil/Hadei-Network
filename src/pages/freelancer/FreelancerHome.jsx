import { useState } from 'react'
import { Briefcase, Calendar, MapPin, Clock, DollarSign, CheckCircle2, Filter, ChevronRight, Bookmark } from 'lucide-react'

export default function FreelancerHome() {
  // Mock Data: Platform Jobs
  const [jobs] = useState([
    {
      id: 1,
      title: 'Senior React Developer for SaaS Dashboard',
      client: 'TechNova Solutions',
      verified: true,
      type: 'Fixed Price',
      budget: '$2,500 - $4,000',
      duration: '1-3 months',
      posted: '2 hours ago',
      tags: ['React', 'Tailwind CSS', 'Redux'],
      description: 'Looking for an experienced frontend architect to rebuild our analytics dashboard. Must have strong experience with complex state management and responsive layouts.'
    },
    {
      id: 2,
      title: 'MERN Stack Developer for E-commerce MVP',
      client: 'Elevate Commerce',
      verified: true,
      type: 'Hourly',
      budget: '$35.00 - $50.00 / hr',
      duration: '3-6 months',
      posted: '5 hours ago',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      description: 'Need a full-stack developer to help us launch our MVP. You will be responsible for setting up the database schema, API endpoints, and integrating the frontend.'
    },
    {
      id: 3,
      title: 'GSAP Animation Specialist for Landing Page',
      client: 'Creative Studio X',
      verified: false,
      type: 'Fixed Price',
      budget: '$800',
      duration: 'Less than 1 month',
      posted: '1 day ago',
      tags: ['GSAP', 'HTML5', 'CSS3'],
      description: 'We have a Figma design that needs to be brought to life. Looking for smooth, physics-based scroll animations and a premium glassmorphism feel.'
    }
  ])

  // Mock Data: Community Posts & Events
  const [posts] = useState([
    {
      id: 1,
      type: 'Workshop',
      title: 'Mastering Advanced GSAP Timelines',
      date: 'June 15, 2026',
      time: '10:00 AM EST',
      attendees: 124,
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 2,
      type: 'Event',
      title: 'Freelancer Networking Meetup (Virtual)',
      date: 'June 18, 2026',
      time: '2:00 PM EST',
      attendees: 340,
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=500&auto=format&fit=crop'
    }
  ])

  return (
    <div className="w-full h-full p-4 md:p-8 overflow-y-auto custom-scrollbar bg-white text-black font-sans">
      
      {/* Header Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, Muhammed!</h1>
        <p className="text-sm text-gray-500 mt-1">Here is what is happening in the network today.</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* ==================== LEFT COLUMN: MAIN JOB FEED ==================== */}
        <div className="flex-1 w-full flex flex-col gap-4">
          
          {/* Feed Controls */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <h2 className="text-lg font-bold">Recommended Jobs</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-sm text-xs font-semibold hover:bg-gray-50 transition-colors">
                <Filter size={14} /> Filter
              </button>
            </div>
          </div>

          {/* Job List */}
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <div key={job.id} className="border border-gray-200 rounded-sm p-5 hover:border-black transition-colors bg-white group cursor-pointer">
                
                {/* Job Header */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-base font-bold group-hover:underline decoration-2 underline-offset-2">{job.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-gray-600">{job.client}</span>
                      {job.verified && (
                        <div className="flex items-center gap-1 text-green-600 bg-green-50 px-1.5 py-0.5 rounded-sm">
                          <CheckCircle2 size={12} />
                          <span className="text-[10px] font-bold">Payment Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-black transition-colors shrink-0 p-1">
                    <Bookmark size={18} />
                  </button>
                </div>

                {/* Job Specs */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-600 my-4">
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} className="text-black" />
                    <span className="text-black font-bold">{job.budget}</span> <span className="text-gray-400">({job.type})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {job.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> Posted {job.posted}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Tags & Action */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="bg-black text-[#F5F216] text-xs font-bold px-4 py-2 rounded-sm hover:bg-gray-800 transition-colors shrink-0">
                    Apply Now
                  </button>
                </div>

              </div>
            ))}
          </div>

          <button className="w-full py-3 mt-2 border border-gray-200 rounded-sm text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
            Load More Jobs
          </button>
        </div>

        {/* ==================== RIGHT COLUMN: POSTS & EVENTS ==================== */}
        <div className="w-full xl:w-[380px] flex flex-col gap-6 shrink-0">
          
          {/* Profile Quick Stats (Optional side widget) */}
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-5">
            <h3 className="text-sm font-bold mb-4">Your Week at a Glance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-sm p-3">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Profile Views</span>
                <span className="text-xl font-bold">14</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-sm p-3">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Invites</span>
                <span className="text-xl font-bold">2</span>
              </div>
            </div>
          </div>

          {/* Events & Workshops */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider">Community Events</h2>
              <button className="text-xs font-bold text-gray-500 hover:text-black transition-colors flex items-center">
                View All <ChevronRight size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-sm overflow-hidden bg-white hover:border-black transition-colors cursor-pointer group">
                  <div className="h-24 w-full overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 bg-[#F5F216] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {post.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-3 group-hover:underline decoration-2 underline-offset-2">{post.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} /> {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} /> {post.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}