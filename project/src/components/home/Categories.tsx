import React from 'react';
import { Rocket, Clock, Telescope } from 'lucide-react';

const categories = [
  {
    title: 'Cosmic Origins',
    description: 'Explore the birth of our universe and the formation of galaxies.',
    icon: Rocket,
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Present Day Mysteries',
    description: 'Uncover the enigmas that continue to puzzle scientists today.',
    icon: Telescope,
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Future Horizons',
    description: 'Peek into potential futures and upcoming space discoveries.',
    icon: Clock,
    gradient: 'from-yellow-400 to-yellow-600'
  }
];

export function Categories() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Explore Our Universe
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              
              <p className="text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}