import React from 'react';

const ContactUs = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
    {/* Header/NavBar */}
    <div className="w-full max-w-4xl bg-white rounded-xl shadow p-8 mb-8">
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
      <div className="text-xs text-gray-400 mb-2">Home / Contact</div>
      <h2 className="text-xl font-bold mb-6">How Can We Help You ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-2 shadow-sm">
          <div className="font-semibold text-base mb-1">Email us</div>
          <div className="text-sm text-gray-600 mb-2">One of our agents will respond at the earliest</div>
          <a href="mailto:help@bluestock.in" className="text-indigo-600 font-medium flex items-center gap-1 hover:underline">help@bluestock.in <span>→</span></a>
        </div>
        {/* Chat Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-2 shadow-sm">
          <div className="font-semibold text-base mb-1">Chat</div>
          <div className="text-sm text-gray-600 mb-2">Available from 9:00AM to 5:00PM</div>
          <button className="text-indigo-600 font-medium flex items-center gap-1 border border-indigo-600 rounded px-3 py-1 hover:bg-indigo-50">Open Chat <span>→</span></button>
        </div>
      </div>
    </div>
    {/* Community Banner */}
    <div className="w-full max-w-4xl bg-indigo-700 rounded-xl shadow p-8 mb-8 flex flex-col md:flex-row items-center text-white gap-6">
      <div className="flex-1">
        <div className="text-lg font-bold mb-2">Interact With Us in Our Active Community</div>
        <div className="text-sm mb-4">Ask questions or discuss anything related to investing or trading in the most active trading & investing community.</div>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-50 transition">JOIN NOW</button>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-lg p-3 mb-2 shadow">
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qrcodes/qr_code_example.png" alt="Download Bluestock Mobile App QR" className="h-24 w-24" />
        </div>
        <div className="text-xs text-white font-medium">Download Bluestock Mobile App</div>
      </div>
    </div>
  </div>
);

export default ContactUs;
