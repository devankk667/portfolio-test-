import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaPinterest, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaInstagram className="w-5 h-5" />, url: '#' },
    { icon: <FaFacebook className="w-5 h-5" />, url: '#' },
    { icon: <FaPinterest className="w-5 h-5" />, url: '#' },
    { icon: <FaYoutube className="w-5 h-5" />, url: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Bridal Makeup',
    'Editorial Makeup',
    'Special Effects',
    'Makeup Lessons',
    'Group Bookings',
    'On-Location Services'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-transparent">
              TILBU
            </Link>
            <p className="text-gray-400">
              Professional makeup artistry services for bridal, editorial, and special events. 
              Creating beauty that tells your unique story.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>123 Makeup Studio, Beauty Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <a href="mailto:contact@tilbu.com" className="hover:text-primary transition-colors duration-300">
                  contact@tilbu.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} TILBU Makeup Artistry. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-primary transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;