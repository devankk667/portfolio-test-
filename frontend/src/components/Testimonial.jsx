import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'Absolutely stunning work! My makeup lasted all day and night, even through tears of joy and hours of dancing. I felt like the most beautiful version of myself on my wedding day.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Groom',
    content: 'I was nervous about getting makeup done for my engagement shoot, but the artist made me feel completely at ease. The natural look was perfect and photographed amazingly well.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Bridal Party',
    content: 'The entire bridal party looked flawless! The artist was so efficient and professional, making sure each of us had a look that complemented our features and the wedding theme.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Photographer',
    content: 'As a wedding photographer, I work with many makeup artists. The work here is consistently exceptional - the makeup always looks perfect both in person and in photos.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 5,
    name: 'Jessica Williams',
    role: 'Bride',
    content: 'The trial session was so helpful in perfecting my wedding look. The artist listened to what I wanted and made me feel so comfortable. On the day, everything was flawless!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/45.jpg'
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-primary mx-auto rounded-full"></div>
        </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden h-[400px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-pink-100 mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6 text-pink-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`inline-block ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-pink-200 text-4xl mb-6" />
              
              <p className="text-lg text-gray-700 mb-6 max-w-2xl">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-pink-600">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button 
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-pink-600 hover:bg-pink-50 transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        
        <button 
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-pink-600 hover:bg-pink-50 transition-colors z-10"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Testimonial;
