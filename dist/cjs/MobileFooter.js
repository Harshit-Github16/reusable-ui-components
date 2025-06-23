'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Link = require('next/link');
var Image = require('next/image');
var React = require('react');
var play_store = require('./public/images/play_store.svg.js');
var app_store = require('./public/images/app_store.svg.js');
var logoDark = require('./public/images/logo-dark.svg.js');
var FooterData = require('./FooterData.js');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

function MobileFooter(_a) {
  var sendNewsletter = _a.sendNewsletter;
    _a.brokersList;
    var isSend = _a.isSend,
    _b = _a.isFullUrl,
    isFullUrl = _b === void 0 ? false : _b,
    handleRouting = _a.handleRouting;
  var _c = React.useState(),
    subscribeEmail = _c[0],
    setSubscribeEmail = _c[1];
  var _d = React.useState(null),
    mobileOpen = _d[0],
    setMobileOpen = _d[1];
  var BASE_URL = 'https://www.niftytrader.in';
  React.useEffect(function () {
    if (isSend && subscribeEmail) {
      setSubscribeEmail('');
    }
  }, [isSend]);
  var refreshPath = ['/ipo', '/my-dashboard'];
  var generateHref = function (pageUrl) {
    var shouldUseFullUrl = isFullUrl || refreshPath.some(function (path) {
      return pageUrl.startsWith(path);
    });
    return shouldUseFullUrl ? new URL(pageUrl, BASE_URL).href : pageUrl;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "tw-bg-[#1b0d29] tw-bg-cover tw-pt-4 tw-pb-4 tw-px-4 tw-p-2 tw-bg-no-repeat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-flex-col tw-gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-gap-4 tw-flex-col tw-items-center"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: function (e) {
      e.preventDefault();
    },
    href: "/"
  }, /*#__PURE__*/React.createElement(Image, {
    src: logoDark.default,
    alt: "Logo",
    width: 152,
    height: 35,
    className: "tw-h-[35px] tw-w-[152px]"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tw-text-center tw-flex tw-flex-col tw-items-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tw-text-white tw-font-bold tw-text-base tw-mb-0"
  }, "SUBSCRIBE TO OUR NEWSLETTER"), /*#__PURE__*/React.createElement("p", {
    className: "tw-text-[#DDDDDD] tw-text-xs tw-font-normal tw-my-1"
  }, "Sign up & receive the latest tips via email."), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-items-center tw-mb-4 tw-w-full tw-max-w-sm"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: subscribeEmail,
    onChange: function (e) {
      return setSubscribeEmail(e.target.value);
    },
    className: "tw-bg-white tw-px-3 tw-py-[8px] tw-font-normal tw-outline-none tw-rounded-tl-[4px] tw-rounded-bl-[4px] tw-w-full tw-text-sm ".concat(subscribeEmail ? 'tw-text-black' : 'tw-text-[#999999]'),
    placeholder: "Enter Email Address"
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !isSend || !(subscribeEmail === null || subscribeEmail === void 0 ? void 0 : subscribeEmail.trim()),
    onClick: function () {
      return sendNewsletter && sendNewsletter(subscribeEmail);
    },
    className: "tw-bg-[#236AD4] tw-rounded-tr-[4px] tw-rounded-br-[4px] tw-text-white tw-px-3 tw-py-[8px] tw-border tw-border-transparent tw-font-medium tw-transition-all tw-duration-300 hover:tw-bg-transparent hover:tw-text-[#236AD4] hover:tw-border-[#236AD4] tw-text-sm tw-cursor-pointer"
  }, isSend ? 'Subscribe' : 'Subscribing...'))), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-items-center tw-justify-center tw-my-2"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "https://play.google.com/store/apps/details?id=in.niftytrader&hl=en_IN",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Image, {
    src: play_store.default,
    alt: "icon",
    width: 116,
    height: 35,
    className: "tw-mr-3 tw-cursor-pointer"
  })), /*#__PURE__*/React.createElement(Link, {
    href: "https://apps.apple.com/us/app/niftytrader/id1587483980",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Image, {
    src: app_store.default,
    alt: "icon",
    width: 116,
    height: 35,
    className: "tw-cursor-pointer"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-flex-col tw-gap-2 tw-items-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tw-text-white tw-text-sm tw-mb-0 tw-font-medium"
  }, "Connect with Us"), /*#__PURE__*/React.createElement("ul", {
    className: "tw-flex tw-justify-center tw-gap-3"
  }, FooterData.socialLinks === null || FooterData.socialLinks === void 0 ? void 0 : FooterData.socialLinks.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: item.link,
      className: "tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-full ".concat(index === 0 ? 'tw-bg-[#485a96]' : index === 1 ? 'tw-bg-[#333]' : index === 2 ? 'tw-bg-[#dc1716]' : index === 3 ? 'tw-bg-linkedin-gradient' : index === 4 ? 'tw-bg-instagram-gradient' : index === 5 ? 'tw-bg-[#43d37a]' : 'tw-bg-black')
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      className: "tw-h-3 tw-w-3",
      width: 16,
      height: 16,
      alt: "icon"
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tw-text-white"
  }, FooterData.navItems.map(function (item, index) {
    var isOpen = mobileOpen === index;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "tw-py-1"
    }, /*#__PURE__*/React.createElement("button", {
      className: "tw-w-full tw-bg-[rgba(34,34,34,0.6)] tw-px-2 tw-py-3 tw-rounded-lg tw-flex tw-justify-between tw-items-center tw-text-start tw-font-semibold tw-text-white tw-text-sm",
      onClick: function () {
        return setMobileOpen(isOpen ? null : index);
      }
    }, item.label, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: isOpen ? freeSolidSvgIcons.faMinus : freeSolidSvgIcons.faPlus,
      className: "tw-h-4 tw-w-4 tw-transition-transform"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tw-transition-all tw-overflow-hidden tw-duration-300 ".concat(isOpen ? "tw-max-h-[1000px] tw-mt-2" : "tw-max-h-0")
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-grid tw-grid-cols-1 tw-gap-2"
    }, item.links.map(function (link, i) {
      return /*#__PURE__*/React.createElement(Link, {
        key: i,
        onClick: function (e) {
          e.preventDefault(), handleRouting(link.url);
        },
        href: generateHref(link.url)
      }, /*#__PURE__*/React.createElement("div", {
        className: "tw-px-2 tw-py-1 tw-flex tw-text-xs tw-text-white hover:tw-text-primary-text"
      }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faChevronRight,
        width: 10,
        className: "tw-text-[10px] tw-mt-[3px] tw-me-2 tw-h-[10px] tw-w-[10px]"
      }), link.name));
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-w-3/4 tw-my-3",
    style: {
      borderTop: '1px solid #555555'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-text-white tw-text-xs tw-text-center tw-flex tw-flex-col tw-items-center tw-gap-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-items-center tw-justify-center"
  }, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9"), /*#__PURE__*/React.createElement(Link, {
    prefetch: false,
    href: "/",
    className: "tw-text-primary-text tw-px-2"
  }, "NiftyTrader")), /*#__PURE__*/React.createElement("p", {
    className: "tw-mb-0"
  }, "All rights reserved ver ", process.env.VERSION))));
}

exports.default = MobileFooter;
//# sourceMappingURL=MobileFooter.js.map
