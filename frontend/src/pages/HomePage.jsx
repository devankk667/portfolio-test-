import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <section className="hero bg-cover bg-center text-white h-[60vh]" style={{backgroundImage: 'url(hero-image.jpg)'}}>
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Makeup by [Artist Name]</h1>
          <p className="text-xl mt-4">Bridal, Editorial, and Special Occasion Makeup</p>
          <Link to="/contact" className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
            Book Now
          </Link>
        </div>
      </section>
      {/* Other sections like featured work, testimonials */}
    </div>
  );
};

export default HomePage;