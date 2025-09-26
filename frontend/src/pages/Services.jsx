import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaStar, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Sample services data - replace with your actual services
const services = [
  {
    id: 1,
    title: 'Bridal Makeup',
    description: 'Flawless makeup for your special day, designed to last from "I do" to the last dance. Includes a trial session to perfect your look.',
    duration: '2-3 hours',
    price: 250,
    originalPrice: 300,
    isPopular: true,
    features: [
      'Pre-wedding consultation',
      'Trial session included',
      'Luxury products',
      'Travel to your location',
      'Touch-up kit included',
      'Waterproof and long-lasting formulas',
      'Lashes included'
    ],
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
  },
  {
    id: 2,
    title: 'Editorial Makeup',
    description: 'Creative and bold looks designed for the camera and professional photography. Perfect for photoshoots and fashion events.',
    duration: '1-2 hours',
    price: 180,
    features: [
      'Custom look design',
      'Studio or on-location',
      'HD ready',
      'Professional products',
      'Multiple looks available',
      'Airbrush option',
      'False lashes included'
    ],
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'Special Effects Makeup',
    description: 'Transformative makeup for film, theater, and special events that will leave everyone amazed.',
    duration: '2-4 hours',
    price: 350,
    features: [
      'Custom design',
      'Professional materials',
      'Long-lasting application',
      'Character development',
      'Photo documentation',
      'Prosthetic application',
      'Removal service available'
    ],
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1606890542164-9c8d1e9ab936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 4,
    title: 'Evening Glam',
    description: 'Perfect for a night out or special event. Get red-carpet ready with our glamorous makeup application.',
    duration: '1-1.5 hours',
    price: 120,
    features: [
      'Custom look design',
      'Long-wearing products',
      'False lashes included',
      'Skin prep & hydration',
      'Contour & highlight',
      'Travel service available',
      'Touch-up tips provided'
    ],
    category: 'glam',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 5,
    title: 'Natural Makeup',
    description: 'Enhance your natural beauty with a fresh, no-makeup makeup look that highlights your best features.',
    duration: '45-60 mins',
    price: 90,
    features: [
      'Skin-first approach',
      'Natural enhancement',
      'Light coverage',
      'Subtle definition',
      'Perfect for work or day events',
      'Skincare benefits',
      'Quick application'
    ],
    category: 'natural',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  },
  {
    id: 6,
    title: 'Makeup Lesson',
    description: 'Learn professional techniques and get personalized tips to recreate your favorite looks at home.',
    duration: '2 hours',
    price: 150,
    features: [
      'Personalized instruction',
      'Product recommendations',
      'Hands-on practice',
      'Customized look',
      'Take-home guide',
      'Product list provided',
      'Q&A session'
    ],
    category: 'lesson',
    image: 'https://images.unsplash.com/photo-1595475884565-98170c0a2e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  }
];

// Service categories for filtering
const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'wedding', name: 'Bridal' },
  { id: 'editorial', name: 'Editorial' },
  { id: 'sfx', name: 'Special FX' },
  { id: 'glam', name: 'Glam' },
  { id: 'natural', name: 'Natural' },
  { id: 'lesson', name: 'Lessons' }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const categories = ['all', ...new Set(services.map(service => service.category))];
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleBookNow = (serviceId) => {
    navigate(`/book-now/${serviceId}`);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-primary text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Professional makeup services tailored to your unique style and needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.id === selectedCategory)?.name}`}
              </h2>
              
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <FaFilter className="mr-2" />
                  Filter Services
                </button>
                
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-30">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          selectedCategory === category.id 
                            ? 'bg-pink-50 text-pink-600' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile category chips */}
            <div className="flex flex-wrap gap-2 mb-6 md:hidden">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-700">No services found in this category</h3>
              <p className="text-gray-500 mt-2">Try selecting a different filter</p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div 
                    key={service.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={item}
                    layout
                  >
                    {service.isPopular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <div className="text-right">
                          <span className="block text-2xl font-bold text-pink-600">${service.price}</span>
                          {service.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${service.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FaClock className="mr-1" />
                        <span>{service.duration}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mt-4">
                        <button
                          onClick={() => toggleService(service.id)}
                          className="flex items-center text-pink-600 hover:text-pink-700 text-sm font-medium"
                        >
                          {expandedService === service.id ? (
                            <>
                              Hide details
                              <FaChevronUp className="ml-1" />
                            </>
                          ) : (
                            <>
                              View details
                              <FaChevronDown className="ml-1" />
                            </>
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {expandedService === service.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-4 space-y-2">
                                {service.features.map((feature, index) => (
                                  <li key={index} className="flex items-start">
                                    <FaCheck className="text-pink-500 mt-1 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              <div className="mt-6">
                                <a
                                  href={`/booking?service=${service.id}`}
                                  className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                >
                                  <FaCalendarAlt className="inline mr-2" />
                                  Book Now
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for personal use</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$90</span>
                <span className="text-gray-500"> / session</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>1-1.5 hour session</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Natural makeup</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Basic skincare</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <FaCheck className="mr-2" />
                  <span className="line-through">False lashes</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <FaCheck className="mr-2" />
                  <span className="line-through">Airbrush</span>
                </li>
              </ul>
              <a 
                href="/booking" 
                className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Get Started
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600 to-primary text-white rounded-xl p-8 shadow-lg transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-pink-100 mb-6">Best value for special events</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$180</span>
                <span className="text-pink-200"> / session</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaStar className="text-yellow-300 mr-2" />
                  <span>2-3 hour session</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-yellow-300 mr-2" />
                  <span>Full glam makeup</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-yellow-300 mr-2" />
                  <span>Luxury skincare</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-yellow-300 mr-2" />
                  <span>False lashes included</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-yellow-300 mr-2" />
                  <span>Airbrush option</span>
                </li>
              </ul>
              <a 
                href="/booking" 
                className="block w-full text-center bg-white hover:bg-gray-100 text-pink-600 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Choose Premium
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deluxe</h3>
              <p className="text-gray-600 mb-6">Ultimate luxury experience</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$350+</span>
                <span className="text-gray-500"> / session</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>4+ hour session</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Custom design</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Premium products</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Special effects</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Priority booking</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Contact for Quote
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-600 max-w-3xl mx-auto">
            <p className="mb-4">
              * Prices are starting rates and may vary based on complexity, location, and additional services. 
              Contact us for a personalized quote.
            </p>
            <p>
              ** A 50% deposit is required to secure your booking, with the remaining balance due on the day of service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Session?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something beautiful together. Book your appointment today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/booking" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <FaCalendarAlt className="mr-2" />
              Book Now
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Discover our range of professional makeup services</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-indigo-600 font-medium mt-1">${service.price}</p>
                  </div>
                  {service.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${service.originalPrice}</span>
                  )}
                </div>
                
                <p className="mt-3 text-gray-600">{service.description}</p>
                
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <FaClock className="mr-1" />
                  <span>{service.duration}</span>
                  {service.isPopular && (
                    <span className="ml-3 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full flex items-center">
                      <FaStar className="mr-1" /> Popular
                    </span>
                  )}
                </div>

                <button
                  onClick={() => toggleService(service.id)}
                  className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  {expandedService === service.id ? (
                    <>
                      Hide details <FaChevronUp className="ml-1" />
                    </>
                  ) : (
                    <>
                      View details <FaChevronDown className="ml-1" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 overflow-hidden"
                    >
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleBookNow(service.id)}
                        className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                      >
                        Book Now
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
