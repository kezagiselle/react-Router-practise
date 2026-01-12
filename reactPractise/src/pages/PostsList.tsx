import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import {Link} from "react-router-dom";
import{ useSearchParams} from 'react-router-dom';

import p3 from '../img/p3.png';
import p4 from '../img/p4.png';
import p5 from '../img/p5.png';
import p6 from '../img/p6.png';
import p8 from '../img/p8.png';
import p1 from '../img/p1.png';

function PostsList() {

  type Post = {
    id: number;
    image: string;
  };

  const posts: Post[] = [
   { id: 1, image: p1},
   { id: 2, image: p3} 
  ];
  // Define types for the state objects
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const [messages, setMessages] = useState<Record<number, number>>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q")|| "";
  
  const images: string[] = [p1, p3, p4, p5, p6, p8];

  const filteredImages: string[] = images.filter((_, index) => {
  const postTitle = `post ${index + 1}`;
  return postTitle.toLowerCase().includes(query.toLowerCase());
});

  const handleLike = (index: number) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleMessage = (index: number) => {
    setMessages(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
  <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-green-600 to-blue-600 bg-clip-text text-transparent animate-pulse mb-2">
    Welcome to my Posts
  </h1>
  <div className="h-1 w-48 mx-auto bg-gradient-to-r from-purple-600 via-green-600 to-blue-600 rounded-full animate-pulse"></div>
</div>

{/* --- SEARCH INPUT --- */}
<div className="mb-12">
  <input
    type="text"
    placeholder="Search posts..."
    value={query}
    onChange={(e) => setSearchParams({ q: e.target.value })}
    className="w-full max-w-md mx-auto block px-5 py-3 rounded-xl border shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>

{/* --- POSTS GRID --- */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredImages.map((img: string, index: number) => (
    <div
      key={index}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
    >
      <Link to={`/posts/${index}`}>
        <div className="relative aspect-square overflow-hidden cursor-pointer">
          <img
            src={img}
            alt={`Post ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    pointer-events-none"></div>
        </div>
      </Link>

      {/* Like/Message buttons */}
      <div className="absolute bottom-4 left-0 right-0 px-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        <button
          onClick={() => handleLike(index)}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-200 ${likes[index] ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
          />
          <span className="text-sm font-semibold text-gray-700">
            {likes[index] ? 'Liked' : 'Like'}
          </span>
        </button>

        <button
          onClick={() => handleMessage(index)}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
        >
          <MessageCircle className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-gray-700">
            {messages[index] || 0}
          </span>
        </button>
      </div>

      {/* Post badge */}
      <Link
        to={`/posts/${index}`}
        className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
      >
        Post {index + 1}
      </Link>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default PostsList;