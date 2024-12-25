import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';

interface Testimonial {
  id?: string;
  name: string;
  role: string;
  message: string;
  email: string;
  linkedin_url?: string;
  created_at?: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<Testimonial>({
    name: '',
    role: '',
    message: '',
    email: '',
    linkedin_url: ''
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      if (data) {
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('testimonials')
        .insert([formData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setTestimonials([data, ...testimonials]);
        setFormData({
          name: '',
          role: '',
          message: '',
          email: '',
          linkedin_url: ''
        });
      }
    } catch (error) {
      console.error('Error adding testimonial:', error);
      alert('Failed to submit testimonial. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants for the testimonial cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.95
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What People Say About My Work 💭
          </h2>
          <p className="text-gray-400">
            Feedback from colleagues and clients
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {loading ? (
          <div className="text-center text-gray-400">Loading testimonials...</div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border border-white/10"
              >
                <p className="text-gray-300 mb-4">{testimonial.message}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  {testimonial.linkedin_url && (
                    <a
                      href={testimonial.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Add Testimonial Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Share Your Experience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your role"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="linkedin_url" className="block text-sm font-medium text-gray-300 mb-2">
                LinkedIn Profile URL (optional)
              </label>
              <input
                type="url"
                id="linkedin_url"
                name="linkedin_url"
                value={formData.linkedin_url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 resize-none"
                placeholder="Share your experience working with me..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                submitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {submitting ? 'Submitting...' : 'Submit Testimonial'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
