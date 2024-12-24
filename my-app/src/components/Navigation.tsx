import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaDownload } from 'react-icons/fa';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Skills & Achievements', href: '/#skills' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  const handleDownload = async () => {
    window.location.href = '/resume';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of the fixed navbar plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              href="/#home"
              onClick={(e) => handleNavClick(e, '/#home')}
              className="text-xl font-bold text-white hover:text-primary transition-colors"
            >
              RP
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
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
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
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