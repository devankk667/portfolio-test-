import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-pink-900 text-white">
      <nav className="container mx-auto px-4 py-3 flex justify-between">
        <Link to="/" className="text-2xl font-bold">Makeup Artistry</Link>
        {/* Mobile menu button */}
        {/* Desktop navigation */}
      </nav>
    </header>
  );
}