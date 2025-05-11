import React from 'react';

const moduleUnits = [
  'Introduction',
  'What is Moving Average?',
  'Uses of Moving Averages',
  'Kinds of Moving Averages',
  'Using Moving Averages',
  'Trading Signals & Systems',
  'Conclusion'
];

const MagicMovingAverage = () => (
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
      <div className="text-xs text-gray-400 mb-2">Home / Technical Analysis / Magic of Moving Average</div>
      <h1 className="text-2xl font-bold mb-4">Magic of Moving Average</h1>
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
              <p className="text-gray-700 text-sm whitespace-pre-line">
                In this module, we are going to take a closer dive into the world of moving averages. Moving averages are among the most popular and versatile indicators used in technical analysis. They help smooth out price data to identify trends, filter out noise, and generate trading signals.\n\nYou will learn what a moving average is, how it is calculated, the different types of moving averages, and how to use them for trading strategies. We will also discuss the strengths and limitations of moving averages and how to combine them with other indicators for better results.\n\nThroughout this module, we will refer to real-life examples, chart images, and sample calculations to solidify your understanding.
              </p>
            </div>
            <div className="border-t pt-2 mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">Did you like this unit?</span>
              <div className="flex gap-4 items-center">
                <button className="flex items-center gap-1 text-blue-600 font-semibold text-sm"><span role="img" aria-label="like">👍</span> 38</button>
                <button className="flex items-center gap-1 text-red-500 font-semibold text-sm"><span role="img" aria-label="dislike">👎</span> 2</button>
              </div>
            </div>
          </div>
          {/* What is Moving Average Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col gap-4">
            <h2 className="text-lg font-bold text-blue-700 mb-2">What is Moving Average</h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700 text-sm whitespace-pre-line">
                A Moving Average (or simple moving average) is the average of closing prices, at a company or index, over a set period. It helps smooth out price data by creating a constantly updated average price.\n\nFor example, to calculate a 5-day moving average, you add up the closing prices for the last 5 days and divide by 5. As each new day’s price is added, the oldest price is dropped from the calculation.\n\nMoving averages are used to identify the direction of the trend, spot reversals, and generate trading signals. They can be applied to any timeframe – daily, weekly, monthly, or even intraday charts.\n\nShorter moving averages (e.g., 5-day, 10-day) react quickly to price changes and are best for short-term analysis. Longer moving averages (e.g., 50-day, 200-day) are slower and better for identifying long-term trends.\n\nFor example, we want to calculate the 5-day moving average price of Reliance for the last 5 days and divide by 5.\n\nWe add all the closing prices of Reliance for 5 values for the last 5 days and divide by 5.\n\nWe plot the moving average of every new close. We will discuss the time frames and moving averages in more modules.\n\n
              </p>
              <img src="https://www.marketcalls.in/wp-content/uploads/2018/11/moving-average-table.png" alt="Moving Average Table Example" className="h-36 object-contain mt-2" />
              <img src="https://www.marketcalls.in/wp-content/uploads/2018/11/moving-average-chart.png" alt="Moving Average Chart Example" className="h-36 object-contain mt-2" />
              <p className="text-gray-700 text-sm whitespace-pre-line">
                The above image shows an actual table and chart, both with a 5-day moving average. Because moving averages lag price, they are also known as lagging (trend-following) indicators.\n\nYou may notice how moving averages are closer to the real price compared to regular historical data. Moving averages are smoother and much less erratic compared to actual market prices.
              </p>
            </div>
            <div className="border-t pt-2 mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">Did you like this unit?</span>
              <div className="flex gap-4 items-center">
                <button className="flex items-center gap-1 text-blue-600 font-semibold text-sm"><span role="img" aria-label="like">👍</span> 57</button>
                <button className="flex items-center gap-1 text-red-500 font-semibold text-sm"><span role="img" aria-label="dislike">👎</span> 3</button>
              </div>
            </div>
          </div>
          {/* Types of Moving Average Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col gap-4">
            <h2 className="text-lg font-bold text-blue-700 mb-2">Types of Moving Average</h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700 text-sm whitespace-pre-line">
                There are several types of moving averages, each with its own calculation and use case. The most common are:\n\n- Simple Moving Average (SMA): The arithmetic mean of closing prices over a set period.\n- Exponential Moving Average (EMA): Gives more weight to recent prices, making it more responsive to new information.\n- Weighted Moving Average (WMA): Assigns different weights to each price, usually more to recent prices.\n\nEach type has its own strengths and weaknesses. SMA is the simplest, EMA reacts faster to price changes, and WMA is useful for custom weighting.\n\nIn the next module, we’ll discuss how to use moving averages in real trading strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MagicMovingAverage;
