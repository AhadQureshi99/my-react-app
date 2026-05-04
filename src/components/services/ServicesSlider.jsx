import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Services slider component with detailed mockups - updated
const ServicesSlider = () => {
  const projects = [
    {
      id: 1,
      title: "UI/UX",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500",
      link: "/services/ui-ux",
    },
    {
      id: 2,
      title: "Pitch Deck",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      link: "/services/pitch-deck",
    },
    {
      id: 3,
      title: "Branding",
      bgColor: "bg-gradient-to-br from-orange-300 to-orange-400",
      link: "/services/branding",
    },
    {
      id: 4,
      title: "Mobile App Development",
      bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      link: "/services/mobile-app",
    },
  ];

  const duplicatedProjects = [...projects, ...projects];
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-6 pl-6"
          animate={
            !isPaused
              ? {
                  x: [0, -(200 * projects.length)],
                }
              : {}
          }
          transition={{
            x: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedProjects.map((project, index) => {
            const CardWrapper = project.link ? Link : "div";
            const wrapperProps = project.link ? { to: project.link } : {};

            return (
              <CardWrapper
                key={`${project.id}-${index}`}
                {...wrapperProps}
                className={`flex-shrink-0 w-[180px] h-[200px] rounded-2xl overflow-hidden relative cursor-pointer group ${project.bgColor} block no-underline shadow-md`}
                style={{ pointerEvents: "auto" }}
              >
                <div className="absolute inset-0 p-4 flex flex-col">
                  <h3
                    className={`text-lg font-semibold ${
                      project.textColor || "text-white"
                    } mb-2`}
                  >
                    {project.title}
                  </h3>

                  {/* Mockup Images */}
                  <div className="flex-1 flex items-end justify-end">
                    {project.id === 1 && (
                      // UI/UX - Browser mockup with detailed content
                      <div className="w-28 h-24 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-2">
                        <div className="bg-gray-100 h-3 flex items-center px-1.5 gap-1 border-b border-gray-200">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-2 bg-white">
                          <div className="text-center mb-2">
                            <div className="text-xs font-bold text-gray-900">
                              Your Remote{" "}
                              <span className="text-green-500">Team's</span>
                            </div>
                            <div className="text-[8px] font-bold text-gray-900">
                              New Best Friend
                            </div>
                            <div className="bg-gray-900 text-white text-[6px] px-1 py-0.5 rounded-full inline-block mt-1">
                              Get started for free
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded p-1.5">
                            <div className="text-[7px] font-semibold mb-1">
                              My Tasks
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1">
                                <div className="w-1 h-1 border border-gray-400 rounded-sm"></div>
                                <div className="h-0.5 bg-gray-300 rounded flex-1"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                                <div className="h-0.5 bg-gray-300 rounded flex-1"></div>
                              </div>
                            </div>
                            <div className="flex gap-0.5 mt-1 justify-center">
                              <div className="w-1 h-1 rounded-full bg-green-500"></div>
                              <div className="w-1 h-1 rounded-full bg-green-500"></div>
                              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 2 && (
                      // Pitch Deck - Detailed presentation slides
                      <div className="w-28 h-24 bg-gray-900 rounded-lg shadow-xl overflow-hidden transform -rotate-2 p-2">
                        <div className="text-white">
                          <div className="text-[9px] font-bold mb-1">EVENT</div>
                          <div className="text-[7px] text-purple-400 mb-1">
                            OVERVIEW
                          </div>
                          <div className="grid grid-cols-2 gap-1 mb-1">
                            <div className="bg-gray-800 rounded p-1">
                              <div className="text-[6px] text-purple-400">
                                Total
                              </div>
                              <div className="text-[8px] font-bold">$30M+</div>
                            </div>
                            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded p-1">
                              <div className="text-[6px]">Revenue</div>
                              <div className="text-[8px] font-bold">$7.5M</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded p-1">
                              <div className="text-[6px] text-gray-900">
                                Users
                              </div>
                              <div className="text-[8px] font-bold text-gray-900">
                                146M
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-400 to-green-500 rounded p-1">
                              <div className="text-[6px] text-gray-900">
                                Profit
                              </div>
                              <div className="text-[8px] font-bold text-gray-900">
                                $2.1M
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 3 && (
                      // Branding - Detailed mobile mockups
                      <div className="flex gap-1.5">
                        <div className="w-12 h-24 bg-white rounded-lg shadow-xl p-2 transform rotate-3">
                          <div className="w-5 h-5 bg-purple-600 rounded-lg mb-2 flex items-center justify-center text-white text-[10px]">
                            ✈
                          </div>
                          <div className="text-[7px] font-bold text-gray-900 mb-1">
                            Content Creators
                          </div>
                          <div className="text-[6px] font-semibold text-purple-600 mb-2">
                            Make Businesses.
                          </div>
                          <div className="bg-gray-900 rounded-lg p-1.5 mt-2">
                            <div className="w-3 h-3 bg-purple-600 rounded mb-1 flex items-center justify-center text-white text-[8px]">
                              ✈
                            </div>
                            <div className="text-[6px] text-white font-bold">
                              Roshan Studio
                            </div>
                            <div className="h-0.5 bg-gray-700 rounded mt-1 mb-0.5"></div>
                            <div className="h-0.5 bg-gray-700 rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="w-12 h-24 bg-gray-900 rounded-lg shadow-xl p-2 flex flex-col items-center justify-center transform -rotate-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-xl flex items-center justify-center text-white text-lg mb-2">
                            ✈
                          </div>
                          <div className="text-[7px] text-white font-bold text-center">
                            Roshan Studio
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 4 && (
                      // Mobile App - Detailed dashboard mockup
                      <div className="w-28 h-24 bg-gray-900 rounded-xl shadow-xl overflow-hidden transform rotate-2 p-2">
                        <div className="bg-white rounded-lg p-1.5 h-full">
                          <div className="flex justify-between items-center mb-1.5">
                            <div className="text-[8px] font-bold text-gray-900">
                              Dashboard
                            </div>
                            <div
                              className="w-3 h-3 rounded-full flex items-center justify-center text-[10px]"
                              style={{ backgroundColor: "#58d4f8" }}
                            >
                              📱
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-1 mb-1">
                            <div
                              className="rounded-lg p-1"
                              style={{ backgroundColor: "#58d4f8" }}
                            >
                              <div className="text-[6px] text-white">
                                Downloads
                              </div>
                              <div className="text-[8px] font-bold text-white">
                                250K+
                              </div>
                            </div>
                            <div className="bg-purple-500 rounded-lg p-1">
                              <div className="text-[6px] text-white">Users</div>
                              <div className="text-[8px] font-bold text-white">
                                180K
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-1">
                            <div className="flex items-end gap-0.5 h-4">
                              <div className="bg-gray-300 rounded w-1.5 h-2"></div>
                              <div
                                className="rounded w-1.5 h-3"
                                style={{ backgroundColor: "#58d4f8" }}
                              ></div>
                              <div className="bg-gray-300 rounded w-1.5 h-2.5"></div>
                              <div
                                className="rounded w-1.5 h-4"
                                style={{ backgroundColor: "#58d4f8" }}
                              ></div>
                              <div className="bg-gray-300 rounded w-1.5 h-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
              </CardWrapper>
            );
          })}
        </motion.div>

        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default ServicesSlider;
