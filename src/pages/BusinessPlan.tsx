import { useEffect, useState } from 'react';
import { TrendingUp, Target, DollarSign, Users, Zap, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RoadmapTimeline } from '@/components/RoadmapTimeline';
import { Helmet } from "react-helmet-async";

const BusinessPlan = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roadmap = [
    {
      year: '2025',
      phase: 'Foundation Year',
      goals: [
        'Launch MSSP services',
        'Form core security team',
        'Establish hybrid SOC setup',
        'Onboard first 50 clients',
        'Achieve ₹4 Cr revenue'
      ],
      status: 'current'
    },
    {
      year: '2026',
      phase: 'Expansion Phase',
      goals: [
        'Expand AI-based security services',
        'Launch cloud security offerings',
        'Develop proprietary security tools',
        'Scale to 3 new regions',
        'Build strategic partnerships'
      ],
      status: 'planned'
    },
    {
      year: '2027',
      phase: 'Innovation Phase',
      goals: [
        'Advanced threat intelligence platform',
        'Automated incident response',
        'Compliance automation tools',
        'International market entry',
        'R&D investment in quantum security'
      ],
      status: 'planned'
    },
    {
      year: '2028',
      phase: 'Market Leadership',
      goals: [
        'Fully automated SOC operations',
        '200% client growth achievement',
        '₹50 Cr revenue milestone',
        'Industry recognition & awards',
        'IPO preparation phase'
      ],
      status: 'planned'
    }
  ];

  const revenueStreams = [
    {
      name: 'MSSP Subscriptions',
      description: 'Recurring revenue from managed security services',
      percentage: '40%',
      icon: TrendingUp,
      color: 'text-arshield-orange'
    },
    {
      name: 'VAPT & Consulting',
      description: 'One-time security assessments and consulting',
      percentage: '25%',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      name: 'Custom Solutions',
      description: 'Bespoke security implementations',
      percentage: '20%',
      icon: Zap,
      color: 'text-green-600'
    },
    {
      name: 'Tool Licensing',
      description: 'Revenue from proprietary security tools',
      percentage: '15%',
      icon: DollarSign,
      color: 'text-purple-600'
    }
  ];

  const financialGoals = [
    {
      year: '2025',
      revenue: '₹4.15 Cr',
      profit: '20%',
      clients: '50+',
      employees: '8'
    },
    {
      year: '2026',
      revenue: '₹12 Cr',
      profit: '25%',
      clients: '150+',
      employees: '20'
    },
    {
      year: '2027',
      revenue: '₹28 Cr',
      profit: '30%',
      clients: '300+',
      employees: '45'
    },
    {
      year: '2028',
      revenue: '₹50 Cr',
      profit: '35%',
      clients: '500+',
      employees: '75'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Plan | ArShield</title>
        <meta name="description" content="Explore ArShield's business plans for comprehensive cybersecurity solutions tailored to your organization." />
        <meta name="keywords" content="business plan, ArShield, cybersecurity, solutions, India" />
        <link rel="canonical" href="https://arshield.in/business-plan" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-arshield-charcoal mb-6">
                Business <span className="text-gradient">Growth</span>
              </h1>
              <p className="text-xl text-arshield-subtext mb-8">
                Strategic roadmap for cybersecurity excellence
              </p>
              <p className="text-lg text-arshield-gray max-w-3xl mx-auto">
                Our comprehensive 4-year growth strategy to become a leading cybersecurity 
                provider while maintaining profitable operations and exceptional service quality.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Section with Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
                2025-2028 <span className="text-gradient">Roadmap</span>
              </h2>
              <p className="text-arshield-gray text-lg">
                Our strategic journey to cybersecurity leadership
              </p>
            </div>

            <RoadmapTimeline roadmapData={roadmap} />
          </div>
        </section>

        {/* Revenue Streams */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
                Revenue <span className="text-gradient">Streams</span>
              </h2>
              <p className="text-arshield-gray text-lg">
                Diversified income sources for sustainable growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revenueStreams.map((stream, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stream.icon className={`h-8 w-8 ${stream.color}`} />
                    </div>
                    <CardTitle className="text-lg text-arshield-charcoal">{stream.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-arshield-orange">
                      {stream.percentage}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-arshield-gray text-sm">{stream.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-arshield-charcoal mb-4">
                Financial <span className="text-gradient">Projections</span>
              </h2>
              <p className="text-arshield-gray text-lg">
                Strategic growth targets and key metrics
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-arshield-charcoal text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Year</th>
                    <th className="px-6 py-4 text-left">Revenue</th>
                    <th className="px-6 py-4 text-left">Profit Margin</th>
                    <th className="px-6 py-4 text-left">Clients</th>
                    <th className="px-6 py-4 text-left">Employees</th>
                  </tr>
                </thead>
                <tbody>
                  {financialGoals.map((goal, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-arshield-orange/5' : 'hover:bg-gray-50'}`}>
                      <td className="px-6 py-4 font-bold text-arshield-charcoal">{goal.year}</td>
                      <td className="px-6 py-4 text-arshield-orange font-semibold">{goal.revenue}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{goal.profit}</td>
                      <td className="px-6 py-4 text-arshield-gray">{goal.clients}</td>
                      <td className="px-6 py-4 text-arshield-gray">{goal.employees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section> */}

        {/* Key Strategies */}
        <section className="py-16 bg-arshield-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Key <span className="text-arshield-orange">Strategies</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Core pillars of our growth strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'Continuous investment in R&D and cutting-edge security technologies',
                  icon: Zap
                },
                {
                  title: 'Client Success',
                  description: 'Exceptional service delivery and long-term client relationships',
                  icon: Users
                },
                {
                  title: 'Market Expansion',
                  description: 'Strategic expansion into new markets and service offerings',
                  icon: TrendingUp
                },
                {
                  title: 'Team Excellence',
                  description: 'Building world-class cybersecurity expertise and culture',
                  icon: Target
                },
                {
                  title: 'Operational Efficiency',
                  description: 'Streamlined processes and automated service delivery',
                  icon: Zap
                },
                {
                  title: 'Strategic Partnerships',
                  description: 'Collaborations with technology leaders and industry experts',
                  icon: Users
                }
              ].map((strategy, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <strategy.icon className="h-12 w-12 text-arshield-orange mb-4" />
                  <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                  <p className="text-gray-300">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BusinessPlan;
