import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ServicesHeroSection = () => {
  const navigate = useNavigate();
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      {/* Breadcrumbs */}
      {/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        className="absolute top-6 left-4 md:left-10 lg:left-20 max-w-7xl mx-auto w-full px-4 md:px-0 z-20"
      >
        <div className="flex gap-2 text-sm font-medium">
          <a
            className="text-slate-500 hover:text-primary transition-colors"
            href="/"
          >
            Home
          </a>
          <span className="text-slate-400">/</span>
          <span className="text-primary">Services</span>
        </div>
      </motion.div> */}

      <div className="container mx-auto px-4 md:px-10 lg:px-20 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]"
          >
            Our Expertise.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              Your Growth.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We deliver comprehensive digital solutions tailored to scale your
            business. Explore our specialized services designed to build your
            future with precision and creativity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // href="#services-section"
              onClick={() => {
                navigate("/services#services-section");
              }}
              className="h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Explore Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // href="/#contact"
              onClick={() => {
                navigate("/#contact");
              }}
              className="h-12 px-8 bg-white border border-slate-200 hover:bg-gray-50 text-slate-900 text-base font-bold rounded-lg transition-colors"
            >
              Contact US
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Animated Blobs */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-400/5 blur-3xl"
        />
      </div>
    </section>
  );
};

export default ServicesHeroSection;
