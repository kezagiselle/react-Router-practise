import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle } from "lucide-react";

import p1 from "../img/p1.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import p5 from "../img/p5.png";
import p6 from "../img/p6.png";
import p8 from "../img/p8.png";

const images = [p1, p3, p4, p5, p6, p8];

function PostDetails() {
  const { postId } = useParams();
  const index = Number(postId);

  // Handle invalid IDs
  if (isNaN(index) || !images[index]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <h1 className="text-3xl font-bold text-red-600">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Back button */}
        <Link
          to="/posts"
          className="inline-flex items-center gap-2 mb-6 text-purple-600 font-semibold hover:underline"
        >
          <ArrowLeft size={20} />
          Back to Posts
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Image */}
          <div className="relative">
            <img
              src={images[index]}
              alt={`Post ${index + 1}`}
              className="w-full h-[450px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              City {index + 1}
            </span>
          </div>

          {/* Content */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Post Title {index + 1}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is a detailed view of this city {index + 1}.  
              among all beautiful places in the world, this city is among my
              favorite places.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-red-500 font-semibold hover:scale-110 transition">
                <Heart />
                Like
              </button>

              <button className="flex items-center gap-2 text-blue-500 font-semibold hover:scale-110 transition">
                <MessageCircle />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
