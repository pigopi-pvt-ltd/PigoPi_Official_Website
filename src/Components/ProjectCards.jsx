import React from "react";
import TiltedCard from "./TiltedCard";
import flow from "../assets/Floww-logo.png";
import { motion } from "motion/react";
import BhojanLogo from "../assets/Bhojanlogo.svg";
import TaskPro from "../assets/task-pro.svg";

const ProjectCards = () => {
  return (
    <div className="relative bg-black text-white py-20 px-6 md:px-16">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
          className="
            text-center font-bold uppercase 
            text-[10vw] sm:text-[7vw] md:text-[4vw]
            leading-tight
          "
        >
          Our Products
        </motion.h1>
      </div>
      <div className="max-w-m mx-auto mb-16 text-gray-400">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            text-center uppercase 
            text-[10vw] sm:text-[2vw] md:text-[1vw]
            leading-tight
          "
        >
          Intelligent tools designed to connect, automate and scale your
          business operations.
        </motion.p>
      </div>

      {/* Cards Row */}
      <div
        className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    justify-items-center
    gap-10 md:gap-14
  "
      >
        <TiltedCard
          imageSrc={TaskPro}
          captionText="TaskPro"
          description="A powerful task management tool that helps teams plan and execute work 3× faster."
          glowColor="rgba(10, 132, 255, 0.35)"
          shadowColor="rgba(10, 132, 255, 0.35)"
          url="https://flow.arekiv.com/"
        />

        <TiltedCard
          imageSrc={flow}
          captionText="Flow"
          description="WhatsApp marketing automation tool that helps businesses scale their communication 3x faster."
          glowColor="rgba(0,255,120,0.35)"
          shadowColor="rgba(0,255,120,0.35)"
          url="https://flow.arekiv.com/"
        />

        <TiltedCard
          imageSrc={BhojanLogo}
          captionText="BhojanSaathi"
          description="Smart POS for restaurants. Manage billing, orders, inventory, and digital receipts via WhatsApp."
          containerWidth="30%"
          containerHeight="auto"
          glowColor="rgba(255,120,0,0.35)"
          shadowColor="rgba(255,120,0,0.35)"
          url="https://www.bhojansaathi.com"
        />
      </div>
    </div>
  );
};

export default ProjectCards;
