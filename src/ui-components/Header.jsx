import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-red-600 text-white text-center py-2 text-sm">
        <p>Go Prime at flat 18% discount on Annual Plans using code MONSOON25 <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-2">Grab Now</a></p>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <a href="#" className="flex items-center mr-6">
            <img src="/logo.svg" alt="NiftyTrader Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold text-gray-800">NiftyTrader</span>
          </a>

          {/* Search Bar */}
          <div className="relative flex items-center border border-gray-300 rounded-md px-3 py-1 bg-gray-100">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input
              type="text"
              placeholder="Search stocks, IPOs, pages"
              className="bg-transparent outline-none text-gray-800 text-sm w-64"
            />
          </div>
        </div>

        {/* Navigation Links (Right) */}
        <nav className="flex items-center space-x-6">
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Analytics
              <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Backtesting
              <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Options
              <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Resources
              <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <a href="#" className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-md flex items-center">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L14.88 10.832a1 1 0 000-1.664L9.555 7.168z" clipRule="evenodd"></path></svg>
            Go Prime
          </a>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Login / Register</a>
        </nav>
      </div>

      {/* Sub-Navigation */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/option-chain.svg" alt="Option Chain" className="h-5 w-5 mr-1" />
              Option Chain
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/oi-charts.svg" alt="OI Charts" className="h-5 w-5 mr-1" />
              OI Charts
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/gft-nifty.svg" alt="GFT Nifty" className="h-5 w-5 mr-1" />
              GIFT Nifty
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/live-analytics.svg" alt="Live Analytics" className="h-5 w-5 mr-1" />
              Live Analytics
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/trending-oi.svg" alt="Trending OI" className="h-5 w-5 mr-1" />
              Trending OI
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/oi-timeline.svg" alt="OI Timeline" className="h-5 w-5 mr-1" />
              OI Timeline
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/futures.svg" alt="Futures" className="h-5 w-5 mr-1" />
              Futures
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/tv-chart.svg" alt="TV Chart" className="h-5 w-5 mr-1" />
              TV Chart
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/option-simulator.svg" alt="Option Simulator" className="h-5 w-5 mr-1" />
              Option Simulator
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              <img src="/icons/movers.svg" alt="Movers" className="h-5 w-5 mr-1" />
              Movers
            </a>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <a href="#" className="hover:text-blue-600">Contact Us</a>
            <span>|</span>
            <span>+91 94685 47504</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 