import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is Bluestock?',
    answer: 'Bluestock is a mobile app for stock market learning, analytics, and club-based investing/trading community.'
  },
  {
    question: 'What platforms does Bluestock support?',
    answer: 'Bluestock is available for both Android and iOS devices.'
  },
  {
    question: 'I have technical contact or app query?',
    answer: 'Please reach out to our support team at help@bluestock.in for any technical or app-related queries.'
  },
  {
    question: 'Is Bluestock free to use?',
    answer: 'Yes, Bluestock offers free learning and analytics resources for all users.'
  },
  {
    question: 'How can I get dedicated support for the app?',
    answer: 'You can email us at help@bluestock.in for dedicated support.'
  },
];

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Header/NavBar */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow p-8 mb-8">
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
            <a href="#">ABOUT US</a>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded bg-white border border-indigo-600 text-indigo-600 font-medium">Sign In</button>
            <button className="px-4 py-1 rounded bg-indigo-600 text-white font-medium">Sign Up Now</button>
          </div>
        </nav>
        <div className="text-xs text-gray-400 mb-2">Home / About Us</div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Bluestock is mobile app for stock market learning, analytics & club</h1>
          <p className="text-gray-700 text-sm mb-2">Bluestock is a mobile app for stock market learning, analytics & club-based investing/trading community. It offers real-time insights, expert content, and a vibrant community for all levels of investors and traders.</p>
          <p className="text-gray-700 text-sm">Grow your knowledge, track your investments, and power your wealth-building journey with Bluestock.</p>
        </div>
        {/* Stats Section */}
        <div className="flex gap-6 mb-8">
          <div className="flex-1 bg-indigo-50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold mb-1">5 Thousand</div>
            <div className="text-gray-600 text-sm">Customers</div>
          </div>
          <div className="flex-1 bg-indigo-50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold mb-1">20+</div>
            <div className="text-gray-600 text-sm">Team Members</div>
          </div>
          <div className="flex-1 bg-indigo-50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold mb-1">4.9 ★</div>
            <div className="text-gray-600 text-sm">Rating</div>
          </div>
        </div>
        {/* Recent News Section */}
        <div className="mb-8">
          <div className="font-semibold text-base mb-2">Trusted Talk</div>
          <div className="text-lg font-bold mb-4">Recent News</div>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center w-48">
              <div className="font-semibold text-pink-600 text-xs mb-2">Business Standard</div>
              <div className="text-xs text-gray-700">NSE & BSE, news and new features covered, more details soon.</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center w-48">
              <div className="font-semibold text-gray-800 text-xs mb-2">Medium</div>
              <div className="text-xs text-gray-700">Bluestock featured in Medium for analytics and community growth.</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center w-48">
              <div className="font-semibold text-blue-600 text-xs mb-2">BW BUSINESSWORLD</div>
              <div className="text-xs text-gray-700">Bluestock Fintech covered in BusinessWorld for making investing & trading simple.</div>
            </div>
          </div>
        </div>
        {/* Join Us Banner */}
        <div className="bg-indigo-400 rounded-xl p-8 mb-8 text-white flex flex-col gap-3">
          <div className="font-semibold text-lg mb-1">Want to join us ?</div>
          <div className="text-sm">We're taking complicated stuff and making it super simple. Our team is full of smart and friendly folks who enjoy challenging work.<br/>And we're always looking for customer-obsessed people. Think you're customer-focused enough? Email us at <span className='underline'>hr@bluestock.in</span></div>
          <div>
            <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-50 transition">APPLY NOW</button>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4 text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="max-w-xl mx-auto">
            {faqData.map((faq, idx) => (
              <div key={idx} className="mb-2 border border-gray-200 rounded">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.question}
                  <span>{openFaq === idx ? '▲' : '▼'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-3 text-sm text-gray-700 bg-gray-50">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
