import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
          className="relative w-32 h-32 mx-auto mb-8 group"
        >
          <Image
            src="/me/cover.jpg"
            alt="Rhuzzel Paramio"
            fill
            className="rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Hi, I'm Rhuzzel Paramio 
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-400 mb-8"
        >
          A Conspiring Software Engineer and Sofware QA Engineer
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-gray-300 mb-12"
        >
          Passionate about Computer Science, Software Engineering, Web Development, 
          and Automation Testing. Experienced with Laravel, Selenium, Python, 
          JavaScript, and Tailwind CSS.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-full transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 