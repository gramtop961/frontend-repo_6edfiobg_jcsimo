import React from 'react';
import { Shield, Zap, Rocket, Check } from 'lucide-react';

const FEATURES = [
  {
    icon: <Shield className="text-blue-600" size={22} />,
    title: 'Enterprise-grade security',
    desc: 'Best-in-class security practices, single sign-on, and fine-grained access control — ready from day one.',
  },
  {
    icon: <Zap className="text-indigo-600" size={22} />,
    title: 'Blazing performance',
    desc: 'Auto-scaling infrastructure and a global edge network ensure lightning-fast experiences everywhere.',
  },
  {
    icon: <Rocket className="text-cyan-600" size={22} />,
    title: 'Built to grow',
    desc: 'From your first user to your first million, our tooling scales with you without rewrites.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to launch</h2>
          <p className="mt-4 text-slate-600">Prebuilt modules for auth, subscriptions, and insights. Flexible APIs when you need to go beyond.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {['No code setup', 'CLI for teams', 'API-first design'].map((li) => (
                  <li key={li} className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-600" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
