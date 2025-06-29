import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DirectoryGrid } from './components/DirectoryGrid';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  // Initialize theme system
  useTheme();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <Hero />
      <DirectoryGrid />
      <Features />
      <Footer />
    </div>
  );
}

export default App;