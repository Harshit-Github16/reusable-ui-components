'use strict';

var link = require('./node_modules/next/link.js');

var Header = function () {
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-white shadow-md"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "container mx-auto px-4 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(link, {
    href: "/",
    className: "text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
  }, "Logo"), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex space-x-8"
  }, /*#__PURE__*/React.createElement(link, {
    href: "/",
    className: "text-gray-600 hover:text-gray-900 transition-colors"
  }, "Home"), /*#__PURE__*/React.createElement(link, {
    href: "/about",
    className: "text-gray-600 hover:text-gray-900 transition-colors"
  }, "About"), /*#__PURE__*/React.createElement(link, {
    href: "/services",
    className: "text-gray-600 hover:text-gray-900 transition-colors"
  }, "Services"), /*#__PURE__*/React.createElement(link, {
    href: "/contact",
    className: "text-gray-600 hover:text-gray-900 transition-colors"
  }, "Contact")), /*#__PURE__*/React.createElement("button", {
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
  }, /*#__PURE__*/React.createElement(link, {
    href: "/",
    className: "block text-gray-600 hover:text-gray-900 transition-colors"
  }, "Home"), /*#__PURE__*/React.createElement(link, {
    href: "/about",
    className: "block text-gray-600 hover:text-gray-900 transition-colors"
  }, "About"), /*#__PURE__*/React.createElement(link, {
    href: "/services",
    className: "block text-gray-600 hover:text-gray-900 transition-colors"
  }, "Services"), /*#__PURE__*/React.createElement(link, {
    href: "/contact",
    className: "block text-gray-600 hover:text-gray-900 transition-colors"
  }, "Contact"))));
};

module.exports = Header;
//# sourceMappingURL=Header.js.map
