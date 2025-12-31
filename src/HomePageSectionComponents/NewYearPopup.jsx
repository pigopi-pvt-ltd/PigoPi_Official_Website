import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Zap } from "lucide-react";

const NewYearRefreshPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 1 second after every refresh
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs once per refresh/mount

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-white/20 backdrop-blur-md">
          {/* Backdrop click to close (Optional) */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            {/* Top Festive Gradient Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-blue-600 transition-colors z-20"
            >
              <X size={18} />
            </button>

            <div className="p-10 text-center">
              {/* Animated Icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-blue-50 text-blue-600"
              >
                <Sparkles size={40} />
              </motion.div>

              <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                2026 <span className="text-blue-600">is Here.</span>
              </h2>
              <p className="text-slate-500 font-medium mb-8 leading-snug">
                The New Year demands a new digital standard. Let's build it
                together.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => (window.location.href = "#contact")}
                  className="w-full group flex items-center justify-center gap-3 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-200"
                >
                  <Zap size={18} fill="currentColor" />
                  Start 2026 Project
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Dismiss
                </button>
              </div>

              {/* Decorative PigoPi branding */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="h-1 w-1 rounded-full bg-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-300">
                  PigoPi 2026
                </span>
                <div className="h-1 w-1 rounded-full bg-blue-400" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewYearRefreshPopup;
