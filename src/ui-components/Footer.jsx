import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import NewsletterForm from './NewsletterForm.jsx';

const socialLinks = [
  { link: "#", icon: "/icons/facebook.svg" },
  { link: "#", icon: "/icons/twitter.svg" },
  { link: "#", icon: "/icons/youtube.svg" },
  { link: "#", icon: "/icons/linkedin.svg" },
  { link: "#", icon: "/icons/instagram.svg" },
  { link: "#", icon: "/icons/whatsapp.svg" },
];

const helpfulLinks = [
  { label: "About Us", pageUrl: "#" },
  { label: "Nifty Contributors", pageUrl: "#" },
  { label: "Privacy Policy", pageUrl: "#" },
  { label: "Opening Price Clues", pageUrl: "#" },
  { label: "Sensex PCR Ratio", pageUrl: "#" },
];

const optionChainLinks = [
  { label: "Contact Us", pageUrl: "#" },
  { label: "Nifty Open Interest", pageUrl: "#" },
  { label: "Option Backtesting", pageUrl: "#" },
  { label: "Option Trading Strategies", pageUrl: "#" },
];

const toolsLinks = [
  { label: "Write for Us", pageUrl: "#" },
  { label: "Terms & Conditions", pageUrl: "#" },
  { label: "BSE Sensex Today", pageUrl: "#" },
  { label: "Stock Market News", pageUrl: "#" },
];

const ipoLinks = [
  { label: "NiftyTrader News", pageUrl: "#" },
  { label: "India VIX", pageUrl: "#" },
  { label: "F&O Ban List", pageUrl: "#" },
  { label: "Refund & Cancellation Policy", pageUrl: "#" },
];

const goldPriceLinks = [
  { label: "Disclaimer", pageUrl: "#" },
  { label: "Advance Decline Ratio", pageUrl: "#" },
  { label: "Limitation of Liability", pageUrl: "#" },
  { label: "NSE Top Losers", pageUrl: "#" },
];

const silverPriceLinks = [
  { label: "GIFT Nifty", pageUrl: "#" },
  { label: "SGX Nifty", pageUrl: "#" },
  { label: "NSE Top Gainers", pageUrl: "#" },
  { label: "Nifty PCR Ratio", pageUrl: "#" },
];

