import React from 'react';

const RegisterIPO = () => (
  <div className="flex min-h-screen bg-gray-50 text-gray-900">
    {/* Sidebar */}
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-center font-bold text-lg tracking-wide border-b border-gray-100">Bluestock Fintech</div>
      <nav className="flex-1 flex flex-col py-2">
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Dashboard</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Manage IPO</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">IPO Information</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">IPO Info</a>
        <div className="pl-8 pt-4 pb-1 text-xs text-gray-400 uppercase">Others</div>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Settings</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Accounts</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Help</a>
      </nav>
    </aside>
    {/* Main content */}
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Topbar */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
        <div className="font-semibold text-lg">Register IPO Details</div>
        <div className="flex items-center gap-3 font-medium">
          <span className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-base">VL</span>
          Hi, Vishal
        </div>
      </header>
      {/* Content */}
      <div className="flex flex-1">
        {/* Left Navigation */}
        <div className="w-64 bg-white border-r border-gray-100 p-6 min-h-full">
          <div className="font-semibold mb-6">Upcoming IPO Information</div>
          <div className="flex flex-col gap-2">
            <button className="text-indigo-600 bg-indigo-50 px-4 py-2 rounded font-medium text-left">IPO Information</button>
            <button className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded font-medium text-left">IPO Info</button>
          </div>
        </div>
        {/* Main Form */}
        <div className="flex-1 p-10">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl font-semibold">IPO Information</div>
            <div className="flex gap-2">
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">Register</button>
              <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition">Cancel</button>
            </div>
          </div>
          {/* Company Logo & Tabs */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">🦊</div>
            <div className="flex gap-2">
              <button className="bg-indigo-600 text-white px-4 py-1 rounded font-medium">Add Logo</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded font-medium">Remove</button>
            </div>
          </div>
          <form className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Enter company name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Face Value</label>
              <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Face value" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input type="date" className="w-full border border-gray-200 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input type="date" className="w-full border border-gray-200 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Lot Size</label>
              <input type="number" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Lot size" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Market Lot</label>
              <input type="number" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Market lot" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price Band</label>
              <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Price band" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Issue Type</label>
              <select className="w-full border border-gray-200 rounded px-3 py-2">
                <option>Book Built</option>
                <option>Fixed Price</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Listing Date</label>
              <input type="date" className="w-full border border-gray-200 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select className="w-full border border-gray-200 rounded px-3 py-2">
                <option>Ongoing</option>
                <option>Coming</option>
                <option>New Listed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">NSE Symbol</label>
              <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="NSE symbol" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">BSE Symbol</label>
              <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="BSE symbol" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">NSE PDF Link</label>
              <input type="url" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Enter NSE PDF Link" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">BSE PDF Link</label>
              <input type="url" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Enter BSE PDF Link" />
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
);

export default RegisterIPO;
