
import { useEffect, useState } from 'react';
import { Shield, Eye, Lock, Zap, Brain, Search, Users, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CyberMythology = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mythologyLessons = [
    {
      concept: 'Zero Trust Security',
      mythological: 'Krishna\'s Advice: "Never trust blindly"',
      story: 'Krishna consistently warned against blind trust, teaching that even allies must be verified. In cybersecurity, Zero Trust means "never trust, always verify" - no user or device is trusted by default.',
      modern: 'Every access request is authenticated and authorized, regardless of location or user credentials.',
      icon: Shield,
      color: 'text-arshield-orange'
    },
    {
      concept: 'Encryption',
      mythological: 'Krishna\'s Coded Messages',
      story: 'Krishna often communicated through coded messages and symbols during wartime. His strategic communications were layered with meaning that only intended recipients could decode.',
      modern: 'Modern encryption transforms readable data into unreadable code, ensuring only authorized parties can access sensitive information.',
      icon: Lock,
      color: 'text-blue-600'
    },
    {
      concept: 'Phishing Attacks',
      mythological: 'Mareecha\'s Golden Deer Trick',
      story: 'Mareecha disguised himself as a golden deer to lure Rama away from Sita. This deception led to Sita\'s abduction - a perfect example of social engineering.',
      modern: 'Modern phishing attacks use attractive but fake communications to lure victims into revealing sensitive information or installing malware.',
      icon: Search,
      color: 'text-red-600'
    },
    {
      concept: 'Blockchain Verification',
      mythological: 'Ram Setu\'s Verified Stones',
      story: 'Each stone in Ram Setu was verified by writing "Ram" on it. Only verified stones could be used in the bridge construction, ensuring structural integrity.',
      modern: 'Blockchain creates an immutable ledger where each transaction is verified and linked to previous ones, ensuring data integrity.',
      icon: Target,
      color: 'text-green-600'
    },
    {
      concept: 'AI-Powered Cybersecurity',
      mythological: 'Krishna\'s Battlefield Foresight',
      story: 'Krishna\'s divine intelligence allowed him to predict enemy moves and strategize accordingly. His omniscient awareness guided the Pandavas to victory.',
      modern: 'AI systems analyze patterns and predict potential threats, providing intelligent defense strategies and automated response capabilities.',
      icon: Brain,
      color: 'text-purple-600'
    },
    {
      concept: 'IoT Security',
      mythological: 'Hanuman\'s Overlooked Tail',
      story: 'While Hanuman was focused on his mission in Lanka, his tail became a vulnerability when set on fire. He turned this weakness into a strength by burning down Lanka.',
      modern: 'IoT devices often have overlooked security vulnerabilities. Proper IoT security turns potential weaknesses into monitored assets.',
      icon: Zap,
      color: 'text-orange-600'
    },
    {
      concept: 'Incident Response',
      mythological: 'Hanuman\'s Lanka Escape',
      story: 'When captured in Lanka, Hanuman quickly assessed the situation, gathered intelligence, and executed a strategic escape while causing maximum disruption to the enemy.',
      modern: 'Effective incident response involves rapid assessment, containment, intelligence gathering, and strategic remediation to minimize damage.',
      icon: Eye,
      color: 'text-indigo-600'
    },
    {
      concept: 'Digital Forensics',
      mythological: 'Krishna\'s Investigation of Karna\'s Birth',
      story: 'Krishna meticulously investigated and revealed Karna\'s true identity as Kunti\'s son, using evidence and witness testimony to uncover the truth.',
      modern: 'Digital forensics involves systematic investigation of digital evidence to uncover the truth about security incidents and cyber crimes.',
      icon: Search,
      color: 'text-teal-600'
    },
    {
      concept: 'Cyber Kill Chain',
      mythological: 'Duryodhana\'s War Planning',
      story: 'Duryodhana\'s systematic approach to war involved reconnaissance, weaponization, delivery, exploitation, installation, and command & control - mirroring modern attack patterns.',
      modern: 'The Cyber Kill Chain maps the stages of a cyber attack, helping defenders understand and interrupt malicious activities.',
      icon: Target,
      color: 'text-rose-600'
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
              Cyber <span className="text-gradient">Mythology</span>
            </h1>
            <p className="text-xl text-arshield-subtext mb-8">
              Cybersecurity Lessons from Mahabharata & Ramayana
            </p>
            <p className="text-lg text-arshield-gray max-w-4xl mx-auto">
              Ancient epics contain timeless wisdom about strategy, deception, trust, and protection. 
              These mythological insights provide profound parallels to modern cybersecurity challenges, 
              offering both practical lessons and philosophical foundations for digital defense.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-arshield-charcoal mb-6">
              Where Ancient <span className="text-gradient">Wisdom</span> Meets Modern Security
            </h2>
            <p className="text-arshield-gray text-lg max-w-3xl mx-auto">
              The Mahabharata and Ramayana are not just epic tales but repositories of strategic wisdom. 
              From Krishna's counsel on trust to Hanuman's intelligence operations, these stories offer 
              profound insights into the art of protection and warfare - principles that remain relevant 
              in our digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mythology Lessons Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mythologyLessons.map((lesson, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-arshield-orange/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <lesson.icon className={`h-6 w-6 ${lesson.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-arshield-charcoal leading-tight">
                        {lesson.concept}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-arshield-orange font-semibold">
                    {lesson.mythological}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-arshield-charcoal mb-2">Mythological Wisdom:</h4>
                    <p className="text-arshield-gray text-sm leading-relaxed">{lesson.story}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-arshield-charcoal mb-2">Modern Application:</h4>
                    <p className="text-arshield-gray text-sm leading-relaxed">{lesson.modern}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-arshield-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              The <span className="text-arshield-orange">Philosophy</span> Behind ArShield
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Just as the ancient warriors carried shields blessed with divine protection, 
              modern enterprises need digital armor that combines technological strength with 
              strategic wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-arshield-orange mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Protection</h3>
              <p className="text-gray-300">
                Like Hanuman's invincible strength, our security solutions provide 
                unbreakable defense against cyber threats.
              </p>
            </div>
            <div className="text-center">
              <Eye className="h-16 w-16 text-arshield-orange mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Vigilance</h3>
              <p className="text-gray-300">
                Krishna's all-seeing awareness inspires our 24/7 monitoring and 
                threat detection capabilities.
              </p>
            </div>
            <div className="text-center">
              <Brain className="h-16 w-16 text-arshield-orange mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Wisdom</h3>
              <p className="text-gray-300">
                Ancient strategic wisdom combined with modern AI creates intelligent 
                defense systems that adapt and evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-arshield-orange/10 to-arshield-orange/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-arshield-charcoal mb-6">
            "धर्मो रक्षति रक्षितः"
          </blockquote>
          <p className="text-xl text-arshield-gray mb-4">
            "Dharma protects those who protect Dharma"
          </p>
          <p className="text-arshield-subtext">
            Just as righteousness protects the righteous, strong cybersecurity practices 
            protect those who implement them diligently.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberMythology;
