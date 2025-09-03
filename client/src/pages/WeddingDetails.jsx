// src/pages/WeddingDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import WeddingData from '../data/weddingData'; // create this data file from your array

function WeddingDetail() {
  const { id } = useParams();
  const wedding = WeddingData.find(item => item.id === parseInt(id));

  if (!wedding) return <div className="text-center text-xl py-16">Wedding not found.</div>;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">{wedding.title}</h1>
      <img src={wedding.image} alt={wedding.title} className="w-full max-h-[500px] object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-6">{wedding.description}</p>
      <h2 className="text-2xl font-semibold mb-4">Ceremonies:</h2>
      <ul className="list-disc list-inside space-y-1">
        {wedding.ceremonies.map((ceremony, idx) => (
          <li key={idx}>{ceremony}</li>
        ))}
      </ul>
    </div>
  );
}

export default WeddingDetail;
