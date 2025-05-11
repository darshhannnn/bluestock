import React from 'react';

const investors = [
  { name: 'Rakesh Jhunjhunwala', img: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Rakesh_Jhunjhunwala.jpg', holdings: '30+ Companies', worth: '₹25,000 Cr' },
  { name: 'Adi Goel', img: 'https://randomuser.me/api/portraits/men/11.jpg', holdings: '15+ Companies', worth: '₹12,000 Cr' },
  { name: 'Ashish Dhawan', img: 'https://randomuser.me/api/portraits/men/12.jpg', holdings: '18+ Companies', worth: '₹10,000 Cr' },
  { name: 'Ashish Kacholia', img: 'https://randomuser.me/api/portraits/men/13.jpg', holdings: '12+ Companies', worth: '₹7,000 Cr' },
  { name: 'Dolly Rajeev Khanna', img: 'https://randomuser.me/api/portraits/women/14.jpg', holdings: '10+ Companies', worth: '₹5,000 Cr' },
  { name: 'Hemendra Kothari', img: 'https://randomuser.me/api/portraits/men/15.jpg', holdings: '8+ Companies', worth: '₹4,000 Cr' },
  { name: 'Nemish Shah', img: 'https://randomuser.me/api/portraits/men/16.jpg', holdings: '9+ Companies', worth: '₹3,500 Cr' },
  { name: 'Porinju Veliyath', img: 'https://randomuser.me/api/portraits/men/17.jpg', holdings: '7+ Companies', worth: '₹2,800 Cr' },
  { name: 'Radhakishan Damani', img: 'https://randomuser.me/api/portraits/men/18.jpg', holdings: '20+ Companies', worth: '₹20,000 Cr' },
  { name: 'Sanj Singhania', img: 'https://randomuser.me/api/portraits/men/19.jpg', holdings: '11+ Companies', worth: '₹6,000 Cr' },
  { name: 'Vijay Kedia', img: 'https://randomuser.me/api/portraits/men/20.jpg', holdings: '13+ Companies', worth: '₹8,000 Cr' },
  { name: 'Adi Goel', img: 'https://randomuser.me/api/portraits/men/21.jpg', holdings: '15+ Companies', worth: '₹12,000 Cr' },
];

const SharkInvestors = () => (
  <div className="min-h-screen bg-gray-50 pb-10">
    {/* Header */}
    <header className="bg-white shadow px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Bluestock_logo.png" alt="Bluestock Logo" className="h-8" />
        <span className="font-bold text-xl text-gray-800">BLUESTOCK</span>
      </div>
      <nav className="flex gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-indigo-600">Company</a>
        <a href="#" className="hover:text-indigo-600">Projects</a>
        <a href="#" className="hover:text-indigo-600">Brokers</a>
        <a href="#" className="hover:text-indigo-600">News</a>
      </nav>
      <div>
        <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">Login</button>
        <button className="ml-2 bg-white border border-indigo-500 text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition">Sign Up</button>
      </div>
    </header>
    {/* Title */}
    <div className="px-8 py-6">
      <h1 className="text-2xl font-bold mb-2">Shark Investors</h1>
      <p className="text-gray-500">Explore the knowledge of renowned Shark Investors in India and their favourite stocks.</p>
    </div>
    {/* Investors Grid */}
    <div className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {investors.map((inv, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center border border-gray-100">
          <img src={inv.img} alt={inv.name} className="h-24 w-24 object-cover rounded-full mb-4 border-4 border-indigo-100" />
          <div className="font-semibold text-lg mb-1 text-center">{inv.name}</div>
          <div className="text-gray-500 text-sm mb-1 text-center">{inv.holdings}</div>
          <div className="text-gray-700 text-sm mb-4 text-center">Net Worth: <span className="font-medium">{inv.worth}</span></div>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded font-medium hover:bg-indigo-600 transition w-full">View Holdings</button>
        </div>
      ))}
    </div>
  </div>
);

export default SharkInvestors;
