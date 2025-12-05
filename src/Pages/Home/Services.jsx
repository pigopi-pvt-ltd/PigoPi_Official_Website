import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image6 from '../../assets/services/image6.jpg';
import image7 from '../../assets/services/image7.jpg';
import image9 from '../../assets/services/image9.jpg';
import image13 from '../../assets/services/image13.jpg';
import image17 from '../../assets/services/image17.png';
import image18 from '../../assets/services/image18.jpg';
import image19 from '../../assets/services/image19.png';
import image20 from '../../assets/services/image20.jpg';
import image21 from '../../assets/services/image21.png';
import image22 from '../../assets/services/image22.jpg';
import image23 from '../../assets/services/image23.png';

// Image set
const imageMap = [image18, image19, image20, image21];
const GoodMap = [image22, image23, image9, image13];
const transition = { duration: 1, ease: "easeInOut" };

// Animation Variants
const fadeInLeft = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition },
};
const fadeInRight = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition },
};
const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition },
};
const scaleIn = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition },
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  const [positions, setPositions] = useState([0, 1, 2, 3]);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const gridInterval = setInterval(() => {
      setPositions((prev) => {
        const next = [...prev];
        const first = next.shift();
        next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(gridInterval);
  }, []);

  useEffect(() => {
    const heroImageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % imageMap.length);
    }, 6000);
    return () => clearInterval(heroImageInterval);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-r from-black via-zinc-900 to-black text-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Hero Text */}
        <motion.div
          className="w-full lg:w-5/12 text-center lg:text-left"
          variants={fadeInLeft}
        >
          <p className="text-xl font-semibold font-[Host_Grotesk] bg-white bg-clip-text text-transparent tracking-wide">
            PigoPi
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Host_Grotesk] py-4 text-white leading-tight">
            Build a Bold <br /> Digital Identity with Ease
          </h1>
          <p className="text-slate-300 max-w-md font-[Host_Grotesk] mx-auto lg:mx-0 text-base sm:text-lg">
            Your website should do more than look good — it should drive results, connect with users, and grow your business effortlessly.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-[Host_Grotesk] text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Launch Now
            </a>
          </div>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          className="w-full lg:w-6/12 grid grid-cols-2 gap-4"
          variants={staggerContainer}
        >
          {positions.map((pos, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-1 ${
                idx % 2 === 0 ? "h-60 sm:h-72" : "h-40 sm:h-56"
              }`}
              variants={imageVariants}
            >
              <img
                src={imageMap[pos]}
                alt={`Visual ${idx}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Feature Section */}
      <motion.div
        className="w-full bg-black py-16 px-6"
        variants={fadeInUp}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto bg-zinc-900 p-6 rounded-xl flex flex-col md:flex-row gap-6"
          variants={staggerContainer}
        >
          <motion.div
            className="w-full md:w-1/2 p-4 md:p-8"
            variants={fadeInLeft}
          >
            <h2 className="text-white text-3xl sm:text-4xl font-[Host_Grotesk] font-semibold">
              Built for Impact
            </h2>
            <p className="text-gray-300 mt-4 sm:mt-6 font-[Host_Grotesk] text-base sm:text-lg">
              Designed to be visually striking, easy to navigate, and optimized for performance—websites that reflect your brand’s vision and elevate your online presence.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 p-4 md:p-8 overflow-hidden"
            variants={fadeInRight}
            key={GoodMap} 
            initial={{ opacity: 0.4, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={GoodMap[activeImage]}
              alt="Feature"
              className="w-full h-64 sm:h-80 md:h-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        className="bg-black text-white px-6 sm:px-10 py-20 sm:py-30"
        variants={fadeInUp}
      >
        <motion.div
          className="w-full flex items-center justify-center mx-auto max-w-7xl h-[2px]"
          style={{
            background: `radial-gradient(circle at center, rgba(59,130,246,1) 0%, rgba(168,85,247,1) 30%, rgba(236,72,153,0.4) 70%, transparent 100%)`,
          }}
          variants={scaleIn}
        />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 sm:mt-40 z-10">
          <motion.div
            variants={fadeInLeft}
            className="flex flex-col justify-between"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
              Empower Your Brand<br />
              Online with Modern<br />
              Website Solutions
            </h1>
            <div
              className="w-full h-[2px] mt-6 sm:mt-10"
              style={{
                background: `linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.05), transparent)`,
              }}
            />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="rounded-2xl overflow-hidden bg-cover h-[30vh] sm:h-[55vh] shadow-lg"
            key={activeImage}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={image17}
              alt="Web design preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;