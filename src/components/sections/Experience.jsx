// src/components/sections/Experience.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experienceData } from '../../data/experienceData';
import AnimatedSection from '../ui/AnimatedSection';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto container-px">
        <AnimatedSection>
          <h2 className="section-title">Work Experience</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatedSection delay={0.2} className="lg:col-span-4">
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible">
              {experienceData.map((exp, index) => (
                <button
                  key={exp.id}
                  className={`py-4 px-6 text-left whitespace-nowrap lg:whitespace-normal transition-colors min-w-fit ${
                    index === activeTab
                      ? 'bg-white shadow-md text-primary border-l-4 lg:border-l-0 lg:border-r-4 border-primary'
                      : 'bg-background-light hover:bg-white'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <p className="text-secondary">{exp.position}</p>
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="text-2xl font-bold text-secondary-dark">
                      {experienceData[activeTab].position}
                    </h3>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <div className="w-10 h-10 bg-white p-1 rounded-full shadow-sm mr-2">
                        <img
                          src={experienceData[activeTab].logo}
                          alt={experienceData[activeTab].company}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/40x40?text=M';
                          }}
                        />
                      </div>
                      <span className="font-medium text-primary">
                        {experienceData[activeTab].company}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-secondary mb-6">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{experienceData[activeTab].period}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{experienceData[activeTab].location}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-lg text-secondary-dark">Key Accomplishments:</h4>
                    <ul className="space-y-2 list-disc list-inside text-secondary-dark">
                      {experienceData[activeTab].accomplishments.map((accomplishment, i) => (
                        <li key={i} className="pl-2">
                          <span>{accomplishment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-secondary-dark mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experienceData[activeTab].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background-light text-secondary-dark rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;