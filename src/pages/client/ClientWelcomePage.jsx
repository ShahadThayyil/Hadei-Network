export default function ClientWelcome() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">
          Client Dashboard
        </span>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Welcome Client
        </h1>

        <p className="mt-6 text-black/60 leading-relaxed">
          Post projects, hire talented freelancers, manage contracts,
          review proposals, and track project progress from one place.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 border-2 border-black font-bold uppercase text-sm">
            Post a Project
          </button>

          <button className="px-6 py-3 border border-black/20 font-bold uppercase text-sm">
            Browse Freelancers
          </button>
        </div>
      </div>
    </div>
  );
}