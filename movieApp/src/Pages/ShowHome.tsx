import React from 'react'
import movi1 from '../imgs/movi1.png'
import movi2 from '../imgs/movi2.png'
import movi3 from '../imgs/movi3.png'
import movi4 from '../imgs/movi4.png'
import movi5 from '../imgs/movi5.png'

type Movie = {
  id: number
  image: string
  title: string
  genre: string
}

const movies: Movie[] = [
  { id: 1, image: movi1, title: 'David Show', genre: 'Action' },
  { id: 2, image: movi2, title: 'Minescraft', genre: 'Drama' },
  { id: 3, image: movi3, title: 'Dora Show', genre: 'Sci-Fi' },
  { id: 4, image: movi4, title: 'Dragon Comedy', genre: 'Comedy' },
  { id: 5, image: movi5, title: 'Anna', genre: 'Thriller' },
]


function ShowHome() {
  return (
    <div className="p-8 mt-30">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 ml-20">
        Now Showing
      </h1>

      <div className="flex gap-8 overflow-x-auto pb-6 ml-55">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-72 cursor-pointer"
          >
            {/* Card container */}
            <div
              className="
                relative 
                h-[420px] 
                rounded-xl 
                shadow-lg 
                bg-gray-100
                transition-transform duration-300 
                hover:scale-105
                flex items-center justify-center
              "
            >
              {/* Movie Image */}
              <img
                src={movie.image}
                alt={movie.title}
                className="
                  w-56 h-80 
                  object-cover 
                  rounded-lg
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-black/0 
                  hover:bg-black/30
                  transition-colors duration-300
                  flex items-center justify-center
                  rounded-xl
                "
              >
                <span
                  className="
                    text-white text-sm font-semibold
                    opacity-0 hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  View Details
                </span>
              </div>
            </div>

            {/* Movie info */}
            <div className="mt-4 text-center">
              <p className="text-base font-semibold text-gray-800">
                {movie.title}
              </p>
              <p className="text-sm text-gray-500">
                {movie.genre}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowHome
