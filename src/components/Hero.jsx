import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="-top-40 left-1/2 -translate-x-1/2 absolute w-[80rem] h-[40rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white/90 text-xs mb-6">
          <Star size={14} className="text-amber-400" />
          <span>Introducing Cimlany 2.0 — faster, smarter, simpler</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Launch your SaaS in days, not months
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl">
          Cimlany brings auth, billing, and analytics together so you can focus on what matters — building an amazing product your customers love.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition shadow"
          >
            Start free
            <ArrowRight size={18} />
          </a>
          <a href="#features" className="inline-flex items-center px-5 py-3 rounded-md border hover:bg-slate-50 transition">
            See features
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-600">
          {[
            '99.99% uptime',
            'SOC2 ready',
            'Global CDN',
            'Live support',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
