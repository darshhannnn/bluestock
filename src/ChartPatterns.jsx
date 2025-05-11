import React from 'react';

const moduleUnits = [
  'Types of chart pattern',
  'Channel',
  'Inverted Hammer',
  'Shooting Star',
  'Head & Shoulders',
  'Flags'
];

const placeholderText = `Market analysis is broadly categorized into two main methods, the first is known as fundamental analysis and the second as technical analysis. Fundamental analysis focuses on evaluating a company’s intrinsic value by examining related economic, financial, and other qualitative and quantitative factors. Technical analysis, on the other hand, is based on the study of past market data, primarily price and volume. The core objective of technical analysis is to forecast the future price movements of a security based on historical price patterns and market trends.\n\nThe main discipline of technical analysis is based on three key ideas: prices move in trends, history tends to repeat itself, and market action discounts everything. Technical analysts use charts and various technical indicators to identify patterns and trends that can signal future market behavior. Unlike fundamental analysis, which looks at a company’s financial health, technical analysis is concerned only with price and volume movements.\n\nTechnical analysis is popular among traders and investors due to its applicability to any security with historical trading data. It is widely used for stocks, commodities, forex, and cryptocurrencies. The goal is to identify trading opportunities by analyzing statistical trends gathered from trading activity.\n\nIn this module, you will learn about the basic principles of technical analysis, the different types of charts and patterns, and how to use technical indicators to make informed trading decisions. This is a long journey; pace with your time to absorb each of the units.`;

const ChartPatterns = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
    {/* Header/NavBar */}
    <div className="w-full max-w-4xl bg-white rounded-xl shadow p-6 mb-8">
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
      <div className="text-xs text-gray-400 mb-2">Home / Technical Analysis / Chart Patterns</div>
      <h1 className="text-2xl font-bold mb-4">Chats Patterns</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Module Units Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 md:mb-0">
          <div className="font-semibold mb-3">Module Units</div>
          <ul className="mb-4 list-disc list-inside text-sm text-gray-700">
            {moduleUnits.map((unit, idx) => (
              <li key={idx} className="mb-1">{unit}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded bg-red-500 text-white font-medium">SAVE</button>
            <button className="px-4 py-1 rounded bg-indigo-600 text-white font-medium">GOTO</button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Introduction Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col gap-4">
            <h2 className="text-lg font-bold text-indigo-700 mb-2">Introduction</h2>
            <div className="flex items-start gap-4">
              <div className="w-20 h-16 bg-gray-200 rounded mb-2" />
              <p className="text-gray-700 text-sm whitespace-pre-line">{placeholderText}</p>
            </div>
            <div className="border-t pt-2 mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">Did you like this unit?</span>
              <div className="flex gap-4 items-center">
                <button className="flex items-center gap-1 text-blue-600 font-semibold text-sm"><span role="img" aria-label="like">👍</span> 456</button>
                <button className="flex items-center gap-1 text-red-500 font-semibold text-sm"><span role="img" aria-label="dislike">👎</span> 12</button>
              </div>
            </div>
          </div>
          {/* Indentity Patterns Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col gap-4">
            <h2 className="text-lg font-bold text-blue-700 mb-2">Indentity Patterns</h2>
            <div className="flex items-start gap-4">
              <div className="w-20 h-16 bg-gray-200 rounded mb-2" />
              <p className="text-gray-700 text-sm whitespace-pre-line">{placeholderText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ChartPatterns;
