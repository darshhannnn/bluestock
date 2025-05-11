import React from 'react';

const moduleUnits = [
  'Introduction',
  'Types of Charts',
  'Trends',
  'Support and Resistance',
  'Candlestick Chart Patterns',
  'Chart Patterns',
  'Technical Indicators'
];

const CandlestickChartsPatterns = () => (
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
      <div className="text-xs text-gray-400 mb-2">Home / Technical Analysis / Candlestick Charts & Patterns</div>
      <h1 className="text-2xl font-bold mb-4">Candlestick Charts & Patterns</h1>
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
            <div className="flex flex-col gap-3">
              <div className="w-32 h-20 bg-gray-200 rounded self-center mb-2" />
              <p className="text-gray-700 text-sm">
                The candlestick is perhaps the most popular chart pattern in technical analysis. What is a Candlestick? This type of chart visually displays the open, high, low, and close prices for a given period. Each candlestick consists of a body and wicks (shadows) on either end. The color of the body indicates whether the price closed higher (typically green/white) or lower (typically red/black) than it opened.\n\nCandlestick charts are favored for their visual clarity and the wealth of information they provide at a glance. Traders use candlestick patterns to identify potential reversals, continuations, and trends in the market.\n\nBelow, we explain the basic structure of a candlestick and some key qualitative patterns you should be comfortable with as a trader.
              </p>
              <div className="flex gap-8 justify-center my-2">
                <img src="https://i.imgur.com/6F6c5XK.png" alt="Bullish Candlestick" className="h-20" />
                <img src="https://i.imgur.com/3Jc1j8c.png" alt="Bearish Candlestick" className="h-20" />
              </div>
              <p className="text-gray-700 text-sm">
                <b>Bullish Candlestick:</b> If the close is higher than the open, the body is typically white/green and signals buying pressure.\n
                <b>Bearish Candlestick:</b> If the close is lower than the open, the body is typically black/red and signals selling pressure.\n
                <b>Wicks/Shadows:</b> The lines above and below the body show the highest and lowest prices during the period.\n
                <b>Doji:</b> A doji forms when the open and close are virtually equal, indicating indecision in the market.\n
                <b>Spinning Top:</b> A spinning top has a small body with long upper and lower wicks, also signaling indecision.\n
                <b>Hammer:</b> The hammer is a bullish reversal pattern with a small body and a long lower wick.\n
                <b>Shooting Star:</b> The shooting star is a bearish reversal pattern with a small body and a long upper wick.\n
              </p>
              <p className="text-gray-700 text-sm">
                Candlestick patterns are used by professional traders for several reasons, including:\n
                - Quick visualization of price action\n                - Identification of reversal and continuation signals\n                - Suitable for all timeframes\n                - Useful in combination with other technical analysis tools\n
                Below is an example chart showing a candlestick pattern in action:
              </p>
              <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/arrow-2023449_1280.png" alt="Candlestick Chart Example" className="h-28 object-contain mt-2" />
            </div>
            <div className="border-t pt-2 mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">Did you like this unit?</span>
              <div className="flex gap-4 items-center">
                <button className="flex items-center gap-1 text-blue-600 font-semibold text-sm"><span role="img" aria-label="like">👍</span> 432</button>
                <button className="flex items-center gap-1 text-red-500 font-semibold text-sm"><span role="img" aria-label="dislike">👎</span> 8</button>
              </div>
            </div>
          </div>
          {/* Identify Patterns Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col gap-4">
            <h2 className="text-lg font-bold text-blue-700 mb-2">Identify Patterns</h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700 text-sm">
                Recognizing candlestick patterns is key to predicting market moves. In this unit, we’ll introduce the most common bullish and bearish patterns, and how to spot them on a chart.\n\nPatterns include: Doji, Hammer, Shooting Star, Engulfing, Morning Star, Evening Star, and more.\n\nPractice identifying these on real charts for better trading decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CandlestickChartsPatterns;
