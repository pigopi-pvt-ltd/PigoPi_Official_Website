import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={
        "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg " +
        "transition-opacity duration-300 ease-in-out " +
        (visible ? "opacity-100" : "opacity-0 pointer-events-none") +
        " hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
        "animate-bounce"
      }
      aria-label="Go to top"
      title="Go to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default GoToTopButton;
