import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Html } from "@react-three/drei";
import * as THREE from "three";

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

  // Rotate the entire globe
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* The Central Mesh Globe */}
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#1a1a2e"
          roughness={0.1}
          metalness={1}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Technology Icons positioned around the sphere */}
      {technologies.map((tech, i) => {
        // Math to distribute icons evenly around a sphere
        const phi = Math.acos(-1 + (2 * i) / technologies.length);
        const theta = Math.sqrt(technologies.length * Math.PI) * phi;
        const radius = 2.5;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <Html key={tech.name} position={[x, y, z]} center distanceFactor={10}>
            <div className="flex flex-col items-center group cursor-pointer">
              <div
                className="w-16 h-16 p-3 rounded-2xl bg-gray-900/60 border border-white/10 flex items-center justify-center backdrop-blur-xl transition-all duration-500 group-hover:scale-125 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                style={{ boxShadow: `0 0 20px ${tech.color}15` }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
              <span className="mt-3 text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {tech.name}
              </span>
            </div>
          </Html>
        );
      })}
    </group>
  );
}

export default function TechSection() {
  return (
    <section className="relative w-full h-[600px] hidden md:block bg-[#050505] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 pt-20 h-full flex flex-col items-start">
        <h2 className="text-5xl font-bold text-white mb-2">
          Tech Stack <span className="text-purple-500">We Use</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-10" />

        {/* Canvas for 3D Globe */}
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <TechGlobe />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
