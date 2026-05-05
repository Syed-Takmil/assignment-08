


import Link from 'next/link';
import React from 'react';

const NotFOundPage = () => {
    return (
  
    <div className="min-h-screen flex flex-col items-center  bg-linear-to-br from-green-50 to-white text-center px-4">
      
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-bold text-green-700">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Page not found
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-gray-500 max-w-md">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
      >
        Go back home
      </Link>

      {/* Optional branding */}
      <p className="mt-10 text-sm text-gray-400">
        Kurbani Bazaar 🐄
      </p>


        </div>
    );
};

export default NotFOundPage;