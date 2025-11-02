import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Cimlany — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-800 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-800 transition">Pricing</a>
            <a href="#" className="hover:text-slate-800 transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
