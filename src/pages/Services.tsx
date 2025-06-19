
import { useEffect, useState } from 'react';
import { Shield, Eye, Lock, Users, Zap, Brain, Cloud, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      category: 'Security Solutions',
      icon: Shield,
      color: 'text-arshield-orange',
      bgColor: 'bg-arshield-orange/10',
      mythology: 'Lakshman Rekha Protection',
      services: [
        'Network Security (Firewalls, IDS/IPS)',
        'Endpoint Security (EDR, XDR)',
        'Cloud Security & Application Security',
        'Data Security & Encryption',
        'Identity & Access Management (IAM, MFA, SSO)'
      ]
    },
    {
      category: 'Compliance & Risk Management',
      icon: Lock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      mythology: 'Dharma Guardian',
      services: [
        'VAPT (Vulnerability Assessment & Penetration Testing)',
        'Threat Hunting & Analysis',
        'SOC Services & Monitoring',
        'Framework Compliance (ISO 27001, NIST, GDPR)',
        'Risk Assessment & Management'
      ]
    },
    {
      category: 'Managed Security Services',
      icon: Eye,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      mythology: 'Krishna\'s Divine Vision',
      services: [
        '24x7 Threat Monitoring',
        'SIEM (Security Information & Event Management)',
        'Incident Response & Digital Forensics',
        'Security Operations Center (SOC)',
        'Managed Security Service Provider (MSSP)'
      ]
    },
    {
      category: 'Cyber Awareness & Training',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      mythology: 'Guru Dronacharya Training',
      services: [
        'Phishing Simulation & Awareness',
        'Red Team/Blue Team Exercises',
        'Continuous Security Drills',
        'Employee Security Training',
        'Cybersecurity Awareness Programs'
      ]
    },
    {
      category: 'Emerging Tech Security',
      icon: Brain,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      mythology: 'Hanuman\'s Intelligence',
      services: [
        'AI/ML in Cybersecurity',
        'Blockchain Security Solutions',
        'IoT Security Framework',
        'Post-Quantum Cryptography Readiness',
        'Advanced Threat Intelligence'
      ]
    },
    {
      category: 'Consulting Services',
      icon: Search,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      mythology: 'Vidura\'s Wisdom',
      services: [
        'Security Architecture Design',
        'Cybersecurity Strategy Development',
        'Compliance Consulting',
        'Security Audit & Assessment',
        'Custom Security Solutions'
      ]
    }
  ];

  const mythologyMappings = [
    {
      concept: 'Network Firewall',
      mythology: 'Lakshman Rekha',
      description: 'An invisible protective boundary that prevents unauthorized access'
    },
    {
      concept: 'SIEM Monitoring',
      mythology: 'Krishna\'s Divine Vision',
      description: 'All-seeing awareness of threats across the digital battlefield'
    },
    {
      concept: 'Incident Response',
      mythology: 'Hanuman\'s Lanka Escape',
      description: 'Swift, intelligent response to security breaches'
    },
    {
      concept: 'Endpoint Security',
      mythology: 'Abhimanyu\'s Chakravyuha',
      description: 'Multi-layered defense against sophisticated attacks'
    },
    {
      concept: 'Threat Intelligence',
      mythology: 'Krishna\'s Spies',
      description: 'Strategic intelligence gathering for proactive defense'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-arshield-charcoal mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-arshield-subtext mb-8">
              Comprehensive cybersecurity solutions inspired by ancient wisdom
            </p>
            <p className="text-lg text-arshield-gray max-w-3xl mx-auto">
              From network fortification to incident response, we provide end-to-end security 
              services that protect your digital assets with mythological precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-arshield-orange/20">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-arshield-charcoal">{service.category}</CardTitle>
                  <CardDescription className="text-arshield-orange font-semibold">
                    {service.mythology}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item, serviceIndex) => (
                      <li key={serviceIndex} className="text-arshield-gray text-sm flex items-start space-x-2">
                        <span className="text-arshield-orange text-xs mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mythology Mappings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
              Mythology Meets <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-arshield-gray text-lg">
              Ancient wisdom guides modern cybersecurity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mythologyMappings.map((mapping, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-arshield-charcoal mb-2">{mapping.concept}</h3>
                <p className="text-arshield-orange font-semibold mb-3">↔ {mapping.mythology}</p>
                <p className="text-arshield-gray text-sm leading-relaxed">{mapping.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-arshield-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Fortify Your Digital Realm?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let ArShield's expert team assess your security posture and design a custom defense strategy 
            tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-arshield-orange hover:bg-arshield-orange/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get Free Security Audit
            </a>
            <a
              href="/contact"
              className="border-2 border-arshield-orange text-arshield-orange hover:bg-arshield-orange hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Consult Our Experts
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
