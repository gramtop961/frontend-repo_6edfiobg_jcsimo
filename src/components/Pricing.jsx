import React from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'Best for trying things out',
    features: [
      'Up to 1,000 monthly active users',
      'Email support',
      'Basic analytics',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    highlight: 'Most popular',
    features: [
      'Up to 25,000 monthly active users',
      'Priority support',
      'Advanced analytics',
      'SAML SSO',
    ],
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: 'For large teams',
    features: [
      'Unlimited users',
      'Dedicated success manager',
      'Enterprise security & SLAs',
    ],
    cta: 'Contact sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Start for free, upgrade when you grow. No hidden fees, ever.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border bg-white shadow-sm ${plan.popular ? 'ring-2 ring-indigo-600' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-indigo-600 text-white rounded-full shadow">
                  Popular
                </div>
              )}

              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
              </div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">{plan.price}</span>
                <span className="text-slate-500 mb-1">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{plan.highlight}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center px-4 py-2 rounded-md transition border ${plan.popular ? 'bg-slate-900 text-white hover:bg-slate-800 border-slate-900' : 'hover:bg-slate-50 border-slate-200'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
