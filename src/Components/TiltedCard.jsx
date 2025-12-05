import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  
  glowColor = "rgba(0,200,150,0.25)",
  shadowColor = "rgba(0,255,170,0.4)",
  scaleOnHover = 1.1,
  description,
  rotateAmplitude = 14,
  url = "#",
 
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <motion.figure
      ref={ref}
      className="
    relative rounded-3xl p-6 sm:p-8
    bg-gradient-to-br from-[#141414] via-[#0e0e0e] to-[#090909]
    border border-[#1f1f1f]
    shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]
    transition-all duration-500 ease-out
    hover:shadow-[0_0_60px_-10px_rgba(0,200,255,0.35)]
    group

    /* RESPONSIVE WIDTH + HEIGHT */
    w-[90%] 
    sm:w-[380px] 
    md:w-[420px] 
    lg:w-[500px]

    min-h-[260px] 
    sm:min-h-[300px] 
    md:min-h-[330px] 
    lg:min-h-[360px]
  "
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* GLOW BORDER */}
      <div
        className="
    absolute inset-0 rounded-3xl pointer-events-none
    opacity-0 group-hover:opacity-100 transition-opacity duration-500
  "
        style={{
          background: `radial-gradient(circle at top left, ${glowColor}, transparent 70%)`,
          transform: "translateZ(20px)",
        }}
      />

      {/* ICON */}
      <div className="mb-6" style={{ transform: "translateZ(40px)" }}>
        <img
          src={imageSrc}
          alt={altText}
          className="h-8 w-8 object-contain"
          style={{
            filter: `drop-shadow(0 0 10px ${shadowColor})`,
            transform: "translateZ(40px)",
          }}
        />
      </div>

      {/* TITLE */}
      <h2
        className="text-3xl font-semibold mb-3 tracking-tight"
        style={{ transform: "translateZ(35px)" }}
      >
        {captionText}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="text-gray-400 leading-relaxed text-[20px] mb-6"
        style={{ transform: "translateZ(30px)" }}
      >
        {description}
      </p>

      {/* CTA */}
      <div
        className="
        flex items-center gap-2 text-white font-medium
        hover:gap-4 transition-all duration-300 cursor-pointer
      "
        onClick={() => window.open(url, "_blank")}
        style={{ transform: "translateZ(40px)" }}
      >
        Learn More
        <span className="text-xl">→</span>
      </div>
    </motion.figure>
  );
}
