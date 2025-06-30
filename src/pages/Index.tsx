import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ArShield Cybertech - Your Digital Armour | Cybersecurity Solutions</title>
        <meta name="description" content="ArShield is your digital armour, providing enterprise-grade cybersecurity solutions with mythological precision. Protect your digital realm with advanced SOC, SIEM, threat detection, VAPT, and compliance services." />
        <meta name="keywords" content="cybersecurity, digital armour, ArShield, SOC, SIEM, threat detection, VAPT, compliance, enterprise security, firewall, data encryption, India" />
        <meta name="author" content="ArShield Cybertech Pvt. Ltd." />
        <meta property="og:title" content="ArShield Cybertech - Your Digital Armour" />
        <meta property="og:description" content="Protecting enterprises with mythological precision. Advanced cybersecurity solutions for the modern digital world." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arshield.in/" />
        <meta property="og:image" content="https://arshield.in/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arshield_cyber" />
        <meta name="twitter:title" content="ArShield Cybertech - Your Digital Armour" />
        <meta name="twitter:description" content="ArShield is your digital armour, providing enterprise-grade cybersecurity solutions with mythological precision." />
        <meta name="twitter:image" content="https://arshield.in/logo.png" />
        <link rel="canonical" href="https://arshield.in/" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection taglineFontSize="text-4xl md:text-7xl" />
        <ServicesPreview />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
