import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="fixed w-full bg-opacity-95 bg-gray-900 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CosmicLearn
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/videos">Videos</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/community">Community</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-white">
              <User size={20} />
            </button>
            <button className="md:hidden text-gray-300 hover:text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}