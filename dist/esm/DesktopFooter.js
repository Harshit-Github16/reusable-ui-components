import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import play_storeIcon from './public/images/play_store.svg.js';
import app_storeIcon from './public/images/app_store.svg.js';
import logoDarkImage from './public/images/logo-dark.svg.js';
import { socialLinks, navItems } from './FooterData.js';

function DesktopFooter(_a) {
  var sendNewsletter = _a.sendNewsletter,
    isSend = _a.isSend,
    _b = _a.isFullUrl,
    isFullUrl = _b === void 0 ? false : _b,
    handleRouting = _a.handleRouting;
  var _c = useState(''),
    subscribeEmail = _c[0],
    setSubscribeEmail = _c[1];
  var BASE_URL = 'https://www.niftytrader.in';
  var refreshPath = ['/ipo', '/my-dashboard'];
  var generateHref = function (pageUrl) {
    var shouldUseFullUrl = isFullUrl || refreshPath.some(function (path) {
      return pageUrl.startsWith(path);
    });
    return shouldUseFullUrl ? new URL(pageUrl, BASE_URL).href : pageUrl;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "tw-bg-[#1b0d29] tw-bg-cover tw-pt-6 tw-pb-2 tw-px-6 tw-bg-no-repeat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-flwx-row tw-justify-between tw-mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-flex-col tw-gap-6 tw-min-w-[220px]"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "/",
    onClick: function (e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/React.createElement(Image, {
    src: logoDarkImage,
    alt: "Logo",
    width: 180,
    height: 40,
    className: "tw-mb-2"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "tw-text-white tw-text-base tw-font-medium tw-mb-2"
  }, "Connect with Us"), /*#__PURE__*/React.createElement("ul", {
    className: "tw-flex tw-gap-3"
  }, socialLinks.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: item.link,
      className: "tw-flex tw-items-center tw-justify-center tw-w-9 tw-h-9 tw-rounded-full ".concat(idx === 0 ? 'tw-bg-[#485a96]' : idx === 1 ? 'tw-bg-[#333]' : idx === 2 ? 'tw-bg-[#dc1716]' : idx === 3 ? 'tw-bg-linkedin-gradient' : idx === 4 ? 'tw-bg-instagram-gradient' : idx === 5 ? 'tw-bg-[#43d37a]' : 'tw-bg-black')
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      width: 22,
      height: 22,
      alt: "icon"
    })));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-flex-col tw-items-end tw-gap-4 tw-min-w-[320px]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "tw-text-white tw-font-bold tw-text-lg tw-mb-0"
  }, "SUBSCRIBE TO OUR NEWSLETTER"), /*#__PURE__*/React.createElement("p", {
    className: "tw-text-[#DDDDDD] tw-text-xs tw-font-normal tw-mb-2"
  }, "Sign up & receive the latest tips via email."), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-items-center tw-mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: subscribeEmail,
    onChange: function (e) {
      return setSubscribeEmail(e.target.value);
    },
    className: "tw-bg-white tw-px-3 tw-py-2 tw-font-normal tw-outline-none tw-rounded-l tw-w-[200px] tw-text-sm tw-text-black",
    placeholder: "Enter Email Address"
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !isSend || !(subscribeEmail === null || subscribeEmail === void 0 ? void 0 : subscribeEmail.trim()),
    onClick: function () {
      return sendNewsletter && sendNewsletter(subscribeEmail);
    },
    className: "tw-bg-[#3b82f6] tw-rounded-r tw-text-white tw-px-6 tw-py-2 tw-font-semibold tw-text-base tw-transition-all hover:tw-bg-[#2563eb] disabled:tw-opacity-60"
  }, "Subscribe")), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-gap-3"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "https://play.google.com/store/apps/details?id=in.niftytrader&hl=en_IN",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Image, {
    src: play_storeIcon,
    alt: "icon",
    width: 140,
    height: 40,
    className: "tw-cursor-pointer"
  })), /*#__PURE__*/React.createElement(Link, {
    href: "https://apps.apple.com/us/app/niftytrader/id1587483980",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Image, {
    src: app_storeIcon,
    alt: "icon",
    width: 140,
    height: 40,
    className: "tw-cursor-pointer"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-flex-row tw-justify-between tw-items-start tw-gap-8 tw-max-w-[1600px] tw-mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex-1 tw-grid tw-grid-cols-6 tw-gap-6"
  }, navItems.slice(0, 6).map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-text-[#3b82f6] tw-font-bold tw-text-base tw-mb-2 tw-border-b-2 tw-border-[#3b82f6] tw-inline-block tw-pb-1"
    }, item.label), /*#__PURE__*/React.createElement("ul", {
      className: "tw-mt-2 tw-space-y-2"
    }, item.links.slice(0, 5).map(function (link, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i
      }, /*#__PURE__*/React.createElement(Link, {
        href: generateHref(link.url),
        onClick: function (e) {
          e.preventDefault();
          handleRouting(link.url);
        },
        className: "tw-flex tw-items-center tw-text-white tw-text-base tw-font-normal hover:tw-text-[#3b82f6] tw-transition"
      }, /*#__PURE__*/React.createElement("span", {
        className: "tw-mr-2 tw-text-lg"
      }, "\u203A"), link.name));
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tw-mt-8 tw-border-t tw-border-[#555] tw-pt-4 tw-text-white tw-text-xs tw-text-center"
  }, "Copyright \xA9 ", /*#__PURE__*/React.createElement(Link, {
    href: "/",
    className: "tw-text-[#3b82f6] tw-px-1"
  }, "NiftyTrader"), " | All rights reserved ver ", process.env.VERSION));
}

export { DesktopFooter as default };
//# sourceMappingURL=DesktopFooter.js.map
