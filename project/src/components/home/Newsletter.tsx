import React from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Cosmic Discoveries
        </h2>
        
        <p className="text-gray-300 mb-8">
          Subscribe to our newsletter and never miss the latest updates about our universe.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 flex-grow max-w-md"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Send size={20} />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}