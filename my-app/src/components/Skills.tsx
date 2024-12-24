import { motion } from 'framer-motion';
import { FaCertificate, FaCode, FaTools, FaDatabase, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    languages: [
      'JavaScript/TypeScript',
      'Python',
      'C#',
      'PHP',
      'HTML/CSS',
      'SQL',
    ],
    frameworks: [
      'Next.js',
      'Laravel',
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
    ],
    tools: [
      'Git',
      'Azure DevOps',
      'Selenium',
      'Docker',
      'Postman',
      'VS Code',
    ],
    databases: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'SQLite',
    ],
  };

  const certifications = [
    {
      name: 'Python IT Specialist',
      issuer: 'Certiport',
      date: '2023',
    },
    {
      name: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: '2023',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: '2023',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>
          <p className="text-gray-400">
            Technical expertise and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaCode className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-white">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaTools className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-white">Frameworks & Libraries</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaDatabase className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-white">Databases</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaCloud className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-white">Tools & Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-8">
              <FaCertificate className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-white">Certifications & Achievements</h3>
            </div>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10"
              >
                <h4 className="text-lg font-medium text-white mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="bg-primary/10 rounded-xl p-6 mt-8 border border-primary/20"
            >
              <h4 className="text-lg font-medium text-primary mb-2">Continuous Learning</h4>
              <p className="text-gray-300 text-sm">
                Actively pursuing new certifications and staying updated with the latest technologies
                in software development and quality assurance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
