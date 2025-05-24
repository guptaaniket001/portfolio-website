// src/components/sections/About.jsx
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-px">
        <AnimatedSection>
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-primary to-primary-dark p-1 rounded-lg">
              <div className="bg-white p-4 rounded-md h-full">
                <img 
                  src="/src/assets/images/profile.jpg" 
                  alt="Aniket Gupta" 
                  className="w-full h-auto rounded-md shadow-md"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Aniket+Gupta';
                  }}
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-4">
              <p className="text-lg text-secondary-dark leading-relaxed">
                I am a Software Engineer with over 2 years of professional experience at Microsoft, where I focus on
                improving and scaling enterprise-level applications.
              </p>
              <p className="text-lg text-secondary-dark leading-relaxed">
                My expertise includes front-end development, system architecture, and AI-driven solutions. 
                I graduated from Delhi Technological University with a Bachelor of Technology in Information Technology 
                and a Minor in Computer Science Engineering in 2023.
              </p>
              <p className="text-lg text-secondary-dark leading-relaxed">
                At Microsoft, I've contributed to improving the Teams Admin Center, enhancing test coverage, and 
                migrating testing frameworks. My work has helped increase revenue from $1.2 billion to $2 billion, 
                and I was promoted within my first year.
              </p>
              <p className="text-lg text-secondary-dark leading-relaxed">
                I'm passionate about creating efficient, user-friendly software solutions and exploring new technologies 
                in AI and machine learning.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;