const Footer = () => {
  return (
    <footer className="tw:bg-[#1C1F2E] tw:text-white tw:py-8 tw:px-4">
      <div className="tw:container tw:mx-auto">
        {/* Top Section: Newsletter and Social Links */}
        <div className="tw:flex tw:flex-col md:tw:flex-row tw:justify-between tw:items-center tw:mb-8">
          <div className="tw:text-center md:tw:text-left tw:mb-6 md:tw:mb-0">
            <div className="tw:flex tw:items-center tw:justify-center md:tw:justify-start tw:mb-4">
              <img src="/logo.svg" alt="NiftyTrader Logo" className="tw:h-10 tw:mr-3" />
              <span className="tw:text-2xl tw:font-bold">NiftyTrader</span>
            </div>
            <h6 className="tw:text-lg tw:font-semibold tw:mb-2">Connect with Us</h6>
            <div className="tw:flex tw:space-x-3 tw:justify-center md:tw:justify-start">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="tw:w-9 tw:h-9 tw:rounded-full tw:flex tw:items-center tw:justify-center tw:bg-gray-700 tw:hover:bg-blue-600">
                  <img src={item.icon} alt="social icon" className="tw:w-5 tw:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="tw:text-center md:tw:text-right">
            <h6 className="tw:text-lg tw:font-semibold tw:mb-2">SUBSCRIBE TO OUR NEWSLETTER</h6>
            <p className="tw:text-sm tw:text-gray-400 tw:mb-4">Sign up & receive the latest tips via email.</p>
            <div className="tw:flex tw:justify-center md:tw:justify-end">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="tw:bg-white tw:text-gray-900 tw:px-4 tw:py-2 tw:rounded-l-md tw:outline-none tw:w-full md:tw:w-auto"
              />
              <button className="tw:bg-blue-600 tw:hover:bg-blue-700 tw:text-white tw:font-bold tw:py-2 tw:px-4 tw:rounded-r-md">Subscribe</button>
            </div>
            <div className="tw:flex tw:justify-center md:tw:justify-end tw:mt-4 tw:space-x-3">
              <a href="#"><img src="/icons/google-play.svg" alt="Google Play" className="tw:h-10" /></a>
              <a href="#"><img src="/icons/app-store.svg" alt="App Store" className="tw:h-10" /></a>
            </div>
          </div>
        </div>

        <hr className="tw:border-gray-700 tw:my-8" />

        {/* Main Links Section */}
        <div className="tw:grid tw:grid-cols-2 md:tw:grid-cols-3 lg:tw:grid-cols-6 tw:gap-8 tw:mb-8">
          <div>
            <h6 className="tw:text-lg tw:font-semibold tw:mb-4 tw:border-b-2 tw:border-blue-600 tw:pb-2 tw:inline-block">Important Links</h6>
            <ul>
              {helpfulLinks.map((item, index) => (
                <li key={index} className="tw:mb-2">
                  <a href={item.pageUrl} className="tw:text-gray-400 tw:hover:text-blue-400 tw:text-sm tw:flex tw:items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="tw:mr-2 tw:text-xs" />{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="tw:text-lg tw:font-semibold tw:mb-4 tw:border-b-2 tw:border-blue-600 tw:pb-2 tw:inline-block">Option Chain</h6>
            <ul>
              {optionChainLinks.map((item, index) => (
                <li key={index} className="tw:mb-2">
                  <a href={item.pageUrl} className="tw:text-gray-400 tw:hover:text-blue-400 tw:text-sm tw:flex tw:items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="tw:mr-2 tw:text-xs" />{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="tw:text-lg tw:font-semibold tw:mb-4 tw:border-b-2 tw:border-blue-600 tw:pb-2 tw:inline-block">Tools</h6>
            <ul>
              {toolsLinks.map((item, index) => (
                <li key={index} className="tw:mb-2">
                  <a href={item.pageUrl} className="tw:text-gray-400 tw:hover:text-blue-400 tw:text-sm tw:flex tw:items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="tw:mr-2 tw:text-xs" />{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="tw:text-lg tw:font-semibold tw:mb-4 tw:border-b-2 tw:border-blue-600 tw:pb-2 tw:inline-block">IPO</h6>
            <ul>
              {ipoLinks.map((item, index) => (
                <li key={index} className="tw:mb-2">
                  <a href={item.pageUrl} className="tw:text-gray-400 tw:hover:text-blue-400 tw:text-sm tw:flex tw:items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="tw:mr-2 tw:text-xs" />{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="tw:text-lg tw:font-semibold tw:mb-4 tw:border-b-2 tw:border-blue-600 tw:pb-2 tw:inline-block">Gold Price</h6>
            <ul>
              {goldPriceLinks.map((item, index) => (
                <li key={index} className="tw:mb-2">
                  <a href={item.pageUrl} className="tw:text-gray-400 tw:hover:text-blue-400 tw:text-sm tw:flex tw:items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="tw:mr-2 tw:text-xs" />{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="tw:text-lg tw:font-semibold tw:mb-4 tw:border-b-2 tw:border-blue-600 tw:pb-2 tw:inline-block">Silver Price</h6>
            <ul>
              {silverPriceLinks.map((item, index) => (
                <li key={index} className="tw:mb-2">
                  <a href={item.pageUrl} className="tw:text-gray-400 tw:hover:text-blue-400 tw:text-sm tw:flex tw:items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="tw:mr-2 tw:text-xs" />{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="tw:border-gray-700 tw:my-8" />

        {/* Copyright Section */}
        <div className="tw:text-center tw:text-gray-400 tw:text-sm">
          <p>Copyright © <span className="tw:text-blue-400">NiftyTrader</span> | All rights reserved ver 9.2.93</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 