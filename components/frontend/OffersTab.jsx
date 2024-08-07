import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is imported

const offers = [
  { id: 1, name: '50% Off on Electronics', description: 'Get 50% off on all electronics items.' },
  { id: 2, name: 'Buy 1 Get 1 Free', description: 'Buy one and get one free on selected items.' },
  { id: 3, name: 'Free Shipping', description: 'Enjoy free shipping on orders over $100.' },
];

const OffersTab = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap text-white bg-neutral01">
      <div className="inline-block animate-scroll">
        {offers.map((offer) => (
          <div key={offer.id} className="inline-block mx-4 p-2 rounded w-96 ">
            <h3 className="text-16px">{offer.name}</h3>
            <p className="text-13px">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersTab;
