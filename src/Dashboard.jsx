import React from 'react';

const Dashboard = () => (
  <div className="flex min-h-screen bg-gray-50 text-gray-900">
    {/* Sidebar */}
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-center font-bold text-lg tracking-wide border-b border-gray-100">Bluestock Fintech</div>
      <nav className="flex-1 flex flex-col py-2">
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium bg-indigo-50 text-indigo-600 rounded-r-lg">Dashboard</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Manage IPO</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">IPO Dashboard India</a>
        <div className="pl-8 pt-4 pb-1 text-xs text-gray-400 uppercase">Quick Links</div>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Main Board IPO</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">View Report</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">20 IPO in Gain</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">IPO Subscription</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">IPO Allotment</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">IPO NSE & BSE</a>
        <div className="pl-8 pt-4 pb-1 text-xs text-gray-400 uppercase">Others</div>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Settings</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">API Manager</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Accounts</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Help</a>
      </nav>
      <div className="mt-auto py-4 px-8 text-xs text-gray-400 border-t border-gray-100">IPO Admin Dashboard</div>
    </aside>
    {/* Main content */}
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Topbar */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
        <div className="font-semibold text-lg">IPO Admin Dashboard</div>
        <div className="flex-1 mx-8"><input type="text" placeholder="Search" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"/></div>
        <div className="flex items-center gap-3 font-medium"><span className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-base">VL</span>Hi, Vishal</div>
      </header>
      {/* Dashboard content */}
      <div className="flex gap-7 p-8">
        {/* IPO Dashboard India */}
        <section className="bg-white rounded-xl shadow p-7 flex flex-col flex-1 min-w-[300px]">
          <h3 className="text-indigo-600 font-semibold text-base mb-1">IPO Dashboard India</h3>
          <div className="text-gray-400 text-sm mb-3">20 IPO in Gain</div>
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex flex-col items-center justify-center font-bold text-lg">20<span className="text-xs font-normal">From Gain</span></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-pink-200 text-gray-800 flex flex-col items-center justify-center font-bold text-2xl">30<span className="text-xs font-normal">Total IPO</span></div>
            </div>
          </div>
          <div className="text-gray-400 text-sm mt-5">From 01 Jan 2024</div>
        </section>
        {/* Quick Links */}
        <section className="bg-white rounded-xl shadow p-7 flex flex-col flex-1 min-w-[300px]">
          <h3 className="text-indigo-600 font-semibold text-base mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between"><span className="inline-flex items-center"><span className="mr-3">🏦</span>NSE India</span><span className="text-indigo-600 font-semibold cursor-pointer">Visit Now</span></div>
            <div className="flex items-center justify-between"><span className="inline-flex items-center"><span className="mr-3">🏛️</span>BSE India</span><span className="text-indigo-600 font-semibold cursor-pointer">Visit Now</span></div>
            <div className="flex items-center justify-between"><span className="inline-flex items-center"><span className="mr-3">🛡️</span>SEBI</span><span className="text-indigo-600 font-semibold cursor-pointer">Visit Now</span></div>
            <div className="flex items-center justify-between"><span className="inline-flex items-center"><span className="mr-3">💰</span>Money Control</span><span className="text-indigo-600 font-semibold cursor-pointer">Visit Now</span></div>
          </div>
          <div className="text-gray-400 text-sm mt-5">Adipiscing elit, sed do eiusmod tempor</div>
        </section>
        {/* Main Board IPO Donut */}
        <section className="bg-white rounded-xl shadow p-7 flex flex-col items-center flex-1 min-w-[300px]">
          <h3 className="text-indigo-600 font-semibold text-base mb-1">Main Board IPO</h3>
          <div className="text-gray-400 text-sm mb-3">From 01 Jan 2024</div>
          <div className="relative my-5">
            <svg width="120" height="120" viewBox="0 0 42 42">
              <circle r="15.915" cx="21" cy="21" fill="transparent" stroke="#f0f1f5" strokeWidth="8"/>
              <circle r="15.915" cx="21" cy="21" fill="transparent" stroke="#6366f1" strokeWidth="8" strokeDasharray="40 60" strokeDashoffset="0"/>
              <circle r="15.915" cx="21" cy="21" fill="transparent" stroke="#eebbc3" strokeWidth="8" strokeDasharray="30 70" strokeDashoffset="-40"/>
              <circle r="15.915" cx="21" cy="21" fill="transparent" stroke="#ffd6de" strokeWidth="8" strokeDasharray="20 80" strokeDashoffset="-70"/>
            </svg>
            <div className="absolute left-20 top-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs shadow-lg">Afternoon<br/>IPO on BSE<br/>9/15</div>
          </div>
          <div className="flex gap-7 mt-4">
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-indigo-500 inline-block"></span>Upcoming 15</div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-pink-200 inline-block"></span>New Listed 25</div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-pink-100 inline-block"></span>Ongoing 2</div>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Dashboard;
