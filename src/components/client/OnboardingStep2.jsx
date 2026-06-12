import React from 'react';

export default function OnboardingStep2({ data, updateData, onNext, onBack }) {
  // Sector config lists for matching user profiles
  const categories = [
    { id: 'video', label: 'Video Production', desc: 'Editors, colorists, and animators.' },
    { id: 'design', label: 'Visual Design', desc: 'UI/UX designers and brand strategists.' },
    { id: 'development', label: 'Creative Engineering', desc: 'Full-stack software developers.' },
    { id: 'strategy', label: 'Project Strategy', desc: 'Product managers and growth directors.' }
  ];

  return (
    <div className="flex flex-col h-full justify-between animate-in fade-in duration-300 flex-1">
      <div className="space-y-5">
        {/* Step Category Header Info */}
        <div className="space-y-1.5">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black bg-[#F5F216] px-2 py-0.5 rounded-md border border-black inline-block">
            Phase 02 // Intent Selection
          </span>
          <h3 className="text-2xl font-black text-black uppercase tracking-tight leading-tight">
            What are you looking to build?
          </h3>
        </div>

        {/* UPSCALED SELECTION PANEL GRID: Enhanced tracking scales to clear user layout strains */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {categories.map((cat) => {
            const isSelected = data.intent === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => updateData({ intent: cat.id })}
                // Height updated to h-28 to easily fit both title and paragraph without vertical squeezing
                className={`p-4 border-2 text-left rounded-[16px] transition-all flex flex-col justify-center h-28 relative ${
                  isSelected 
                    ? 'border-black bg-[#F5F216] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                    : 'border-black/10 bg-white hover:border-black/40 hover:scale-[1.01]'
                }`}
              >
                {/* Active index status ring marker */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-black" />
                )}
                
                {/* Upscaled Header Text label */}
                <span className="block font-black text-xs uppercase tracking-tight text-black">
                  {cat.label}
                </span>
                
                {/* Scaled Narrative Text Block providing high clarity reading distance values */}
                <span className="block text-[11px] text-black/50 leading-snug font-bold mt-1">
                  {cat.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FOOTER INTERACTION ACTIONS: Pushed down neatly to avoid baseline drift layout overlaps */}
      <div className="flex gap-3 pt-6 mt-auto bg-white border-t border-black/5">
        <button
          type="button"
          onClick={onBack}
          className="w-1/3 py-3.5 px-4 rounded-md border-2 border-black bg-white text-black font-black uppercase tracking-widest text-[11px] hover:bg-neutral-50 transition-all"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="w-2/3 py-3.5 px-6 rounded-md border-2 border-black bg-[#F5F216] text-black font-black uppercase tracking-widest text-[11px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffff00] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}