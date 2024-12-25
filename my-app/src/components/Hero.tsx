import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactModal from './ContactModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Hi, I&apos;m Rhuzzel Paramio 
              </motion.h1>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400"
            >
              A Conspiring Software Engineer and Software QA Engineer
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300"
            >
              Passionate about Computer Science, Software Engineering, Web Development, 
              and Automation Testing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-colors duration-300"
              >
                View My Work
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-full transition-colors duration-300"
              >
                Let&apos;s Talk About Your Project!
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
            className="relative w-full h-[600px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image
                src="/me/me3.jpg"
                alt="Rhuzzel Paramio"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default Hero;