import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Indoor Air Quality Monitoring and Recommnedation System',
      description: 'a Project created by Collaborating with a team of 4 members for the Capstone Project',
      technologies: ['Flutter', 'FastApi', 'MySql', 'Python','Php'],
      imageUrl: '/projects/projec1.jpg',
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.com'
    },
    {
      title: 'iTam_Portal_for_Invitational_Sportfests',
      description: 'Description of your second project',
      technologies: ['PHP', 'Laravel','Taiwlind CSS','PostgreSQL'],
      imageUrl: '/projects/project2.jpg',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Compliment Generator',
      description: 'Description of your third project',
      technologies: ['Laravel', 'MySQL', 'Vue.js'],
      imageUrl: '/projects/project3.jpg',
      githubUrl: 'https://github.com/yourusername/project3',
      liveUrl: 'https://project3.com'
    },
    {
      title: 'Project 4',
      description: 'Description of your fourth project',
      technologies: ['React Native', 'Firebase'],
      imageUrl: '/projects/project4.jpg',
      githubUrl: 'https://github.com/yourusername/project4'
    },
    {
      title: 'Project 5',
      description: 'Description of your fifth project',
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
      imageUrl: '/projects/project5.jpg',
      githubUrl: 'https://github.com/yourusername/project5',
      liveUrl: 'https://project5.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in different technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
