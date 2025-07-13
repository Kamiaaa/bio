'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWalkieTalkie } from "react-icons/fa6";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 pt-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className='text-center py-20'>
            <span className="relative inline-block text-gray-800 dark:text-gray-50">
              Get in Touch

              {/* Before and after lines with rings and a star in the center */}
              <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                {/* Left Line and Ring */}
                <div className="relative flex items-center">
                  <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                  <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                </div>
                {/* Center Icon */}
                <span className="z-20 bg-gray-50 dark:bg-gray-800 px-1">
                  <FaWalkieTalkie className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
                </span>
                {/* Right Line and Ring */}
                <div className="relative flex items-center">
                  <span className="w-16 sm:w-20 border-t-2 border-[#696b67]"></span>
                  <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                </div>
              </span>
            </span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 dark:bg-gray-900">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg h-full">
              <h2 className="text-gray-900 dark:text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                {[
                  { icon: FiMail, title: 'Email', lines: ['info@biobuildbd.com', 'care@s@biobuildbd.com'] },
                  { icon: FiPhone, title: 'Phone', lines: [' +88017 51 51 12 12', 'Sat-Thu, 10am-6pm'] },
                  { icon: FiMapPin, title: 'Address', lines: ['House: 05, Road 20, Sector 13 Uttara, Dhaka-1230', 'Bangladesh.'] }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 bg-[#95c573] dark:bg-[#7AA859] p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-[#7AA859] dark:text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-400 mt-1">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full transition-colors duration-200"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-gray-900 dark:text-white mb-6">Send us a message</h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center"
              >
                <FiCheckCircle className="mx-auto h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">Message sent successfully!</h3>
                <p className="text-green-600 dark:text-green-400">We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: 'Full Name', name: 'name', type: 'text' },
                  { label: 'Email Address', name: 'email', type: 'email' },
                  { label: 'Subject', name: 'subject', type: 'text' }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {field.label}
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50
                        ${errors[field.name as keyof typeof errors]
                            ? 'border-[#95c573] focus:ring-[#95c573] focus:border-[#95c573]'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-[#95c573] focus:border-[#95c573] dark:bg-gray-700 dark:text-white'}`}
                      />
                      {errors[field.name as keyof typeof errors] && (
                        <p className="mt-1 text-sm text-[#7AA859]">{errors[field.name as keyof typeof errors]}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-1 relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50
                      ${errors.message
                          ? 'border-[#7AA859] focus:ring-[#7AA859] focus:border-[#7AA859]'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-[#7AA859] focus:border-[#7AA859] dark:bg-gray-700 dark:text-white'}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-[#7AA859]">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#7AA859] hover:bg-[#84b163] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7AA859] transition-colors duration-200 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
