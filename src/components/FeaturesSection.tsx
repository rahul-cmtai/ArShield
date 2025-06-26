
import { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Clock, Globe, Lock, Eye } from 'lucide-react';

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Protection",
      description: "Military-level security protocols inspired by ancient defensive strategies",
      mythRef: "Kavach of Karna",
      stats: "99.9% Threat Prevention"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Response",
      description: "Instant threat detection and mitigation with AI-powered systems",
      mythRef: "Speed of Hanuman",
      stats: "< 0.5s Response Time"
    },
    {
      icon: Clock,
      title: "24/7 SOC Monitoring",
      description: "Round-the-clock surveillance by our expert security teams",
      mythRef: "Vigilance of Garuda",
      stats: "365 Days Coverage"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Worldwide security coverage with localized threat intelligence",
      mythRef: "Reach of Vishnu",
      stats: "50+ Countries"
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify - the modern security paradigm",
      mythRef: "Wisdom of Chanakya",
      stats: "100% Verification"
    },
    {
      icon: Eye,
      title: "Advanced Threat Intelligence",
      description: "Predictive analytics to identify threats before they strike",
      mythRef: "Vision of Kalki",
      stats: "10M+ Threats Analyzed Daily"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleFeatures(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="cyber-grid h-full w-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arshield-charcoal mb-4">
            Why Choose <span className="text-gradient">ArShield</span>?
          </h2>
          <p className="text-xl text-arshield-subtext max-w-3xl mx-auto">
            Combining ancient wisdom with cutting-edge technology for unparalleled digital protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            
            return (
              <div 
                key={index}
                className={`group relative bg-white rounded-xl p-8 shadow-lg transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                } hover:scale-105 hover:shadow-xl border border-gray-100 hover:border-arshield-orange/20`}
              >
                {/* Floating Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-arshield-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-arshield-orange/10 to-arshield-orange/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-arshield-orange group-hover:animate-glow-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-arshield-charcoal mb-3 group-hover:text-arshield-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-arshield-gray leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-black font-bold text-base">🛡️ {feature.mythRef}</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-arshield-orange/10 to-arshield-orange/5 rounded-lg p-3">
                    <div className="text-arshield-orange font-bold text-lg">
                      {feature.stats}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-arshield-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="/cyber-mythology" className="inline-flex items-center space-x-2 text-arshield-orange font-medium hover:text-arshield-orange/80 transition-colors duration-300 cursor-pointer group">
            <span>Discover All Features</span>
            <Shield className="h-5 w-5 group-hover:animate-shield-spin" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
