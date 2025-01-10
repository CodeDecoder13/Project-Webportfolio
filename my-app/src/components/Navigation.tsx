import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaDownload } from 'react-icons/fa';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Skills & Achievements', href: '/#skills' },
    { name: 'Leadership', href: '/#leadership' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  const navigateToSection = async (href: string) => {
    console.log('Navigation attempt:', {
      href,
      currentPath: router.pathname,
      currentHash: router.asPath
    });

    // Close mobile menu
    setIsOpen(false);

    // If href is root, always navigate to home page
    if (href === '/') {
      try {
        await router.push('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      } catch (error) {
        console.error('Home navigation error:', error);
      }
    }

    // If not on home page, navigate to home first
    if (router.pathname !== '/') {
      try {
        await router.push('/');
      } catch (error) {
        console.error('Navigation to home error:', error);
        return;
      }
    }

    // For section navigation on home page
    const targetId = href.replace('/#', '');
    
    // Use router.push to ensure correct navigation
    try {
      await router.push(`/#${targetId}`);

      // Wait a moment for the page to update
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; // Height of the fixed navbar plus some padding
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          console.error(`Element with id ${targetId} not found`);
        }
      }, 100);
    } catch (error) {
      console.error('Section navigation error:', error);
    }
  };

  const handleMouseEnter = (index: number): void => {
    setActiveIndex(index);
  };

  const handleDownload = () => {
    router.push('/resume');
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              onClick={() => {
                console.log('Logo clicked');
                navigateToSection('/');
              }}
              className="text-xl font-bold text-white hover:text-primary transition-colors cursor-pointer"
            >
              Rhuzzel Paramio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={item.name} onMouseEnter={() => handleMouseEnter(index)}>
                  <div
                    onClick={() => navigateToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </div>
                  {/* Indicator Line */}
                  {activeIndex === index && (
                    <div className="h-1 bg-primary rounded transition-all duration-300" style={{ width: '100%' }} />
                  )}
                </div>
              ))}
              
              {/* Contact Button */}
              <button
                onClick={() => setShowModal(true)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>

              {/* Resume Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="px-4 py-2 bg-primary text-white rounded-lg flex items-center space-x-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <FaDownload className="text-sm" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <div 
                    key={item.name} 
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => navigateToSection(item.href)}
                    className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                    {/* Indicator Line */}
                    {activeIndex === index && (
                      <div className="h-1 bg-primary rounded transition-all duration-300" style={{ width: '100%' }} />
                    )}
                  </div>
                ))}
                
                <button
                  onClick={() => {
                    setShowModal(true);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>

                {/* Mobile Resume Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  <FaDownload className="text-sm" />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navigation;