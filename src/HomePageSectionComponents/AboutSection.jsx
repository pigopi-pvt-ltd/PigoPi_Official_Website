import { motion } from "framer-motion";

const AboutSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child's animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const popVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-grid bg-background-light">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col justify-center min-h-[500px]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              PigoPi Pvt. Ltd.
            </div>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-tight text-slate-900 mb-6">
              We craft
              <span className="gradient-text"> digital experiences</span> that
              define brands.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Transforming ideas into exceptional digital products. We combine
              strategy, design, and technology to help you grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition shadow-lg"
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side Grid */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-6 h-full min-h-[500px]">
            {/* Image Card */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden shadow-xl group border border-slate-200"
            >
              <img
                alt="Modern architecture abstract"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_JRMRKLxcE8gRTAUxokZkn4LLsLpXHf-3rx-wgCW0IvBLystJHnsHEcasXaa2u4SAFFq6bY1sZGDWhmSr9mot78mgEMFRVglCd_h_PIoaG6bkvo3HGf4AOrkgL3jV00mZx2aqExL9s_2DEO0mNywp3dV_nTwArkFLKr6Nkukv5ayI14OxJdUaNNYQBbsucLHGbvWg4BxDFOhaGrqtnzTQeE1rO93lNohQmrXbU-2BBKtlZwJxjuzLkmM96pqNnKukA5k9NNccnRc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Architecture of Code</p>
                <p className="text-sm text-slate-200">Robust & Scalable</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={popVariants}
                whileHover={{ y: -5 }}
                className="bg-primary text-white rounded-3xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 bg-white/20 w-24 h-24 rounded-full blur-xl"></div>
                <span className="material-symbols-outlined text-4xl">
                  rocket_launch
                </span>
                <div>
                  <p className="text-3xl font-bold">150+</p>
                  <p className="text-sm opacity-90">Projects Launched</p>
                </div>
              </motion.div>

              <motion.div
                variants={popVariants}
                whileHover={{ y: -5 }}
                className="bg-secondary text-white rounded-3xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                <div className="absolute -left-4 -bottom-4 bg-white/20 w-24 h-24 rounded-full blur-xl"></div>
                <span className="material-symbols-outlined text-4xl">
                  groups
                </span>
                <div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm opacity-90">Client Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
