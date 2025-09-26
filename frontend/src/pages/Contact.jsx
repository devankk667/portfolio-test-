import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheck, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Bridal Makeup',
    'Engagement Makeup',
    'Party Makeup',
    'Photoshoot Makeup',
    'Special Effects',
    'Makeup Lesson',
    'Other (Please specify in message)'
  ];

  const faqs = [
    {
      question: 'How far in advance should I book my appointment?',
      answer: 'For weddings and special events, we recommend booking at least 2-3 months in advance. For other services, 2-3 weeks notice is usually sufficient.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 48 hours notice for cancellations or rescheduling. Appointments cancelled within 24 hours may be subject to a cancellation fee.'
    },
    {
      question: 'Do you travel to locations?',
      answer: 'Yes, we offer on-location services for an additional travel fee based on distance. Please contact us for a custom quote.'
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept all major credit cards, PayPal, and cash. A deposit is required to secure your booking.'
    },
    {
      question: 'How long do makeup applications typically take?',
      answer: 'Makeup applications typically take 45-90 minutes depending on the complexity of the look and the service selected.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Book Your Appointment
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to enhance your natural beauty? Contact us today to schedule your personalized makeup experience.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="text-green-600 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center mx-auto"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="md:col-span-2">
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date & Time</label>
                      <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      />
                      <p className="text-xs text-gray-500 mt-1">We'll contact you to confirm the exact time.</p>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="Tell us about your event and any special requests..."
                      ></textarea>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaArrowRight className="ml-2" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  </div>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                        <div className="w-5 h-5 text-pink-600 transform transition-transform duration-200 group-open:rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0 -mt-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full text-pink-600 mr-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Our Studio</h3>
                    <p className="text-gray-600">123 Beauty Street, Makeup City<br />Mumbai, Maharashtra 400001</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-pink-600 hover:underline"
                    >
                      View on map
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full text-pink-600 mr-4">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <a href="tel:+911234567890" className="text-gray-600 hover:text-pink-600">+91 12345 67890</a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full text-pink-600 mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <a href="mailto:info@makeupartisanname.com" className="text-gray-600 hover:text-pink-600">info@makeupartisanname.com</a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                    <FaClock className="text-pink-600 mr-2" /> Business Hours
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { day: 'Monday - Friday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
                      { day: 'Sunday', hours: 'Closed' },
                      { day: 'Holidays', hours: 'Special hours may apply' }
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-gray-600">{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                <div className="text-center p-4">
                  <FaMapMarkerAlt className="text-4xl text-pink-600 mx-auto mb-2" />
                  <p>Map Integration</p>
                  <p className="text-sm">Google Maps will be embedded here</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:underline"
                >
                  Get Directions <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: 'FaInstagram', color: 'bg-gradient-to-r from-pink-600 to-purple-600' },
                  { icon: 'FaFacebook', color: 'bg-blue-600' },
                  { icon: 'FaPinterest', color: 'bg-red-600' },
                  { icon: 'FaYoutube', color: 'bg-red-600' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                    aria-label={social.icon.replace('Fa', '')}
                  >
                    {social.icon === 'FaInstagram' && <FaInstagram className="text-xl" />}
                    {social.icon === 'FaFacebook' && <FaFacebook className="text-xl" />}
                    {social.icon === 'FaPinterest' && <FaPinterest className="text-xl" />}
                    {social.icon === 'FaYoutube' && <FaYoutube className="text-xl" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Beauty?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Book your appointment today and experience professional makeup artistry at its finest.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact-form" 
              className="bg-white text-pink-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </a>
            <a 
              href="tel:+911234567890" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
