import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const { scrollY } = useScroll();

  // 3D transforms based on scroll
  const rotateX = useTransform(scrollY, [0, 100], [0, -5]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const translateY = useTransform(scrollY, [0, 100], [0, 3]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Cases", path: "/cases" },
    { name: "Services", path: null, hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    {
      name: "UI/UX",
      color: "bg-green-400",
      image: "/service-uiux.png",
      path: "/services/ui-ux",
    },
    {
      name: "Pitch Deck",
      color: "bg-white",
      image: "/service-pitch.png",
      path: "/services/pitch-deck",
    },
    {
      name: "Branding",
      color: "bg-orange-300",
      image: "/service-branding.png",
      path: "/services/branding",
    },
    {
      name: "Mobile App Development",
      color: "bg-cyan-400",
      image: "/service-mobile.png",
      path: "/services/mobile-app",
    },
  ];

  return (
    <header
      className="w-full py-6 flex justify-center sticky top-0 left-0 z-50 bg-white md:bg-transparent"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          rotateX,
          scale,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className={`flex items-center gap-8 px-5 py-2.5 rounded-full w-11/12 md:w-auto justify-between md:justify-start transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 border border-white/60 shadow-[0_8px_32px_-4px_rgba(14,165,233,0.3),0_4px_16px_-2px_rgba(168,85,247,0.2),0_2px_8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.3)_inset]"
            : "bg-white/50 border border-white/40 shadow-[0_8px_32px_-4px_rgba(14,165,233,0.25),0_4px_16px_-2px_rgba(168,85,247,0.15),0_2px_8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.3)_inset]"
        }`}
        style-backdrop={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {/* Glass overlay for extra depth */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: isScrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.15) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        />

        {/* Logo - Clickable to Home */}
        <Link
          to="/"
          className="flex items-center justify-center hover:opacity-80 transition-opacity duration-200 flex-shrink-0 relative z-10"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-black shadow-md">
            <img
              src="/flogo.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 relative z-10">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <button
                key={item.name}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`text-sm font-medium transition-all duration-200 ${
                  isServicesOpen
                    ? "text-cyan-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-cyan-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 transition-colors flex-shrink-0 relative z-10"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-4 mx-4 rounded-2xl border border-white/40 p-4 flex flex-col gap-3 md:hidden"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
            }}
          >
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-left ${
                      isServicesOpen
                        ? "text-cyan-600 bg-white/50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-white/30"
                    }`}
                  >
                    {item.name}
                  </button>

                  {isServicesOpen && (
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            location.pathname === service.path
                              ? "text-cyan-600 bg-white/50"
                              : "text-gray-700 hover:text-gray-900 hover:bg-white/30"
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-cyan-600 bg-white/50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white/30"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </motion.div>

      {/* Services Mega Menu Dropdown */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-0 right-0 z-40 hidden md:flex justify-center"
          >
            <div
              className="flex gap-4 p-4 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                boxShadow:
                  "0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              {serviceItems.map((service, index) => (
                <Link
                  key={service.name}
                  to={service.path}
                  onClick={() => setIsServicesOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`${service.color} rounded-xl p-4 w-36 h-44 flex flex-col cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md relative overflow-hidden`}
                  >
                    <span
                      className={`text-sm font-medium mb-2 ${
                        service.name === "Pitch Deck"
                          ? "text-gray-900"
                          : "text-gray-800"
                      }`}
                    >
                      {service.name}
                    </span>
                    <div className="flex-1 flex items-end justify-end">
                      {service.name === "UI/UX" && (
                        <div className="w-24 h-20 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-2">
                          <div className="bg-gray-100 h-2.5 flex items-center px-1.5 gap-1 border-b border-gray-200">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          </div>
                          <div className="p-1.5 bg-white">
                            <div className="text-center mb-1.5">
                              <div className="text-[10px] font-bold text-gray-900">
                                Your Remote{" "}
                                <span className="text-green-500">Team's</span>
                              </div>
                              <div className="text-[8px] font-bold text-gray-900">
                                New Best Friend
                              </div>
                              <div className="bg-gray-900 text-white text-[6px] px-1.5 py-0.5 rounded-full inline-block mt-1">
                                Get started
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded p-1">
                              <div className="text-[7px] font-semibold mb-0.5">
                                My Tasks
                              </div>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-0.5">
                                  <div className="w-1 h-1 border border-gray-400 rounded-sm"></div>
                                  <div className="h-0.5 bg-gray-300 rounded flex-1"></div>
                                </div>
                                <div className="flex items-center gap-0.5">
                                  <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                                  <div className="h-0.5 bg-gray-300 rounded flex-1"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.name === "Pitch Deck" && (
                        <div className="w-24 h-20 bg-gray-900 rounded-lg shadow-xl overflow-hidden transform -rotate-2 p-1.5">
                          <div className="text-white">
                            <div className="text-[9px] font-bold mb-0.5">
                              EVENT
                            </div>
                            <div className="text-[7px] text-purple-400 mb-1">
                              OVERVIEW
                            </div>
                            <div className="grid grid-cols-2 gap-1 mb-0.5">
                              <div className="bg-gray-800 rounded p-1">
                                <div className="text-[6px] text-purple-400">
                                  Total
                                </div>
                                <div className="text-[7px] font-bold">
                                  $30M+
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded p-1">
                                <div className="text-[5px]">Revenue</div>
                                <div className="text-[7px] font-bold">
                                  $7.5M
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded p-1">
                                <div className="text-[5px] text-gray-900">
                                  Users
                                </div>
                                <div className="text-[7px] font-bold text-gray-900">
                                  146M
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-green-400 to-green-500 rounded p-1">
                                <div className="text-[5px] text-gray-900">
                                  Profit
                                </div>
                                <div className="text-[7px] font-bold text-gray-900">
                                  $2.1M
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.name === "Branding" && (
                        <div className="flex gap-1">
                          <div className="w-10 h-20 bg-white rounded-lg shadow-xl p-1.5 transform rotate-3">
                            <div className="w-4 h-4 bg-purple-600 rounded-lg mb-1.5 flex items-center justify-center text-white text-[10px]">
                              ✈
                            </div>
                            <div className="text-[7px] font-bold text-gray-900 mb-0.5">
                              Content Creators
                            </div>
                            <div className="text-[6px] font-semibold text-purple-600 mb-1">
                              Make Businesses.
                            </div>
                            <div className="bg-gray-900 rounded-lg p-1 mt-1">
                              <div className="w-2.5 h-2.5 bg-purple-600 rounded mb-0.5 flex items-center justify-center text-white text-[8px]">
                                ✈
                              </div>
                              <div className="text-[6px] text-white font-bold">
                                Roshan
                              </div>
                              <div className="h-0.5 bg-gray-700 rounded mt-0.5"></div>
                            </div>
                          </div>
                          <div className="w-10 h-20 bg-gray-900 rounded-lg shadow-xl p-1.5 flex flex-col items-center justify-center transform -rotate-3">
                            <div className="w-6 h-6 bg-purple-600 rounded-xl flex items-center justify-center text-white text-sm mb-1">
                              ✈
                            </div>
                            <div className="text-[6px] text-white font-bold text-center">
                              Roshan Studio
                            </div>
                          </div>
                        </div>
                      )}

                      {service.name === "Mobile App Development" && (
                        <div className="w-24 h-20 bg-gray-900 rounded-xl shadow-xl overflow-hidden transform rotate-2 p-1.5">
                          <div className="bg-white rounded-lg p-1.5 h-full">
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-[8px] font-bold text-gray-900">
                                Dashboard
                              </div>
                              <div
                                className="w-2.5 h-2.5 rounded-full flex items-center justify-center text-[10px]"
                                style={{ backgroundColor: "#58d4f8" }}
                              >
                                📱
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-0.5 mb-1">
                              <div
                                className="rounded-lg p-0.5"
                                style={{ backgroundColor: "#58d4f8" }}
                              >
                                <div className="text-[5px] text-white">
                                  Downloads
                                </div>
                                <div className="text-[7px] font-bold text-white">
                                  250K+
                                </div>
                              </div>
                              <div className="bg-purple-500 rounded-lg p-0.5">
                                <div className="text-[5px] text-white">
                                  Users
                                </div>
                                <div className="text-[7px] font-bold text-white">
                                  180K
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-0.5">
                              <div className="flex items-end gap-0.5 h-3">
                                <div className="bg-gray-300 rounded w-1 h-1.5"></div>
                                <div
                                  className="rounded w-1 h-2.5"
                                  style={{ backgroundColor: "#58d4f8" }}
                                ></div>
                                <div className="bg-gray-300 rounded w-1 h-2"></div>
                                <div
                                  className="rounded w-1 h-3"
                                  style={{ backgroundColor: "#58d4f8" }}
                                ></div>
                                <div className="bg-gray-300 rounded w-1 h-2.5"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close dropdown */}
      {isServicesOpen && (
        <div
          className="fixed inset-0 z-30 hidden md:block"
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
