import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Web Development",
    icon: "code",
    description:
      "Our web development team crafts custom, high-performance web applications using modern technologies like React, Node.js, and Next.js. We focus on creating responsive, accessible, and secure digital experiences that drive engagement.",
    benefits: [
      "Custom CMS Integration",
      "SEO-Optimized Architecture",
      "Secure API Development",
      "Progressive Web Apps (PWA)",
    ],
    cta: "Get a Web Dev Quote",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2344&auto=format&fit=crop",
    isReversed: false,
    bgColor: "bg-white",
  },
  {
    title: "Mobile App Development",
    icon: "smartphone",
    description:
      "Reach your customers wherever they are with our top-tier mobile solutions. We specialize in both native iOS and Android development as well as cross-platform frameworks like Flutter and React Native.",
    benefits: [
      "Native Performance",
      "Cross-Platform Cost Efficiency",
      "App Store Optimization",
      "Real-time Data Sync",
    ],
    cta: "Explore Mobile Solutions",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop",
    isReversed: true,
    bgColor: "bg-slate-50",
  },
  {
    title: "QA & Software Testing",
    icon: "bug_report",
    description:
      "Quality is at the core of our development process. Our dedicated QA team ensures your software is bug-free, secure, and ready for launch. We employ a mix of automated regression testing and rigorous manual testing.",
    benefits: [
      "Automated Test Scripts",
      "Security Vulnerability Scans",
      "Performance & Load Testing",
      "Detailed Bug Reporting",
    ],
    cta: "Learn About Our QA",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2340&auto=format&fit=crop",
    isReversed: false,
    bgColor: "bg-white",
  },
  {
    title: "UI/UX Design",
    icon: "design_services",
    description:
      "Great software starts with great design. Our creative team combines aesthetics with functional utility to build user interfaces that are delightful to use. We conduct deep user research to understand your audience, followed by wireframing and prototyping.",
    benefits: [
      "User Journey Mapping",
      "Interactive Prototypes",
      "Brand Identity Systems",
      "Accessibility (WCAG)",
    ],
    cta: "See Design Portfolio",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    isReversed: true,
    bgColor: "bg-slate-50",
  },
  {
    title: "Cloud Solutions",
    icon: "cloud_sync",
    description:
      "Modernize your infrastructure with our cloud engineering services. Whether you are migrating to the cloud or optimizing existing architecture, we help you leverage the power of AWS, Azure, and Google Cloud.",
    benefits: [
      "Scalable Infrastructure",
      "Cost Optimization",
      "CI/CD Pipeline Setup",
      "24/7 Monitoring & Support",
    ],
    cta: "Consult on Cloud",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop",
    isReversed: false,
    bgColor: "bg-white",
  },
  {
    title: "Digital Marketing",
    icon: "campaign",
    description:
      "Building a great product is only half the battle. Our digital marketing strategies are data-driven and results-oriented, specializing in SEO, PPC, and content strategy to build long-term brand authority.",
    benefits: [
      "SEO Optimization",
      "Pay-Per-Click Management",
      "Social Media Growth",
      "Analytics & Reporting",
    ],
    cta: "Grow Your Traffic",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    isReversed: true,
    bgColor: "bg-slate-50",
  },
];

const ServiceBlock = ({ service }) => {
  // Determine if logic should use mobile (fade up) or desktop (slide side) animations
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const textVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 0 : service.isReversed ? 60 : -60,
      y: isMobile ? 40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 0 : service.isReversed ? -60 : 60,
      y: isMobile ? 40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services-section"
      className={`py-16 md:py-24 ${service.bgColor} overflow-hidden border-b border-slate-100 last:border-0`}
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Content - Always order-1 on mobile */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} // Animation repeats every time it enters 20% of view
            className={`lg:w-1/2 w-full order-1 ${
              service.isReversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 aspect-video lg:aspect-[4/3] group">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${service.img}')` }}
              />
            </div>
          </motion.div>

          {/* Text Content - Always order-2 on mobile */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} // Animation repeats every time it enters 20% of view
            className={`lg:w-1/2 order-2 ${
              service.isReversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="inline-flex items-center justify-center size-14 rounded-xl bg-blue-50 text-primary mb-6 ring-1 ring-blue-100">
              <span className="material-symbols-outlined text-3xl">
                {service.icon}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {service.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="mb-8 p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 opacity-80">
                Key Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {service.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-primary font-bold text-lg group"
            >
              {service.cta}
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="bg-white">
      {servicesData.map((service, index) => (
        <ServiceBlock key={index} service={service} />
      ))}
    </div>
  );
};

export default Services;
