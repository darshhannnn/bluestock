import React from 'react';

const Community = () => (
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
          <a href="#">LIVE NEWS</a>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 rounded bg-white border border-indigo-600 text-indigo-600 font-medium">Sign In</button>
          <button className="px-4 py-1 rounded bg-indigo-600 text-white font-medium">Sign Up Now</button>
        </div>
      </nav>
      <div className="text-xs text-gray-400 mb-6">Home / Community</div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">The Most Active Community of Traders & Investors</h1>
          <p className="mb-4 text-gray-700 text-sm">Join a vibrant social club that unites all kinds of traders, investors & budding fintech minds. Start interacting, learning, and growing together!</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition">Join Our Community</button>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Placeholder for chat/community illustration */}
          <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/arrow-2023449_1280.png" alt="Community Chat" className="h-40 object-contain" />
        </div>
      </div>
      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-3">be a part of trading & investments club</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>Active social club for knowledge sharing.</li>
              <li>Key connections & broad, like-minded crowd.</li>
              <li>Access product launches, events, webinars, and meet-ups.</li>
            </ul>
          </div>
          <div className="flex-1 flex gap-3">
            <div className="bg-gray-100 rounded-lg p-4 text-center flex-1">
              <div className="font-semibold">Dynamic Conversations</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center flex-1">
              <div className="font-semibold">Expert Insights</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center flex-1">
              <div className="font-semibold">Real Time Interactions</div>
            </div>
          </div>
        </div>
      </div>
      {/* Team/Support Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Team Bluestock Cares</h2>
        <p className="text-sm text-gray-700 mb-4">Interact with our network experts, who care for members like you. Only one DM away!</p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="font-semibold mb-2">Interact With Our Experts</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Get advice/suggestions</li>
              <li>Resolve issues or concerns</li>
              <li>Add new members</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Placeholder for support chat illustration */}
            <img src="https://cdn.pixabay.com/photo/2016/04/01/09/27/chat-1293981_1280.png" alt="Support Chat" className="h-32 object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Community;
