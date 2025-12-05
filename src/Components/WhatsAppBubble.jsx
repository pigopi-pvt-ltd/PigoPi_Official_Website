import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
  return (
    <a
      href="https://wa.me/9310043674"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex justify-center items-center shadow-lg hover:scale-110 transition-transform blink"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppBubble;
