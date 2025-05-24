// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMediumM } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="h-screen flex items-center bg-gradient-to-br from-background to-background-dark">
      <div className="container mx-auto container-px">
        <div className="flex flex-col items-start space-y-6 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-dark"
          >
            Aniket Gupta
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-secondary"
          >
            Software Engineer at Microsoft
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-secondary leading-relaxed"
          >
            Building enterprise-level applications and AI-driven solutions.
            Passionate about front-end development, system architecture, and solving complex problems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex space-x-4"
          >
            <a 
              href="mailto:aganiket08@gmail.com" 
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Email"
            >
              <FaEnvelope className="text-secondary-dark text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aniketgupta08/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-[#0077b5] text-xl" />
            </a>
            <a 
              href="https://github.com/guptaaniket001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="GitHub"
            >
              <FaGithub className="text-secondary-dark text-xl" />
            </a>
            <a 
              href="https://medium.com/@aganiket08" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Medium"
            >
              <FaMediumM className="text-secondary-dark text-xl" />
            </a>
          </motion.div>
          
          <motion.div  
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex space-x-4 pt-4"
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-colors font-medium"
            >
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/130o5SGb7v6opy0dxn4rFvDrPMxD-Lg0Q/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white text-secondary-dark border border-secondary-light rounded-lg shadow-md hover:bg-background-dark transition-colors font-medium"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;