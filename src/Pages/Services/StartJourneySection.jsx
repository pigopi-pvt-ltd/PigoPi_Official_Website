import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StartJourneySection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-br from-[#101922] to-[#1e293b] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you need a new website, a mobile app, or a complete digital
            transformation, we are here to help turn your vision into reality.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/#contact");
            }}
            className="h-14 px-10 bg-primary hover:bg-blue-600 transition-all duration-200 text-white text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl"
          >
            Get a Free Quote
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            onClick={() => {
              navigate("/#contact");
            }}
            whileTap={{ scale: 0.95 }}
            className="h-14 px-10 bg-transparent border border-white/20 transition-colors text-white text-lg font-bold rounded-lg"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StartJourneySection;
