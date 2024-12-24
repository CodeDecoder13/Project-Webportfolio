import { FaInstagram, FaLinkedin, FaFacebook, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const socials = [
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook size={24} />,
      url: 'https://facebook.com/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Book a Zoom',
      icon: <FaVideo size={24} />,
      url: 'https://calendly.com/yourusername',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-background/95 backdrop-blur-lg p-8 rounded-2xl border border-white/10 max-w-md w-full m-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Let's Connect!</h2>
        <div className="grid grid-cols-2 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors ${social.color}`}
            >
              {social.icon}
              <span className="text-white">{social.name}</span>
            </a>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
