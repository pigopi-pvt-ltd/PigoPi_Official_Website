import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import image11 from '../assets/Features/image11.jpg';
import image16 from '../assets/Features/image16.jpg';
import image13 from '../assets/Features/image13.png';
import image14 from '../assets/Features/image14.png';
import image15 from '../assets/Features/image15.jpg';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const images = imageRefs.current.filter(Boolean);
    const isDesktop = window.innerWidth >= 1024;

    if (containerRef.current && images.length === 5) {
      const skews = isDesktop ? ['-6deg', '-6deg', '0deg', '6deg', '6deg'] : ['0deg', '0deg', '0deg', '0deg', '0deg'];
      const rotates = isDesktop ? ['-8deg', '-8deg', '0deg', '8deg', '8deg'] : ['0deg', '0deg', '0deg', '0deg', '0deg'];
      const yOffsets = isDesktop ? ['0vh', '-30vh', '-40vh', '-30vh', '-20vh'] : ['0vh', '0vh', '0vh', '0vh', '0vh'];

      images.forEach((img, index) => {
        gsap.set(img, {
          x: '110vw',
          y: yOffsets[index],
          skewY: skews[index],
          rotate: rotates[index],
          willChange: 'transform',
        });
      });

      gsap.to(images, {
        x: 0,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'play reverse play reverse',
          scrub: 1,
        },
        onComplete: () => {
          images.forEach((img) => (img.style.willChange = 'auto'));
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="w-full relative bg-gradient-to-r from-[#0e1934] via-[#2e044e] to-[#142d74] bg-black flex items-center justify-center overflow-hidden py-10"
      ref={containerRef}
      style={{
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:space-x-0 max-w-8xl px-4 sm:px-6 lg:px-8 mx-auto">
        {[image14, image11, image16, image15, image13].map((src, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            className="w-full sm:w-72 h-[40vh] sm:h-[50vh] lg:w-70 lg:h-[60vh] transform rounded shadow-lg"
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
