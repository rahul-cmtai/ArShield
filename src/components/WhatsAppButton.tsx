import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useWhatsApp } from '../context/WhatsAppContext';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const { phoneNumber, isEnabled, sendMessage, predefinedMessages } = useWhatsApp();
  
  if (!isEnabled) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      setShowChat(false);
    }
  };

  const sendPredefinedMessage = (messageText: string) => {
    sendMessage(messageText);
    setShowChat(false);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
    setShowTooltip(false);
  };

  const quickOptions = [
    { 
      label: 'Security Consultation', 
      message: predefinedMessages.securityConsultation 
    },
    { 
      label: 'Pricing Inquiry', 
      message: predefinedMessages.pricing 
    },
    { 
      label: 'Emergency Support', 
      message: predefinedMessages.emergencySupport 
    },
    { 
      label: 'Request Demo', 
      message: predefinedMessages.demo 
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {showTooltip && !showChat && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 w-48 text-sm text-gray-700 transition-all duration-300 ease-in-out">
          Chat with us on WhatsApp
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
        </div>
      )}
      
      {showChat && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out">
          {/* Chat Header */}
          <div className="bg-arshield-orange p-4 text-white flex items-center justify-between">
            <div className="flex items-center">
              <ShieldCheck className="h-6 w-6 mr-2" />
              <div>
                <h3 className="font-semibold">ArShield Support</h3>
                <p className="text-xs">Typically replies within an hour</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:bg-arshield-orange/80 rounded-full p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat Body */}
          <div className="p-4 bg-gray-50 h-64 overflow-y-auto">
            <div className="bg-arshield-orange/10 p-3 rounded-lg mb-4 ml-4 relative">
              <p className="text-sm text-gray-800">
                Hello! 👋 Thanks for reaching out to ArShield. How can we help you with cybersecurity today?
              </p>
              <span className="text-xs text-gray-500 mt-1 block">Support Agent</span>
            </div>
            
            {/* Quick Reply Options */}
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Quick Options:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => sendPredefinedMessage(option.message)}
                    className="bg-white border border-arshield-orange/30 hover:bg-arshield-orange/5 text-xs p-2 rounded text-left text-gray-700 transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-arshield-orange focus:border-transparent"
            />
            <button 
              type="submit"
              className="bg-arshield-orange text-white px-4 py-2 rounded-r-lg hover:bg-arshield-orange/80"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
      
      <button
        onClick={toggleChat}
        onMouseEnter={() => !showChat && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-16 h-16 bg-arshield-orange rounded-full shadow-lg hover:bg-arshield-orange/80 transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <div className={`absolute animate-ping w-16 h-16 rounded-full bg-arshield-orange opacity-50 ${showChat ? 'hidden' : 'block'}`}></div>
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default WhatsAppButton; 