import { motion } from "framer-motion";

const ProcessSection = () => {
  // Container for staggered steps
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual step animation
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Line animation (Drawing effect)
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
    },
  };

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            From Concept to Launch
          </h2>
          <p className="text-slate-600 text-lg">
            We follow a structured agile methodology to ensure timely delivery
            and exceptional quality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line */}
          <motion.div
            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0 origin-left"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.8 }}
          />

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {/* Step 1 */}
            <motion.div variants={stepVariants} className="group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                <span className="material-symbols-outlined text-4xl text-primary">
                  search
                </span>
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Discovery
                </h3>
                <p className="text-sm text-slate-600">
                  We analyze your requirements, market, and competitors to build
                  a solid strategy.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={stepVariants} className="group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                <span className="material-symbols-outlined text-4xl text-secondary">
                  design_services
                </span>
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Design
                </h3>
                <p className="text-sm text-slate-600">
                  Creating intuitive UI/UX prototypes that align with your brand
                  identity.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={stepVariants} className="group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                <span className="material-symbols-outlined text-4xl text-purple-500">
                  code
                </span>
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Develop
                </h3>
                <p className="text-sm text-slate-600">
                  Clean, efficient coding with regular updates and milestone
                  tracking.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={stepVariants} className="group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                <span className="material-symbols-outlined text-4xl text-green-500">
                  rocket
                </span>
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Launch
                </h3>
                <p className="text-sm text-slate-600">
                  Deployment to production with post-launch support and
                  optimization.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
