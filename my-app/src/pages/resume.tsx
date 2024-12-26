import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaGraduationCap, FaDownload, FaArrowLeft } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Resume = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Rhuzzel_Paramio_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const experience = [
    {
      title: "Intern - Software QA Engineer",
      company: "Reed Elsevier Philippines",
      duration: "December 2023 - July 2024",
      description: [
        "Developed and executed comprehensive test plans and test cases for web applications",
        "Performed manual and automated testing using Selenium WebDriver and Playwright",
        "Conducted functional, regression, and performance testing",
        "Collaborated with developers to resolve identified issues and improve product quality",
        "Documented and tracked software defects using Azure DevOps"
      ]
    },
    {
      title: "Junior Software Engineer",
      company: "Upwork",
      duration: "September 2023 - February 2024",
      description: [
        "Developed and maintained web applications using Laravel, PHP, and JavaScript",
        "Implemented responsive designs using Tailwind CSS and modern UI/UX principles",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Participated in code reviews and provided constructive feedback"
      ]
    }
  ];

  const certifications = [
    {
      name: "Python IT Specialist",
      issuer: "Certiport",
      date: "2023",
      description: "Certification validating expertise in Python programming fundamentals and application development"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "2023",
      description: "Comprehensive understanding of generative AI concepts and applications"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2023",
      description: "Foundation in cybersecurity principles and best practices"
    },
    {
      name: "Introduction to Data Science",
      issuer: "Cisco",
      date: "2024",
      description: "Comprehensive understanding of data science principles and applications"
    },
    {
      name: "Devnet Associate",
      issuer: "Cisco",
      date: "2022",
      description: "Demonstrated fundamental knowledge of networking, automation, and DevOps skills"
    },
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science Specialize in Software Engineering",
    school: "FEU Institute of Technology",
    duration: "2020 - 2025",
    achievements: [
      "Active Student Leader for executive 2 years",
      "Best in Category Capstone Award"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary/20 rounded-lg text-white transition-all group"
            >
              <FaArrowLeft className="text-primary group-hover:translate-x-[-4px] transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-b from-background to-background/50 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">Professional Resume</h1>
                <p className="text-gray-400 max-w-2xl">
                  A detailed overview of my professional experience, certifications, and educational background
                  in software development and quality assurance.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="px-6 py-3 bg-primary text-white rounded-lg flex items-center space-x-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <FaDownload className="text-sm" />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-primary text-2xl mr-4" />
              <h2 className="text-2xl font-bold text-white">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-primary mb-2">{job.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{job.duration}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <FaCertificate className="text-primary text-2xl mr-4" />
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-primary mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-primary text-2xl mr-4" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">{education.degree}</h3>
              <p className="text-primary mb-2">{education.school}</p>
              <p className="text-gray-400 text-sm mb-4">{education.duration}</p>
              <div className="space-y-2">
                <h4 className="text-white font-medium mb-2">Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {education.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
