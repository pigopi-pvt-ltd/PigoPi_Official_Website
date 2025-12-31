import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"; // ... inside your component

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-black/20 md:backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <img src={logo1} alt="logo" className="w-24 h-22" />
        {/* Desktop Nav */}
        {/* <div className="hidden xl:flex xl:items-center xl:justify-between font-[Host_Grotesk] text-lg gap-20 bg-black/80 px-6 py-2 rounded-xl text-white">
          <Link to="/" className="relative group transition-all duration-300">
            <span
              onClick={handleScrollToTop}
              className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300"
            >
              Home
            </span>
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
          </Link>

          <Link
            to="/about"
            // onClick={(e) => handleAnchorClick(e, "about")}
            className="relative group transition-all duration-300"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
              About Us
            </span>
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
          </Link>

          <Link
            to="/services"
            // onClick={(e) => handleAnchorClick(e, "#events")}
            className="relative group transition-all duration-300"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
              Services
            </span>
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
          </Link>

          <Link
            to="/privacy-policy"
            className="relative group transition-all duration-300"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
              Privacy Policy
            </span>
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
          </Link>

          <Link
            to="/terms-conditions"
            className="relative group transition-all duration-300"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
              Terms <span className="font-mono">&</span> Conditions
            </span>
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
          </Link>

          <Link
            // href="#contact"
            to={"/#contact"}
            className="relative px-8 py-2 font-bold text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-xl group overflow-hidden transition-all duration-300"
            // onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-125 group-hover:scale-100 blur-md"></span>
            <span className="absolute inset-0 z-0 bg-white/10 group-hover:animate-pulse"></span>
            <span className="relative z-10">Contact Now</span>
          </Link>
        </div> */}

        <div className="hidden xl:flex  xl:items-center xl:justify-center font-[Host_Grotesk] text-lg gap-8 bg-black/80 px-10 py-2 rounded-xl text-white">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/privacy-policy", label: "Privacy Policy" },
            { to: "/terms-conditions", label: "Terms & Conditions" },
            // { to: "/#contact", label: "Contact Now" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              // "end" ensures the Home link isn't active for every single sub-page
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative px-6 py-2 rounded-xl transition-colors duration-200 font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/#contact"
            className={({ isActive }) =>
              `relative px-8 py-2 font-bold text-lg text-white rounded-xl group overflow-hidden transition-all duration-300 ${
                isActive ? "ring-2 ring-white/50" : ""
              }`
            }
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"></span>
            <span className="absolute inset-0 z-0 bg-white/10 group-hover:animate-pulse"></span>
            <span className="relative z-10">Contact Now</span>
          </NavLink>
        </div>
        {/* Mobile Icon */}
        <div
          className="xl:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-black/80 h-screen text-white flex flex-col items-center gap-6 py-6">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={(e) => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/services" onClick={(e) => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" onClick={() => setMenuOpen(false)}>
            Terms & Conditions
          </Link>
          <a
            href="#contact"
            className="bg-blue-500 px-12 rounded-xl py-2"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Contact Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
