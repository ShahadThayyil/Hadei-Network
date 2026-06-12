import React from 'react';

/**
 * OnboardingStep1 - Network Orientation
 * Explains HADEI's core philosophy of quality over quantity.
 */
export default function OnboardingStep1({ onNext }) {
  return (
    <div className="flex flex-col h-full justify-between animate-in fade-in duration-300">
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F5F216] bg-black px-2 py-1 rounded-xs inline-block">
            Phase 01 // Orientation
          </span>
          <h3 className="text-2xl font-black text-black uppercase tracking-tight">
            Welcome to a managed ecosystem
          </h3>
        </div>
        
        <p className="text-black/60 text-sm leading-relaxed font-medium">
          Hadei is not a crowded, chaotic marketplace. We are a managed talent network built strictly around trust, premium reliability, and long-term community growth. 
        </p>

        <div className="border-2 border-black/5 rounded-[16px] bg-neutral-50 p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-black mt-1.5 shrink-0" />
            <p className="text-xs font-bold text-black/70">No open bidding wars or spam applications.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-black mt-1.5 shrink-0" />
            <p className="text-xs font-bold text-black/70">Direct access to hand-picked, strictly vetted creative professionals.</p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-8 rounded-xs border-2 border-black bg-[#F5F216] text-black font-black uppercase tracking-widest text-[12px] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffff00] transition-all flex items-center justify-center gap-2 active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Begin Orientation →
        </button>
      </div>
    </div>
  );
}