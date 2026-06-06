export default function FreelancerWelcome() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">
          Freelancer Dashboard
        </span>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Welcome Freelancer
        </h1>

        <p className="mt-6 text-black/60 leading-relaxed">
          Discover projects, submit proposals, communicate with clients,
          manage your work, and grow your freelance career.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 border-2 border-black font-bold uppercase text-sm">
            Find Projects
          </button>

          <button className="px-6 py-3 border border-black/20 font-bold uppercase text-sm">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}