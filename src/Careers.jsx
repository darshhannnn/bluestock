import React from 'react';

const Careers = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
    {/* Header Section */}
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
      <div className="text-xs text-gray-400 mb-2">Home / Careers</div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Together, Let’s Build The Future Of Fintech !</h1>
          <p className="mb-4 text-gray-700">Join Bluestock Fintech to create disruptive fin-tech products, while working from anywhere!</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition">See Job Openings</button>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Placeholder for illustration */}
          <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/arrow-2023449_1280.png" alt="Growth Illustration" className="h-40 object-contain" />
        </div>
      </div>
    </div>
    {/* Promo Banner */}
    <div className="w-full max-w-4xl bg-indigo-700 rounded-xl shadow p-6 flex flex-col md:flex-row items-center mb-8 text-white">
      <img src="https://play-lh.googleusercontent.com/0k6pG3QK1Qk6p5jQ1u4w6bWwQYkQy3gQyQkQy3gQyQkQy3gQyQkQy3gQyQkQy3gQyQ=w200" alt="App Screenshot" className="h-32 rounded-xl shadow-lg bg-white p-2 mr-8" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-300 font-bold text-lg">4.4 K+</span>
          <span className="font-semibold">DOWNLOADS</span>
        </div>
        <div className="text-xl font-semibold mb-2">Enjoy Free Learning, Analytics Club</div>
        <div className="mb-3 text-sm">Get the link to download the App</div>
        <button className="bg-white text-indigo-700 font-semibold px-4 py-1 rounded-lg shadow hover:bg-indigo-50 mb-2">Send App Link</button>
        <div className="flex gap-2 mt-2">
          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qrcodes/qr_code_example.png" alt="QR Code" className="h-10 w-10 bg-white p-1 rounded" />
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
          </a>
          <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
          </a>
        </div>
      </div>
    </div>
    {/* Footer Note */}
    <div className="w-full max-w-4xl bg-white rounded-xl shadow p-4 text-center text-gray-700 text-sm">
      All official communication with the HR team at Bluestock Fintech will be through <span className="font-semibold text-indigo-700">hr@bluestock.in</span>
    </div>
  </div>
);

export default Careers;
