// import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TaskPro",
    category: "SAAS",
    description:
      "A revolutionary task management platform helping teams collaborate 3x...",
    tags: ["Product Design", "Development"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-[#0f4c4b]",
  },
  {
    title: "Flow",
    category: "MARKETING",
    description:
      "WhatsApp marketing automation tool scaling business communication..",
    tags: ["UI/UX", "API Integration"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-[#e5e5e5]",
  },
  {
    title: "BhojanSaathi",
    category: "FINTECH",
    description:
      "Smart POS for restaurants to manage billing, inventory and orders.",
    tags: ["Web App", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1556742049-13da736c7459?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-[#8fb4a9]",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card's appearance
    },
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

export default function WorkSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Header with Fade In */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed">
            Explore how we've helped businesses transform their ideas into
            successful digital products.
          </p>
        </div>
        <motion.a
          whileHover={{ x: 5 }}
          href="#"
          className="flex items-center gap-2 font-bold text-slate-900 group"
        >
          View All Works
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </motion.a>
      </motion.div>

      {/* Grid with Staggered Children */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }} // Lift card on hover
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div
              className={`${project.bgColor} rounded-[2rem] h-[300px] mb-3 overflow-hidden relative flex items-center justify-center p-10 transition-shadow duration-500 group-hover:shadow-2xl`}
            >
              <span className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-[10px] font-black tracking-[0.2em] px-4 py-1.5 rounded-full text-slate-800 z-10">
                {project.category}
              </span>

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Text Content */}
            <div className="px-3 ml-auto mr-auto ">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 mb-5 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium uppercase tracking-wider text-slate-400"
                  >
                    {tag}{" "}
                    {i < project.tags.length - 1 && (
                      <span className="ml-2 text-slate-200">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
