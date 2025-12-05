import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import logo1 from '../assets/logo1.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-black text-white py-5 md:py-12 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#311b3f] to-transparent opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* About Section */}
          <motion.div className="flex-1" variants={fadeInUp}>
            <img className="w-24 h-22 mb-4" src={logo1} alt="PigoPi Logo" />
            <p className="text-gray-400 px-2">
              Elevate your digital presence with cutting-edge web design and
              development services.
            </p>

            {/* Updated Social Icons */}
            <div className="flex items-center gap-4 px-2 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61576543783204&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a
                href="https://www.instagram.com/pigopi_pvt_ltd?igsh=MXQ0cjl4bTBnbDc1Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/pigopi-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaTwitter className="text-white text-xl" />
              </a>
              <a
                href="https://youtube.com/@pigopi_314?si=i7dw1qqsGdXBu5Oe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaYoutube className="text-white text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div className="flex-1" variants={fadeInUp}>
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Get in touch with us</h4>
              <p className="text-sm text-gray-200 mb-4">
                Have any questions or need help? We're here to assist you.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:info@pigo-pi.com"
                  className="text-lg text-gray-50 hover:text-white transition"
                >
                  info@pigo-pi.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Legal Links Section */}
          <motion.div className="order-last px-2 md:order-none" variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleScrollToTop}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <Link to="/career" className="hover:text-gray-300 transition duration-300">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-gray-300 transition duration-300">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-300 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gray-300 transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider with CIN, Company Name, and Address */}
        <motion.div
          className="mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-6 md:gap-8 relative"
          variants={fadeInUp}
        >
          {/* Glowing Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-70"></div>

          {/* CIN (Left on desktop, top on mobile) */}
          <div className="text-gray-300 leading-relaxed text-center md:text-left w-full md:w-1/3">
            <p className="text-gray-200 font-medium">
              CIN:{" "}
              <span className="text-white font-semibold tracking-wide">
                U62099BR2025PTC078728
              </span>
            </p>
          </div>

          {/* Company Name (Center) */}
          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-xl md:text-2xl font-extrabold text-white drop-shadow-md">
              PIGOPI PRIVATE LIMITED
            </h3>
          </div>

          {/* Address (Right on desktop, bottom on mobile) */}
          <div className="text-gray-300 leading-relaxed text-center md:text-right w-full md:w-1/3">
            <p className="text-white font-semibold mb-1">📍 Registered Office</p>
            <p className="text-gray-200 text-sm md:text-base">
              C/o AJAY KUMAR KESHRI, VILL-SONBARSA, <br />
              Prasadi English, Arwal, Arwal-804401, Bihar
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-6 text-center text-xs md:text-sm text-gray-400"
          variants={fadeInUp}
        >
          <p>© Copyright 2025 PIGOPI PVT. LTD. All Rights Reserved.</p>
        </motion.div>


      </div>
    </motion.footer>
  );
};

export default Footer;
