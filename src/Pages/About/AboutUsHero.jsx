import { motion } from "framer-motion";

const AboutUsHero = () => {
  // Variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-white">
      {/* Background Grid Pattern - Simulated with CSS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit mb-8 mx-auto border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Who We Are
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-8 max-w-4xl mx-auto"
          >
            We are the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              architects
            </span>{" "}
            of the digital future.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            PigoPi is a global digital agency driven by a passion for
            innovation. We bridge the gap between imagination and technology.
          </motion.p>
        </motion.div>

        {/* Hero Image with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto max-w-5xl aspect-[16/9] group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10"></div>

          <motion.img
            alt="Team collaborating"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
          />

          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 text-left text-white">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-bold uppercase tracking-widest mb-2"
            >
              Our Culture
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-2xl md:text-3xl font-bold"
            >
              Collaboration at our core
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHero;
