import React from "react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { ObjectiveCardExample } from "@/components/ObjectiveCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, BarChart3, Target, Award, ChartPie } from "lucide-react";

export default function AnimatedCardDemo() {
  const objectives = [
    {
      text: "Launch MSSP services",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      text: "Form core security team",
      icon: <Users className="h-5 w-5" />,
    },
    {
      text: "Establish hybrid SOC setup",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      text: "Onboard first 50 clients",
      icon: <Users className="h-5 w-5" />,
    },
    {
      text: "Achieve ₹4.15 Cr revenue",
      icon: <Target className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-100 translate-y-0">
            <h1 className="text-4xl md:text-6xl font-bold text-arshield-charcoal mb-6">
              Animated <span className="text-gradient">Cards</span>
            </h1>
            <p className="text-xl text-arshield-subtext mb-8">
              Interactive animated cards with framer-motion
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
              Strategic <span className="text-gradient">Objectives</span>
            </h2>
            <p className="text-arshield-gray text-lg mb-8">
              Animated cards showcasing our roadmap objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="transform transition-all duration-500 hover:-translate-y-2">
              <AnimatedCard title="Foundation Year" status="active">
                <h4 className="text-sm text-arshield-gray font-medium mb-3">Strategic Objectives</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Launch MSSP services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Form core security team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Establish hybrid SOC setup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Onboard first 50 clients</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChartPie className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Achieve ₹4.15 Cr revenue</span>
                  </li>
                </ul>
              </AnimatedCard>
            </div>

            {/* Card 2 */}
            <div className="transform transition-all duration-500 hover:-translate-y-2">
              <AnimatedCard title="Expansion Phase">
                <h4 className="text-sm text-arshield-gray font-medium mb-3">Strategic Objectives</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Expand AI-based security services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Launch cloud security offerings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Develop proprietary security tools</span>
                  </li>
                </ul>
              </AnimatedCard>
            </div>

            {/* Card 3 */}
            <div className="transform transition-all duration-500 hover:-translate-y-2">
              <AnimatedCard title="Innovation Phase">
                <h4 className="text-sm text-arshield-gray font-medium mb-3">Strategic Objectives</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Advanced threat intelligence platform</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">Automated incident response</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />
                    <span className="text-arshield-gray text-sm">International market entry</span>
                  </li>
                </ul>
              </AnimatedCard>
            </div>
          </div>

          <div className="mt-24 mb-12 text-center">
            <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
              Component <span className="text-gradient">Example</span>
            </h2>
            <p className="text-arshield-gray text-lg mb-8">
              Using the ObjectiveCard component
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ObjectiveCardExample />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 