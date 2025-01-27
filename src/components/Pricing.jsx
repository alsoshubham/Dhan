/* eslint-disable react/prop-types */
import { Check } from 'lucide-react';

function PricingCard({ title, price, description, features, featured = false }) {
  return (
    <div className={`rounded-2xl p-8 ${featured ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-opacity-50' : 'bg-white border border-gray-200'}`}>
      <h3 className={`text-xl font-semibold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className={`text-sm ${featured ? 'text-blue-100' : 'text-gray-500'}`}> {description}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`h-5 w-5 mr-2 ${featured ? 'text-blue-200' : 'text-blue-600'}`} />
            <span className={featured ? 'text-blue-100' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-6 rounded-lg font-medium ${
          featured
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden charges. No complicated fee structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Equity Delivery"
            price="₹0"
            description="For long-term investors"
            features={[
              'Zero brokerage',
              'Unlimited free trades',
              'Research reports',
              '5-in-1 account opening'
            ]}
          />
          <PricingCard
            title="Intraday & F&O"
            price="₹20"
            description="Per executed order"
            features={[
              'Flat fee per order',
              'No turnover charges',
              'Advanced charts',
              'Real-time market data'
            ]}
            featured={true}
          />
          <PricingCard
            title="Mutual Funds"
            price="₹0"
            description="Direct mutual funds"
            features={[
              'Zero commission',
              'SIP facility',
              'Fund research',
              'Goal planning tools'
            ]}
          />
        </div>
      </div>
    </div>
  );
}