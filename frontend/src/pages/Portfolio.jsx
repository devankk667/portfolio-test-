import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Sample portfolio items - replace with your actual images
const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Bridal Look',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    tags: ['bridal', 'natural', 'soft-glam']
  },
  {
    id: 2,
    title: 'Editorial Fantasy',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    tags: ['editorial', 'dramatic', 'high-fashion']
  },
  {
    id: 3,
    title: 'Special Effects Masterpiece',
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1606890542164-9c8d1e9ab936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['sfx', 'prosthetics', 'character']
  },
  {
    id: 4,
    title: 'Bold & Beautiful',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['editorial', 'bold', 'colorful']
  },
  {
    id: 5,
    title: 'Classic Bride',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['bridal', 'classic', 'timeless']
  },
  {
    id: 6,
    title: 'Fantasy Creature',
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1606890799983-13b5d1a6e7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['sfx', 'fantasy', 'prosthetics']
  },
  {
    id: 7,
    title: 'Glamorous Evening',
    category: 'evening',
    image: 'https://images.unsplash.com/photo-1529333241836-1baf737f0e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['evening', 'glam', 'smokey-eye']
  },
  {
    id: 8,
    title: 'Natural Beauty',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    tags: ['bridal', 'natural', 'minimal']
  },
  {
    id: 9,
    title: 'Runway Ready',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    tags: ['fashion', 'runway', 'trending']
  },
  {
    id: 10,
    title: 'Bold & Edgy',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    tags: ['editorial', 'edgy', 'bold']
  },
  {
    id: 11,
    title: 'Ethereal Beauty',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1487412947144-9e5ca282be0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['bridal', 'ethereal', 'soft']
  },
  {
    id: 12,
    title: 'Dramatic Transformation',
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1606890729354-5d3b3b1b5a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['sfx', 'transformation', 'dramatic']
  }
];

// Available categories for filtering
const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'bridal', name: 'Bridal' },
  { id: 'editorial', name: 'Editorial' },
  { id: 'sfx', name: 'Special Effects' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'evening', name: 'Evening' }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter portfolio items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  // Handle image click to open lightbox
  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(portfolioItems.findIndex(img => img.id === item.id));
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to previous/next image in lightbox
  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    } else {
      newIndex = (currentIndex + 1) % portfolioItems.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioItems[newIndex]);
  };

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigate('prev');
    } else if (e.key === 'ArrowRight') {
      navigate('next');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-primary text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our latest work and get inspired for your next look
          </p>
        </div>
      </section>

      {/* Portfolio Filters */}
      <div className="container mx-auto px-4 py-8 sticky top-0 bg-gray-50 z-20 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            {selectedCategory === 'all' ? 'All Work' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Work`}
          </h2>
          
          <div className="relative">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FiFilter className="mr-2" />
              Filter
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
        <div className="flex flex-wrap gap-2 mt-4 md:hidden">
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

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700">No items found in this category</h3>
            <p className="text-gray-500 mt-2">Try selecting a different filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => openLightbox(item, index)}
                        className="bg-white text-pink-600 p-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        aria-label="View larger image"
                      >
                        <FiZoomIn className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                      </div>
                      <div className="flex space-x-1">
                        {item.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{item.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
              aria-label="Close lightbox"
            >
              <FiX className="w-8 h-8" />
            </button>
            
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-4 md:left-8 p-2 text-white hover:text-pink-400 transition-colors"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="relative max-w-4xl w-full">
              <motion.img
                key={selectedImage.id}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto mx-auto rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300 capitalize">{selectedImage.category}</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('next')}
              className="absolute right-4 md:right-8 p-2 text-white hover:text-pink-400 transition-colors"
              aria-label="Next image"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSelectedImage(portfolioItems[index]);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? 'bg-pink-500' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-primary text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Perfect Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a consultation and let's discuss how we can bring your vision to life.
          </p>
          <a 
            href="/booking" 
            className="inline-block px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
