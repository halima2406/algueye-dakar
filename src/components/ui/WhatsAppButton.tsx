import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/221781493510"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 md:bottom-12 md:right-12"
      aria-label="Contact on WhatsApp"
    >
      <MessageSquare fill="white" size={28} />
    </a>
  );
};

export default WhatsAppButton;