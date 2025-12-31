import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SelectedWorks() {
  const works = [
    {
      tag: "Marketing + Automation",
      title: "Flow App",
      desc: "WhatsApp marketing automation tool that helps businesses scale their communication 3x faster.",
      bg: "from-emerald-200 to-emerald-400",
      textColor: "text-emerald-950", // Added for better contrast on light bg
    },
    {
      tag: "Management",
      title: "Task Pro",
      desc: "A powerful task management tool that helps teams plan and execute work 3× faster.",
      bg: "from-teal-700 to-emerald-900",
      textColor: "text-white",
    },
    {
      tag: "POS",
      title: "BhojanSaathi",
      desc: "mart POS for restaurants. Manage billing, orders, inventory, and digital receipts via WhatsApp.",
      bg: "from-gray-200 to-gray-400",
      textColor: "text-slate-900", // Added for better contrast on light bg
    },
  ];
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 my-12">
      <div className="flex items-center justify-between mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          className="text-3xl font-semibold"
        >
          Our Products
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // Removed once: true to animate every time
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`rounded-3xl p-8 bg-gradient-to-br ${work.bg} ${work.textColor} relative overflow-hidden min-h-[260px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow`}
          >
            <span className="text-xs font-bold opacity-70 tracking-wider">
              {work.tag}
            </span>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">{work.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{work.desc}</p>
            </div>
            {/* Subtle decorative circle */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
          </motion.div>
        ))}
      </div>

      {/* CTA CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mt-8 rounded-3xl bg-[#0f172a] text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-center md:text-left">
            Have a project in mind?
          </h3>
          <p className="text-sm text-gray-300 text-center md:text-left">
            Let’s discuss how we can help you grow.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/#contact");
          }}
          className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-lg shadow-purple-500/20 transition-colors"
        >
          Start a conversation
        </motion.button>
      </motion.div>
    </section>
  );
}
