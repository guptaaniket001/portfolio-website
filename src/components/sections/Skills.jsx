// src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';
import AnimatedSection from '../ui/AnimatedSection';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto container-px">
        <AnimatedSection>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto text-center">
            Here are the technologies and skills I've worked with throughout my career and academic projects.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 2)}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="text-xl font-bold mb-4 text-secondary-dark">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * skillIndex, duration: 0.3 }}
                      className="px-3 py-1 bg-background-light text-secondary-dark rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;