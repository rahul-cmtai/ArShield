import { createContext, useContext, useState, ReactNode } from 'react';
import whatsappService, { predefinedMessages } from '@/lib/whatsapp-service';

interface WhatsAppContextType {
  phoneNumber: string;
  isEnabled: boolean;
  toggleWhatsApp: () => void;
  sendMessage: (message: string) => void;
  predefinedMessages: typeof predefinedMessages;
}

const defaultContext: WhatsAppContextType = {
  phoneNumber: "+919930287895", // ArShield WhatsApp number
  isEnabled: true,
  toggleWhatsApp: () => {},
  sendMessage: () => {},
  predefinedMessages,
};

const WhatsAppContext = createContext<WhatsAppContextType>(defaultContext);

export const useWhatsApp = () => useContext(WhatsAppContext);

interface WhatsAppProviderProps {
  children: ReactNode;
}

export const WhatsAppProvider = ({ children }: WhatsAppProviderProps) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const phoneNumber = "+919930287895"; // ArShield WhatsApp number

  const toggleWhatsApp = () => {
    setIsEnabled(prev => !prev);
  };

  const sendMessage = (message: string) => {
    if (!isEnabled) return;
    whatsappService.openWhatsAppChat(phoneNumber, message);
  };

  return (
    <WhatsAppContext.Provider 
      value={{ 
        phoneNumber, 
        isEnabled, 
        toggleWhatsApp, 
        sendMessage,
        predefinedMessages
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
}; 