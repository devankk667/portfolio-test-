import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/90'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-transparent"
          >
            TILBU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => {
                  const baseClasses = 'relative px-1 py-2 text-sm font-medium transition-colors duration-200';
                  const activeClasses = isActive ? 'text-primary' : 'text-gray-700 hover:text-primary';
                  const underlineClasses = 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-pink-600 after:to-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100';
                  const activeUnderline = isActive ? 'after:scale-x-100' : '';
                  
                  return `${baseClasses} ${activeClasses} ${underlineClasses} ${activeUnderline}`;
                }}
              >
                {item.name}
              </NavLink>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-pink-600 to-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-3 mt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}