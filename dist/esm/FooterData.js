import FacebookIcon from './public/images/facebook.svg.js';
import TwitterIcon from './public/images/twitter.svg.js';
import YoutubeIcon from './public/images/youtube.svg.js';
import LinkedinIcon from './public/images/linkedin.svg.js';
import InstagramIcon from './public/images/instagram.svg.js';
import WhatsappIcon from './public/images/whatsapp_icon.svg.js';

const socialLinks = [{
  link: 'https://www.facebook.com/niftytraderin',
  icon: FacebookIcon
}, {
  link: 'https://twitter.com/niftytraderin',
  icon: TwitterIcon
}, {
  link: 'https://www.youtube.com/@NiftyTraderIndia',
  icon: YoutubeIcon
}, {
  link: 'https://www.linkedin.com/company/niftytrader',
  icon: LinkedinIcon
}, {
  link: 'https://www.instagram.com/niftytraderindia',
  icon: InstagramIcon
},
// {
//   link: 'https://t.me/NiftyTraderIn',
//   icon: TelegramIcon,
// },
{
  link: 'https://www.whatsapp.com/channel/0029VaiRoySATRShrjVYRu2O',
  icon: WhatsappIcon
}];
const navItems = [{
  label: "Important Links",
  links: [{
    name: "About Us",
    url: "/about-us"
  }, {
    name: "Contact Us",
    url: "/contact-us"
  }, {
    name: "Write for Us",
    url: "/content/write-for-us"
  }, {
    name: "Blog",
    url: "/content"
  }, {
    name: "Disclaimer",
    url: "/disclaimers"
  }, {
    name: "GIFT Nifty",
    url: "/gift-nifty-live"
  }, {
    name: "Nifty Contributors",
    url: "/nifty50-contributors"
  }, {
    name: "Nifty Open Interest",
    url: "/live-nifty-open-interest"
  }, {
    name: "Terms & Conditions",
    url: "/terms-and-conditions"
  }, {
    name: "India VIX",
    url: "/india-vix"
  }, {
    name: "Advance Decline Ratio",
    url: "/advance-decline-ratio"
  }, {
    name: "SGX Nifty",
    url: "/sgx-nifty-live"
  }, {
    name: "Privacy Policy",
    url: "/privacy-policy"
  }, {
    name: "Option Backtesting",
    url: "/options-trading-backtesting"
  }, {
    name: "BSE Sensex Today",
    url: "/sensex-today"
  }, {
    name: "F&O Ban List",
    url: "/ban-list"
  }, {
    name: "Limitation of Liability",
    url: "/limitation-of-liability"
  }, {
    name: "NSE Top Gainers",
    url: "/nse-top-gainers"
  }, {
    name: "Opening Price Clues",
    url: "/opening-price-clues"
  }, {
    name: "Option Trading Strategies",
    url: "/option-strategies"
  }, {
    name: "Stock Market News",
    url: "/content/stock-market-news/"
  }, {
    name: "Refund & Cancellation Policy",
    url: "/refund-and-cancellation-policy"
  }, {
    name: "NSE Top Losers",
    url: "/nse-top-losers"
  }, {
    name: "Nifty PCR Ratio",
    url: "/nifty-put-call-ratio"
  }, {
    name: "Sensex PCR Ratio",
    url: "/sensex-put-call-ratio"
  }]
}, {
  label: "Option Chain",
  links: [{
    name: "NSE Option Chain",
    url: "/nse-option-chain"
  }, {
    name: "BSE Option Chain",
    url: "/bse-option-chain"
  }, {
    name: "Copper Option Chain",
    url: "/commodities-option-chain-nse/copper"
  }, {
    name: "Natural Gas Mini Option Chain",
    url: "/commodities-option-chain-nse/natgasmini"
  }, {
    name: "Nifty Option Chain",
    url: "/nse-option-chain/nifty"
  }, {
    name: "BSE Sensex Option Chain",
    url: "/bse-option-chain/sensex"
  }, {
    name: "Crude Oil Option Chain",
    url: "/commodities-option-chain-nse/crudeoil"
  }, {
    name: "Silver Option Chain",
    url: "/commodities-option-chain-nse/silver"
  }, {
    name: "Bank Nifty Option Chain",
    url: "/nse-option-chain/banknifty"
  }, {
    name: "BSE Bankex Option Chain",
    url: "/bse-option-chain/bankex"
  }, {
    name: "Crude Oil Mini Option Chain",
    url: "/commodities-option-chain-nse/crudeoilm"
  }, {
    name: "Silver Mini Option Chain",
    url: "/commodities-option-chain-nse/silverm"
  }, {
    name: "Fin Nifty Option Chain",
    url: "/nse-option-chain/finnifty"
  }, {
    name: "Commodity Option Chain",
    url: "/commodities-option-chain-nse"
  }, {
    name: "Gold Mini Option Chain",
    url: "/commodities-option-chain-nse/goldm"
  }, {
    name: "Zinc Option Chain",
    url: "/commodities-option-chain-nse/zinc"
  }, {
    name: "Midcap Nifty Option Chain",
    url: "/nse-option-chain/midcpnifty"
  }, {
    name: "NSE Gold Option Chain",
    url: "/commodities-option-chain-nse/gold"
  }, {
    name: "Natural Gas Option Chain",
    url: "/commodities-option-chain-nse/naturalgas"
  }]
}, {
  label: "Tools",
  links: [{
    name: "LTP Calculator",
    url: "/ltp-calculator"
  }, {
    name: "Option Pricing Calculator",
    url: "/option-pricing-calculator"
  }, {
    name: "Stock Screener",
    url: "/advanced-stock-screener"
  }, {
    name: "Sensex LTP Calculator",
    url: "/ltp-calculator/sensex"
  },
  // { name: "IPO Performance Tracker", url: "/ipo" },
  {
    name: "Nifty LTP Calculator",
    url: "/ltp-calculator/nifty"
  }, {
    name: "Option Strategy Builder",
    url: "/option-strategy-builder"
  }, {
    name: "Option Screener",
    url: "/options-screener"
  }, {
    name: "Midcap Nifty LTP Calculator",
    url: "/ltp-calculator/midcpnifty"
  }, {
    name: "FD Calculator",
    url: "/fd-calculator"
  }, {
    name: "Bank Nifty LTP Calculator",
    url: "/ltp-calculator/banknifty"
  }, {
    name: "Pivot Point Calculator",
    url: "/pivot-calculator"
  }, {
    name: "Option Simulator",
    url: "/options-simulator"
  }, {
    name: "Fin Nifty LTP Calculator",
    url: "/ltp-calculator/finnifty"
  }, {
    name: "Elliott Wave Calculator",
    url: "/elliott-wave-fibonacci-cluster-calculator"
  }, {
    name: "IPO Calculator",
    url: "/ipo"
  }]
}, {
  label: "IPO",
  links: [{
    name: "IPOs in India",
    url: "/ipo"
  }, {
    name: "SME IPOs",
    url: "/ipo/sme"
  }, {
    name: "Upcoming Mainboard IPOs",
    url: "/ipo/main-board/upcoming"
  }, {
    name: "New Listed IPOs",
    url: "/ipo/new-listed"
  },
  // { name: "IPO Calculator", url: "/ipo" },
  {
    name: "IPO Dashboard",
    url: "/ipo/dashboard"
  }, {
    name: "Current SME IPOs",
    url: "/ipo/sme/current"
  }, {
    name: "IPO Calendar",
    url: "/ipo/calendar"
  }, {
    name: "Current Mainboard IPOs",
    url: "/ipo/main-board/current"
  },
  // { name: "SME IPO Performance", url: "/ipo" },
  {
    name: "Upcoming IPOs",
    url: "/ipo/upcoming"
  }, {
    name: "Upcoming SME IPOs",
    url: "/ipo/sme/upcoming"
  }, {
    name: "Closed IPOs",
    url: "/ipo/closed"
  },
  // { name: "IPO GMP", url: "/ipo" },
  // { name: "Mainboard IPO Performance", url: "/ipo" },
  {
    name: "Current IPOs",
    url: "/ipo/ongoing"
  }, {
    name: "Mainboard IPOs",
    url: "/ipo/main-board"
  }
  // { name: "IPO Performance Tracker", url: "/ipo" }
  ]
}, {
  label: "Gold Price",
  links: [{
    name: "Gold Price Today in India",
    url: "/gold-price-today"
  }, {
    name: "Gold Price in Bhubaneshwar",
    url: "/gold-price-today/bhubaneswar"
  }, {
    name: "Gold Price in Faridabad",
    url: "/gold-price-today/faridabad"
  }, {
    name: "Gold Price in Kerala",
    url: "/gold-price-today/kerala"
  }, {
    name: "Gold Price in Mangalore",
    url: "/gold-price-today/mangalore"
  }, {
    name: "Gold Price in Ahmedabad",
    url: "/gold-price-today/ahmedabad"
  }, {
    name: "Gold Price in Chandigarh",
    url: "/gold-price-today/chandigarh"
  }, {
    name: "Gold Price in Gurgaon",
    url: "/gold-price-today/gurgaon"
  }, {
    name: "Gold Price in Kochi",
    url: "/gold-price-today/kochi"
  }, {
    name: "Gold Price in Meerut",
    url: "/gold-price-today/meerut"
  }, {
    name: "Gold Price in Amritsar",
    url: "/gold-price-today/amritsar"
  }, {
    name: "Gold Price in Chennai",
    url: "/gold-price-today/chennai"
  }, {
    name: "Gold Price in Hyderabad",
    url: "/gold-price-today/hyderabad"
  }, {
    name: "Gold Price in Kolkata",
    url: "/gold-price-today/kolkata"
  }, {
    name: "Gold Price in Mumbai",
    url: "/gold-price-today/mumbai"
  }, {
    name: "Gold Price in Bangalore",
    url: "/gold-price-today/bangalore"
  }, {
    name: "Gold Price in Coimbatore",
    url: "/gold-price-today/coimbatore"
  }, {
    name: "Gold Price in Jaipur",
    url: "/gold-price-today/jaipur"
  }, {
    name: "Gold Price in Lucknow",
    url: "/gold-price-today/lucknow"
  }, {
    name: "Gold Price in Mysore",
    url: "/gold-price-today/mysore"
  }, {
    name: "Gold Price in Bhopal",
    url: "/gold-price-today/bhopal"
  }, {
    name: "Gold Price in Delhi",
    url: "/gold-price-today/delhi"
  }, {
    name: "Gold Price in Kanpur",
    url: "/gold-price-today/kanpur"
  }, {
    name: "Gold Price in Madurai",
    url: "/gold-price-today/madurai"
  }, {
    name: "Gold Price in Nagpur",
    url: "/gold-price-today/nagpur"
  }, {
    name: "Gold Price in Nashik",
    url: "/gold-price-today/nashik"
  }, {
    name: "Gold Price in Patna",
    url: "/gold-price-today/patna"
  }, {
    name: "Gold Price in Pune",
    url: "/gold-price-today/pune"
  }, {
    name: "Gold Price in Surat",
    url: "/gold-price-today/surat"
  }, {
    name: "Gold Price in Vadodara",
    url: "/gold-price-today/vadodara"
  }]
}, {
  label: "Silver Price",
  links: [{
    name: "Silver Price Today in India",
    url: "/silver-rate-today"
  }, {
    name: "Silver Price in Coimbatore",
    url: "/silver-rate-today/coimbatore"
  }, {
    name: "Silver Price in Madurai",
    url: "/silver-rate-today/madurai"
  }, {
    name: "Silver Price in Patna",
    url: "/silver-rate-today/patna"
  }, {
    name: "Silver Price in Chennai",
    url: "/silver-rate-today/chennai"
  }, {
    name: "Silver Price in Ahmedabad",
    url: "/silver-rate-today/ahmedabad"
  }, {
    name: "Silver Price in Delhi",
    url: "/silver-rate-today/delhi"
  }, {
    name: "Silver Price in Mangalore",
    url: "/silver-rate-today/mangalore"
  }, {
    name: "Silver Price in Pune",
    url: "/silver-rate-today/pune"
  }, {
    name: "Silver Price in Lucknow",
    url: "/silver-rate-today/lucknow"
  },
  // { name: "Silver Price in Bhubaneshwar", url: "/silver-rate-today/bhubaneshwar" },
  {
    name: "Silver Price in Hyderabad",
    url: "/silver-rate-today/hyderabad"
  }, {
    name: "Silver Price in Mumbai",
    url: "/silver-rate-today/mumbai"
  }, {
    name: "Silver Price in Surat",
    url: "/silver-rate-today/surat"
  }, {
    name: "Silver Price in Nashik",
    url: "/silver-rate-today/nashik"
  }, {
    name: "Silver Price in Bangalore",
    url: "/silver-rate-today/bangalore"
  }, {
    name: "Silver Price in Jaipur",
    url: "/silver-rate-today/jaipur"
  }, {
    name: "Silver Price in Mysore",
    url: "/silver-rate-today/mysore"
  }, {
    name: "Silver Price in Vadodara",
    url: "/silver-rate-today/vadodara"
  }, {
    name: "Silver Price in Visakhapatnam",
    url: "/silver-rate-today/visakhapatnam"
  }, {
    name: "Silver Price in Chandigarh",
    url: "/silver-rate-today/chandigarh"
  }, {
    name: "Silver Price in Kerala",
    url: "/silver-rate-today/kerala"
  }, {
    name: "Silver Price in Nagpur",
    url: "/silver-rate-today/nagpur"
  },
  // { name: "Silver Price in Vijaywada", url: "/silver-rate-today/vijaywada" },
  {
    name: "Silver Price in Jodhpur",
    url: "/silver-rate-today/jodhpur"
  }]
}];

export { navItems, socialLinks };
//# sourceMappingURL=FooterData.js.map
