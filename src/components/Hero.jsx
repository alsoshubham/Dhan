import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Invest in Stocks, Mutual Funds, <br className="hidden md:block" />
          and more with Dhan
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Experience the power of modern trading with our cutting-edge platform. Zero brokerage on equity delivery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 inline-flex items-center justify-center">
            Open Free Account <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50">
            View Pricing
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2000"
          alt="Trading Platform"
          className="rounded-xl shadow-2xl mx-auto"
        />
      </div>
    </div>
  );
}