/* eslint-disable react/prop-types */
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import PropTypes from 'prop-types';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Market Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {marketData.map((market, index) => (
            <MarketCard key={index} {...market} />
          ))}
        </div>
      </div>

      {/* Watchlist */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Watchlist</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Stock</th>
                  <th className="text-right py-3 px-4">LTP</th>
                  <th className="text-right py-3 px-4">Change</th>
                  <th className="text-right py-3 px-4">Volume</th>
                </tr>
              </thead>
              <tbody>
                {watchlistData.map((stock, index) => (
                  <WatchlistRow key={index} {...stock} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const statsData = [
  { title: "Portfolio Value", value: "₹2,45,678", change: "+2.5%", isPositive: true },
  { title: "Today's P&L", value: "₹3,420", change: "+1.2%", isPositive: true },
  { title: "Available Margin", value: "₹50,000", change: "-5%", isPositive: false },
  { title: "Investments", value: "₹1,85,000", change: "+0.8%", isPositive: true },
];

const marketData = [
  { name: "NIFTY 50", value: "19,425.35", change: "+0.45%", isPositive: true },
  { name: "SENSEX", value: "64,978.50", change: "+0.52%", isPositive: true },
  { name: "BANK NIFTY", value: "43,850.20", change: "-0.12%", isPositive: false },
];

const watchlistData = [
  { stock: "TCS", ltp: "3,456.75", change: "+1.2%", volume: "2.5M", isPositive: true },
  { stock: "Reliance", ltp: "2,890.30", change: "-0.5%", volume: "4.1M", isPositive: false },
  { stock: "HDFC Bank", ltp: "1,678.45", change: "+0.8%", volume: "3.2M", isPositive: true },
  { stock: "Infosys", ltp: "1,456.20", change: "+1.5%", volume: "1.8M", isPositive: true },
];

function StatsCard({ title, value, change, isPositive }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {isPositive ? (
          <ArrowUpRight className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownRight className="w-4 h-4 text-red-500" />
        )}
      </div>
      <div className="mt-2">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </p>
      </div>
    </div>
  );
}

function MarketCard({ name, value, change, isPositive }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <p className="mt-1 text-xl font-semibold">{value}</p>
    </div>
  );
}

MarketCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  isPositive: PropTypes.bool.isRequired,
};

function WatchlistRow({ stock, ltp, change, volume, isPositive }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-4 px-4">
        <div className="font-medium text-gray-900">{stock}</div>
      </td>
      <td className="text-right py-4 px-4">{ltp}</td>
      <td className={`text-right py-4 px-4 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </td>
      <td className="text-right py-4 px-4 text-gray-500">{volume}</td>
    </tr>
  );
}