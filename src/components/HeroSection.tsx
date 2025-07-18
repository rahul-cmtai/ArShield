"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, Phone, Eye, Lock, Zap, CheckCircle, ShieldAlert, Wifi } from "lucide-react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute -inset-[10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.4),transparent_30%),radial-gradient(circle_at_70%_20%,rgba(255,107,53,0.2),transparent_20%)] animate-slow-spin"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,107,53,0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-[15%] left-[10%] w-32 h-16 bg-black/30 backdrop-blur-sm border border-orange-500/20 rounded-md p-2 animate-float-random opacity-30">
        <div className="text-xs text-orange-500/70 font-mono">
          <div>{"<Shield>"}</div>
          <div className="pl-2">{"<Protect/>"}</div>
          <div>{"</Shield>"}</div>
        </div>
      </div>
      
      <div className="absolute bottom-[25%] right-[5%] w-32 h-16 bg-black/30 backdrop-blur-sm border border-orange-500/20 rounded-md p-2 animate-float-random opacity-30 delay-2000">
        <div className="text-xs text-orange-500/70 font-mono">
          <div>{"function encrypt() {"}</div>
          <div className="pl-2">{"secure();"}</div>
          <div>{"}"}</div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Side - Content */}
          <div className="text-left space-y-8">
            {/* New Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-sm text-orange-400 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              New
              <span className="text-white">Cyber Intelligence Shield</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                We Build <span className="text-orange-500 relative inline-block">
                  Protection
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/30 rounded-full"></span>
                </span>
                <br />
                for the <span className="text-orange-500 relative inline-block">
                  Digital Age
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/30 rounded-full"></span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Enterprise-Grade Security Solutions with an innovative approach.
                <br />
                Protecting your digital assets with precision and expertise.
              </p>
            </div>

            {/* Feature List */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  { text: "Advanced Firewall", icon: <Shield className="w-4 h-4 text-orange-500" /> },
                  { text: "24/7 Monitoring", icon: <Eye className="w-4 h-4 text-orange-500" /> },
                  { text: "Data Encryption", icon: <Lock className="w-4 h-4 text-orange-500" /> },
                  { text: "Threat Detection", icon: <ShieldAlert className="w-4 h-4 text-orange-500" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="text-orange-500">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="text-gray-300 text-sm font-medium flex items-center gap-2">
                      {item.text}
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,107,53,0.5)]"
              >
                <a href="https://wa.me/919930287895?text=Hi%20ArShield,%20I%20would%20like%20to%20request%20a%20free%20security%20audit." target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-black hover:text-black hover:bg-gray-800 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-orange-500/40"
              >
                <a href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-gray-400 text-sm mb-4">Trusted by great companies</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                    <div className="w-10 h-10 bg-orange-400 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                      B
                    </div>
                    <div className="w-10 h-10 bg-orange-300 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                  </div>
                  <span className="text-white font-semibold">4.9/5</span>
                  <span className="text-gray-400 text-sm">(500+ Reviews)</span>
                </div>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Images */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full h-[600px]">
              {/* Central Shield/Logo */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1500 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-black/50 backdrop-blur-md border-2 border-orange-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(255,107,53,0.3)]">
                    <Shield className="w-32 h-32 text-orange-500 animate-pulse" />
                  </div>
                  <div className="absolute -inset-4 rounded-full border-2 border-orange-500/20 animate-slow-spin"></div>
                  <div className="absolute -inset-8 rounded-full border border-orange-500/10 animate-slow-spin-reverse"></div>
                </div>
              </div>

              {/* Mini Features */}
              <div className="absolute top-10 right-16 transform rotate-12 w-16 h-16 bg-black/60 backdrop-blur-md rounded-lg border border-orange-500/20 flex items-center justify-center animate-float-random delay-1000">
                <Wifi className="w-8 h-8 text-orange-400" />
              </div>
              
              <div className="absolute bottom-20 left-20 transform -rotate-6 w-16 h-16 bg-black/60 backdrop-blur-md rounded-lg border border-orange-500/20 flex items-center justify-center animate-float-random delay-2000">
                <ShieldAlert className="w-8 h-8 text-orange-400" />
              </div>

              {/* Floating Security Cards */}
              {[
                { 
                  name: "Firewall Protection", 
                  icon: <Shield className="w-6 h-6 text-white" />,
                  position: "top-0 left-10",
                  color: "bg-orange-500",
                  delay: "delay-400"
                },
                { 
                  name: "24/7 Monitoring", 
                  icon: <Eye className="w-6 h-6 text-white" />,
                  position: "top-1/4 right-0",
                  color: "bg-orange-400",
                  delay: "delay-600"
                },
                { 
                  name: "Data Encryption", 
                  icon: <Lock className="w-6 h-6 text-white" />,
                  position: "bottom-1/4 left-0",
                  color: "bg-orange-600",
                  delay: "delay-800"
                },
                { 
                  name: "Threat Detection", 
                  icon: <Zap className="w-6 h-6 text-white" />,
                  position: "bottom-0 right-10",
                  color: "bg-orange-500",
                  delay: "delay-1000"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`absolute ${item.position} transition-all duration-1500 ${item.delay} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                >
                  <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl p-3 shadow-xl hover:shadow-[0_0_15px_rgba(255,107,53,0.2)] transition-all duration-300 hover:border-orange-500/30 animate-float-random">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-gray-400 text-xs">Advanced Protection</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Animated Rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-orange-500/5 animate-ping-slow opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-orange-500/5 animate-ping-slow opacity-30 delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full border border-orange-500/5 animate-ping-slow opacity-20 delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animations to global CSS */}
      <style>
        {`
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(3px); }
          50% { transform: translateY(5px) translateX(-5px); }
          75% { transform: translateY(8px) translateX(2px); }
        }
        
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slow-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.05); opacity: 0; }
        }
        
        .animate-float-random {
          animation: float-random 6s ease-in-out infinite;
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .animate-slow-spin-reverse {
          animation: slow-spin-reverse 25s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        `}
      </style>
    </section>
  )
}

export default HeroSection
