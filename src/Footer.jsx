import React from 'react';

const LOGO_URL =
  'https://drive.google.com/uc?export=view&id=1g3Nxo4AclTDf-DCVXDBk6IozcooV4jhl';

const Footer = () => (
  <footer className="bg-white border-t mt-16 px-8 py-10 text-sm text-gray-700 w-full">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Resources */}
      <div>
        <div className="font-semibold mb-2">Resources</div>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Listing Alerts</a></li>
          <li><a href="#" className="hover:underline">IPO News</a></li>
          <li><a href="#" className="hover:underline">Broker Reviews</a></li>
          <li><a href="#" className="hover:underline">Knowledge Center</a></li>
          <li><a href="#" className="hover:underline">Account Signup</a></li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <div className="font-semibold mb-2">Company</div>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Media</a></li>
          <li><a href="#" className="hover:underline">Franchise</a></li>
        </ul>
      </div>
      {/* Other Pages */}
      <div>
        <div className="font-semibold mb-2">Other Pages</div>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">IPO Calendar</a></li>
          <li><a href="#" className="hover:underline">IPO Grey Market</a></li>
          <li><a href="#" className="hover:underline">IPO Watch</a></li>
          <li><a href="#" className="hover:underline">Brokerage Charges</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
        </ul>
      </div>
      {/* Links */}
      <div>
        <div className="font-semibold mb-2">Links</div>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">User Verification</a></li>
          <li><a href="#" className="hover:underline">Refer & Earn</a></li>
          <li><a href="#" className="hover:underline">IPO Results</a></li>
          <li><a href="#" className="hover:underline">Brokerage Calculator</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
        </ul>
      </div>
      {/* Policy */}
      <div>
        <div className="font-semibold mb-2">Policy</div>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Risk Disclosure</a></li>
          <li><a href="#" className="hover:underline">Refund Policy</a></li>
          <li><a href="#" className="hover:underline">Fair Usage Policy</a></li>
        </ul>
      </div>
    </div>
    {/* Bottom Section */}
    <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <a href="#"><img src={LOGO_URL} alt="Bluestock Logo" className="h-8 w-auto" /></a>
          <span className="font-bold text-lg text-gray-800">BLUESTOCK</span>
        </div>
        <div className="flex gap-3 mb-2">
          <a href="#" className="text-blue-600 hover:underline"><i className="fab fa-facebook"></i> x</a>
          <a href="#" className="text-blue-400 hover:underline"><i className="fab fa-twitter"></i> f</a>
          <a href="#" className="text-blue-700 hover:underline"><i className="fab fa-linkedin"></i> in</a>
          <a href="#" className="text-blue-500 hover:underline"><i className="fab fa-telegram"></i> t</a>
          <a href="#" className="text-pink-500 hover:underline"><i className="fab fa-instagram"></i> ig</a>
        </div>
        <div className="text-xs text-gray-500">Bluestock Fintech Pvt Ltd<br />#StartupIndia</div>
      </div>
      <div className="flex-1 text-xs text-gray-500 leading-relaxed">
        Content on Bluestock Fintech is meant for education &amp; research only. Bluestock Fintech is NOT a SEBI Registered entity. Please verify all information before investing.<br />
        For queries: <a href="mailto:support@bluestock.in" className="text-blue-600 hover:underline">support@bluestock.in</a><br />
        The content and data on this website is for informational purposes only and should not be considered as investment advice. All trademarks and logos belong to their respective owners.<br />
        Bluestock Fintech is not liable for any losses or damages arising from the use of this website.<br />
      </div>
      <div className="flex flex-col gap-2 items-end">
        <img src="https://www.startupindia.gov.in/content/dam/invest-india/Templates/Startup%20India%20Logo.svg" alt="#startupindia" className="h-8" />
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t pt-4 text-xs text-gray-400">
      <span>Bluestock Fintech. All Rights Reserved.</span>
      <span className="flex items-center gap-1">Made with <span className="text-red-400">♥</span> by <a href="#" className="hover:underline">Vishal</a></span>
    </div>
  </footer>
);

export default Footer;
