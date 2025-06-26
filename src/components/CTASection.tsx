
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    "Free Security Assessment",
    "24/7 Expert Support",
    "30-Day Money-Back Guarantee",
    "Enterprise-Grade Protection"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-arshield-charcoal via-arshield-gray to-arshield-charcoal relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10"></div>
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-arshield-orange rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <Shield className="h-16 w-16 text-arshield-orange animate-glow-pulse" />
                <div className="absolute inset-0 border-2 border-arshield-orange rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Fortify Your
              <span className="block text-gradient">Digital Kingdom?</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join 500+ enterprises who trust ArShield to protect their most valuable digital assets with mythological-strength cybersecurity.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-gray-300 bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10 hover:border-arshield-orange/30 transition-all duration-300"
              >
                <CheckCircle className="h-5 w-5 text-arshield-orange flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-arshield-orange hover:bg-arshield-orange/90 text-white px-10 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-arshield-orange/25"
            >
              Start Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-black hover:bg-white hover:text-arshield-charcoal px-10 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 mb-4">Trusted by leading enterprises worldwide</p>
            <div className="flex items-center justify-center space-x-8 text-gray-500">
              <div className="text-2xl font-bold">500+</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold">99.9%</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold">50+</div>
            </div>
            <div className="flex items-center justify-center space-x-8 text-xs text-gray-400 mt-2">
              <span>Enterprises</span>
              <span>Uptime</span>
              <span>Support</span>
              <span>Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
