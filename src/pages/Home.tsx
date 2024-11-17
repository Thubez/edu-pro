import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { GraduationCap, Users, TrendingUp } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Upgrade Your Skills with</span>
              <span className="block text-indigo-400">Professional Education</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Access premium educational content from industry experts. Learn at your own pace and earn while you learn.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#pricing"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Expert-Led Courses</h3>
              <p className="mt-2 text-base text-gray-500">
                Learn from industry professionals with years of experience
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Community Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Connect with peers and mentors in our learning community
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Track Progress</h3>
              <p className="mt-2 text-base text-gray-500">
                Monitor your learning journey with detailed analytics
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>
    </div>
  );
}