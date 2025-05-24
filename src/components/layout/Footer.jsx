// src/components/layout/Footer.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white py-8">
      <div className="container mx-auto container-px">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Aniket Gupta</h3>
            <p className="text-sm mt-1">Software Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:aganiket08@gmail.com" className="text-white hover:text-primary-light transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aniketgupta08/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-colors">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aniket Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;