import React from 'react';

const brokers = [
  {
    name: 'Upstox',
    reviews: '4.5',
    accounts: '90.2K',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Upstox_logo.png',
    color: 'bg-blue-50',
    features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    charges: [
      { label: 'A/C opening charge', value: 'Free' },
      { label: 'AMC', value: 'Free' },
    ],
  },
  {
    name: 'AngleOne',
    reviews: '4.7',
    accounts: '95.2K',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Angel_One_logo.png',
    color: 'bg-yellow-50',
    features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    charges: [
      { label: 'A/C opening charge', value: 'Free' },
      { label: 'AMC', value: '₹20' },
    ],
  },
  {
    name: 'Groww',
    reviews: '4.4',
    accounts: '89.2K',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Groww_app_logo.png',
    color: 'bg-blue-50',
    features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    charges: [
      { label: 'A/C opening charge', value: 'Free' },
      { label: 'AMC', value: 'Free' },
    ],
  },
  {
    name: 'Dhan',
    reviews: '4.3',
    accounts: '86.2K',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Dhan_logo.png',
    color: 'bg-yellow-50',
    features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    charges: [
      { label: 'A/C opening charge', value: 'Free' },
      { label: 'AMC', value: '₹20' },
    ],
  },
  {
    name: 'Alice Blue',
    reviews: '4.2',
    accounts: '82.2K',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Alice_Blue_logo.png',
    color: 'bg-blue-50',
    features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    charges: [
      { label: 'A/C opening charge', value: 'Free' },
      { label: 'AMC', value: 'Free' },
    ],
  },
  {
    name: 'Axis Direct',
    reviews: '4.1',
    accounts: '80.2K',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Axis_Direct_logo.png',
    color: 'bg-yellow-50',
    features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    charges: [
      { label: 'A/C opening charge', value: 'Free' },
      { label: 'AMC', value: '₹20' },
    ],
  },
  {
    name: 'Fyers',
    reviews: '4.0',
    accounts: '78.2K',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Fyers_logo.png',
    color: 'bg-blue-50',
    features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    charges: [
      { label: 'A/C opening charge', value: 'Free' },
      { label: 'AMC', value: 'Free' },
    ],
  },
];

const AllBrokers = () => (
  <div className="min-h-screen bg-gray-50 pb-10">
    {/* Header */}
    <header className="bg-white shadow px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Bluestock_logo.png" alt="Bluestock Logo" className="h-8" />
        <span className="font-bold text-xl text-gray-800">BLUESTOCK</span>
      </div>
      <nav className="flex gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-indigo-600">Products</a>
        <a href="#" className="hover:text-indigo-600">About</a>
        <a href="#" className="hover:text-indigo-600">Contact</a>
      </nav>
      <div>
        <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">Login</button>
      </div>
    </header>
    {/* Title */}
    <div className="px-8 py-6">
      <h1 className="text-3xl font-bold mb-2 text-indigo-600">Made to<span className="text-green-500">Trade</span></h1>
    </div>
    {/* Brokers List */}
    <div className="flex flex-col gap-6 px-8">
      {brokers.map((broker, idx) => (
        <div key={idx} className={`rounded-xl shadow flex items-center justify-between p-6 ${broker.color}`}>
          {/* Left: Info */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <span className="font-bold text-lg">{broker.name}</span>
              <span className="text-yellow-500 font-semibold">{broker.reviews} ★</span>
              <span className="text-gray-500 text-sm">{broker.accounts} Accounts</span>
            </div>
            <div className="flex gap-4 mb-2">
              {broker.features.map((f, i) => (
                <span key={i} className="text-xs font-medium bg-white px-2 py-1 rounded text-gray-700 border border-gray-200">{f}</span>
              ))}
            </div>
            <div className="flex gap-10 mt-2">
              {broker.charges.map((c, i) => (
                <div key={i} className="text-xs text-gray-700">
                  <span className="font-semibold">{c.label}:</span> {c.value}
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              <button className="bg-indigo-500 text-white px-4 py-2 rounded font-medium hover:bg-indigo-600 transition">Open A/C</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-medium hover:bg-indigo-100 transition">Learn More</button>
            </div>
          </div>
          {/* Right: Logo */}
          <div className="flex-shrink-0 ml-8">
            <img src={broker.logo} alt={broker.name} className="h-16 w-16 object-contain rounded-full bg-white shadow" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AllBrokers;
