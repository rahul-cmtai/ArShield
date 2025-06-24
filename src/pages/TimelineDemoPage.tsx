import React from "react";
import { TimelineDemo } from "@/components/TimelineDemo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TimelineDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-100 translate-y-0">
            <h1 className="text-4xl md:text-6xl font-bold text-arshield-charcoal mb-6">
              Timeline <span className="text-gradient">Component</span>
            </h1>
            <p className="text-xl text-arshield-subtext mb-8">
              Interactive scrolling timeline with framer-motion
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Demo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TimelineDemo />
        </div>
      </section>

      <Footer />
    </div>
  );
} 