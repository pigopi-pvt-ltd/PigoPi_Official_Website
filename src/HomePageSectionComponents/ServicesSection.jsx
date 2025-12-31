import { motion } from "framer-motion";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            // Removed once: true so it repeats
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-slate-600 text-lg">
              Comprehensive digital solutions tailored to your business needs.
              From concept to code, we cover it all.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            className="text-primary font-semibold flex items-center hover:translate-x-1 transition"
            href="/services"
          >
            View all services
            <span className="material-symbols-outlined ml-1">
              arrow_forward
            </span>
          </motion.a>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // amount: 0.1 means animation starts when 10% of the grid is visible
          viewport={{ amount: 0.1 }}
        >
          {/* Card 01 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-slate-700 group-hover:text-white">
                  smartphone
                </span>
              </div>
              <span className="text-4xl font-bold text-slate-200 group-hover:text-primary/20 transition-colors">
                01
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Mobile Development
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Native and cross-platform mobile applications designed for
              performance and user engagement.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                React Native & Flutter
              </li>
              <li className="flex items-center text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                iOS (Swift) & Android (Kotlin)
              </li>
            </ul>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-slate-700 group-hover:text-white">
                  language
                </span>
              </div>
              <span className="text-4xl font-bold text-slate-200 group-hover:text-secondary/20 transition-colors">
                02
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Web Development
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Scalable, secure, and responsive web solutions for enterprise and
              marketing needs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                Full-stack Development
              </li>
              <li className="flex items-center text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                CMS & E-commerce
              </li>
            </ul>
          </motion.div>

          {/* Card 03 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-slate-700 group-hover:text-white">
                  bug_report
                </span>
              </div>
              <span className="text-4xl font-bold text-slate-200 group-hover:text-purple-500/20 transition-colors">
                03
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              QA & Testing
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Ensuring your software is bug-free. Our automated and manual
              testing guarantees performance.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                Automation Testing
              </li>
              <li className="flex items-center text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                Performance & Security
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
