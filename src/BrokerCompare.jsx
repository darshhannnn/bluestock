import React from 'react';

// Dummy data for demonstration
const brokers = [
  {
    name: 'Angel One',
    rating: 4.7,
    features: ['Fast order execution', 'Low brokerage', 'Great technology'],
    color: 'bg-green-100',
    icon: '🟩',
    button: 'Open Account',
  },
  {
    name: 'Zerodha',
    rating: 4.6,
    features: ['Low brokerage', 'User friendly', 'Reliable platform'],
    color: 'bg-blue-100',
    icon: '🟦',
    button: 'Start Online Process',
  },
];

const charges = [
  { label: 'Account Opening Charges', angel: '₹0 (Free for online)', zerodha: '₹200' },
  { label: 'Account Maintenance Charges', angel: '₹20', zerodha: '₹75 (Yearly)' },
];

const brokerageCharges = [
  { label: 'Intraday', angel: '₹20 per order (Max)', zerodha: '₹20 per order (Max)' },
  { label: 'Delivery', angel: 'Free', zerodha: 'Free' },
  { label: 'Options', angel: '₹20 per order', zerodha: '₹20 per order' },
  { label: 'Others', angel: '2%', zerodha: '2%' },
];

const stats = [
  { label: 'Active Clients', angel: 23.6, zerodha: 69 },
  { label: 'Complaints', angel: 20, zerodha: 50 },
  { label: 'Share Holding', angel: 15.34, zerodha: 15.93 },
];

const prosCons = [
  {
    pros: [
      'Fast account opening process',
      'Low brokerage charges',
      'Good technology platform',
    ],
    cons: [
      'Customer service can be improved',
      'Limited research reports',
    ],
  },
  {
    pros: [
      'User friendly interface',
      'Reliable platform',
      'Low brokerage charges',
    ],
    cons: [
      'No 3-in-1 account',
      'Limited offline presence',
    ],
  },
];

const BrokerCompare = () => (
  <div className="min-h-screen bg-gray-50 pb-10">
    {/* Header */}
    <header className="bg-white shadow px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Bluestock_logo.png" alt="Bluestock Logo" className="h-8" />
        <span className="font-bold text-xl text-gray-800">BLUESTOCK</span>
      </div>
      <nav className="flex gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-indigo-600">Active Clients</a>
        <a href="#" className="hover:text-indigo-600">Charges</a>
        <a href="#" className="hover:text-indigo-600">Complaints</a>
        <a href="#" className="hover:text-indigo-600">Franchise</a>
      </nav>
      <div>
        <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">Login</button>
      </div>
    </header>
    {/* Broker Cards */}
    <div className="flex justify-center gap-8 mt-8">
      {brokers.map((broker, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 w-64 flex flex-col items-center border border-gray-100">
          <div className="text-5xl mb-2">{broker.icon}</div>
          <div className="font-bold text-lg mb-1">{broker.name}</div>
          <div className="text-yellow-500 text-2xl font-bold mb-1">{broker.rating} ★</div>
          <ul className="text-gray-600 text-sm mb-4 list-disc ml-4">
            {broker.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded font-medium hover:bg-indigo-200 transition w-full">{broker.button}</button>
        </div>
      ))}
    </div>
    {/* Charts Placeholder */}
    <div className="max-w-3xl mx-auto mt-12">
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-4">Active Clients</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
      </div>
      {/* Charges Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-2">Account Opening and Maintenance Charges</h3>
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-indigo-100">
                <th className="p-2 font-semibold">Charges</th>
                <th className="p-2 font-semibold">Angel One</th>
                <th className="p-2 font-semibold">Zerodha</th>
              </tr>
            </thead>
            <tbody>
              {charges.map((row, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{row.label}</td>
                  <td className="p-2">{row.angel}</td>
                  <td className="p-2">{row.zerodha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-2">Brokerage Charges</h3>
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-indigo-100">
                <th className="p-2 font-semibold">Brokerage Charges</th>
                <th className="p-2 font-semibold">Angel One</th>
                <th className="p-2 font-semibold">Zerodha</th>
              </tr>
            </thead>
            <tbody>
              {brokerageCharges.map((row, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{row.label}</td>
                  <td className="p-2">{row.angel}</td>
                  <td className="p-2">{row.zerodha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-4xl mb-2">{stat.angel > stat.zerodha ? '🎉' : '📊'}</div>
            <div className="text-3xl font-bold mb-1">{stat.angel}</div>
            <div className="text-gray-500">{stat.label} (Angel One)</div>
            <div className="text-3xl font-bold mb-1 mt-4">{stat.zerodha}</div>
            <div className="text-gray-500">{stat.label} (Zerodha)</div>
          </div>
        ))}
      </div>
      {/* Complaints Chart Placeholder */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-4">Complaints</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
      </div>
      {/* Share Holding Chart Placeholder */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-4">Share Holding</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
      </div>
      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {prosCons.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-green-700">Pros</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {item.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-700">Cons</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {item.cons.map((con, i) => <li key={i}>{con}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Ratings */}
      <div className="flex justify-center gap-8 mb-8">
        {brokers.map((broker, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 w-64 flex flex-col items-center border border-gray-100">
            <div className="text-5xl mb-2">{broker.icon}</div>
            <div className="font-bold text-lg mb-1">{broker.name}</div>
            <div className="text-yellow-500 text-2xl font-bold mb-1">{broker.rating} ★</div>
            <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded font-medium hover:bg-indigo-200 transition w-full mt-2">{broker.button}</button>
          </div>
        ))}
      </div>
      {/* Financials Chart Placeholder */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-4">Financials</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
      </div>
    </div>
  </div>
);

export default BrokerCompare;
