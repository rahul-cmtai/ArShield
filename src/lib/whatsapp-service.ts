/**
 * WhatsApp Integration Service for ArShield
 * Provides utility functions for WhatsApp messaging
 */

export interface WhatsAppMessage {
  text: string;
  timestamp: Date;
  isOutgoing: boolean;
}

export interface WhatsAppContact {
  name: string;
  phoneNumber: string;
  avatar?: string;
}

// Standard predefined messages that can be used throughout the app
export const predefinedMessages = {
  securityConsultation: "Hello, I'm interested in scheduling a security consultation with ArShield.",
  emergencySupport: "I need urgent cybersecurity assistance. Please help!",
  pricing: "Hi, I would like to know more about your pricing for cybersecurity services.",
  demo: "I'm interested in seeing a demo of your security solutions.",
  callback: "Please call me back to discuss cybersecurity services for my business.",
};

/**
 * Format phone number to international format for WhatsApp
 * @param phoneNumber - Phone number to format
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove all non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  
  // Ensure phone number starts with country code
  if (digitsOnly.startsWith('91')) {
    return digitsOnly;
  } else if (digitsOnly.startsWith('0')) {
    return `91${digitsOnly.substring(1)}`;
  } else {
    return `91${digitsOnly}`; // Default to India code
  }
};

/**
 * Generate WhatsApp URL with pre-filled message
 * @param phoneNumber - Phone number to message
 * @param message - Message to pre-fill
 * @returns WhatsApp URL
 */
export const generateWhatsAppUrl = (phoneNumber: string, message: string): string => {
  const formattedNumber = formatPhoneNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp chat with a message
 * @param phoneNumber - Phone number to message
 * @param message - Message to pre-fill
 */
export const openWhatsAppChat = (phoneNumber: string, message: string): void => {
  const url = generateWhatsAppUrl(phoneNumber, message);
  window.open(url, '_blank');
};

/**
 * WhatsApp Business API methods (for future implementation)
 * Note: Requires WhatsApp Business API access
 */
export const whatsappBusinessApi = {
  // To be implemented when Business API access is acquired
  sendTemplate: (templateName: string, parameters: Record<string, string>) => {
    console.log('WhatsApp Business API template message would be sent here', { templateName, parameters });
    // Implementation would go here when WhatsApp Business API is integrated
  },
  
  sendMediaMessage: (mediaUrl: string, caption: string) => {
    console.log('WhatsApp Business API media message would be sent here', { mediaUrl, caption });
    // Implementation would go here when WhatsApp Business API is integrated
  }
};

export default {
  predefinedMessages,
  formatPhoneNumber,
  generateWhatsAppUrl,
  openWhatsAppChat,
  whatsappBusinessApi
}; 