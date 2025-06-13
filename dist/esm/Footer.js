import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const socialLinks = [{
  link: "#",
  icon: "/icons/facebook.svg"
}, {
  link: "#",
  icon: "/icons/twitter.svg"
}, {
  link: "#",
  icon: "/icons/youtube.svg"
}, {
  link: "#",
  icon: "/icons/linkedin.svg"
}, {
  link: "#",
  icon: "/icons/instagram.svg"
}, {
  link: "#",
  icon: "/icons/whatsapp.svg"
}];
const helpfulLinks = [{
  label: "About Us",
  pageUrl: "#"
}, {
  label: "Nifty Contributors",
  pageUrl: "#"
}, {
  label: "Privacy Policy",
  pageUrl: "#"
}, {
  label: "Opening Price Clues",
  pageUrl: "#"
}, {
  label: "Sensex PCR Ratio",
  pageUrl: "#"
}];
const optionChainLinks = [{
  label: "Contact Us",
  pageUrl: "#"
}, {
  label: "Nifty Open Interest",
  pageUrl: "#"
}, {
  label: "Option Backtesting",
  pageUrl: "#"
}, {
  label: "Option Trading Strategies",
  pageUrl: "#"
}];
const toolsLinks = [{
  label: "Write for Us",
  pageUrl: "#"
}, {
  label: "Terms & Conditions",
  pageUrl: "#"
}, {
  label: "BSE Sensex Today",
  pageUrl: "#"
}, {
  label: "Stock Market News",
  pageUrl: "#"
}];
const ipoLinks = [{
  label: "NiftyTrader News",
  pageUrl: "#"
}, {
  label: "India VIX",
  pageUrl: "#"
}, {
  label: "F&O Ban List",
  pageUrl: "#"
}, {
  label: "Refund & Cancellation Policy",
  pageUrl: "#"
}];
const goldPriceLinks = [{
  label: "Disclaimer",
  pageUrl: "#"
}, {
  label: "Advance Decline Ratio",
  pageUrl: "#"
}, {
  label: "Limitation of Liability",
  pageUrl: "#"
}, {
  label: "NSE Top Losers",
  pageUrl: "#"
}];
const silverPriceLinks = [{
  label: "GIFT Nifty",
  pageUrl: "#"
}, {
  label: "SGX Nifty",
  pageUrl: "#"
}, {
  label: "NSE Top Gainers",
  pageUrl: "#"
}, {
  label: "Nifty PCR Ratio",
  pageUrl: "#"
}];
const Footer = () => {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-[#1C1F2E] text-white py-8 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-center mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center md:text-left mb-6 md:mb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center md:justify-start mb-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/logo.svg",
    alt: "NiftyTrader Logo",
    className: "h-10 mr-3"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-bold"
  }, "NiftyTrader")), /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-2"
  }, "Connect with Us"), /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-3 justify-center md:justify-start"
  }, socialLinks.map((item, index) => /*#__PURE__*/React.createElement("a", {
    key: index,
    href: item.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-9 h-9 rounded-full flex items-center justify-center bg-gray-700 hover:bg-blue-600"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.icon,
    alt: "social icon",
    className: "w-5 h-5"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "text-center md:text-right"
  }, /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-2"
  }, "SUBSCRIBE TO OUR NEWSLETTER"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mb-4"
  }, "Sign up & receive the latest tips via email."), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center md:justify-end"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Enter Email Address",
    className: "bg-white text-gray-900 px-4 py-2 rounded-l-md outline-none w-full md:w-auto"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
  }, "Subscribe")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center md:justify-end mt-4 space-x-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/icons/google-play.svg",
    alt: "Google Play",
    className: "h-10"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/icons/app-store.svg",
    alt: "App Store",
    className: "h-10"
  }))))), /*#__PURE__*/React.createElement("hr", {
    className: "border-gray-700 my-8"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-4 border-b-2 border-blue-600 pb-2 inline-block"
  }, "Important Links"), /*#__PURE__*/React.createElement("ul", null, helpfulLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "mb-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-gray-400 hover:text-blue-400 text-sm flex items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    className: "mr-2 text-xs"
  }), item.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-4 border-b-2 border-blue-600 pb-2 inline-block"
  }, "Option Chain"), /*#__PURE__*/React.createElement("ul", null, optionChainLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "mb-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-gray-400 hover:text-blue-400 text-sm flex items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    className: "mr-2 text-xs"
  }), item.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-4 border-b-2 border-blue-600 pb-2 inline-block"
  }, "Tools"), /*#__PURE__*/React.createElement("ul", null, toolsLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "mb-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-gray-400 hover:text-blue-400 text-sm flex items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    className: "mr-2 text-xs"
  }), item.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-4 border-b-2 border-blue-600 pb-2 inline-block"
  }, "IPO"), /*#__PURE__*/React.createElement("ul", null, ipoLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "mb-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-gray-400 hover:text-blue-400 text-sm flex items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    className: "mr-2 text-xs"
  }), item.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-4 border-b-2 border-blue-600 pb-2 inline-block"
  }, "Gold Price"), /*#__PURE__*/React.createElement("ul", null, goldPriceLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "mb-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-gray-400 hover:text-blue-400 text-sm flex items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    className: "mr-2 text-xs"
  }), item.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
    className: "text-lg font-semibold mb-4 border-b-2 border-blue-600 pb-2 inline-block"
  }, "Silver Price"), /*#__PURE__*/React.createElement("ul", null, silverPriceLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "mb-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-gray-400 hover:text-blue-400 text-sm flex items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    className: "mr-2 text-xs"
  }), item.label)))))), /*#__PURE__*/React.createElement("hr", {
    className: "border-gray-700 my-8"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-gray-400 text-sm"
  }, /*#__PURE__*/React.createElement("p", null, "Copyright \xA9 ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-400"
  }, "NiftyTrader"), " | All rights reserved ver 9.2.93"))));
};

export { Footer as default };
//# sourceMappingURL=Footer.js.map
