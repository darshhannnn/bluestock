import React from 'react';

const productSections = [
  {
    banner: {
      color: 'bg-green-100',
      text: 'Diversify Your Portfolio Today!',
      desc: 'Start your investment journey with our user-friendly and secure investment platform.'
    },
    cards: [
      {
        color: 'bg-pink-100',
        title: 'Bluestock IPO',
        desc: 'Be the first to apply for IPOs and find critical data in one, NSE and BSE.'
      },
      {
        color: 'bg-gray-200',
        title: 'Bluestock IPO',
        desc: 'Be the first to apply for IPOs and find critical data in one, NSE and BSE.'
      },
      {
        color: 'bg-green-100',
        title: 'Bluestock IPO',
        desc: 'Be the first to apply for IPOs and find critical data in one, NSE and BSE.'
      }
    ]
  },
  {
    banner: {
      color: 'bg-purple-100',
      text: 'Grow Your Network and Learn the Stock Market',
      desc: 'Our community & analytics approach encourages you to learn from experts and peers while expanding your connections.'
    },
    cards: [
      {
        color: 'bg-gray-200',
        title: 'Bluestock IPO',
        desc: 'Be the first to apply for IPOs and find critical data in one, NSE and BSE.'
      },
      {
        color: 'bg-green-100',
        title: 'Bluestock IPO',
        desc: 'Be the first to apply for IPOs and find critical data in one, NSE and BSE.'
      }
    ]
  },
  {
    banner: {
      color: 'bg-purple-100',
      text: 'Make your platform more powerful',
      desc: 'Integrate with our reliable trading platform and build your own customized trading applications.'
    },
    cards: [
      {
        color: 'bg-gray-200',
        title: 'Bluestock API',
        desc: 'Be the first to apply for IPOs and find critical data in one, NSE and BSE.'
      }
    ]
  }
];

const Products = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
    {/* Header/NavBar */}
    <div className="w-full max-w-4xl bg-white rounded-xl shadow p-6 mb-8">
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
          <a href="#">LIVE NEWS</a>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 rounded bg-white border border-indigo-600 text-indigo-600 font-medium">Sign In</button>
          <button className="px-4 py-1 rounded bg-indigo-600 text-white font-medium">Sign Up Now</button>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">Best-in-class Technology & Platforms</h1>
          <p className="mb-4 text-gray-700 text-sm">Experience a seamless investing platform with advanced analytics, real-time updates, and secure trading. Make the most of your investment journey with Bluestock.</p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Placeholder for main illustration */}
          <div className="w-40 h-32 rounded-lg bg-pink-200" />
        </div>
      </div>
    </div>
    {/* Product Sections */}
    <div className="w-full max-w-4xl flex flex-col gap-6">
      {productSections.map((section, idx) => (
        <div key={idx}>
          {/* Banner */}
          <div className={`rounded-lg px-4 py-3 mb-3 font-medium ${section.banner.color}`}>
            <div className="text-sm font-semibold">{section.banner.text}</div>
            <div className="text-xs text-gray-700 mt-1">{section.banner.desc}</div>
          </div>
          {/* Cards */}
          <div className="flex gap-4 flex-wrap">
            {section.cards.map((card, cidx) => (
              <div key={cidx} className={`rounded-lg p-4 w-60 shadow bg-white border border-gray-200 flex flex-col gap-2`}>
                <div className={`w-8 h-8 rounded ${card.color} mb-2`} />
                <div className="font-semibold text-base">{card.title}</div>
                <div className="text-xs text-gray-600">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
