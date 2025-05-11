import React from 'react';

const blogPosts = [
  { title: 'Top Reasons for Fully-Paperless Online IPOs', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'SME IPOs Rocks in India', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Simplifying a Hosted IPO Process', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'ASBA for IPOs – Everything You Need to Know', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Typical Avoid Regular Issues – How to Win', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Popular Payment Failures', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Quota on the Railway IPO – Everything You Need to Know', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'REITs in India – Everything You Need to Know', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Tata Technologies IPO – Everything You Need to Know', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Best tax-saver facilities in India', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Smart Fintech Stocks in India', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' },
  { title: 'Best Stocks Under 0.5 Rs in India', author: 'Bluestock Team', date: '3 weeks ago', views: '1 minute read' }
];

const Blog = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
    {/* Header/NavBar */}
    <div className="w-full max-w-5xl bg-white rounded-xl shadow p-8 mb-8">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <img src="/logo192.png" alt="Bluestock Logo" className="h-8" />
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
      <div className="text-xs text-gray-400 mb-2">Home / Blogs</div>
      <h1 className="text-2xl font-bold mb-8 text-center">BLUESTOCK BLOG</h1>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-indigo-300 rounded-lg p-6 flex flex-col justify-between shadow hover:shadow-lg transition">
            <div className="mb-4 h-8"></div> {/* Placeholder for image */}
            <div className="font-semibold mb-2 text-white">{post.title}</div>
            <div className="text-xs text-white opacity-80 mb-1">{post.author}</div>
            <div className="text-xs text-white opacity-80">{post.date} · {post.views}</div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button className="px-2 py-1 rounded bg-white border border-gray-300 text-gray-700">&lt;</button>
        <button className="px-3 py-1 rounded bg-indigo-600 text-white font-semibold">1</button>
        <button className="px-3 py-1 rounded bg-white border border-gray-300 text-gray-700">2</button>
        <button className="px-3 py-1 rounded bg-white border border-gray-300 text-gray-700">3</button>
        <button className="px-3 py-1 rounded bg-white border border-gray-300 text-gray-700">4</button>
        <button className="px-2 py-1 rounded bg-white border border-gray-300 text-gray-700">&gt;</button>
      </div>
    </div>
  </div>
);

export default Blog;
