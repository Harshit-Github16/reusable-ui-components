'use strict';

var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var Image = require('next/image');
var Link = require('next/link');
var React = require('react');
var FooterData = require('./FooterData.js');
var HeaderData = require('./HeaderData.js');
var apple_store_logo = require('./public/images/apple_store_logo.svg.js');
var gift_nifty = require('./public/images/gift_nifty.svg.js');
var gift_nifty_dark = require('./public/images/gift_nifty_dark.svg.js');
var menuQrCode = require('./public/images/menu-qr-code.svg.js');
var play_store_logo = require('./public/images/play_store_logo.svg.js');
var strategy_builder = require('./public/images/Header/strategy_builder.svg.js');
var silver = require('./public/images/Header/silver.svg.js');
var gold = require('./public/images/Header/gold.svg.js');
var navigation = require('next/navigation');

var HeaderDropDown = function (_a) {
  var isLoggedIn = _a.isLoggedIn,
    isFullUrl = _a.isFullUrl,
    menuVisible = _a.menuVisible,
    setMenuVisible = _a.setMenuVisible,
    onLogout = _a.onLogout,
    onPassword = _a.onPassword,
    dropdownRefs = _a.dropdownRefs,
    isDarkMode = _a.isDarkMode,
    handleRouting = _a.handleRouting;
  var pathName = navigation.usePathname();
  var BASE_URL = 'https://www.niftytrader.in';
  var isActive = function (itemPath) {
    if (itemPath == '') {
      return pathName == itemPath;
    }
    if (pathName == '/nse-top-losers') {
      return itemPath == '/nse-top-gainers';
    }
    return pathName == itemPath || (pathName === null || pathName === void 0 ? void 0 : pathName.startsWith("".concat(itemPath, "/")));
  };
  var getColorClasses = function (label) {
    switch (label) {
      case 'New':
        return 'tw-bg-[#d1ffd0] tw-text-[#2f801b]';
      case 'Updated':
        return 'tw-bg-[#d0ddff] tw-text-[#1b3780]';
      case 'Coming':
        return 'tw-bg-[#FFDECC] tw-text-[#CF4B00]';
      default:
        return 'tw-bg-gray-100 tw-text-gray-600';
    }
  };
  var refreshPath = ['/ipo', '/my-dashboard'];
  var generateHref = function (pageUrl) {
    var shouldUseFullUrl = isFullUrl || refreshPath.some(function (path) {
      return pageUrl.startsWith(path);
    });
    return shouldUseFullUrl ? new URL(pageUrl, BASE_URL).href : pageUrl;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, HeaderData.analyticsData && /*#__PURE__*/React.createElement("div", {
    ref: function (el) {
      dropdownRefs.current[0] = el;
    },
    className: "tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ".concat(menuVisible == 0 ? 'tw-scale-y-100' : 'tw-scale-y-0')
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: " tw-gap-4 tw-flex tw-justify-between  tw-w-full "
  }, HeaderData.analyticsData.map(function (section, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "tw-flex tw-flex-col tw-justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2"
    }, /*#__PURE__*/React.createElement(Image, {
      src: section.imageUrl,
      width: 100,
      height: 100,
      alt: section.title,
      title: section.title
    })), /*#__PURE__*/React.createElement("span", {
      className: "tw-font-bold"
    }, section.title), section.tag && /*#__PURE__*/React.createElement("span", {
      className: "tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine"
    }, section.tag)), section.description && /*#__PURE__*/React.createElement("span", {
      className: "tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]"
    }, section.description), /*#__PURE__*/React.createElement("ul", null, section.items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("li", {
        key: idx,
        className: "hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ".concat((item === null || item === void 0 ? void 0 : item.description) && 'tw-mt-2' || 'tw-mt-1', " ").concat(isActive(item === null || item === void 0 ? void 0 : item.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : '')
      }, /*#__PURE__*/React.createElement(Link, {
        onClick: function (e) {
          e.preventDefault(), handleRouting(item === null || item === void 0 ? void 0 : item.pageUrl), setMenuVisible(null);
        },
        href: generateHref(item === null || item === void 0 ? void 0 : item.pageUrl),
        className: "".concat(!(item === null || item === void 0 ? void 0 : item.pageUrl) && 'tw-cursor-default')
      }, /*#__PURE__*/React.createElement("span", {
        className: "tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white"
      }, item.title, item.label && /*#__PURE__*/React.createElement("span", {
        className: "tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ".concat(getColorClasses(item.label))
      }, item.label), /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faArrowRightLong,
        width: 13,
        height: 15,
        className: "tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1"
      })), (item === null || item === void 0 ? void 0 : item.description) && /*#__PURE__*/React.createElement("span", {
        className: "tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]"
      }, item === null || item === void 0 ? void 0 : item.description)));
    }))), index == 0 && /*#__PURE__*/React.createElement("div", {
      onClick: function () {
        handleRouting('/option-strategy-builder?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null);
      },
      className: "header-chip-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-bg-white dark:tw-bg-[#111111] tw-p-1 tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center"
    }, /*#__PURE__*/React.createElement(Image, {
      src: strategy_builder,
      width: 27,
      height: 27,
      alt: "option strategy logo",
      title: "Option Strategy"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0"
    }, "Strategy Builder")), index == 1 && /*#__PURE__*/React.createElement("div", {
      onClick: function () {
        handleRouting('/gift-nifty-live?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null);
      },
      className: "header-chip-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-bg-white dark:tw-bg-[#111111] tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center"
    }, /*#__PURE__*/React.createElement(Image, {
      src: isDarkMode ? gift_nifty_dark : gift_nifty,
      width: 35,
      height: 35,
      alt: "gift nifty",
      title: "gift nifty"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0"
    }, "Gift Nifty")), index == 2 && /*#__PURE__*/React.createElement("div", {
      // onClick={() => { handleRouting('/watchlist'), setMenuVisible(null) }}
      onClick: function () {
        handleRouting('/gold-price-today?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null);
      },
      className: "header-chip-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-bg-white shine dark:tw-bg-[#111111] tw-p-1 tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center"
    }, /*#__PURE__*/React.createElement(Image, {
      src: gold,
      width: 27,
      height: 27,
      alt: "gold price today logo",
      title: "Gold price today"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0"
    }, "Gold Price Today")), index == 3 && /*#__PURE__*/React.createElement("div", {
      onClick: function () {
        handleRouting('/silver-rate-today?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null);
      },
      className: "header-chip-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-bg-white shine dark:tw-bg-[#111111] tw-p-1 tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center"
    }, /*#__PURE__*/React.createElement(Image, {
      src: silver,
      width: 27,
      height: 27,
      alt: "silver price today logo",
      title: "silver price today"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0"
    }, "Silver Price Today")));
  }))))), HeaderData.backTestingData && /*#__PURE__*/React.createElement("div", {
    ref: function (el) {
      dropdownRefs.current[6] = el;
    },
    className: "tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ".concat(menuVisible == 6 ? 'tw-scale-y-100' : 'tw-scale-y-0')
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: " tw-gap-4 tw-flex tw-justify-between  tw-w-full "
  }, HeaderData.backTestingData.map(function (section, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2"
    }, /*#__PURE__*/React.createElement(Image, {
      src: section.imageUrl,
      width: 30,
      height: 30,
      alt: section.title,
      title: section.title,
      className: "tw-me-2"
    })), /*#__PURE__*/React.createElement("span", {
      className: "tw-font-bold tw-text-nowrap"
    }, section.title), section.tag && /*#__PURE__*/React.createElement("span", {
      className: "tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine"
    }, section.tag)), section.description && /*#__PURE__*/React.createElement("span", {
      className: "tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]"
    }, section.description), /*#__PURE__*/React.createElement("ul", null, section.items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("li", {
        key: idx,
        className: "hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ".concat((item === null || item === void 0 ? void 0 : item.description) && 'tw-mt-2' || 'tw-mt-1', " ").concat(isActive(item === null || item === void 0 ? void 0 : item.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : '')
      }, /*#__PURE__*/React.createElement(Link, {
        onClick: function (e) {
          e.preventDefault(), handleRouting(item === null || item === void 0 ? void 0 : item.pageUrl), setMenuVisible(null);
        },
        href: generateHref(item === null || item === void 0 ? void 0 : item.pageUrl),
        className: "".concat(!(item === null || item === void 0 ? void 0 : item.pageUrl) && 'tw-cursor-default')
      }, /*#__PURE__*/React.createElement("span", {
        className: "tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white"
      }, item.title, item.label && /*#__PURE__*/React.createElement("span", {
        className: "tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ".concat(getColorClasses(item.label))
      }, item.label), /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faArrowRightLong,
        width: 13,
        height: 15,
        className: "tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1"
      })), (item === null || item === void 0 ? void 0 : item.description) && /*#__PURE__*/React.createElement("span", {
        className: "tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]"
      }, item === null || item === void 0 ? void 0 : item.description)));
    })));
  }))))), HeaderData.optionsData && /*#__PURE__*/React.createElement("div", {
    ref: function (el) {
      dropdownRefs.current[1] = el;
    },
    className: "tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ".concat(menuVisible == 1 ? 'tw-scale-y-100' : 'tw-scale-y-0')
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: " tw-gap-4 tw-flex tw-justify-between  tw-w-full "
  }, HeaderData.optionsData.map(function (section, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2"
    }, /*#__PURE__*/React.createElement(Image, {
      src: section.imageUrl,
      width: 30,
      height: 30,
      alt: section.title,
      title: section.title,
      className: "tw-me-2"
    })), /*#__PURE__*/React.createElement("span", {
      className: "tw-font-bold"
    }, section.title), section.tag && /*#__PURE__*/React.createElement("span", {
      className: "tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine"
    }, section.tag)), section.description && /*#__PURE__*/React.createElement("span", {
      className: "tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]"
    }, section.description), /*#__PURE__*/React.createElement("ul", null, section.items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("li", {
        key: idx,
        className: "hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ".concat((item === null || item === void 0 ? void 0 : item.description) && 'tw-mt-2' || 'tw-mt-1', " ").concat(isActive(item === null || item === void 0 ? void 0 : item.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : '')
      }, /*#__PURE__*/React.createElement(Link, {
        onClick: function (e) {
          e.preventDefault(), handleRouting(item === null || item === void 0 ? void 0 : item.pageUrl), setMenuVisible(null);
        },
        href: generateHref(item === null || item === void 0 ? void 0 : item.pageUrl),
        className: "".concat(!(item === null || item === void 0 ? void 0 : item.pageUrl) && 'tw-cursor-default')
      }, /*#__PURE__*/React.createElement("span", {
        className: "tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white"
      }, item.title, item.label && /*#__PURE__*/React.createElement("span", {
        className: "tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ".concat(getColorClasses(item.label))
      }, item.label), /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faArrowRightLong,
        width: 13,
        height: 15,
        className: "tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1"
      })), (item === null || item === void 0 ? void 0 : item.description) && /*#__PURE__*/React.createElement("span", {
        className: "tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]"
      }, item === null || item === void 0 ? void 0 : item.description)));
    })));
  }))))), HeaderData.resourcesData && /*#__PURE__*/React.createElement("div", {
    ref: function (el) {
      dropdownRefs.current[2] = el;
    },
    className: "tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ".concat(menuVisible == 2 ? 'tw-scale-y-100' : 'tw-scale-y-0')
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: " tw-gap-4 tw-flex tw-justify-between  tw-w-full "
  }, HeaderData.resourcesData.map(function (section, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2"
    }, /*#__PURE__*/React.createElement(Image, {
      src: section.imageUrl,
      width: 30,
      height: 30,
      alt: section.title,
      title: section.title,
      className: "tw-me-2"
    })), /*#__PURE__*/React.createElement("span", {
      className: "tw-font-bold"
    }, section.title), section.tag && /*#__PURE__*/React.createElement("span", {
      className: "tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine"
    }, section.tag)), section.description && /*#__PURE__*/React.createElement("span", {
      className: "tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]"
    }, section.description), /*#__PURE__*/React.createElement("ul", null, section.items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("li", {
        key: idx,
        className: "hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ".concat((item === null || item === void 0 ? void 0 : item.description) && 'tw-mt-2' || 'tw-mt-1', " ").concat(isActive(item === null || item === void 0 ? void 0 : item.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : '')
      }, /*#__PURE__*/React.createElement(Link, {
        onClick: function (e) {
          e.preventDefault(), handleRouting(item === null || item === void 0 ? void 0 : item.pageUrl), setMenuVisible(null);
        },
        href: generateHref(item === null || item === void 0 ? void 0 : item.pageUrl),
        className: "".concat(!(item === null || item === void 0 ? void 0 : item.pageUrl) && 'tw-cursor-default')
      }, /*#__PURE__*/React.createElement("span", {
        className: "tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white"
      }, item.title, item.label && /*#__PURE__*/React.createElement("span", {
        className: "tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ".concat(getColorClasses(item.label))
      }, item.label), /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faArrowRightLong,
        width: 13,
        height: 15,
        className: "tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1"
      })), (item === null || item === void 0 ? void 0 : item.description) && /*#__PURE__*/React.createElement("span", {
        className: "tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]"
      }, item === null || item === void 0 ? void 0 : item.description)));
    })));
  }))))), HeaderData.barsMenuData && /*#__PURE__*/React.createElement("div", {
    ref: function (el) {
      dropdownRefs.current[3] = el;
    },
    className: "tw-grid md:tw-grid-cols-3 tw-w-full tw-max-w-[870px] tw-absolute  tw-duration-300 tw-z-[100] ".concat(isLoggedIn && 'tw-right-[284px]' || 'tw-right-[190px]', " tw-m-auto tw-py-6 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] smooth-dropdown ").concat(menuVisible == 3 ? 'tw-scale-y-100' : 'tw-scale-y-0')
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-after:h-full tw-after:block tw-after:w-[0.6px] tw-after:bg-[#dddddd] tw-after:absolute tw-after:right-0 tw-after:top-0 tw-px-6 tw-flex tw-justify-center tw-flex-col tw-relative tw-mb-2"
  }, HeaderData.barsMenuData.slice(0, 7).map(function (item, index) {
    return /*#__PURE__*/React.createElement(Link, {
      key: index,
      onClick: function (e) {
        setMenuVisible(null), e.preventDefault(), handleRouting(item === null || item === void 0 ? void 0 : item.pageUrl);
      },
      href: generateHref(item === null || item === void 0 ? void 0 : item.pageUrl),
      className: "tw-font-medium tw-text-black dark:tw-text-white  tw-duration-200 tw-mb-3 hover:tw-text-primary-text  tw-text-[15px] tw-flex tw-items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tw-w-[45px] tw-h-[45px] tw-flex tw-items-center tw-justify-center tw-rounded-md tw-mr-3 \n                                    ".concat(item.label == "Advanced Stock Screener" && "tw-bg-[#FFECE4]", " \n                                     ").concat(item.label == "Live Market Screener" && "tw-bg-[#fff4f4]", "\n                                     ").concat(item.label == "Options Screener" && "tw-bg-[#ECF5FE]", " \n                                     ").concat(item.label == "NSE Option Chain" && "tw-bg-[#F3E8FF]", " \n                                     ").concat(item.label == "BSE Option Chain" && "tw-bg-[#FFEFFC]", " \n                                     ").concat(item.label == "Stock Analysis" && "tw-bg-[#FFF6E4]", " \n                                     ").concat(item.label == "GPT Watchlist" && "tw-bg-[#E7FAFF]", "  ")
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      title: item.label,
      width: 20,
      height: 20
    })), item.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-after:h-full tw-after:block tw-after:w-[0.6px] tw-after:bg-[#dddddd] tw-after:absolute tw-after:right-0 tw-after:top-0 tw-px-6 tw-flex tw-justify-center tw-flex-col tw-relative tw-mb-2"
  }, HeaderData.barsMenuData.slice(7).map(function (item, index) {
    return /*#__PURE__*/React.createElement(Link, {
      key: index,
      href: generateHref(item === null || item === void 0 ? void 0 : item.pageUrl),
      onClick: function (e) {
        setMenuVisible(null), e.preventDefault(), handleRouting(item === null || item === void 0 ? void 0 : item.pageUrl);
      },
      className: "tw-font-medium tw-text-black dark:tw-text-white  tw-duration-200 tw-mb-3 hover:tw-text-primary-text tw-text-[15px] tw-flex tw-items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tw-w-[45px] tw-h-[45px] tw-flex tw-items-center tw-justify-center tw-rounded-md tw-mr-3 \n                                    ".concat(item.label == "TV Chart" && "tw-bg-[#eee]", "\n                                     ").concat(item.label == "GIFT NIFTY" && "tw-bg-[#FFECE4]", " \n                                     ").concat(item.label == "News" && "tw-bg-[#FFEAEA]", " \n                                     ").concat(item.label == "IPO" && "tw-bg-[#ECF5FE]", " \n                                     ").concat(item.label == "Strategy Builder" && "tw-bg-[#F3E8FF]", " \n                                     ").concat(item.label == "Options Simulator" && "tw-bg-[#FFEFFC]", " \n                                     ").concat(item.label == "Prime" && "tw-bg-[#FFF6E4]", " \n                                     ").concat(item.label == "Blog" && "tw-bg-[#E7FAFF]", " ")
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      title: item.label,
      width: 20,
      height: 20
    })), item.label);
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tw-mx-auto tw-w-max"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-border tw-w-max"
  }, /*#__PURE__*/React.createElement(Image, {
    src: menuQrCode,
    alt: "QR",
    title: "qr code",
    width: 200,
    height: 200
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-text-black dark:tw-text-white tw-text-base tw-mt-2 tw-font-semibold"
  }, "Download Now"), /*#__PURE__*/React.createElement("span", {
    className: "tw-block tw-py-2 tw-text-[#999999] tw-text-base tw-font-semibold"
  }, "For Android & IOS")))), HeaderData.profileData && /*#__PURE__*/React.createElement("div", {
    ref: function (el) {
      dropdownRefs.current[4] = el;
    },
    className: "tw-w-[210px] tw-absolute tw-z-[100] tw-right-[140px] tw-m-auto tw-py-2 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] smooth-dropdown ".concat(menuVisible == 4 ? 'tw-scale-y-100' : 'tw-scale-y-0')
  }, /*#__PURE__*/React.createElement("ul", null, (HeaderData.profileData === null || HeaderData.profileData === void 0 ? void 0 : HeaderData.profileData.length) > 0 && HeaderData.profileData.map(function (item, key) {
    return /*#__PURE__*/React.createElement("li", {
      key: key
    }, (item === null || item === void 0 ? void 0 : item.label) === "Logout" ? /*#__PURE__*/React.createElement("div", {
      onClick: onLogout,
      className: "tw-pl-5 tw-pr-3 tw-py-3 dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white tw-w-full tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent hover:tw-border-l-primary-text tw-flex tw-items-center tw-cursor-pointer"
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      title: item.label,
      width: 22,
      height: 22,
      className: "tw-mr-3"
    }), /*#__PURE__*/React.createElement("span", null, item.label)) : (item === null || item === void 0 ? void 0 : item.label) === "Social Media" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "tw-pl-5 tw-cursor-pointer dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white tw-pr-3 tw-group tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent hover:tw-border-l-primary-text tw-flex tw-items-center tw-h-[45px]"
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      title: item.label,
      width: 22,
      height: 22,
      className: "tw-mr-3 group-hover:tw-hidden"
    }), /*#__PURE__*/React.createElement("span", {
      className: "group-hover:tw-hidden"
    }, item.label), /*#__PURE__*/React.createElement("ul", {
      className: "tw-justify-center tw-gap-4 group-hover:tw-flex tw-hidden tw-ms-1"
    }, FooterData.socialLinks.slice(0, 4).map(function (icon, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: index,
        className: "tw-rounded tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center ".concat(index === 0 ? "tw-bg-[#485a96]" : index === 1 ? "tw-bg-[#333]" : index === 2 ? "tw-bg-[#dc1716]" : index === 3 ? "tw-bg-linkedin-gradient" : index === 4 ? "tw-bg-instagram-gradient" : index === 5 ? "tw-bg-[#2aa1d4]" : "tw-bg-black")
      }, /*#__PURE__*/React.createElement("a", {
        target: "_blank",
        href: icon.link,
        className: "tw-flex tw-items-center tw-justify-center"
      }, /*#__PURE__*/React.createElement(Image, {
        src: icon.icon,
        width: 20,
        height: 20,
        alt: item.label,
        title: item.label,
        className: "tw-transition tw-duration-300 tw-ease-in-out hover:tw-rotate-y-180 hover:tw-scale-x-[-1]"
      })));
    })))) : (item === null || item === void 0 ? void 0 : item.label) === "Download App" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "tw-pl-5 tw-cursor-pointer tw-pr-3 dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white tw-group tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent hover:tw-border-l-primary-text tw-flex tw-items-center tw-h-[45px]"
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      title: item.label,
      width: 22,
      height: 22,
      className: "tw-mr-3 group-hover:tw-hidden"
    }), /*#__PURE__*/React.createElement("span", {
      className: "group-hover:tw-hidden"
    }, item.label), /*#__PURE__*/React.createElement("ul", {
      className: "tw-justify-center tw-gap-4 group-hover:tw-flex tw-hidden tw-ms-12"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "https://play.google.com/store/apps/details?id=in.niftytrader&hl=en_IN",
      className: "tw-flex tw-items-center tw-justify-center"
    }, /*#__PURE__*/React.createElement(Image, {
      src: play_store_logo,
      width: 24,
      height: 24,
      alt: item.label,
      title: item.label,
      className: "tw-transition tw-duration-300 tw-ease-in-out hover:tw-rotate-y-180 hover:tw-scale-x-[-1]"
    }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "https://apps.apple.com/us/app/nifty-trader/id1587483980",
      className: "tw-flex tw-items-center tw-justify-center"
    }, /*#__PURE__*/React.createElement(Image, {
      src: apple_store_logo,
      width: 25,
      height: 25,
      alt: item.label,
      title: item.label,
      className: "tw-transition tw-duration-300 tw-ease-in-out hover:tw-rotate-y-180 hover:tw-scale-x-[-1]"
    })))))) : (item === null || item === void 0 ? void 0 : item.label) === "Change Password" ? /*#__PURE__*/React.createElement("div", {
      onClick: onPassword,
      className: "tw-pl-5 tw-pr-3 tw-py-3 tw-w-full tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white hover:tw-border-l-primary-text tw-flex tw-items-center tw-cursor-pointer"
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      title: item.label,
      width: 22,
      height: 22,
      className: "tw-mr-3"
    }), /*#__PURE__*/React.createElement("span", null, item.label)) : /*#__PURE__*/React.createElement(Link, {
      onClick: function (e) {
        setMenuVisible(null), e.preventDefault(), handleRouting(item === null || item === void 0 ? void 0 : item.pageUrl);
      },
      href: item.pageUrl,
      className: "tw-pl-5 tw-pr-3 tw-py-3 tw-w-full tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white hover:tw-border-l-primary-text tw-flex tw-items-center"
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      title: item.label,
      width: 22,
      height: 22,
      className: "tw-mr-3"
    }), /*#__PURE__*/React.createElement("span", null, item.label)));
  }))));
};

module.exports = HeaderDropDown;
//# sourceMappingURL=HeaderDropdown.js.map
