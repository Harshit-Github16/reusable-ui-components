'use strict';

var React = require('react');

var Footer = function (_a) {
  var _b = _a.sections,
    sections = _b === void 0 ? [{
      title: "Important Links",
      links: [{
        label: "About Us",
        href: "#"
      }, {
        label: "Privacy Policy",
        href: "#"
      }, {
        label: "Terms & Conditions",
        href: "#"
      }, {
        label: "Contact Us",
        href: "#"
      }]
    }, {
      title: "Services",
      links: [{
        label: "Our Services",
        href: "#"
      }, {
        label: "Pricing",
        href: "#"
      }, {
        label: "Support",
        href: "#"
      }, {
        label: "FAQ",
        href: "#"
      }]
    }, {
      title: "Resources",
      links: [{
        label: "Blog",
        href: "#"
      }, {
        label: "Documentation",
        href: "#"
      }, {
        label: "Tutorials",
        href: "#"
      }, {
        label: "Community",
        href: "#"
      }]
    }] : _b,
    _c = _a.logoText,
    logoText = _c === void 0 ? "Your Logo" : _c,
    _d = _a.logoHref,
    logoHref = _d === void 0 ? "/" : _d,
    _e = _a.tagline,
    tagline = _e === void 0 ? "Building amazing experiences" : _e,
    _f = _a.copyrightText,
    copyrightText = _f === void 0 ? "Copyright © 2024 | All rights reserved" : _f,
    onLinkClick = _a.onLinkClick;
  var handleLinkClick = function (href, e) {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick(href);
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "tw-bg-[#1a0f37] text-white py-16 font-sans"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-8 flex flex-wrap justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-start w-full md:w-1/3 lg:w-1/4 mb-10 md:mb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center mb-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: logoHref,
    className: "text-2xl font-bold mr-2"
  }, logoText)), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mb-4"
  }, tagline), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg mb-4"
  }, "Connect With Us"), /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-3 mb-8"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "f")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "t")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "in")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center justify-center w-8 h-8 rounded-full bg-[#333] text-white hover:bg-[#555] transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "yt")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#2a1f47] p-8 rounded-lg flex flex-col items-end text-right w-full md:w-2/3 lg:w-2/5 mb-10 md:mb-0"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold mb-2"
  }, "SUBSCRIBE TO OUR NEWSLETTER"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mb-6"
  }, "Sign up & receive the latest tips via email."), /*#__PURE__*/React.createElement("div", {
    className: "flex w-full max-w-sm mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Enter Email Address",
    className: "flex-grow py-3 px-4 border border-[#555] rounded-l-md bg-[#3a2f57] text-white outline-none placeholder-gray-500"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bg-[#007bff] text-white py-3 px-6 rounded-r-md cursor-pointer hover:bg-[#0056b3] transition-colors"
  }, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-full mx-auto px-8 mt-8 pt-8 border-t border-[#333] flex flex-nowrap overflow-x-auto space-x-8"
  }, sections.map(function (section, sectionIndex) {
    return /*#__PURE__*/React.createElement("div", {
      key: sectionIndex,
      className: "w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-6"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "text-lg font-bold mb-4 pb-2 border-b-2 border-[#007bff] inline-block"
    }, section.title), /*#__PURE__*/React.createElement("ul", {
      className: "list-none p-0 m-0"
    }, section.links.map(function (link, linkIndex) {
      return /*#__PURE__*/React.createElement("li", {
        key: linkIndex,
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("a", {
        href: link.href,
        className: "text-gray-400 hover:text-white transition-colors flex items-center before:content-[>'] before:mr-2 before:text-[#007bff]",
        onClick: function (e) {
          return handleLinkClick(link.href, e);
        }
      }, link.label));
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-8 mt-8 pt-6 border-t border-[#333] text-center text-gray-400 text-sm"
  }, /*#__PURE__*/React.createElement("p", null, copyrightText)));
};

module.exports = Footer;
//# sourceMappingURL=Footer.js.map
