import Navbar from '../../components/public/Navbar'
import HeroSection from '../../components/public/HeroSection'
import HowItWorksSection from '../../components/public/HowItWorksSection'
import AudienceSections from '../../components/public/AudienceSections'
import CTABanner from '../../components/public/CTABanner'
import Footer from '../../components/public/Footer'

export default function LandingPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection />
        <HowItWorksSection />
        <AudienceSections />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
