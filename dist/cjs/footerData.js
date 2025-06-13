'use strict';

/**
 * @typedef {Object} SocialLink
 * @property {string} link - The social media URL
 * @property {string} icon - The icon path/component
 */

/**
 * @typedef {Object} FooterLink
 * @property {string} label - The display text for the link
 * @property {string} pageUrl - The URL the link points to
 */

/** @type {SocialLink[]} */
const socialLinks = [{
  link: 'https://www.facebook.com/niftytraderin',
  icon: ''
}, {
  link: 'https://twitter.com/niftytraderin',
  icon: ''
}, {
  link: 'https://www.youtube.com/@NiftyTraderIndia',
  icon: ''
}, {
  link: 'https://www.linkedin.com/company/niftytrader',
  icon: ''
}, {
  link: 'https://www.instagram.com/niftytraderindia',
  icon: ''
}, {
  link: 'https://www.whatsapp.com/channel/0029VaiRoySATRShrjVYRu2O',
  icon: ''
}];

/** @type {FooterLink[]} */
const helpfulLinks = [{
  label: 'About Us',
  pageUrl: 'https://www.niftytrader.in/about-us'
}, {
  label: 'Blog',
  pageUrl: 'https://www.niftytrader.in/content/'
}, {
  label: 'News',
  pageUrl: 'https://www.niftytrader.in/content/news/'
}, {
  label: 'Terms & Conditions',
  pageUrl: 'https://www.niftytrader.in/terms-and-conditions'
}, {
  label: 'Privacy Policy',
  pageUrl: 'https://www.niftytrader.in/privacy-policy'
}, {
  label: 'Disclaimers',
  pageUrl: 'https://www.niftytrader.in/disclaimers'
}, {
  label: 'Limitation Of Liability',
  pageUrl: 'https://www.niftytrader.in/limitation-of-liability'
}, {
  label: 'Refund & Cancellation Policy',
  pageUrl: 'https://www.niftytrader.in/refund-and-cancellation-policy'
}, {
  label: 'Contact Us',
  pageUrl: 'https://www.niftytrader.in/contact-us'
}, {
  label: 'Write for us',
  pageUrl: 'https://www.niftytrader.in/content/write-for-us/'
}];

/** @type {FooterLink[]} */
const otherLinks = [{
  label: 'Broker Directory',
  pageUrl: 'https://www.niftytrader.in/broker-directory'
}, {
  label: 'Opening Price Clues',
  pageUrl: 'https://www.niftytrader.in/opening-price-clues'
}, {
  label: 'Stock Screener',
  pageUrl: 'https://www.niftytrader.in/advanced-stock-screener'
}, {
  label: 'Stock Options Chart',
  pageUrl: 'https://www.niftytrader.in/stock-options-chart/sbin'
}, {
  label: 'Gift Nifty',
  pageUrl: 'https://www.niftytrader.in/gift-nifty-live'
}, {
  label: 'IPO',
  pageUrl: 'https://www.niftytrader.in/ipo'
}];

/** @type {FooterLink[]} */
const popularLinks = [{
  label: 'NSE Option Chain',
  pageUrl: 'https://www.niftytrader.in/nse-option-chain/nifty'
}, {
  label: 'Commodity Option Chain',
  pageUrl: 'https://www.niftytrader.in/commodities-option-chain-nse'
}, {
  label: 'India VIX',
  pageUrl: 'https://www.niftytrader.in/india-vix'
}, {
  label: 'Trending OI',
  pageUrl: 'https://www.niftytrader.in/nifty-trending-oi'
}, {
  label: 'Option Strategy Backtesting',
  pageUrl: 'https://www.niftytrader.in/options-trading-backtesting'
}];

exports.helpfulLinks = helpfulLinks;
exports.otherLinks = otherLinks;
exports.popularLinks = popularLinks;
exports.socialLinks = socialLinks;
//# sourceMappingURL=footerData.js.map
