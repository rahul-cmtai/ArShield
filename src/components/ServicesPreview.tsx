import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Cloud, Zap, Eye, Bell } from "lucide-react";

const ServicesPreview = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Shield,
      title: "Firewall Protection",
      description: "Lakshman Rekha for your digital perimeter",
      mythRef: "Like Lakshman's protective boundary",
      color: "text-red-500"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Brahmastra-level data protection",
      mythRef: "Unbreakable as Brahmastra",
      color: "text-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Garuda's wings over your cloud",
      mythRef: "Swift protection like Garuda",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Threat Detection",
      description: "Hanuman's vigilance in digital form",
      mythRef: "Ever-watchful like Hanuman",
      color: "text-yellow-500"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Surya's constant watch over systems",
      mythRef: "Continuous as Surya's light",
      color: "text-orange-500"
    },
    {
      icon: Bell,
      title: "Incident Response",
      description: "Bhima's strength in crisis",
      mythRef: "Powerful response like Bhima",
      color: "text-purple-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arshield-charcoal mb-4">
            Our <span className="text-gradient">Protection</span> Arsenal
          </h2>
          <p className="text-xl text-arshield-subtext max-w-3xl mx-auto">
            Discover how ancient wisdom meets modern cybersecurity to create an impenetrable digital fortress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={index}
                className={`group relative transition-all duration-500 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Orange glow effect on hover */}
                <div className="absolute -inset-0.5 bg-orange-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300 group-hover:duration-200 card-glow"></div>
                
                <Card 
                  className={`group cursor-pointer border-2 border-transparent hover:border-arshield-orange transition-all duration-500 transform relative bg-white z-10 ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-arshield-orange/20 to-arshield-orange/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`h-8 w-8 ${service.color} group-hover:animate-glow-pulse`} />
                      </div>
                      <div className="absolute inset-0 w-16 h-16 border-2 border-arshield-orange/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardTitle className="text-xl font-bold text-arshield-charcoal group-hover:text-arshield-orange transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-black mb-3 text-lg">
                      {service.description}
                    </CardDescription>
                    <div className="text-sm font-medium text-arshield-orange opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      🛡️ {service.mythRef}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-arshield-subtext mb-6">
            Ready to fortify your digital kingdom?
          </p>
          <div className="inline-flex items-center space-x-2 text-arshield-orange font-medium hover:text-arshield-orange/80 transition-colors duration-300 cursor-pointer group">
            <span>View All Services</span>
            <Shield className="h-5 w-5 group-hover:animate-shield-spin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
