import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Journey = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stagger: 0.2,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Journey
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From a small coffee shop meeting to a global agency, here is how we
            got here.
          </p>
        </motion.div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-1 h-full bg-slate-200" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-1 h-full bg-primary z-0"
          />

          <div className="space-y-12 md:space-y-0 relative">
            <TimelineItem
              year="2018"
              title="PigoPi is Founded"
              description="Started by three friends with a shared vision for better web experiences."
              side="left"
              color="primary"
            />

            <TimelineItem
              year="2020"
              title="Global Expansion"
              description="Opened our second office and secured our first Fortune 500 client."
              side="right"
              color="secondary"
            />

            <TimelineItem
              year="2022"
              title="Award Winning Agency"
              description='Recognized as "Top Digital Agency" by TechReview for our mobile app solutions.'
              side="left"
              color="primary"
            />

            <TimelineItem
              year="2024"
              title="Innovation Hub"
              description="Launched our internal R&D lab to pioneer AI-driven design tools."
              side="right"
              color="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, description, side, color }) => {
  const isLeft = side === "left";
  const colorClass = color === "primary" ? "text-primary" : "text-secondary";
  const dotBorder = color === "primary" ? "border-primary" : "border-secondary";

  return (
    <div className="relative flex items-center justify-between md:mb-16 last:mb-0">
      {/* 1. Left Side Content (Desktop) */}
      <div className="hidden md:flex w-5/12 justify-end">
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 text-right w-full"
          >
            <span className={`${colorClass} font-bold text-xl block mb-1`}>
              {year}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-slate-500 text-sm mt-2">{description}</p>
          </motion.div>
        )}
      </div>

      {/* 2. Central Dot */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 md:border-[6px] border-slate-50 z-20 flex items-center justify-center">
        <div
          className={`w-full h-full rounded-full border-4 ${dotBorder}`}
        ></div>
      </div>

      {/* 3. Right Side Content (Desktop + All Mobile) */}
      <div className="flex w-full md:w-5/12 justify-start pl-12 md:pl-0">
        {(!isLeft || window.innerWidth < 768) && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 text-left w-full"
          >
            <span className={`${colorClass} font-bold text-xl block mb-1`}>
              {year}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-slate-500 text-sm mt-2">{description}</p>
          </motion.div>
        )}

        {/* Helper for Desktop: If the item is supposed to be on the left, we render an empty div on the right to maintain grid layout */}
        {isLeft && <div className="hidden md:block w-full"></div>}
      </div>
    </div>
  );
};

export default Journey;
