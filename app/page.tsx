import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import DifferentSection from '@/components/DifferentSection';
import SamplesSection from '@/components/SamplesSection';
import PerfectFor from '@/components/PerfectFor';
import TrustSection from '@/components/TrustSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhySection />
      <FeaturesSection />
      <HowItWorks />
      <DifferentSection />
      <SamplesSection />
      <PerfectFor />
      <TrustSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

