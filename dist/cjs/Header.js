'use strict';

var React = require('react');

var Header = function (_a) {
  var _b = _a.logoText,
    logoText = _b === void 0 ? "Logo" : _b,
    _c = _a.logoHref,
    logoHref = _c === void 0 ? "/" : _c,
    _d = _a.navItems,
    navItems = _d === void 0 ? [{
      label: "Home",
      href: "/"
    }, {
      label: "About",
      href: "/about"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Contact",
      href: "/contact"
    }] : _d,
    onLogoClick = _a.onLogoClick,
    onNavItemClick = _a.onNavItemClick;
  var handleLogoClick = function (e) {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };
  var handleNavClick = function (href, e) {
    if (onNavItemClick) {
      e.preventDefault();
      onNavItemClick(href);
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "tw-bg-red-100 shadow-md"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "container mx-auto px-4 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("a", {
    href: logoHref,
    className: "text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors",
    onClick: handleLogoClick
  }, logoText), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex space-x-8"
  }, navItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      href: item.href,
      className: "text-gray-600 hover:text-gray-900 transition-colors",
      onClick: function (e) {
        return handleNavClick(item.href, e);
      }
    }, item.label);
  })), /*#__PURE__*/React.createElement("button", {
    className: "md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "h-6 w-6",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:hidden mt-4 space-y-4"
  }, navItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      href: item.href,
      className: "block text-gray-600 hover:text-gray-900 transition-colors",
      onClick: function (e) {
        return handleNavClick(item.href, e);
      }
    }, item.label);
  }))));
};

module.exports = Header;
//# sourceMappingURL=Header.js.map
