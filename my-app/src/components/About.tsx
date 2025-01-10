import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[250px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/me/cover.jpg"
              alt="Rhuzzel Paramio"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center lg:text-left"
            >
              About Me
            </motion.h2>

            <div className="space-y-3 sm:space-y-4">
              <motion.p
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 text-sm sm:text-base text-justify"
              >
                I am Rhuzzel Paramio, a BSCSSE student at FEU Tech, specializing in Software Engineering. I am a highly dependable and organized individual, known for my positive attitude and commitment to excellence. My experience spans web development, quality assurance, and leadership roles, where I consistently demonstrate my ability to manage multiple priorities in fast-paced environments effectively.
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 text-sm sm:text-base text-justify"
              >
                With hands-on expertise in modern technologies such as Next.js, Laravel, Selenium with C#, and cloud solutions like Azure DevOps, I am passionate about building efficient, scalable, and user-centric software. I have hands-on experience with automation testing and manual testing methodologies, ensuring software quality and reliability. Additionally, I am proficient in using Git for version control, enabling effective collaboration and code management. My technical skills are complemented by strong problem-solving abilities, time management, and an unwavering focus on detail.
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 text-sm sm:text-base text-justify"
              >
                Beyond academics, I am an former student leader, having served as Public Relations and Logistics Officer for the FEU Tech Student Coordinating Council and as Director of Logistics for the Junior Philippine Computer Society – FEU Tech Chapter. These experiences have honed my communication, event planning, and team collaboration skills.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white text-sm sm:text-base">Education</h3>
                <p className="text-xs sm:text-sm text-gray-400">BSCSSE at FEU Tech</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white text-sm sm:text-base">Experience</h3>
                <p className="text-xs sm:text-sm text-gray-400">Web Development & QA</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white text-sm sm:text-base">Leadership</h3>
                <p className="text-xs sm:text-sm text-gray-400">Student Council & JPCS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
