import React from 'react';

import React, { useState } from 'react';

const ipoData = {
  upcoming: [
    {
      company: 'Nova Agritech Ltd.',
      priceBand: 'Rs 39 - 41',
      open: '2024-01-22',
      close: '2024-01-24',
      issueSize: '143.81 Cr.',
      issueType: 'Book Built',
      listingDate: '2024-01-30',
      status: 'Upcoming',
    },
    {
      company: 'EPACK Durable Ltd.',
      priceBand: 'Rs 218 - 230',
      open: '2024-01-19',
      close: '2024-01-23',
      issueSize: '640.05 Cr.',
      issueType: 'Book Built',
      listingDate: '2024-01-29',
      status: 'Upcoming',
    },
    {
      company: 'RK Swamy Ltd.',
      priceBand: 'Not Issued',
      open: 'Not Issued',
      close: 'Not Issued',
      issueSize: 'Not Issued',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
      status: 'Upcoming',
    },
  ],
  ongoing: [
    {
      company: 'Medi Assist Healthcare Services Ltd.',
      priceBand: 'Rs 218 - 230',
      open: '2024-01-19',
      close: '2024-01-23',
      issueSize: '640.05 Cr.',
      issueType: 'Book Built',
      listingDate: '2024-01-29',
      status: 'Ongoing',
    },
  ],
  listed: [
    {
      company: 'Jyoti CNC Automation Ltd.',
      ipoPrice: 'Rs 331',
      listingPrice: 'Rs 370',
      listingGain: '11.78%',
      listingDate: '2024-01-16',
      cmp: 'Rs 455.75',
      currentReturn: '37.69%',
      status: 'New Listed',
    },
    {
      company: 'Innova Captab Ltd.',
      ipoPrice: 'Rs 448',
      listingPrice: 'Rs 452.1',
      listingGain: '0.92%',
      listingDate: '2023-12-29',
      cmp: 'Rs 515',
      currentReturn: '14.96%',
      status: 'New Listed',
    },
    {
      company: 'Azad Engineering Ltd.',
      ipoPrice: 'Rs 524',
      listingPrice: 'Rs 720',
      listingGain: '37.4%',
      listingDate: '2023-12-28',
      cmp: 'Rs 663.25',
      currentReturn: '26.57%',
      status: 'New Listed',
    },
  ],
};

const tabOptions = [
  { key: 'upcoming', label: 'Upcoming IPOs' },
  { key: 'ongoing', label: 'Ongoing IPOs' },
  { key: 'listed', label: 'Newly Listed IPOs' },
];

const ManageIPO = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
    {/* Sidebar */}
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-center font-bold text-lg tracking-wide border-b border-gray-100">Bluestock Fintech</div>
      <nav className="flex-1 flex flex-col py-2">
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Dashboard</a>
        <a href="#" className="px-8 py-3 flex items-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium bg-indigo-50 text-indigo-600 rounded-r-lg">Manage IPO</a>
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
      <div className="mt-auto py-4 px-8 text-xs text-gray-400 border-t border-gray-100">IPO Upcoming Screen</div>
    </aside>
    {/* Main content */}
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Topbar */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
        <div className="font-semibold text-lg">IPO Upcoming Screen</div>
        <div className="flex-1 mx-8"><input type="text" placeholder="Search" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"/></div>
        <div className="flex items-center gap-3 font-medium"><span className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-base">VL</span>Hi, Vishal</div>
      </header>
      {/* IPO Table */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">IPO Dashboard</h2>
          <button className="bg-indigo-50 text-indigo-600 border border-indigo-600 rounded-lg px-5 py-2 font-medium hover:bg-indigo-600 hover:text-white transition">Register IPO</button>
        </div>
        {/* Tabs for IPO categories */}
        <div className="flex gap-2 mb-4">
          {tabOptions.map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded-lg font-medium border transition ${activeTab === tab.key ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600'}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto rounded-xl shadow bg-white">
          {/* Table for Upcoming IPOs */}
          {activeTab === 'upcoming' && (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Price Band</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Open</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Close</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">ISSUE SIZE</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">ISSUE Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Listing Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {ipoData.upcoming.map((ipo, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2">{ipo.company}</td>
                    <td className="px-4 py-2">{ipo.priceBand}</td>
                    <td className="px-4 py-2">{ipo.open}</td>
                    <td className="px-4 py-2">{ipo.close}</td>
                    <td className="px-4 py-2">{ipo.issueSize}</td>
                    <td className="px-4 py-2">{ipo.issueType}</td>
                    <td className="px-4 py-2">{ipo.listingDate}</td>
                    <td className="px-4 py-2"><span className="bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full px-3 py-1">{ipo.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Table for Ongoing IPOs */}
          {activeTab === 'ongoing' && (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Price Band</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Open</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Close</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">ISSUE SIZE</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">ISSUE Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Listing Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {ipoData.ongoing.map((ipo, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2">{ipo.company}</td>
                    <td className="px-4 py-2">{ipo.priceBand}</td>
                    <td className="px-4 py-2">{ipo.open}</td>
                    <td className="px-4 py-2">{ipo.close}</td>
                    <td className="px-4 py-2">{ipo.issueSize}</td>
                    <td className="px-4 py-2">{ipo.issueType}</td>
                    <td className="px-4 py-2">{ipo.listingDate}</td>
                    <td className="px-4 py-2"><span className="bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1">{ipo.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Table for Newly Listed IPOs */}
          {activeTab === 'listed' && (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">IPO Price</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Listing Price</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Listing Gain</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Listing Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">CMP</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Current Return</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {ipoData.listed.map((ipo, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2">{ipo.company}</td>
                    <td className="px-4 py-2">{ipo.ipoPrice}</td>
                    <td className="px-4 py-2">{ipo.listingPrice}</td>
                    <td className="px-4 py-2">{ipo.listingGain}</td>
                    <td className="px-4 py-2">{ipo.listingDate}</td>
                    <td className="px-4 py-2">{ipo.cmp}</td>
                    <td className="px-4 py-2">{ipo.currentReturn}</td>
                    <td className="px-4 py-2"><span className="bg-pink-100 text-pink-700 border border-pink-200 rounded-full px-3 py-1">{ipo.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex gap-2 mt-6">
          <button className="bg-white border border-gray-200 rounded px-3 py-1 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition">1</button>
          <button className="bg-white border border-gray-200 rounded px-3 py-1 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition">2</button>
          <span className="px-2">...</span>
          <button className="bg-white border border-gray-200 rounded px-3 py-1 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition">9</button>
          <button className="bg-white border border-gray-200 rounded px-3 py-1 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition">10</button>
        </div>
      </div>
    </main>
  </div>
);

export default ManageIPO;
