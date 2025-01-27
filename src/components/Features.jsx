/* eslint-disable react/prop-types */
import { Shield, Zap, BarChart2, Smartphone } from 'lucide-react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose Dhan?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of powerful features and user-friendly interface
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-blue-600" />}
            title="Lightning Fast"
            description="Experience instant order execution with our advanced trading engine"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-blue-600" />}
            title="Secure Trading"
            description="Bank-grade security with 2-factor authentication and encryption"
          />
          <FeatureCard
            icon={<BarChart2 className="h-8 w-8 text-blue-600" />}
            title="Advanced Charts"
            description="Professional-grade charts with 100+ technical indicators"
          />
          <FeatureCard
            icon={<Smartphone className="h-8 w-8 text-blue-600" />}
            title="Mobile Trading"
            description="Trade anywhere with our powerful mobile trading app"
          />
        </div>
      </div>
    </div>
  );
}