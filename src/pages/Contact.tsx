import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Shield, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWhatsApp } from '@/context/WhatsAppContext';
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { sendMessage } = useWhatsApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [result, setResult] = useState("");
 
  // Web3Forms access key - replace with your actual key
  const accessKey = "be29041c-4fb1-4a96-ba90-c139b00a2447";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending....");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Add access key to form data
    formData.append("access_key", accessKey);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = "Hello ArShield, I'd like to discuss cybersecurity solutions for my business.";
    sendMessage(message);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Mumbai, Maharashtra', 'India'],
      color: 'text-arshield-orange'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 99302 87895', '+91 99302 87895'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Info@arshieldtech.com'],
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', '24/7 Emergency Support'],
      color: 'text-purple-600'
    }
  ];

  const services = [
    'Network Security',
    'Endpoint Security',
    'Cloud Security',
    'VAPT Testing',
    'SOC Services',
    'Compliance Consulting',
    'Incident Response',
    'Security Training',
    'Custom Solutions',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact ArShield | Cybersecurity Consultation</title>
        <meta name="description" content="Contact ArShield for a free cybersecurity audit, consultation, or to discuss your security needs. Our experts are ready to help you." />
        <meta name="keywords" content="contact ArShield, cybersecurity consultation, free audit, India, security experts" />
        <link rel="canonical" href="https://arshield.in/contact" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-arshield-charcoal mb-6">
              Contact <span className="text-gradient">ArShield</span>
            </h1>
            <p className="text-xl text-arshield-subtext mb-8">
              Ready to fortify your digital defenses?
            </p>
            <p className="text-lg text-arshield-gray max-w-3xl mx-auto mb-8">
              Get in touch with our cybersecurity experts for a consultation, security audit, 
              or to discuss your specific security needs. We're here to help protect your digital realm.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                className="bg-arshield-orange hover:bg-arshield-orange/80 text-white py-3 text-lg font-semibold"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <CardTitle className="text-lg text-arshield-charcoal">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-arshield-gray text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-arshield-charcoal mb-6">
                  Send us a <span className="text-gradient">Message</span>
                </h2>
                <p className="text-arshield-gray mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden input for Web3Forms access key */}
                  <input type="hidden" name="access_key" value={accessKey} />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-arshield-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-arshield-orange focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-arshield-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-arshield-orange focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-arshield-charcoal mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-arshield-orange focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-arshield-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-arshield-orange focus:border-transparent"
                        placeholder="+91 99302 87895"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-arshield-charcoal mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-arshield-orange focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-arshield-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-arshield-orange focus:border-transparent"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-arshield-orange hover:bg-arshield-orange/90 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  {result && (
                    <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
                      result === "Sending...." 
                        ? "bg-blue-100 text-blue-700"
                        : result === "Form Submitted Successfully" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-red-100 text-red-700"
                    }`}>
                      {result}
                    </div>
                  )}
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-arshield-charcoal mb-4">
                    Get a Free Security Audit
                  </h3>
                  <div className="bg-gradient-to-r from-arshield-orange/10 to-arshield-orange/5 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <Shield className="h-12 w-12 text-arshield-orange" />
                      <div>
                        <h4 className="text-lg font-semibold text-arshield-charcoal">
                          Complimentary Security Assessment
                        </h4>
                        <p className="text-arshield-gray">
                          Worth ₹50,000 - Absolutely Free
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-arshield-gray text-sm">
                      <li>• Network vulnerability scanning</li>
                      <li>• Security policy review</li>
                      <li>• Risk assessment report</li>
                      <li>• Personalized recommendations</li>
                      <li>• 30-minute consultation call</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-arshield-charcoal mb-4">
                    Why Choose ArShield?
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Expert team with 15+ years experience',
                      '24/7 SOC monitoring and support',
                      'Compliance with global standards',
                      'Mythology-inspired security approach',
                      'Proven track record of success'
                    ].map((reason, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-arshield-orange rounded-full"></div>
                        <span className="text-arshield-gray">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-arshield-charcoal text-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Emergency Support</h4>
                  <p className="text-gray-300 mb-4">
                    Facing a security incident? Our emergency response team is available 24/7.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Phone className="h-5 w-5 text-arshield-orange" />
                    <span className="text-arshield-orange font-semibold">+91 99302 87895</span>
                  </div>
                  <Button 
                    className="w-full bg-arshield-orange hover:bg-arshield-orange/80 text-white"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
