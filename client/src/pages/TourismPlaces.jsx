import React from 'react'
import { useState } from 'react';
import { Search, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';

export default function TourismPlaces() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const destinations = [
    {
      id: 1,
      name: "Bali Paradise",
      location: "Bali, Indonesia",
      image: "/api/placeholder/800/500",
      category: "Beach",
      rating: 4.8,
      price: 1200,
      description: "Experience the stunning beaches and vibrant culture of Bali."
    },
    {
      id: 2,
      name: "Swiss Alpine Adventure",
      location: "Interlaken, Switzerland",
      image: "/api/placeholder/800/500", 
      category: "Mountain",
      rating: 4.9,
      price: 1800,
      description: "Explore the majestic Swiss Alps with breathtaking mountain views."
    },
    {
      id: 3,
      name: "Tokyo Explorer",
      location: "Tokyo, Japan",
      image: "/api/placeholder/800/500",
      category: "City",
      rating: 4.7,
      price: 1500,
      description: "Immerse yourself in the vibrant city life and culture of Tokyo."
    },
    {
      id: 4,
      name: "Amazon Rainforest Tour",
      location: "Manaus, Brazil",
      image: "/api/placeholder/800/500",
      category: "Adventure",
      rating: 4.6,
      price: 1350,
      description: "Discover the incredible biodiversity of the Amazon Rainforest."
    },
    {
      id: 5,
      name: "Rome Historical Journey",
      location: "Rome, Italy",
      image: "/api/placeholder/800/500",
      category: "Historical",
      rating: 4.8,
      price: 1400,
      description: "Walk through ancient history in the stunning city of Rome."
    },
    {
      id: 6,
      name: "Santorini Sunset",
      location: "Santorini, Greece",
      image: "/api/placeholder/800/500",
      category: "Beach",
      rating: 4.9,
      price: 1650,
      description: "Experience the world-famous sunsets of Santorini's white beaches."
    }
  ];

  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  const categories = ['All', 'Beach', 'Mountain', 'City', 'Adventure', 'Historical'];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      {/* <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Wanderlust Travel</h1>
            <nav>
              <ul className="flex space-x-6">
                <li className="cursor-pointer hover:text-red-200">Home</li>
                <li className="cursor-pointer hover:text-red-200 font-semibold border-b-2 border-white">Destinations</li>
                <li className="cursor-pointer hover:text-red-200">About</li>
                <li className="cursor-pointer hover:text-red-200">Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <div className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Also Discover Amazing Places in India</h1>
          <p className="text-xl mb-8">Find and book your perfect getaway with our curated selection of top destinations</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search destinations, activities, or experiences..."
              className="w-full py-3 px-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <button className="absolute right-2 top-1.5 bg-red-500 text-white py-1.5 px-6 rounded-full hover:bg-red-600">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Explore Destinations</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === category 
                    ? 'bg-red-600 text-white' 
                    : 'bg-white text-red-600 border border-white-600'
                } hover:bg-red-700 hover:text-white transition-colors`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    {destination.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400" />
                    <span className="ml-1 text-gray-700">{destination.rating}</span>
                  </div>
                  <span className="font-bold text-red-600">${destination.price}</span>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex justify-center items-center">
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Travel Inspiration</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive offers, travel tips, and destination guides
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-r-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
