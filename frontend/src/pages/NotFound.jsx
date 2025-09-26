import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link 
            to="/" 
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <FaHome className="mr-2" /> Go to Homepage
          </Link>
          <Link 
            to="/contact" 
            className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-lg font-medium hover:bg-pink-50 transition-colors flex items-center justify-center"
          >
            Contact Us <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-12 p-6 bg-white rounded-xl shadow-md inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-gray-600">
            Looking for something specific? Check out our <Link to="/services" className="text-pink-600 hover:underline font-medium">services</Link> or <Link to="/portfolio" className="text-pink-600 hover:underline font-medium">portfolio</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
