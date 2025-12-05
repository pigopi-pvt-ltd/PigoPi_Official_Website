import React from 'react';
import { motion } from 'framer-motion';

const frontendTech = [
  { name: 'HTML5', icon: '/tech/html5-original.svg' },
  { name: 'CSS3', icon: '/tech/css3-original.svg' },
  { name: 'JavaScript', icon: '/tech/javascript-original.svg' },
  { name: 'React', icon: '/tech/react-original.svg' },
  { name: 'Angular', icon: '/tech/angularjs-original.svg' },
  { name: 'Vue.js', icon: '/tech/vuejs-original.svg' },
];

const backendTech = [
  { name: 'Python', icon: '/tech/python-original.svg' },
  { name: 'Java', icon: '/tech/java-original.svg' },
  { name: 'Rust', icon: '/tech/rust-original.svg' },
  { name: 'Node.js', icon: '/tech/nodejs-original.svg' },
  { name: 'PHP', icon: '/tech/php-original.svg' },
  { name: '.NET', icon: '/tech/dot-net-original.svg' },
];

const mobileTech = [
  { name: 'Swift', icon: '/tech/swift-original.svg' },
  { name: 'Xamarin', icon: '/tech/xamarin-original.svg' },
  { name: 'Ionic', icon: '/tech/ionic-original.svg' },
  { name: 'React Native', icon: '/tech/react-original.svg' },
  { name: 'Flutter', icon: '/tech/flutter-original.svg' },
  { name: 'Kotlin', icon: '/tech/kotlin-original.svg' },
];

const databaseTech = [
  { name: 'Oracle', icon: '/tech/oracle-original.svg' },
  { name: 'Firebase', icon: '/tech/firebase-plain.svg' },
  { name: 'MySQL', icon: '/tech/mysql-original.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql-original.svg' },
  { name: 'MongoDB', icon: '/tech/mongodb-original.svg' },
  { name: 'Redis', icon: '/tech/redis-original.svg' },
];

const gradientStyles = [
  { background: 'radial-gradient(circle at top right, #2a2a72, #000000)' },
  { background: 'radial-gradient(circle at top right, #000000, #0a0a2a)' },
  { background: 'radial-gradient(circle at top right, #2a2a72, #000000)' },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.11,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const TechStack = () => {
  return (
    <div className="relative bg-black text-white py-10 md:py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:text-[5vw] text-[8vw] font-bold text-center uppercase"
        >
          Our Tech Stack
        </motion.h1>
        <div className="w-24 h-1 mx-auto mb-10 md:mb-24 mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 animate-gradientMove rounded-full"></div>

        {/* Frontend Technologies */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold mb-12 relative font-[Host_Grotesk] inline-block"
          >
            Frontend Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {frontendTech.map((tech, index) => {
              const gradient = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={gradient}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className='mb-24'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold font-[Host_Grotesk] mb-12 relative inline-block"
          >
            Backend Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {backendTech.map((tech, index) => {
              const style = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={style}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Technologies */}
        <div className='mb-24'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold font-[Host_Grotesk] mb-12 relative inline-block"
          >
            Mobile Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mobileTech.map((tech, index) => {
              const style = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={style}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Database Technologies */}
        <div className='mb-24'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold font-[Host_Grotesk] mb-12 relative inline-block"
          >
            Database Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {databaseTech.map((tech, index) => {
              const style = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={style}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="relative mt-20 w-full flex items-center justify-center mx-auto max-w-7xl h-[1px]"
        style={{
          background: `radial-gradient(circle at center, rgba(59,130,246,1) 0%, rgba(168,85,247,1) 30%, rgba(236,72,153,0.4) 70%, transparent 100%)`
        }}
      />
    </div>
  );
};

export default TechStack;