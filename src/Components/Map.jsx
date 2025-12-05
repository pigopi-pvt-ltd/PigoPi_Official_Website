import React from "react";

const Map = () => {
  return (
    <div className="relative bg-black flex items-center justify-center py-4 px-8">
      <div className="w-full max-w-6xl md:h-[80vh] h-[50vh] rounded-2xl overflow-hidden shadow-2xl border-2 mb-8 border-zinc-900 bg-[#111112]">
        <iframe
          title="Pigopi Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.48253536007175!2d79.40026648274552!3d28.337056982377778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a001dab220e71d%3A0x7d76492e3814454f!2sDelishush!5e0!3m2!1sen!2sin!4v1710408435595!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          style={{
            filter: "invert(92%) hue-rotate(180deg) brightness(0.7) contrast(1)",
            background: "#111112"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;