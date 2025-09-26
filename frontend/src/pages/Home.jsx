import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';

// Sample services data - this would typically come from an API
const services = [
  {
    id: 1,
    title: 'Bridal Makeup',
    category: 'Wedding',
    description: 'Flawless makeup for your special day, designed to last from "I do" to the last dance.',
    duration: '2-3 hours',
    price: 250,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Pre-wedding consultation',
      'Trial session included',
      'Luxury products',
      'Travel to your location',
      'Touch-up kit included'
    ],
    isPopular: true
  },
  {
    id: 2,
    title: 'Editorial Makeup',
    category: 'Photoshoot',
    description: 'Creative and bold looks designed for the camera and professional photography.',
    duration: '1-2 hours',
    price: 180,
    image: 'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Custom look design',
      'Studio or on-location',
      'HD ready',
      'Professional products',
      'Multiple looks available'
    ]
  },
  {
    id: 3,
    title: 'Special Effects',
    category: 'SFX',
    description: 'Transformative makeup for film, theater, and special events that will leave everyone amazed.',
    duration: '2-4 hours',
    price: 350,
    image: 'https://images.unsplash.com/photo-1606890542164-9c8d1e9ab936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Custom design',
      'Professional materials',
      'Long-lasting application',
      'Character development',
      'Photo documentation'
    ]
  }
];

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformative Beauty Experiences
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bridal glam to creative editorial, discover our range of professional makeup services tailored to your unique style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
            >
              View All Services
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and experience professional makeup artistry that enhances your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/booking" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Book Now
            </a>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
