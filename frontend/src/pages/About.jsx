import { motion } from 'framer-motion';
import { FaPalette, FaAward, FaHeart, FaQuoteLeft } from 'react-icons/fa';
import { GiLipstick } from 'react-icons/gi';

timeline.jsx
const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <FaHeart className="w-6 h-6" /> },
    { number: '8+', label: 'Years Experience', icon: <FaAward className="w-6 h-6" /> },
    { number: '1000+', label: 'Sessions Completed', icon: <GiLipstick className="w-6 h-6" /> },
    { number: '50+', label: 'Workshops Held', icon: <FaPalette className="w-6 h-6" /> },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Makeup Artist',
      bio: 'With over 8 years in the beauty industry, Alex specializes in bridal and editorial makeup, creating looks that enhance natural beauty.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      name: 'Jamie Smith',
      role: 'SFX Specialist',
      bio: 'Jamie brings characters to life with incredible special effects makeup, with experience in film, theater, and special events.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    }
  ];

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 to-primary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creating beauty that tells your unique story
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Beauty is About Being Comfortable in Your Own Skin
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-primary mx-auto rounded-full mb-8"></div>
            
            <div className="relative max-w-3xl mx-auto mb-12">
              <FaQuoteLeft className="text-pink-200 text-5xl absolute -top-6 -left-2 md:-left-6" />
              <p className="text-xl text-gray-700 italic mb-8 relative z-10">
                Makeup is not a mask that covers up your beauty; it's a weapon that helps you express who you are from the inside.
              </p>
              <div className="font-medium text-gray-900">- Alex Johnson, Founder</div>
            </div>
            
            <div className="prose prose-lg text-gray-600 text-left max-w-none">
              <p className="mb-6">
                Founded in 2015, TILBU Makeup Artistry began as a small studio with a big dream: to help people see and feel their most beautiful selves. What started as a solo venture has grown into a passionate team of artists dedicated to the craft of makeup artistry.
              </p>
              <p className="mb-6">
                We believe that makeup should enhance, not mask, your natural beauty. Our approach is all about understanding your unique features and creating looks that make you feel confident and empowered.
              </p>
              <p>
                Whether it's your wedding day, a special event, or just because, we're here to bring your vision to life with skill, creativity, and a whole lot of passion.
              </p>
            </div>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team */}
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              The Faces Behind the Magic
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-pink-600 font-medium mb-4">{member.role}</div>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a href={member.social.instagram} className="text-gray-500 hover:text-pink-600 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href={member.social.facebook} className="text-gray-500 hover:text-pink-600 transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="text-gray-500 hover:text-pink-600 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-600 to-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Beauty Journey?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Book your consultation today and let us help you discover your signature look.
            </p>
            <a 
              href="/booking" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
