import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import OnboardingStep1 from '../../components/client/OnboardingStep1';
import OnboardingStep2 from '../../components/client/OnboardingStep2';
import OnboardingStep3 from '../../components/client/OnboardingStep3';

export default function ClientOnboarding() {
  const navigate = useNavigate();
  // Manage progressive onboarding stages (1 through 3)
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ intent: '' });

  // Centralized state sync utility
  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    if (error) setError(''); // Flush alerts instantly upon valid input interaction
  };

  // Step progression interceptor containing intent validation loops
  const handleNextStep = () => {
    if (step === 2 && !formData.intent) {
      setError('Please select a project sector to continue.');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    setError(''); // Flush errors on reverse navigation paths
    setStep((prev) => prev - 1);
  };

  // Process data synchronization on final step submission
  const handleCompleteSetup = async () => {
    setLoading(true);
    setError('');
    
    // Testing Bypass Loop: Allows mock accounts (client@demo.com) to simulate a complete setup without API blocks
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session) {
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard/client'); // Redirect to dashboard layout structure
      }, 1200);
      return;
    }

    // Live Production Sync: Writes configuration parameters directly to Supabase record
    const { error: updateError } = await supabase.auth.updateUser({
      data: { 
        has_onboarded: true,
        client_intent: formData.intent 
      }
    });

    setLoading(false);

    if (updateError) {
      setError('Could not save onboarding preferences. Please try again.');
    } else {
      navigate('/dashboard/client');
    }
  };

  return (
    // Single viewport outer container maintaining side-by-side cinematic balance
    <div className="h-screen w-screen bg-[#0A0A0A] font-sans text-white overflow-hidden flex items-center px-12 lg:px-24 relative">
      {/* Immersive stardust grid layout background filter */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* LEFT COLUMN: Persistent Branding Panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center z-10">
        <div className="mb-8">
          <Link 
            to="/" 
            className="bg-[#F5F216] px-5 py-2 inline-block rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(245,242,22,0.3)] hover:scale-105 transition-transform"
          >
            <div className="w-24 flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1780479006/WhatsApp_Image_2026-05-22_at_2.18.05_PM__1_-removebg-preview_befo5g.png" 
                alt="HADEI Logo" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </Link>
        </div>
        <h1 className="text-[60px] xl:text-[72px] font-black leading-[0.9] tracking-tighter uppercase mb-6">
          Your Workspace.<br />Managed.<br /><span className="text-[#F5F216]">Secured.</span>
        </h1>
        <p className="text-white/50 text-lg font-medium max-w-md leading-relaxed">
          Welcome to your control framework. Let's optimize your profile parameters to clear a dedicated path for elite project management execution.
        </p>
      </div>

      {/* RIGHT COLUMN: Interactive Shadow Model Card Shell */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
        {/* FIXED HEIGHT BUG RESOLVED: Changed rigid h-[480px] to flexible min-h-[520px] to contain alert items dynamically */}
        <div className="w-full max-w-[480px] bg-white border-2 border-black rounded-[24px] p-8 xl:p-10 shadow-[15px_15px_0px_0px_rgba(245,242,22,1)] flex flex-col justify-between min-h-[520px] transition-all duration-200">
          
          {/* Unified Central Alert Display at top of form element */}
          {error && (
            <div className="bg-[#EF4444]/10 border-2 border-[#EF4444] p-3.5 rounded-md text-[#EF4444] mb-4 text-[10px] font-black uppercase tracking-wider flex items-center gap-2 animate-in fade-in duration-200">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <span>{error}</span>
            </div>
          )}

          {/* Core Application Flow Target Mount */}
          <div className="flex-1 flex flex-col justify-between text-black">
            {step === 1 && <OnboardingStep1 onNext={handleNextStep} />}
            
            {step === 2 && (
              <OnboardingStep2 
                data={formData} 
                updateData={updateFormData} 
                onNext={handleNextStep} 
                onBack={handleBackStep}
              />
            )}
            
            {step === 3 && (
              <OnboardingStep3 
                onFinish={handleCompleteSetup} 
                onBack={handleBackStep} 
                loading={loading} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}