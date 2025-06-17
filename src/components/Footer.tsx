'use client'
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="tw-bg-[#1a0f37] tw-text-white tw-py-16 font-sans">
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between">
        {/* Left Section: Logo, Social Icons */}
        <div className="flex flex-col items-start w-full md:w-1/3 lg:w-1/4 mb-10 md:mb-0">
          <div className="flex items-center mb-4">
            <img src="/next.svg" alt="NiftyTrader Logo" className="h-10 mr-2" />
            <p className="text-sm text-gray-400">Redefining the way you trade!</p>
          </div>
          <h4 className="text-lg mb-4">Connect With Us</h4>
          <div className="flex space-x-3 mb-8">
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors">
              <img src="/file.svg" alt="Facebook" className="w-[18px] h-[18px]" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors">
              <img src="/file.svg" alt="Twitter" className="w-[18px] h-[18px]" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors">
              <img src="/file.svg" alt="LinkedIn" className="w-[18px] h-[18px]" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors">
              <img src="/file.svg" alt="YouTube" className="w-[18px] h-[18px]" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors">
              <img src="/file.svg" alt="Instagram" className="w-[18px] h-[18px]" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors">
              <img src="/file.svg" alt="WhatsApp" className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        {/* Right Section: Newsletter, App Downloads */}
        <div className="bg-[#2a1f47] p-8 rounded-lg flex flex-col items-end text-right w-full md:w-2/3 lg:w-2/5 mb-10 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-sm text-gray-400 mb-6">Sign up & receive the latest tips via email.</p>
          <div className="flex w-full max-w-sm mb-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow py-3 px-4 border border-[#555] rounded-l-md bg-[#3a2f57] text-white outline-none placeholder-gray-500"
            />
            <button className="bg-[#007bff] text-white py-3 px-6 rounded-r-md cursor-pointer hover:bg-[#0056b3] transition-colors">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#"><img src="/next.svg" alt="Google Play" className="h-10" /></a>
            <a href="#"><img src="/next.svg" alt="App Store" className="h-10" /></a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-8 mt-8 pt-8 border-t border-[#333] flex flex-wrap justify-between">
        {/* Important Links */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-6">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#007bff] inline-block">Important Links</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">About Us</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Nifty Contributors</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Privacy Policy</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Opening Price Clues</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Sensex PCR Ratio</a></li>
          </ul>
        </div>
        {/* Option Chain */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-6">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#007bff] inline-block">Option Chain</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Contact Us</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Nifty Open Interest</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Option Backtesting</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Option Trading Strategies</a></li>
          </ul>
        </div>
        {/* Tools */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-6">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#007bff] inline-block">Tools</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Write for Us</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Terms & Conditions</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">BSE Sensex Today</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Stock Market News</a></li>
          </ul>
        </div>
        {/* IPO */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-6">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#007bff] inline-block">IPO</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">NiftyTrader News</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">India VIX</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">F&O Ban List</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Refund & Cancellation Policy</a></li>
          </ul>
        </div>
        {/* Gold Price */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-6">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#007bff] inline-block">Gold Price</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Disclaimer</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Limitation of Liability</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">NSE Top Losers</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">NSE Top Gainers</a></li>
          </ul>
        </div>
        {/* Silver Price */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-6">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#007bff] inline-block">Silver Price</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">GIFT Nifty</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">SGX Nifty</a></li>
            <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]">Nifty PCR Ratio</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-8 mt-8 pt-6 border-t border-[#333] text-center text-gray-400 text-sm">
        <p>Copyright © <span className="text-[#007bff] font-bold">NiftyTrader</span> | All rights reserved ver 92.93</p>
      </div>
    </footer>
  );
};

export default Footer; 