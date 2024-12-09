import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Categories } from './components/home/Categories';
import { Newsletter } from './components/home/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Newsletter />
      </main>
    </div>
  );
}

export default App;