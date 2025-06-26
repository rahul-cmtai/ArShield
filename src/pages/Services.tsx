import { useEffect, useState } from 'react';
import { Shield, Eye, Lock, Users, Zap, Brain, Cloud, Search, ExternalLink, Radar, RefreshCw, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

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

  // WhatsApp link with the provided phone number
  const whatsappLink = "https://wa.me/919930287895?text=Hi%20ArShield,%20I%20would%20like%20to%20request%20a%20free%20security%20audit.";

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

      {/* VAPT Services Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
              VAPT <span className="text-gradient">Services</span>
            </h2>
            <p className="text-arshield-gray text-lg max-w-3xl mx-auto">
              Our comprehensive Vulnerability Assessment & Penetration Testing services help identify, analyze, and remediate security weaknesses in your infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Internal PT */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-arshield-orange/20">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-arshield-charcoal">Internal Penetration Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-arshield-gray mb-4">
                  Evaluate risks if an attacker gains internal access (post-breach scenario).
                </p>
                <ul className="space-y-2">
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Simulates insider threats and lateral movement</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Identifies privilege escalation paths</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Tests internal network segmentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* External PT */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-arshield-orange/20">
              <CardHeader>
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <ExternalLink className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-arshield-charcoal">External Penetration Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-arshield-gray mb-4">
                  Identifies vulnerabilities that could be exploited by external attackers.
                </p>
                <ul className="space-y-2">
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Tests public-facing infrastructure</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Evaluates web applications and APIs</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Identifies perimeter security weaknesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Vulnerability Assessment */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-arshield-orange/20">
              <CardHeader>
                <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <Radar className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-arshield-charcoal">Vulnerability Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-arshield-gray mb-4">
                  Automated scanning of IT infrastructure for known vulnerabilities.
                </p>
                <ul className="space-y-2">
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Covers servers, endpoints, databases, network devices, and applications</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Based on updated vulnerability databases (CVEs, threat intelligence feeds)</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Provides a prioritized list of known security flaws and misconfigurations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Vulnerability Management */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-arshield-orange/20">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-arshield-charcoal">Vulnerability Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-arshield-gray mb-4">
                  Continuous lifecycle management of vulnerabilities from detection to closure.
                </p>
                <ul className="space-y-2">
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Includes risk scoring, remediation tracking, and revalidation of fixed issues</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Helps meet compliance requirements and align with cybersecurity frameworks (ISO 27001, NIST, etc.)</span>
                  </li>
                  <li className="text-arshield-gray text-sm flex items-start space-x-2">
                    <span className="text-arshield-orange text-xs mt-1">•</span>
                    <span>Ensures ongoing risk reduction and security posture improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Deliverables */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-arshield-charcoal mb-6">
              <CheckCircle className="inline-block mr-2 text-arshield-orange" size={24} />
              Deliverables
            </h3>
            <ul className="space-y-3 pl-10">
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Executive summary and technical report</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Detailed findings with severity ratings (CVSS-based)</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Proof-of-concept for exploited vulnerabilities</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Step-by-step remediation guidelines</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Optional remediation validation test</span>
              </li>
            </ul>
          </div>

          {/* Mitigation Support */}
          <div className="bg-arshield-orange/10 p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-arshield-charcoal mb-4">Mitigation Support</h3>
            <p className="text-arshield-gray mb-6">
              We provide a private streaming channel (e.g., YouTube) with a comprehensive library of resources for patching identified vulnerabilities. 
              These resources are organized by category and are referenced in our reports as "Good Reads" for your team.
            </p>
            <p className="text-arshield-gray font-semibold">
              Access is request-based and exclusive to our clients.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-arshield-charcoal mb-6">
              <Zap className="inline-block mr-2 text-arshield-orange" size={24} />
              Why Choose Us?
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Certified ethical hackers (CEH, OSCP, etc.)</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Proven methodologies (OWASP, PTES, NIST)</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Custom scope based on client environment</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Zero downtime, non-intrusive testing</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>Post-assessment guidance and support</span>
              </li>
              <li className="text-arshield-gray flex items-start">
                <span className="text-arshield-orange font-bold mr-2">•</span>
                <span>30-Day Money-Back Guarantee <Link to="/terms-and-conditions" className="text-arshield-orange hover:underline text-sm">(Terms & Conditions apply)</Link></span>
              </li>
            </ul>
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
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-arshield-orange hover:bg-arshield-orange/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Free Security Audit
            </a>
            <a
              href="/contact"
              className="border-2 border-arshield-orange text-arshield-orange hover:bg-arshield-orange hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Consult Our Experts
            </a>
            <div className="w-full text-center mt-4 text-gray-400 text-sm">
              By contacting us, you agree to our <a href="/privacy-policy" className="text-arshield-orange hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
