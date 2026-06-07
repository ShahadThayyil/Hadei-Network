import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, PlayCircle, CheckCircle2, ArrowRight, Play } from 'lucide-react'

export default function FreelancerVideoPlayer() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock data for the 8 onboarding videos (Matching the tutorials page)
  const [videos, setVideos] = useState([
    { id: 1, title: 'Introduction to the Network', duration: '2:15', progress: 100, completed: true, desc: 'Learn the core values of our platform, how we vet clients, and what it takes to succeed in our exclusive network.' },
    { id: 2, title: 'Setting Up a Winning Profile', duration: '4:30', progress: 100, completed: true, desc: 'A step-by-step guide to optimizing your portfolio, writing a compelling bio, and selecting the right skills to get matched.' },
    { id: 3, title: 'How Our Escrow System Works', duration: '3:45', progress: 45, completed: false, desc: 'Understand how your payments are protected. We cover milestone funding, releasing funds, and dispute resolution.' },
    { id: 4, title: 'Communicating with Clients', duration: '5:20', progress: 0, completed: false, desc: 'Best practices for professional communication, setting expectations, and using our built-in chat tools effectively.' },
    { id: 5, title: 'Submitting Milestones', duration: '2:50', progress: 0, completed: false, desc: 'How to properly submit work for approval and what to do if a client requests revisions.' },
    { id: 6, title: 'Managing Revisions & Feedback', duration: '4:10', progress: 0, completed: false, desc: 'Handling client feedback professionally and navigating the revision cycle without scope creep.' },
    { id: 7, title: 'Understanding Platform Fees', duration: '3:15', progress: 0, completed: false, desc: 'A transparent breakdown of how platform fees work, withdrawal methods, and tax documentation.' },
    { id: 8, title: 'Growing Your Freelance Business', duration: '6:00', progress: 0, completed: false, desc: 'Advanced tips on client retention, upselling services, and maintaining a top-tier rating on the platform.' },
  ])

  // Get current video based on URL param
  const currentVideoId = parseInt(id) || 1
  const currentVideo = videos.find(v => v.id === currentVideoId) || videos[0]

  // Handle marking a video as watched and auto-advancing
  const handleCompleteAndNext = () => {
    // Update local state to mark as complete (In a real app, send to backend)
    const updatedVideos = videos.map(v => 
      v.id === currentVideoId ? { ...v, completed: true, progress: 100 } : v
    )
    setVideos(updatedVideos)

    // Navigate to next video if available, otherwise back to orientation
    if (currentVideoId < videos.length) {
      navigate(`/tutorial/watch/${currentVideoId + 1}`)
    } else {
      navigate('/tutorial/freelancer')
    }
  }

  // Scroll to top when video changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentVideoId])

  return (
    <div className="min-h-screen w-full bg-gray-50/50 font-sans text-black flex flex-col">
      
      {/* Exact Navbar Provided */}
      <header className="sticky top-0 w-full bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between z-30">
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dmtzmgbkj/image/upload/v1780479006/f_webp/WhatsApp_Image_2026-05-22_at_2.18.05_PM__1_-removebg-preview_befo5g.png"
            alt="Platform Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        <button 
          onClick={() => navigate('/tutorial/freelancer')}
          className="text-sm font-semibold text-black border border-gray-300 px-4 py-2 rounded-sm hover:bg-gray-50 transition-colors"
        >
          Exit Player
        </button>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 flex-1 flex flex-col lg:flex-row gap-8">
        
        {/* ==================== LEFT PANE: VIDEO PLAYER ==================== */}
        <div className="flex-1 flex flex-col">
          
          {/* Back Navigation */}
          <button 
            onClick={() => navigate('/tutorial/freelancer')}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors w-fit mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Orientation
          </button>

          {/* Video Player Placeholder */}
          <div className="w-full aspect-video bg-black rounded-sm flex flex-col items-center justify-center relative overflow-hidden group">
            <Play className="w-16 h-16 text-white/80 group-hover:text-[#F5F216] group-hover:scale-110 transition-all duration-300 cursor-pointer" />
            
            {/* Fake Player Controls (Visual only) */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer">
                <div className="w-1/3 h-full bg-[#F5F216] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#F5F216] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Information */}
          <div className="mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-black mb-2 leading-tight">
                {currentVideo.id}. {currentVideo.title}
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                {currentVideo.desc}
              </p>
            </div>

            {/* Action Button */}
            <div className="shrink-0">
              <button 
                onClick={handleCompleteAndNext}
                className="w-full md:w-auto bg-black text-[#F5F216] text-sm font-bold px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                {currentVideoId === videos.length ? 'Complete Orientation' : 'Mark as Watched & Next'} 
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ==================== RIGHT PANE: PLAYLIST ==================== */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col">
          <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col h-full max-h-[calc(100vh-140px)]">
            
            {/* Playlist Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <h2 className="font-bold text-black">Course Content</h2>
              <span className="text-xs font-semibold text-gray-500 bg-gray-200 px-2 py-1 rounded-sm">
                {videos.filter(v => v.completed).length}/{videos.length} Watched
              </span>
            </div>

            {/* Playlist Items */}
            <div className="overflow-y-auto custom-scrollbar flex-1">
              <div className="flex flex-col">
                {videos.map((video) => {
                  const isActive = video.id === currentVideoId
                  
                  return (
                    <button
                      key={video.id}
                      onClick={() => navigate(`/tutorial/watch/${video.id}`)}
                      className={`flex items-start gap-3 p-4 text-left border-b border-gray-100 transition-colors hover:bg-gray-50
                        ${isActive ? 'bg-[#F5F216]/10 border-l-4 border-l-[#F5F216]' : 'border-l-4 border-l-transparent'}`
                      }
                    >
                      {/* Status Icon */}
                      <div className="mt-0.5 shrink-0">
                        {video.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-black" />
                        ) : isActive ? (
                          <PlayCircle className="w-5 h-5 text-black" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-gray-400">{video.id}</span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-bold truncate leading-tight ${isActive ? 'text-black' : 'text-gray-700'}`}>
                          {video.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-medium text-gray-500">{video.duration}</span>
                          {video.progress > 0 && !video.completed && (
                            <span className="text-[10px] font-bold text-gray-500 bg-gray-200 px-1.5 rounded-sm">
                              {video.progress}%
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}