import React from 'react'
import movi1 from '../imgs/movi1.png'
import movi2 from '../imgs/movi2.png'
import movi3 from '../imgs/movi3.png'
import movi4 from '../imgs/movi4.png'
import movi5 from '../imgs/movi5.png'

import movi6 from '../imgs/movi6.png'
import movi7 from '../imgs/movi7.png'
import movi8 from '../imgs/movi8.png'
import movi9 from '../imgs/movi9.png'
import movi10 from '../imgs/movi10.png'

type Movie = {
  id: number
  image: string
  title: string
  genre: string
}

// Now Showing movies
const nowShowing: Movie[] = [
  { id: 1, image: movi1, title: 'David Show', genre: 'Action' },
  { id: 2, image: movi2, title: 'Minescraft', genre: 'Drama' },
  { id: 3, image: movi3, title: 'Dora Show', genre: 'Sci-Fi' },
  { id: 4, image: movi4, title: 'Dragon Comedy', genre: 'Comedy' },
  { id: 5, image: movi5, title: 'Anna', genre: 'Thriller' },
]

// Trending movies
const trending: Movie[] = [
  { id: 6, image: movi6, title: 'Red One', genre: 'Action' },
  { id: 7, image: movi7, title: 'Hoppers', genre: 'Action' },
  { id: 8, image: movi8, title: 'Frozen', genre: 'Animation' },
  { id: 9, image: movi9, title: 'Jailer', genre: 'Adventure' },
  { id: 10, image: movi10, title: 'New Avengers', genre: 'Sci-Fi' },
]

function ShowHome() {
  const MovieCard = ({ movie }: { movie: Movie }) => (
    <div className="flex-shrink-0 w-72 cursor-pointer">
      <div
        className="
          relative 
          h-[420px] 
          rounded-xl 
          shadow-lg 
          bg-gray-500
          transition-transform duration-300 
          hover:scale-105
          flex items-center justify-center
        "
      >
        <img
          src={movie.image}
          alt={movie.title}
          className="w-56 h-80 object-cover rounded-lg"
        />

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
          <span className="text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
            View Details
          </span>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-base font-semibold text-white">{movie.title}</p>
        <p className="text-sm text-gray-500">{movie.genre}</p>
      </div>
    </div>
  )

  return (
    <div className="p-8">

      {/* Now Showing Section */}
      <h1 className="text-xl font-bold mb-6 text-red-700 ml-10">Now Showing</h1>
      <div className="flex gap-8 overflow-x-auto pb-10 ml-40">
        {nowShowing.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Trending Section */}
      <h1 className="text-xl font-bold mb-6 mt-12 text-red-700 ml-10">Trending</h1>
      <div className="flex gap-8 overflow-x-auto pb-10 ml-40">
        {trending.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  )
}

export default ShowHome
