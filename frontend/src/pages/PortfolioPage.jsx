import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolio');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => (
          <div key={item._id} className="shadow-lg rounded-lg overflow-hidden">
            {/* Portfolio item details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;