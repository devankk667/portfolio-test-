import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block bg-gradient-to-r from-pink-600 to-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Professional Makeup Artistry
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Transform Your Look with <span className="bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-transparent">Expert Artistry</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            variants={fadeInUp}
          >
            Discover your unique beauty with our bespoke makeup services. From bridal to editorial, 
            we create looks that tell your story and boost your confidence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={fadeInUp}
          >
            <Link 
              to="/booking" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/30"
            >
              <span className="relative z-10 flex items-center">
                Book a Session <FaCalendarAlt className="ml-2" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            <Link 
              to="/portfolio" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <span className="relative z-10 flex items-center">
                View Portfolio <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-8 text-gray-300 text-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-800"
                    style={{
                      backgroundImage: `url(https://randomuser.me/api/portraits/women/${item + 10}.jpg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                ))}
              </div>
              <span>Trusted by 500+ clients</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-600/20 text-pink-400 mr-3">
                <span className="text-xs font-bold">5.0</span>
              </div>
              <span>Rated 5/5 on Google</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
