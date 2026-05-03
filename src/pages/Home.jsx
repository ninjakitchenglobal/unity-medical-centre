import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import AboutSection from '../components/landing/AboutSection';
import DoctorsSection from '../components/landing/DoctorsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
