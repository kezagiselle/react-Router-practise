import React from 'react'
import movi1 from '../imgs/movie1.jpg'
import movi2 from '../imgs/movie2.jpg'
import movi3 from '../imgs/movie3.jpg'
import movi4 from '../imgs/movie4.jpg'
import movi5 from '../imgs/movie5.jpg'



function ShowHome() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Now Showing</h1>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <div 
            key={num}
            className="flex-shrink-0 w-48 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Placeholder with gradient background */}
              <div className="w-48 h-72 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 animate-pulse flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-50">
                  {num}
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                  View Details
                </div>
              </div>
            </div>
            
            {/* Movie title placeholder */}
            <div className="mt-2">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowHome