import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children, heading, description, footerText, footerLinkLabel, footerLinkTo }) {
  return (
    <div className="h-screen w-screen bg-[#0A0A0A] font-sans text-white overflow-hidden flex items-center px-12 lg:px-24 relative">
      {/* Cinematic Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Left Panel: Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center z-10">
        <div className="mb-8">
          {/* RESTORED: Classic Rectangular Button with Yellow Background & Simple Curvature */}
          <Link 
            to="/" 
            className="bg-[#F5F216] px-5 py-2 inline-block rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(245,242,22,0.3)] hover:scale-105 transition-transform"
          >
            <div className="w-24 flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1780479006/WhatsApp_Image_2026-05-22_at_2.18.05_PM__1_-removebg-preview_befo5g.png" 
                alt="HADEI Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </Link>
        </div>

        <h1 className="text-[60px] xl:text-[72px] font-black leading-[0.9] tracking-tighter uppercase mb-6">
          Professional<br />Creative Talent.<br />
          <span className="text-[#F5F216]">Delivered.</span>
        </h1>
        <p className="text-white/50 text-lg font-medium max-w-md leading-relaxed">
          {description || "A managed talent network built for all creative professionals. Whether you are a designer, developer, or visual storyteller, Hadei provides a secure workspace built on trust and reliability."}
        </p>
      </div>

      {/* Right Panel: Shadow Model Card (No Internal Scroll) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
        <div className="w-full max-w-[460px] bg-white border-2 border-black rounded-[24px] p-8 xl:p-10 shadow-[15px_15px_0px_0px_rgba(245,242,22,1)] flex flex-col">
          <h2 className="text-black text-2xl font-black tracking-tighter mb-6 uppercase">
            {heading}
          </h2>
          
          <div className="text-black">
            {children}
          </div>

          {footerText && (
            <p className="text-center text-[10px] font-black text-black/40 uppercase tracking-tight mt-6 border-t border-black/5 pt-4">
              {footerText} <Link to={footerLinkTo} className="text-black border-b-2 border-[#F5F216] hover:bg-[#F5F216] transition-colors">{footerLinkLabel}</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}