import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    "Free Security Assessment",
    "24/7 Expert Support",
    "30-Day Money-Back Guarantee",
    "Enterprise-Grade Protection"
  ];

  // WhatsApp link with the provided phone number
  const whatsappLink = "https://wa.me/919930287895?text=Hi%20ArShield,%20I%20would%20like%20to%20request%20a%20free%20security%20audit.";

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
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Start Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-black hover:bg-white hover:text-arshield-charcoal px-10 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <a href="/contact" className="flex items-center">
                Schedule Demo
              </a>
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
