import { FaLinkedin } from 'react-icons/fa';
import { FaSignalMessenger } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
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

  const contacts = [
    
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/rhuzz-paramio/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Messenger',
      icon: <FaSignalMessenger size={24} />,
      url: 'https://m.me/rhuzz.paramio',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: <MdEmail size={24} />,
      url: 'mailto:boyparamio@gmail.com',
      color: 'hover:text-red-500'
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
        <h2 className="text-2xl font-bold mb-6 text-white">Let&apos;s Connect!</h2>
        <div className="grid grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors ${contact.color}`}
            >
              {contact.icon}
              <span className="text-white">{contact.name}</span>
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
