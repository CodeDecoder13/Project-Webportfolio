import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/rhuzz-6904b7187/',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/CodeDecoder13',
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope size={16} />,
      text: 'boyparamio@gmail.com',
      url: 'mailto:boyparamio@gmail.com',
    },
    {
      icon: <FaPhone size={16} />,
      text: '09277417341',
      url: 'tel:09277417341',
    },
    {
      icon: <FaMapMarkerAlt size={16} />,
      text: 'Manila, Philippines',
      url: 'https://maps.google.com/?q=Manila,Philippines',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Resume', href: '/#resume' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Rhuzzel Paramio</h3>
            <p className="text-gray-400 text-sm">
              Software Engineer specializing in web development and Software Quality Assurance Engineering.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors flex items-center space-x-2 text-sm"
                  >
                    <span>{info.icon}</span>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold">Powered By</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Next.js</li>
              <li className="text-gray-400 text-sm">Tailwind CSS</li>
              <li className="text-gray-400 text-sm">Framer Motion</li>
              <li className="text-gray-400 text-sm">TypeScript</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rhuzzel Paramio. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
