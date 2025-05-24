import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';
import AnimatedSection from '../components/ui/AnimatedSection';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-primary hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto container-px">
        <AnimatedSection>
          <Link to="/#projects" className="inline-flex items-center text-primary mb-6 hover:underline">
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 md:h-96 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/1200x600?text=${encodeURIComponent(project.title)}`;
                }}
              />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-secondary-dark">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-secondary" />
                  <span className="text-secondary">{project.period}</span>
                </div>
                <span className="px-3 py-1 bg-background-light text-secondary-dark rounded-full text-sm">
                  {project.category}
                </span>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-secondary-dark">Overview</h2>
                <p className="text-secondary-dark leading-relaxed">{project.details.overview}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-secondary-dark">Key Accomplishments</h2>
                <ul className="space-y-2 list-disc list-inside text-secondary-dark ml-4">
                  {project.details.accomplishments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-secondary-dark">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background-light text-secondary-dark rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.details.links.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-secondary-dark">Links</h2>
                  <div className="space-y-3">
                    {project.details.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        {link.title === "GitHub" ? (
                          <FaGithub className="mr-2" />
                        ) : (
                          <FaExternalLinkAlt className="mr-2" />
                        )}
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;