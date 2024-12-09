import React from 'react';
import { Play, BookOpen, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Unlocking the Mysteries of Our
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Cosmic Journey
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Embark on an extraordinary journey through space and time. Discover the secrets of our universe, from its cosmic origins to present-day mysteries.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Play size={20} />
            Explore Videos
          </button>
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
            <BookOpen size={20} />
            Learn More
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Users size={20} />
            Join the Journey
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse absolute w-1 h-1 bg-white rounded-full" style={{ top: '20%', left: '10%' }}></div>
        <div className="animate-pulse absolute w-2 h-2 bg-blue-400 rounded-full" style={{ top: '60%', left: '80%' }}></div>
        <div className="animate-pulse absolute w-1 h-1 bg-purple-400 rounded-full" style={{ top: '30%', left: '60%' }}></div>
      </div>
    </div>
  );
}