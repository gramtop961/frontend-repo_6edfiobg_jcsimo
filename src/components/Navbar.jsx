import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
            <Rocket size={18} />
          </span>
          <span className="text-slate-900">Cimlany</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition">Docs</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 text-slate-700 hover:text-slate-900">Sign in</a>
          <a href="#pricing" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Get started</a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md border text-slate-700 hover:bg-slate-50"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#features" className="block text-slate-700">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block text-slate-700">Pricing</a>
            <a onClick={() => setOpen(false)} href="#" className="block text-slate-700">Docs</a>
            <div className="pt-3 flex items-center gap-3">
              <a href="#" className="px-4 py-2 text-slate-700">Sign in</a>
              <a href="#pricing" className="px-4 py-2 rounded-md bg-slate-900 text-white">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
