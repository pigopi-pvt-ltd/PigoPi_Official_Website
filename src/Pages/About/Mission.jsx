import { motion } from "framer-motion";

const Mission = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Driven by purpose, defined by results.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We started with a simple idea: to make the web a better, more
              functional place. Today, that mission has evolved into a
              comprehensive approach to digital transformation. We don't just
              build software; we build solutions that propel businesses forward.
            </p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col border-l-4 border-primary pl-4"
              >
                <span className="text-3xl font-bold text-slate-900">5+</span>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                  Years of Excellence
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col border-l-4 border-secondary pl-4"
              >
                <span className="text-3xl font-bold text-slate-900">150+</span>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                  Projects Delivered
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <motion.div
              variants={cardVariants}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">flag</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600">
                To empower businesses with cutting-edge digital solutions that
                foster growth, efficiency, and meaningful connections with their
                audience.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={cardVariants}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Vision
              </h3>
              <p className="text-slate-600">
                To be the global standard for digital innovation, where
                creativity meets engineering to solve the complex challenges of
                tomorrow.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-bold tracking-wider uppercase text-sm"
          >
            Our Core Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-slate-900 mt-2"
          >
            What we stand for
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Excellence */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-6">
              diamond
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Excellence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We don't settle for good. We strive for pixel-perfect designs and
              bug-free code in every deliverable.
            </p>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">
              group
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Collaboration
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We work with you, not just for you. Your success is our success,
              and we believe in open, honest communication.
            </p>
          </motion.div>

          {/* Innovation */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined text-4xl text-green-500 mb-6">
              lightbulb
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Innovation
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              The digital landscape is always changing. We stay ahead of the
              curve to keep your business future-proof.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
