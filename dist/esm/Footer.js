import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { helpfulLinks, otherLinks, popularLinks, socialLinks } from './footerData.js';
import NewsletterForm from './NewsletterForm.js';

// JSDoc comments (optional) for prop types
/**
 * @typedef {Object} FooterLink
 * @property {string} label – The label of the link.
 * @property {string} pageUrl – The URL of the link.
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} link – The social link URL.
 * @property {string} icon – (Optional) The icon (e.g. an empty string or an image src).
 */

/**
 * @typedef {Object} FooterProps
 * @property {FooterLink[]} [helpfulLinks] – Array of helpful links (defaults to imported helpfulLinks).
 * @property {FooterLink[]} [otherLinks] – Array of other links (defaults to imported otherLinks).
 * @property {FooterLink[]} [popularLinks] – Array of popular links (defaults to imported popularLinks).
 * @property {SocialLink[]} [socialLinks] – Array of social links (defaults to imported socialLinks).
 * @property {Object} [appStoreLinks] – (Optional) Object containing playStore and appStore URLs.
 * @property {Object} [newsletter] – (Optional) Object for newsletter subscription (e.g. { title, description, onSubmit }).
 * @property {Object} [copyright] – (Optional) Object for copyright info (e.g. { text, link, linkText, version }).
 * @property {string} [className] – (Optional) Additional CSS class.
 */

const Footer = props => {
  const {
    helpfulLinks: propHelpfulLinks = helpfulLinks,
    otherLinks: propOtherLinks = otherLinks,
    popularLinks: propPopularLinks = popularLinks,
    socialLinks: propSocialLinks = socialLinks,
    appStoreLinks,
    newsletter,
    copyright,
    className = ''
  } = props;
  return /*#__PURE__*/React.createElement("footer", {
    className: `bg-gray-900 text-white py-8 px-4 ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-auto sm:w-auto w-6/12 sm:order-1 order-3 mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, "HELPFUL LINKS"), /*#__PURE__*/React.createElement("ul", null, propHelpfulLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    width: 10,
    className: "text-[10px] me-2"
  }), /*#__PURE__*/React.createElement("span", null, item.label)))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-auto sm:w-auto w-6/12 sm:order-2 order-4 mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, "OTHER LINKS"), /*#__PURE__*/React.createElement("ul", null, propOtherLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronRight,
    width: 10,
    className: "text-[10px] me-2"
  }), /*#__PURE__*/React.createElement("span", null, item.label)))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-auto sm:order-3 order-2 w-full sm:w-auto mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, "POPULAR LINKS"), /*#__PURE__*/React.createElement("ul", {
    className: "sm:block flex justify-between"
  }, propPopularLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("a", {
    href: item.pageUrl,
    className: "text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
  }, /*#__PURE__*/React.createElement("span", null, item.label)))))), newsletter && /*#__PURE__*/React.createElement(NewsletterForm, newsletter), appStoreLinks && /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center lg:justify-start justify-center"
  }, appStoreLinks.playStore && /*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.playStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/play-store.png",
    alt: "Play Store",
    className: "mr-3 cursor-pointer h-[45px]"
  })), appStoreLinks.appStore && /*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.appStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/app-store.png",
    alt: "App Store",
    className: "mr-3 cursor-pointer h-[45px]"
  })))), appStoreLinks && /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden flex items-center my-5 justify-center"
  }, appStoreLinks.playStore && /*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.playStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/play-store.png",
    alt: "Play Store",
    className: "mr-3 cursor-pointer h-[45px]"
  })), appStoreLinks.appStore && /*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.appStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/app-store.png",
    alt: "App Store",
    className: "mr-3 cursor-pointer h-[45px]"
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "flex justify-center gap-4 mt-5 md:mt-0"
  }, propSocialLinks.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: item.link,
    rel: "noopener noreferrer",
    className: `flex items-center justify-center w-9 h-9 rounded-full ${index === 0 ? 'bg-[#485a96]' : index === 1 ? 'bg-[#333]' : index === 2 ? 'bg-[#dc1716]' : index === 3 ? 'bg-[#0077b5]' : index === 4 ? 'bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]' : index === 5 ? 'bg-[#2aa1d4]' : 'bg-black'}`
  }, /*#__PURE__*/React.createElement("img", {
    src: item.icon,
    className: "transition duration-300 ease-in-out hover:rotate-y-180 hover:scale-x-[-1] w-5 h-5",
    alt: "social icon"
  }))))), copyright && /*#__PURE__*/React.createElement("div", {
    className: "mt-5 text-center text-gray-400 text-xs"
  }, copyright.text, copyright.link && copyright.linkText && /*#__PURE__*/React.createElement("a", {
    href: copyright.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "underline ml-1"
  }, copyright.linkText), copyright.version && /*#__PURE__*/React.createElement("span", {
    className: "ml-1"
  }, "(v", copyright.version, ")"))));
};

export { Footer as default };
//# sourceMappingURL=Footer.js.map
