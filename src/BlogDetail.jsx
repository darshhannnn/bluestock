import React from 'react';

const ipoDetails = [
  { label: 'IPO Date', value: '14 December, 2023 to 18 December, 2023' },
  { label: 'Price Band', value: '₹ 627 to ₹ 660 per share' },
  { label: 'Face Value', value: '₹ 2 per share' },
  { label: 'Lot Size', value: '22 Shares' },
  { label: 'Total Issue Size', value: '22,110,955 shares (aggregating up to ₹ 1,459.32 Cr)' },
  { label: 'Offer for Sale', value: '22,110,955 shares (aggregating up to ₹ 1,459.32 Cr)' },
];

const companyFinancials = [
  { period: '31 Mar 2023', revenue: '984.20', profit: '152.40', eps: '15.24', nav: '94.14' },
  { period: '31 Mar 2022', revenue: '803.70', profit: '130.50', eps: '13.05', nav: '80.36' },
  { period: '31 Mar 2021', revenue: '608.90', profit: '129.10', eps: '12.91', nav: '69.72' },
];

const topGainers = [
  { name: 'Ashoka Team', value: '+7.91%', positive: true },
  { name: 'Senco', value: '+5.18%', positive: true },
  { name: 'Vishnu Prakash', value: '+4.77%', positive: true },
  { name: 'Idea', value: '+3.11%', positive: true },
];

const topLosers = [
  { name: 'Shreeoswal', value: '-7.20%', positive: false },
  { name: 'Rulka', value: '-6.13%', positive: false },
  { name: 'Inox', value: '-5.77%', positive: false },
  { name: 'Muthoot', value: '-4.72%', positive: false },
  { name: 'India', value: '-3.89%', positive: false },
];

const BlogDetail = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
    {/* Header/NavBar */}
    <div className="w-full max-w-5xl bg-white rounded-xl shadow p-8 mb-8">
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
          <a href="#">BLOG</a>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 rounded bg-white border border-indigo-600 text-indigo-600 font-medium">Sign In</button>
          <button className="px-4 py-1 rounded bg-indigo-600 text-white font-medium">Sign Up Now</button>
        </div>
      </nav>
      <div className="text-xs text-gray-400 mb-2">Home / Blogs / Inox India IPO</div>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Blog Main */}
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-2">Key Things to Know About Inox India IPO (Inox India IPO – Everything You Must Know)</h1>
          <div className="text-xs text-gray-500 mb-4">Bluestock Team | 3 weeks ago | 1 minute read</div>
          <div className="bg-indigo-100 rounded-lg flex flex-col items-center justify-center py-6 mb-6">
            <img src="https://cdn-icons-png.flaticon.com/512/808/808439.png" alt="Inox India IPO" className="h-24 mb-2" />
            <div className="font-semibold text-lg text-indigo-700">Inox India IPO</div>
          </div>
          <div className="mb-4 text-gray-700 text-sm">
            One of the leading manufacturers of cryogenic storage tanks, Inox India, is expected to launch its IPO in December 2023. The much-awaited IPO is expected to boost the IPO season and increase investor confidence. Here’s what you need to know about the Inox India IPO.
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-1">About Inox India Limited (INOXCVA)</h2>
            <p className="text-gray-700 text-sm mb-2">The Gujarat-based company, Inox India is a supplier of cryogenic storage tanks and solutions. It caters to various industries such as industrial gases, LNG, green hydrogen, energy, chemicals, and more.</p>
          </div>
          <div className="mb-4 text-sm">
            <div className="font-semibold mb-2">Some of the important things you should know about Inox India IPO are:</div>
            <table className="w-full text-xs mb-4 border border-gray-200 rounded">
              <tbody>
                {ipoDetails.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                    <td className="p-2 font-medium bg-gray-50 w-1/3">{row.label}</td>
                    <td className="p-2">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-1">Inox India IPO Date</h2>
            <p className="text-gray-700 text-sm mb-2">The Inox India IPO will open for subscription on 14th December 2023 and will close on 18th December 2023.</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-1">Listing Date</h2>
            <p className="text-gray-700 text-sm mb-2">Inox India shares are expected to be listed on 21 December 2023 as per the schedule.</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-1">Company Financials</h2>
            <table className="w-full text-xs mb-4 border border-gray-200 rounded">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2">Period Ended</th>
                  <th className="p-2">Revenue (₹ Cr)</th>
                  <th className="p-2">Profit (₹ Cr)</th>
                  <th className="p-2">EPS</th>
                  <th className="p-2">NAV</th>
                </tr>
              </thead>
              <tbody>
                {companyFinancials.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                    <td className="p-2">{row.period}</td>
                    <td className="p-2">{row.revenue}</td>
                    <td className="p-2">{row.profit}</td>
                    <td className="p-2">{row.eps}</td>
                    <td className="p-2">{row.nav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Blog Sidebar */}
        <div className="w-full md:w-72 flex flex-col gap-4">
          <div className="bg-gray-100 h-24 rounded mb-2" />
          <div className="bg-white rounded shadow p-4 mb-2">
            <div className="bg-indigo-500 h-2 rounded mb-4" />
            <div className="bg-gray-100 h-16 rounded mb-2" />
            <div className="bg-gray-100 h-16 rounded mb-2" />
          </div>
          {/* Top Gainers */}
          <div className="bg-white rounded shadow p-4 mb-2">
            <div className="font-semibold text-sm mb-2">Top Gainers</div>
            <ul>
              {topGainers.map((item, idx) => (
                <li key={idx} className="flex justify-between text-green-600 text-xs mb-1">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Top Losers */}
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold text-sm mb-2">Top Losers</div>
            <ul>
              {topLosers.map((item, idx) => (
                <li key={idx} className="flex justify-between text-red-500 text-xs mb-1">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogDetail;
