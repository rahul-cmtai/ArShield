import { useEffect, useState } from 'react';
import { Target, Eye, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add animation styles
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const team = [
    {
      name: 'Swapnil Rajepawar',
      role: 'Founder & CEO',
      description: 'Strategic visionary with 15+ years in cybersecurity. Specializes in enterprise security architecture and leads ArShield with innovation and expertise.',
    },
    {
      name: 'Preeti Sonar',
      role: 'Co-founder & Sales Head',
      description: 'Relationship builder with exceptional business acumen. Drives growth through strategic partnerships and ensures client success with tailored security solutions.',
    },
    {
      name: 'Amruta Rajepawar',
      role: 'Admin & HR Head',
      description: 'Organizational mastermind who cultivates talent and maintains operational excellence. Creates a thriving workplace culture focused on innovation and growth.',
    },
    {
      name: 'Kumar Jay',
      role: 'CTO',
      description: 'Technical genius with deep expertise in cutting-edge security technologies. Leads product development and ensures ArShield stays ahead of emerging threats.',
    },
    {
      name: 'Rahul',
      role: 'Cyber Analyst',
      description: 'Security detective with keen analytical skills. Identifies vulnerabilities, investigates incidents, and implements proactive defense strategies to protect clients.',
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
              About <span className="text-gradient">ArShield</span>
            </h1>
            <p className="text-xl text-arshield-subtext mb-4">
              Your Digital Armour Against Evolving Cyber Threats
            </p>
            <div className="text-lg text-arshield-gray max-w-3xl mx-auto">
              <p className="mb-4">
                <strong>ArShield</strong> = <strong>A</strong>dvanced <strong>R</strong>esilient <strong>Shield</strong>
              </p>
              <p>
                "Ar" represents <strong>Advanced Resilient</strong> - symbolizing strength & adaptability.<br />
                "Shield" embodies our core mission of protection against cyber threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-arshield-charcoal mb-6">
                Founded with Purpose
              </h2>
              <p className="text-arshield-gray mb-6 leading-relaxed">
                Founded in 2025, ArShield emerged from a vision to create unbreakable digital defenses. 
                Led by Swapnil Rajepawar and a team of dedicated co-founders, we combine cutting-edge 
                technology with ancient wisdom to protect modern enterprises.
              </p>
              <p className="text-arshield-gray leading-relaxed">
                Just as the great shields of mythology protected against divine weapons, ArShield 
                safeguards your digital realm against the most sophisticated cyber threats.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-arshield-orange/20">
                <Shield className="h-16 w-16 text-arshield-orange mb-6 mx-auto" />
                <h3 className="text-xl font-bold text-arshield-charcoal text-center mb-4">
                  Digital Fortress
                </h3>
                <p className="text-arshield-gray text-center">
                  Protecting enterprises with mythological precision and modern innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-arshield-orange/10 to-arshield-orange/5 p-8 rounded-lg">
              <Target className="h-12 w-12 text-arshield-orange mb-6" />
              <h3 className="text-2xl font-bold text-arshield-charcoal mb-4">Vision</h3>
              <p className="text-arshield-gray leading-relaxed">
                To become a global leader in cybersecurity, safeguarding businesses and individuals 
                from evolving cyber threats through innovative solutions and unwavering dedication.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-25 p-8 rounded-lg">
              <Eye className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-arshield-charcoal mb-4">Mission</h3>
              <p className="text-arshield-gray leading-relaxed">
                Deliver innovative, reliable, and proactive cybersecurity solutions to ensure 
                the digital safety and growth of our clients while maintaining the highest 
                standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-arshield-gray text-lg">
              The guardians behind your digital fortress
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 
                           hover:scale-110 hover:-translate-y-2 cursor-pointer"
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`,
                  transformOrigin: 'center'
                }}
              >
                <div className="w-20 h-20 rounded-full bg-arshield-orange text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 
                              shadow-lg transform transition-transform duration-500 hover:rotate-12">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-arshield-charcoal mb-3 text-center">{member.name}</h3>
                <p className="text-arshield-orange font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-arshield-gray text-sm leading-relaxed text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-arshield-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2025', label: 'Founded' },
              { number: '5+', label: 'Team Members' },
              { number: '24/7', label: 'Monitoring' },
              { number: '100%', label: 'Commitment' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-arshield-orange">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
