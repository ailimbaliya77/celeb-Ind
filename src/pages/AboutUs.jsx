import React from 'react'

function AboutUs()  {
  /* const team = [
    {
      id: 1,
      name: 'Priya Sharma',
      position: 'Founder & CEO',
      image: '/images/team-1.jpg',
      bio: 'With a passion for sharing Indian culture, Priya founded ShaadiGlobal to bridge cultural gaps through the joy of wedding celebrations.'
    },
    {
      id: 2,
      name: 'Raj Patel',
      position: 'Chief Experience Officer',
      image: '/images/team-2.jpg',
      bio: 'Raj ensures that every guest has an authentic and memorable wedding experience through his deep knowledge of diverse Indian traditions.'
    },
    {
      id: 3,
      name: 'Ananya Desai',
      position: 'Cultural Education Director',
      image: '/images/team-3.jpg',
      bio: 'Ananya develops our cultural orientation programs to help guests understand and appreciate the rich traditions of Indian weddings.'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Global Partnerships Manager',
      image: '/images/team-4.jpg',
      bio: 'David builds relationships with wedding hosts and travel partners worldwide to create unique cultural exchange opportunities.'
    }
  ]; */

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-pink-600 text-white py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">About ShaadiGlobal</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">Connecting cultures through the celebration of authentic Indian weddings.</p>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">ShaadiGlobal began in 2022 with a simple idea: to share the rich cultural experience of Indian weddings with travelers from around the world. Our founder, Priya Sharma, recognized that while many tourists experienced India's landmarks and cuisine, few had the opportunity to witness one of the country's most spectacular cultural events—a traditional Indian wedding.</p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">After arranging for international friends to attend her cousin's wedding in Jaipur, Priya saw how profoundly the experience affected them. Guests were moved by the warmth, traditions, colors, and celebrations that make Indian weddings so special. This inspired her to create a platform that could facilitate these cultural exchanges on a larger scale.</p>
            <p className="text-gray-600 text-sm sm:text-base">Today, ShaadiGlobal works with wedding hosts across India who are eager to share their celebrations with international guests. We've helped travelers from over 30 countries experience the magic of Indian weddings, fostering cross-cultural understanding and creating unforgettable memories.</p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <img src="/images/about-story.jpg" alt="ShaadiGlobal Story" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <div className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-gray-600">
            To foster cultural exchange and understanding by connecting international travelers with authentic Indian wedding experiences, while supporting local communities and preserving traditions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-pink-600 text-3xl sm:text-4xl mb-3 md:mb-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-gray-800">Cultural Exchange</h3>
              <p className="text-gray-600 text-sm sm:text-base">We create meaningful connections between cultures through shared celebration and mutual respect.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-pink-600 text-3xl sm:text-4xl mb-3 md:mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-gray-800">Authentic Experiences</h3>
              <p className="text-gray-600 text-sm sm:text-base">We ensure every wedding experience is genuine, respectful, and beneficial to all involved.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-pink-600 text-3xl sm:text-4xl mb-3 md:mb-4">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-gray-800">Community Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">We partner with local artisans, guides, and businesses to support the communities that welcome our guests.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition duration-300 hover:scale-105" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-3 text-sm sm:text-base">{member.position}</p>
                <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      
      {/* Values */}
      <div className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="bg-pink-100 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
                <i className="fas fa-heart text-pink-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Respect for Traditions</h3>
                <p className="text-gray-600 text-sm sm:text-base">We honor the cultural significance of wedding traditions and ensure our presence enhances rather than disrupts these sacred celebrations.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="bg-pink-100 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
                <i className="fas fa-handshake text-pink-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Authentic Connections</h3>
                <p className="text-gray-600 text-sm sm:text-base">We believe in fostering genuine relationships between our guests and wedding hosts, creating meaningful cultural exchanges.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="bg-pink-100 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
                <i className="fas fa-globe text-pink-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Global Understanding</h3>
                <p className="text-gray-600 text-sm sm:text-base">We work to increase cross-cultural understanding and appreciation through shared celebration experiences.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="bg-pink-100 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
                <i className="fas fa-gem text-pink-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Quality Experience</h3>
                <p className="text-gray-600 text-sm sm:text-base">We are committed to providing exceptional service and unforgettable experiences for both our guests and host families.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">What People Say About Us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg h-full">
              <div className="flex text-yellow-500 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-700 italic mb-6 text-sm sm:text-base">"Being welcomed into an Indian family's wedding celebration was the highlight of our trip to India. ShaadiGlobal handled everything perfectly, from our attire to helping us understand the ceremonies."</p>
              <div className="flex items-center">
                <img src="/images/testimonial1.jpg" alt="Client" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">Michael & Lisa</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Canada</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg h-full">
              <div className="flex text-yellow-500 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-700 italic mb-6 text-sm sm:text-base">"The cultural orientation before the wedding really helped me understand what I was experiencing. The colors, music, and rituals were extraordinary, and everyone made me feel so welcome."</p>
              <div className="flex items-center">
                <img src="/images/testimonial2.jpg" alt="Client" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">Sophie Laurent</div>
                  <div className="text-gray-600 text-xs sm:text-sm">France</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg h-full">
              <div className="flex text-yellow-500 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-700 italic mb-6 text-sm sm:text-base">"As someone interested in world cultures, attending an Indian wedding through ShaadiGlobal was an unparalleled experience. It gave me insights into Indian family life that no tourist attraction could provide."</p>
              <div className="flex items-center">
                <img src="/images/testimonial3.jpg" alt="Client" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">James Wilson</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Australia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default AboutUs
