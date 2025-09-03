// WeddingsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import WeddingCard from './WeddingCard';

const WeddingsPage = ({ weddings }) => (
  <div className="container mx-auto p-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Featured Weddings</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weddings.length > 0
        ? weddings.map((w, i) => <WeddingCard key={i} wedding={w} />)
        : <p>No weddings yet — be the first to host!</p>}
    </div>
  </div>
);

export default WeddingsPage;
