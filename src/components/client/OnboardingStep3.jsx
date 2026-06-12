import React from 'react';

/**
 * OnboardingStep3 - Operational Verification
 * Explains escrow and security policies before launching the dashboard.
 */
export default function OnboardingStep3({ onFinish, onBack, loading }) {
  return (
    <div className="flex flex-col h-full justify-between animate-in fade-in duration-300">
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F5F216] bg-black px-2 py-1 rounded-xs inline-block">
            Phase 03 // Safety Verification
          </span>
          <h3 className="text-2xl font-black text-black uppercase tracking-tight">
            Secure ecosystem compliance
          </h3>
        </div>

        <p className="text-black/60 text-sm leading-relaxed font-medium">
          To maintain absolute trust, all contracts on Hadei utilize our controlled milestone framework and secure payment layers.
        </p>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="border border-black px-2 py-0.5 font-black text-xs bg-neutral-100 rounded-xs">01</div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-black">Milestone Protection</h4>
              <p className="text-[11px] text-black/50 font-medium">Funds are securely locked in milestone layers before work begins.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="border border-black px-2 py-0.5 font-black text-xs bg-neutral-100 rounded-xs">02</div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-black">Controlled Flow</h4>
              <p className="text-[11px] text-black/50 font-medium">Payments are automatically released only when you inspect and sign off on deliverables.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-6 bg-white">
        <button
          type="button"
          onClick={onBack}
          disabled={loading}
          className="w-1/3 py-4 px-4 rounded-xs border-2 border-black bg-white text-black font-black uppercase tracking-widest text-[12px] hover:bg-neutral-50 transition-all disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onFinish}
          disabled={loading}
          className="w-2/3 py-4 px-8 rounded-xs border-2 border-black bg-[#F5F216] text-black font-black uppercase tracking-widest text-[12px] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffff00] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-50"
        >
          {loading ? "Initializing..." : "Complete Setup"}
        </button>
      </div>
    </div>
  );
}