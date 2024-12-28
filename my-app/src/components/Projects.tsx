import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [0, -2000],
        transition: {
          x: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  const projects = [
    {
      title: 'Indoor Air Quality Monitoring and Recommnedation System',
      description: 'a Capstone Project created by Collaborating with a team of 5 Computer Science Students to develop an Indoor Air Quality Monitoring and Recommending System for the Capstone Project',
      technologies: ['Flutter', 'FastApi', 'MySql', 'Python','Php','KNN','Scikit-learn','Machine Learning'],
      imageUrl: '/projects/project0.png'
    },
    {
      title: 'Compliment Generator',
      description: 'This is a Complement Generator simple, interactive website where users can select there current mood by clicking an emoji or a descriptive text (e.g., "Happy 😊" or "Feeling Down 😔"). After selecting, a dialog box or modal appears with a heartfelt compliment or encouraging message tailored to that mood.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion','TypeScript'],
      imageUrl: '/projects/project3.png',
      githubUrl: 'https://github.com/CodeDecoder13/ComplimentGenerator.git',
      liveUrl: 'https://compliment-generator-v1.vercel.app'
    },
    {
      title: 'Selenium-V.2',
      description: 'This is a version 2 of my open source selenium project using c# to create a automation testing with the feature of Ui Testing, Responsive Testing, Perfomance Testing with c# native.',
      technologies: ['C#', 'C# native'],
      imageUrl: '/projects/project4.png',
      githubUrl: 'https://github.com/CodeDecoder13/Selenium-V.2.git'
    },
    {
      title: 'Project Rhuzz 1 Ver Webportfolio',
      description: 'This is a version 1 of my web portfolio using Html, Css, and Javascript.',
      technologies: ['Html/Css', 'Javascript', 'CSS'],
      imageUrl: '/projects/project5.png',
      githubUrl: 'https://github.com/CodeDecoder13/Project_Rhuzz',
      liveUrl: 'https://project-rhuzz.vercel.app'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={controls}
            className="flex gap-8"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Double the projects for seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0"
                style={{
                  width: '500px',
                }}
              >
                <div className="bg-white/5 rounded-lg overflow-hidden h-full">
                  <div className="relative h-64">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="500px"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <FaGithub size={20} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <FaExternalLinkAlt size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
