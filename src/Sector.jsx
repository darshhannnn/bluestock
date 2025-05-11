import React, { useState } from 'react';

const sectors = [
  {
    icon: '🍽️',
    name: 'Aerospace',
    desc: 'The aerospace sector analysis and stats.',
    companies: 12,
    marketCap: '₹ 1,234 Cr',
    avgReturn: '12.5%'
  },
  {
    icon: '📰',
    name: 'Advertising & Media',
    desc: 'The advertisement and media companies sector.',
    companies: 8,
    marketCap: '₹ 980 Cr',
    avgReturn: '9.2%'
  },
  {
    icon: '🌾',
    name: 'Agriculture',
    desc: 'The agriculture production sector.',
    companies: 15,
    marketCap: '₹ 2,100 Cr',
    avgReturn: '10.8%'
  },
  {
    icon: '❄️',
    name: 'Air Conditioners',
    desc: 'The air conditioners and cooling sector.',
    companies: 6,
    marketCap: '₹ 600 Cr',
    avgReturn: '7.5%'
  },
  {
    icon: '✈️',
    name: 'Airlines',
    desc: 'The airlines and aviation sector.',
    companies: 5,
    marketCap: '₹ 1,800 Cr',
    avgReturn: '8.9%'
  },
  {
    icon: '⚙️',
    name: 'Aluminium & Aluminium',
    desc: 'The aluminium industry sector.',
    companies: 4,
    marketCap: '₹ 900 Cr',
    avgReturn: '6.2%'
  },
  {
    icon: '🏞️',
    name: 'Amusement Parks',
    desc: 'The amusement parks and recreation sector.',
    companies: 3,
    marketCap: '₹ 300 Cr',
    avgReturn: '11.1%'
  },
  {
    icon: '🐟',
    name: 'Aquaculture',
    desc: 'The aquaculture and fisheries sector.',
    companies: 7,
    marketCap: '₹ 450 Cr',
    avgReturn: '8.0%'
  },
  {
    icon: '🚗',
    name: 'Auto Ancillary',
    desc: 'The auto ancillary sector.',
    companies: 10,
    marketCap: '₹ 1,500 Cr',
    avgReturn: '10.0%'
  },
  {
    icon: '🛞',
    name: 'Automobile Tyre & Tube',
    desc: 'The automobile tyre and tube sector.',
    companies: 6,
    marketCap: '₹ 700 Cr',
    avgReturn: '8.8%'
  },
  {
    icon: '🚚',
    name: 'Automotive Dealers & Distributors',
    desc: 'The automotive dealers and distributors sector.',
    companies: 9,
    marketCap: '₹ 1,100 Cr',
    avgReturn: '9.5%'
  },
  {
    icon: '📰',
    name: 'Automotive Newspaper',
    desc: 'The automotive newspaper and publications sector.',
    companies: 2,
    marketCap: '₹ 200 Cr',
    avgReturn: '5.5%'
  }
];

const Sector = () => {
  const [search, setSearch] = useState('');
  const filteredSectors = sectors.filter(sector =>
    sector.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Header/NavBar */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow p-8 mb-8">
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Bluestock Logo" className="h-8" />
            <span className="font-bold text-lg tracking-wide">BLUESTOCK</span>
          </div>
          <div className="flex gap-6 text-gray-600 text-sm font-medium">
            <a href="#">IPO</a>
            <a href="#">COMMUNITY</a>
            <a href="#">PRODUCTS</a>
            <a href="#">BROKERS</a>
            <a href="#">SECTOR</a>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded bg-white border border-indigo-600 text-indigo-600 font-medium">Sign In</button>
            <button className="px-4 py-1 rounded bg-indigo-600 text-white font-medium">Sign Up Now</button>
          </div>
        </nav>
        <div className="text-xs text-gray-400 mb-2">Home / Sector</div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h1 className="text-xl font-bold">Sector</h1>
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-200"
            placeholder="Search for a sector"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ minWidth: '220px' }}
          />
        </div>
        {/* Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSectors.map((sector, idx) => (
            <div key={idx} className="bg-gradient-to-b from-blue-200 to-blue-50 rounded-xl shadow p-6 flex flex-col items-center border border-blue-100">
              <div className="text-4xl mb-3">{sector.icon}</div>
              <div className="font-bold text-lg mb-1 text-center">{sector.name}</div>
              <div className="text-xs text-gray-700 mb-2 text-center">{sector.desc}</div>
              <div className="flex justify-between gap-2 w-full mb-2 text-xs text-gray-600">
                <span>Companies: <span className="font-semibold text-black">{sector.companies}</span></span>
                <span>Market Cap: <span className="font-semibold text-black">{sector.marketCap}</span></span>
              </div>
              <div className="w-full flex justify-between mb-3 text-xs">
                <span>Avg Return: <span className="font-semibold text-green-700">{sector.avgReturn}</span></span>
              </div>
              <button className="bg-white border border-blue-400 text-blue-700 font-semibold px-5 py-1 rounded-lg hover:bg-blue-100 transition">Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sector;
