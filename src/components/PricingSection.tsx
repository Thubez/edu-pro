import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly',
    price: 'Rp 199.000',
    period: '/month',
    features: [
      'Access to all courses',
      'HD video quality',
      'Downloadable resources',
      'Certificate of completion',
      'Priority support'
    ]
  },
  {
    name: 'Yearly',
    price: 'Rp 1.999.000',
    period: '/year',
    features: [
      'All Monthly features',
      '2 months free',
      'Exclusive webinars',
      'Mentor consultation',
      'Career guidance'
    ],
    popular: true
  }
];

export function PricingSection() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.popular ? 'border-2 border-indigo-500' : ''
              }`}
            >
              <div className="p-6">
                {plan.popular && (
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mt-4">{plan.name}</h3>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">{plan.period}</span>
                </p>
                <button
                  className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-semibold ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  Get started
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}