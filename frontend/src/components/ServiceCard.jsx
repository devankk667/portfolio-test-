import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      whileHover="hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-600 text-white">
            {service.duration}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-1 bg-gradient-to-r from-pink-600 to-primary rounded-full"></div>
            <span className="text-sm font-medium text-pink-600">{service.category}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">${service.price}</span>
              {service.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">${service.originalPrice}</span>
              )}
            </div>
            <button className="group flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors">
              Book Now
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {service.isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-600 to-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
