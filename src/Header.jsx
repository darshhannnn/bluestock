import React from 'react';

const LOGO_URL =
  'https://drive.google.com/uc?export=view&id=1g3Nxo4AclTDf-DCVXDBk6IozcooV4jhl';

const Header = () => (
  <header className="bg-white shadow px-8 py-4 flex items-center justify-between w-full">
    {/* Logo and Brand */}
    <div className="flex items-center gap-3">
      <img src={LOGO_URL} alt="Bluestock Logo" className="h-8 w-auto" style={{ maxWidth: 160 }} />
    </div>
    {/* Navigation */}
    <nav className="flex gap-8 text-gray-700 font-medium">
      <a href="#" className="hover:text-indigo-600">IPO</a>
      <a href="#" className="hover:text-indigo-600">Community</a>
      <a href="#" className="hover:text-indigo-600">Products</a>
      <a href="#" className="hover:text-indigo-600">Brokers</a>
      <a href="#" className="hover:text-indigo-600">Learn &amp; Use <span className="ml-1 bg-indigo-100 text-xs text-indigo-700 px-2 py-0.5 rounded">NEW</span></a>
    </nav>
    {/* Actions */}
    <div className="flex items-center gap-4">
      <a href="#" className="text-gray-700 hover:text-indigo-600">Sign In</a>
      <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">Sign Up Now</button>
      <button className="ml-2 bg-white border border-gray-300 text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
    </div>
  </header>
);

export default Header;
