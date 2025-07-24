import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative text-pink-800 w-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://i.pinimg.com/736x/56/f0/bb/56f0bb78f8a3bcde1f27fb1525de3fc8.jpg")', 
        opacity: '0.8'
      }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-purple-800">Experience the Magic of Indian Weddings</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2 text-pink-800">
            Immerse yourself in the vibrant colors, rich traditions, and joyful celebrations of authentic Indian weddings as a special guest.
          </p>
          <Link 
            to="/wedding-types" 
            className="bg-emerald-400 hover:bg-yellow-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg transition inline-block"
          >
            Get Started by Searching a Wedding
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
