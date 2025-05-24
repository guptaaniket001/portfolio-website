// src/components/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { projectsData } from '../../data/projectsData';
import AnimatedSection from '../ui/AnimatedSection';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto container-px">
        <AnimatedSection>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto text-center">
            Here are some projects I've worked on that showcase my skills and interests.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-background-light hover:bg-background-dark text-secondary-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 * (index + 3)}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x240?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2 flex items-center">
                      <span className="text-xs font-medium px-2 py-1 bg-background-light text-secondary-dark rounded-full">
                        {project.category}
                      </span>
                      <div className="ml-2 text-xs text-secondary flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {project.period}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-secondary-dark">{project.title}</h3>
                    <p className="text-secondary mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.details.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-background rounded-full text-secondary">
                          {tech}
                        </span>
                      ))}
                      {project.details.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-background rounded-full text-secondary">
                          +{project.details.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <Link to={`/project/${project.id}`} className="text-primary font-medium hover:underline">
                        View Details
                      </Link>
                      <div className="flex space-x-3">
                        {project.details.links.map((link, i) => {
                          if (link.title === "GitHub") {
                            return (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary-dark hover:text-primary transition-colors"
                              >
                                <FaGithub size={20} />
                              </a>
                            );
                          } else if (link.title === "Live Demo" || link.title === "IEEE Publication") {
                            return (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary-dark hover:text-primary transition-colors"
                              >
                                <FaExternalLinkAlt size={18} />
                              </a>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;