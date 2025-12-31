import { motion } from "framer-motion";

export default function ContactAndFooter() {
  // Variants for the staggered contact items
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden h-full min-h-[500px]"
          >
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/10"
              >
                Contact Us
              </motion.span>
              <h2 className="text-4xl font-bold mb-6">
                Let's build something amazing together.
              </h2>
              <p className="text-slate-300 text-lg mb-12">
                Reach out to start your digital transformation journey. We are
                ready to help.
              </p>

              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                className="space-y-6"
              >
                {/* Email Item */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-primary transition-colors flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Email us
                    </p>
                    <p className="font-semibold text-lg">info@pigo-pi.com</p>
                  </div>
                </motion.div>

                {/* Call Item */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-secondary transition-colors flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Call us
                    </p>
                    <p className="font-semibold text-lg">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                {/* Location Item */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-green-500 transition-colors flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Visit us
                    </p>
                    <p className="font-semibold text-sm">
                      C/o AJAY KUMAR KESHRI, VILL-SONBARSA, Prasadi English,
                      Arwal, Arwal-804401, Bihar
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Background Decorative Blobs with pulse animation */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"
            />
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 flex flex-col justify-center h-full min-h-[500px]"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    First Name
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900"
                    placeholder="John"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Last Name
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900 resize-none"
                  placeholder="Tell us about your project..."
                  rows="4"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-fuchsia-600 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-primary/25 mt-4 flex justify-center items-center gap-2"
                type="button"
              >
                Send Message
                <span className="material-symbols-outlined text-sm">send</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
