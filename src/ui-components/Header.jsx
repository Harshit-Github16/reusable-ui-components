import React from 'react';

const Header = () => {
  return (
    <header className="tw:w-full tw:bg-white tw:shadow-md">
      {/* Top Banner */}
      <div className="tw:bg-gradient-to-r tw:from-purple-800 tw:to-red-600 tw:text-white tw:text-center tw:py-2 tw:text-sm">
        <p>Go Prime at flat 18% discount on Annual Plans using code MONSOON25 <a href="#" className="tw:bg-blue-600 tw:hover:bg-blue-700 tw:text-white tw:font-bold tw:py-1 tw:px-3 tw:rounded tw:ml-2">Grab Now</a></p>
      </div>

      {/* Main Navigation */}
      <div className="tw:container tw:mx-auto tw:px-4 tw:py-3 tw:flex tw:items-center tw:justify-between">
        <div className="tw:flex tw:items-center">
          {/* Logo */}
          <a href="#" className="tw:flex tw:items-center tw:mr-6">
            <img src="/logo.svg" alt="NiftyTrader Logo" className="tw:h-8 tw:mr-2" />
            <span className="tw:text-xl tw:font-bold tw:text-gray-800">NiftyTrader</span>
          </a>

          {/* Search Bar */}
          <div className="tw:relative tw:flex tw:items-center tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-1 tw:bg-gray-100">
            <svg className="tw:w-5 tw:h-5 tw:text-gray-500 tw:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input
              type="text"
              placeholder="Search stocks, IPOs, pages"
              className="tw:bg-transparent tw:outline-none tw:text-gray-800 tw:text-sm tw:w-64"
            />
          </div>
        </div>

        {/* Navigation Links (Right) */}
        <nav className="tw:flex tw:items-center tw:space-x-6">
          <div className="tw:relative tw:group">
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              Analytics
              <svg className="tw:w-4 tw:h-4 tw:ml-1 tw:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <div className="tw:relative tw:group">
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              Backtesting
              <svg className="tw:w-4 tw:h-4 tw:ml-1 tw:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <div className="tw:relative tw:group">
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              Options
              <svg className="tw:w-4 tw:h-4 tw:ml-1 tw:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <div className="tw:relative tw:group">
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              Resources
              <svg className="tw:w-4 tw:h-4 tw:ml-1 tw:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* Dropdown would go here */}
          </div>
          <a href="#" className="tw:bg-yellow-500 tw:text-white tw:font-bold tw:py-2 tw:px-4 tw:rounded-md tw:flex tw:items-center">
            <svg className="tw:w-5 tw:h-5 tw:mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L14.88 10.832a1 1 0 000-1.664L9.555 7.168z" clipRule="evenodd"></path></svg>
            Go Prime
          </a>
          <a href="#" className="tw:bg-blue-500 tw:hover:bg-blue-600 tw:text-white tw:font-bold tw:py-2 tw:px-4 tw:rounded-md">Login / Register</a>
        </nav>
      </div>

      {/* Sub-Navigation */}
      <div className="tw:bg-gray-50 tw:border-t tw:border-gray-200">
        <div className="tw:container tw:mx-auto tw:px-4 tw:py-2 tw:flex tw:items-center tw:justify-between tw:text-sm">
          <div className="tw:flex tw:space-x-6">
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/option-chain.svg" alt="Option Chain" className="tw:h-5 tw:w-5 tw:mr-1" />
              Option Chain
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/oi-charts.svg" alt="OI Charts" className="tw:h-5 tw:w-5 tw:mr-1" />
              OI Charts
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/gft-nifty.svg" alt="GFT Nifty" className="tw:h-5 tw:w-5 tw:mr-1" />
              GIFT Nifty
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/live-analytics.svg" alt="Live Analytics" className="tw:h-5 tw:w-5 tw:mr-1" />
              Live Analytics
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/trending-oi.svg" alt="Trending OI" className="tw:h-5 tw:w-5 tw:mr-1" />
              Trending OI
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/oi-timeline.svg" alt="OI Timeline" className="tw:h-5 tw:w-5 tw:mr-1" />
              OI Timeline
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/futures.svg" alt="Futures" className="tw:h-5 tw:w-5 tw:mr-1" />
              Futures
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/tv-chart.svg" alt="TV Chart" className="tw:h-5 tw:w-5 tw:mr-1" />
              TV Chart
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/option-simulator.svg" alt="Option Simulator" className="tw:h-5 tw:w-5 tw:mr-1" />
              Option Simulator
            </a>
            <a href="#" className="tw:text-gray-700 tw:hover:text-blue-600 tw:flex tw:items-center">
              <img src="/icons/movers.svg" alt="Movers" className="tw:h-5 tw:w-5 tw:mr-1" />
              Movers
            </a>
          </div>
          <div className="tw:flex tw:items-center tw:space-x-4 tw:text-gray-600">
            <a href="#" className="tw:hover:text-blue-600">Contact Us</a>
            <span>|</span>
            <span>+91 94685 47504</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 