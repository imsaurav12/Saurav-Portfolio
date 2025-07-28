import React from "react";
import { experiences } from "../../constants"; // Make sure this is correctly imported

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] sm:px-[10vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-white opacity-30 z-0" />

        {/* Timeline Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative z-10 mb-20 w-full flex justify-center"
          >
            <div
              className="w-full sm:max-w-xl bg-gray-900/80 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 sm:p-8 backdrop-blur-md transform transition-transform duration-300 hover:scale-105"
            >
              {/* Header Section */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-md bg-white overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">{experience.company}</h4>
                  <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
