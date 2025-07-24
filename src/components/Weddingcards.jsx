import React from 'react'
import { Link } from 'react-router-dom';

function Weddingcards({image, title, date, location, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <i className="far fa-calendar-alt mr-2"></i>
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <i className="fas fa-map-marker-alt mr-2"></i>
        <span>{location}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="block text-center bg-pink-600 hover:bg-pink-700 text-white py-2 rounded transition"
      >
        View Details
      </Link>
    </div>
  </div>
  )
}

export default Weddingcards
