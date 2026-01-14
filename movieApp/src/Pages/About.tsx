import React from 'react'
import about1 from '../imgs/about1.png'
import about2 from '../imgs/about2.png'

function About() {
  return (
    <div className="bg-black min-h-screen py-12">
      {/* First Section - Image Left */}
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 text-white mb-8">
        {/* Image */}
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={about1}
            alt="About Us"
            className="w-full h-72 object-cover rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 hover:rotate-1 animate-fade-in-left"
          />
        </div>

        {/* Description */}
        <div className="md:w-1/2 animate-fade-in-right">
          <h2 className="text-3xl font-bold mb-4 text-red-700 transform transition-all duration-500 hover:text-red-600">
            About Us
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Welcome to CineStream, your ultimate destination for discovering and booking movies with ease. 
            Browse the latest releases in our "Now Showing" section or catch up on popular titles in "Trending." 
            With a clean, interactive interface, CineStream makes it simple to explore movie details, select showtimes, 
            and stay updated with the latest releases. Whether you are an action lover, a fan of comedy, or a sci-fi enthusiast, 
            CineStream has something for everyone.
          </p>
        </div>
      </div>

      {/* Second Section - Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-8 text-white">
        {/* Image */}
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={about2}
            alt="Our Mission"
            className="w-full h-72 object-cover rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 hover:-rotate-1 animate-fade-in-right"
          />
        </div>

        {/* Description */}
        <div className="md:w-1/2 animate-fade-in-left">
          <h2 className="text-3xl font-bold mb-4 text-red-700 transform transition-all duration-500 hover:text-red-600">
            Our Mission
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Our mission is to make movie discovery and booking seamless, enjoyable, and accessible for everyone. 
            We aim to connect audiences with the latest releases, trending films, and timeless classics through an 
            intuitive and interactive platform. By providing real-time information, easy-to-use features, and a 
            visually engaging experience, we strive to bring the magic of cinema closer to every movie lover.
          </p>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .animate-fade-in-left {
            animation: fadeInLeft 1s ease-out;
          }

          .animate-fade-in-right {
            animation: fadeInRight 1s ease-out;
          }
        `}
      </style>
    </div>
  )
}

export default About
    