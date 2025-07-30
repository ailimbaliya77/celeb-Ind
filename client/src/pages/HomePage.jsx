import React, {useState, useEffect} from 'react'
import Hero from '../components/Hero';
import WeddingCards from '../components/Weddingcards'
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import img1 from '../assets/punjabi-engagement-ceremony-3.jpg'
import img2 from '../assets/brebeach-wedding.webp'
import img3 from '../assets/mountain-wedding.jpg'
import imgg1 from '../assets/northwedding2.jpg'
import imgg2 from '../assets/south indian wedding.jpeg'
import imgg3 from '../assets/gujrati-wedding.webp'
import imgg4 from '../assets/Bengali+Wedding.jpg'


function HomePage()  {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Mark images as loaded after component mounts
    setImagesLoaded(true);
  }, []);

  // Sample data
  const featuredWeddings = [
    {
      id: 1,
      image: img1,
      title: 'Raj & Priya\'s Destination Wedding',
      date: 'May 15-18, 2025',
      location: 'Udaipur, Rajasthan',
      description: 'An extravagant royal wedding in the city of lakes with traditional Rajasthani ceremonies.',
      link: '/wedding/1'
    },
    {
      id: 2,
      image: img2,
      title: 'Arjun & Meera\'s Beach Wedding',
      date: 'June 5-7, 2025',
      location: 'Goa, India',
      description: 'A beautiful fusion of traditional South Indian and Western ceremonies on the beach.',
      link: '/wedding/2'
    },
    {
      id: 3,
      image:img3,
      title: 'Vikram & Nisha\'s Mountain Wedding',
      date: 'July 20-23, 2025',
      location: 'Shimla, Himachal Pradesh',
      description: 'A magical North Indian wedding celebration in the mountains with Punjabi traditions.',
      link: '/wedding/3'
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      name: 'Sarah Johnson',
      location: 'USA',
      quote: 'Attending an Indian wedding through ShaadiGlobal was the most immersive cultural experience I\'ve ever had. The colors, music, and hospitality were incredible!'
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      name: 'Carlos Rodriguez',
      location: 'Spain',
      quote: 'I was welcomed like family at the wedding. The ceremonies were fascinating and the food was amazing. Definitely a once-in-a-lifetime experience!'
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: 'Yuki Tanaka',
      location: 'Japan',
      quote: 'Everything was perfectly organized from start to finish. I learned so much about Indian wedding traditions and made wonderful new friends.'
    }
  ];

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = 'https://via.placeholder.com/400x250?text=Wedding+Image';
  };

  return (
    <div>
      <Hero />
      
      {/* Featured Weddings Section */}
      <section className="py-10 sm:py-16 bg-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-purple-800">Featured Weddings</h2>
          <p className="text-purple-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">Discover upcoming authentic Indian weddings that you can attend as a special guest</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredWeddings.map(wedding => (
              <WeddingCards
                key={wedding.id}
                image={wedding.image}
                title={wedding.title}
                date={wedding.date}
                location={wedding.location}
                description={wedding.description}
                link={wedding.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/wedding-types" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded transition text-sm sm:text-base">
              View All Weddings
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800">How It Works</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">Experience authentic Indian wedding celebrations in just a few simple steps</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-pink-600 text-2xl sm:text-3xl"><RiNumber1 /></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">1. Browse & Select</h3>
              <p className="text-gray-600 text-sm sm:text-base">Explore upcoming weddings and choose one that matches your travel dates and interests.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ticket-alt text-pink-600 text-2xl sm:text-3xl"><RiNumber2 /></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">2. Book Your Experience</h3>
              <p className="text-gray-600 text-sm sm:text-base">Secure your spot at the wedding with our various attendance packages.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-pink-600 text-2xl sm:text-3xl"><RiNumber3 /></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">3. Celebrate & Enjoy</h3>
              <p className="text-gray-600 text-sm sm:text-base">Attend the wedding as a special guest and immerse yourself in the celebrations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wedding Types Preview */}
      <section className="py-10 sm:py-16 bg-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-purple-800">Discover Indian Wedding Types</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">India's diverse culture offers various wedding styles, each with unique traditions and ceremonies</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={imgg1} 
                  alt="North Indian Wedding" 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                  onError={handleImageError}
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">North Indian Wedding</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Vibrant Punjabi and Delhi style weddings with energetic bhangra and lively celebrations.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={imgg2} 
                  alt="South Indian Wedding" 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                  onError={handleImageError}
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">South Indian Wedding</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Traditional Tamil, Telugu, and Malayalam ceremonies with elegant customs.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={imgg3} 
                  alt="Bengali Wedding" 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                  onError={handleImageError}
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">Bengali Wedding</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Culturally rich ceremonies with unique rituals and exquisite cuisine.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={imgg4} 
                  alt="Gujarati Wedding" 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                  onError={handleImageError}
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">Gujarati Wedding</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Colorful ceremonies with garba dancing and joyful celebrations.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <Link to="/wedding-types" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded transition text-sm sm:text-base">
              Explore All Wedding Types
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800">Guest Testimonials</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">Hear from travelers who have experienced the magic of Indian weddings through ShaadiGlobal</p>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                image={testimonial.image}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Experience an Indian Wedding?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">Join us for a cultural experience like no other. Create an account now to get started!</p>
          <Link 
            to="/signup" 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded text-sm sm:text-lg inline-block transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
