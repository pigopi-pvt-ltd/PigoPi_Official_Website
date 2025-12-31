// import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Html, Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  // {
  //   name: "Tailwind",
  //   icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  //   color: "#06B6D4",
  // },
  // {
  //   name: "HTML5",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  //   color: "#E34F26",
  // },
  // {
  //   name: "CSS3",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  //   color: "#1572B6",
  // },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    color: "#4FC08D",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
    color: "#ffffff",
  },
  // {
  //   name: "TypeScript",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  //   color: "#3178C6",
  // },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    color: "#FF4438",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    color: "#FF9900",
  },
  {
    name: "Azure",
    icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    color: "#0078D4",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  // {
  //   name: "Firebase",
  //   icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  //   color: "#FFCA28",
  // },

  // Languages
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  // {
  //   name: "Go",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  //   color: "#00ADD8",
  // },
];

function TechGlobe() {
  const groupRef = useRef();
  // State to handle responsive radius
  const [radius, setRadius] = useState(6.5);

  useEffect(() => {
    const handleResize = () => {
      // Shrink globe radius for smaller screens
      setRadius(window.innerWidth < 768 ? 1.8 : 2.8);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.12;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Central Pulsing Sphere */}
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#2e1065"
          roughness={0.2}
          metalness={0.8}
          distort={0.4}
          speed={2}
        />
      </Sphere>

      {technologies.map((tech, i) => {
        const phi = Math.acos(-1 + (2 * i) / technologies.length);
        const theta = Math.sqrt(technologies.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <Html key={tech.name} position={[x, y, z]} center distanceFactor={8}>
            <div className="flex  flex-col items-center group pointer-events-none md:pointer-events-auto">
              <div
                className="w-10 h-10  p-2  rounded-xl  bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-125 group-hover:border-purple-500"
                style={{ boxShadow: `0 0 15px ${tech.color}20` }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-[8px] md:text-[10px] text-white/40 font-bold uppercase tracking-tighter md:tracking-widest opacity-0 md:group-hover:opacity-100">
                {tech.name}
              </p>
            </div>
          </Html>
        );
      })}
    </group>
  );
}

export default function TechSectionMobile() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[700px] md:hidden bg-[#020202] overflow-hidden flex flex-col">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/20 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left">
          Tech Stack <span className="text-purple-500 text-glow">We Use</span>
        </h2>
        <div className="w-16 h-1 bg-purple-600 mx-auto md:mx-0 mt-4 mb-8" />
      </div>

      {/* 3D Container */}
      <div className="flex-grow w-full h-[400px] md:h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <TechGlobe />
        </Canvas>
      </div>
    </section>
  );
}
