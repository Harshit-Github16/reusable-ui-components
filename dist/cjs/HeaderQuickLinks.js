'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Image = require('next/image');
var Link = require('next/link');
var stacked_bar_chart = require('./public/images/stacked_bar_chart.svg.js');
var chart_data__1_ = require('./public/images/chart_data (1).svg.js');
var giftNiftySets1 = require('./public/images/gift-nifty-sets-1.svg.js');
var waterfall_chart__1_ = require('./public/images/waterfall_chart (1).svg.js');
var avg_time__1_ = require('./public/images/avg_time (1).svg.js');
var finance__1_ = require('./public/images/finance (1).svg.js');
var link_3x = require('./public/images/link@3x.svg.js');
var tv_icon = require('./public/images/tv_icon.svg.js');
var diversity_2 = require('./public/images/diversity_2.svg.js');
var table_chart_view__1_ = require('./public/images/table_chart_view (1).svg.js');
var arrow_left_light1 = require('./public/images/arrow_left light-1.svg.js');
var arrow_left_Dark = require('./public/images/arrow_left Dark.svg.js');
var arrow_right_Light = require('./public/images/arrow_right Light.svg.js');
var arrow_right_dark = require('./public/images/arrow_right dark.svg.js');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var URLConfig = {
  optionChain: ['/nse-option-chain', '/bse-option-chain', '/commodities-option-chain-nse'],
  oiCharts: ['/live-nifty-open-interest', '/banknifty-live-oi-tracker', '/live-finnifty-open-interest', '/live-midcpnifty-open-interest', '/nifty-live-change-in-oi', '/live-sensex-open-interest', '/bank-nifty-live-oi-change', '/finnifty-live-change-in-oi', '/midcpnifty-live-change-in-oi', '/sensex-live-change-in-oi', '/nifty-put-call-ratio', '/nifty-put-call-ratio-volume', '/banknifty-intra-pcr-trend', '/finnifty-put-call-ratio', '/midcpnifty-put-call-ratio', '/sensex-put-call-ratio', '/banknifty-intra-volume-pcr-trend', '/finnifty-put-call-ratio-volume', '/midcpnifty-put-call-ratio-volume', '/sensex-put-call-ratio-volume', '/options-max-pain-chart-live', '/bse-options-max-pain-chart-live', '/stock-options-chart'],
  giftNifty: ['/gift-nifty-live'],
  liveAnalytics: ['/live-analytics', '/banknifty-live-analysis', '/finnifty-live-analysis', '/midcpnifty-live-analysis'],
  trendingOi: ['/nifty-trending-oi', '/banknifty-trending-oi', '/finnifty-trending-oi', '/midcpnifty-trending-oi', '/sensex-trending-oi'],
  oiTimeflow: ['/ltp-calculator'],
  futures: ['/stock-futures', '/bulk-deals-data', '/ban-list', '/derivative-summary', '/commodity-futures'],
  tvChart: ['/share-price-chart/nifty%2050'],
  optionSimulator: ['/options-simulator/nifty'],
  movers: ['/nifty50-contributors', '/nifty-next50-contributors', '/nifty-bank-contributors', '/nifty-fin-contributors', '/midcap-nifty-contributors', '/midcap-select-contributors']
};
var menuItems = [{
  title: 'Option Chain',
  image: link_3x.default,
  pageUrls: URLConfig.optionChain
}, {
  title: 'OI Charts',
  image: stacked_bar_chart.default,
  pageUrls: URLConfig.oiCharts
}, {
  title: 'GIFT NIFTY',
  image: giftNiftySets1.default,
  pageUrls: URLConfig.giftNifty
}, {
  title: 'Live Analytics',
  image: waterfall_chart__1_.default,
  pageUrls: URLConfig.liveAnalytics
}, {
  title: 'Trending OI',
  image: chart_data__1_.default,
  pageUrls: URLConfig.trendingOi
}, {
  title: 'OI Timeflow',
  image: avg_time__1_.default,
  pageUrls: URLConfig.oiTimeflow
}, {
  title: 'Futures',
  image: finance__1_.default,
  pageUrls: URLConfig.futures
}, {
  title: 'TV Chart',
  image: tv_icon.default,
  pageUrls: URLConfig.tvChart
},
// Opens in a new tab
{
  title: 'Option Simulator',
  image: table_chart_view__1_.default,
  pageUrls: URLConfig.optionSimulator
}, {
  title: 'Movers',
  image: diversity_2.default,
  pageUrls: URLConfig.movers
}];
var getBgClass = function (title) {
  switch (title) {
    case 'Option Chain':
      return {
        bgClass: 'tw-bg-[#D80000]',
        hoverTextClass: 'hover:tw-text-[#D80000]'
      };
    case 'OI Charts':
      return {
        bgClass: 'tw-bg-[#04B800]',
        hoverTextClass: 'hover:tw-text-[#04B800]'
      };
    case 'GIFT NIFTY':
      return {
        bgClass: 'tw-bg-[#FFECE4]',
        hoverTextClass: 'hover:tw-text-[#f68e41]'
      };
    case 'Live Analytics':
      return {
        bgClass: 'tw-bg-[#B98A2C]',
        hoverTextClass: 'hover:tw-text-[#B98A2C]'
      };
    case 'Trending OI':
      return {
        bgClass: 'tw-bg-[#FE7E36]',
        hoverTextClass: 'hover:tw-text-[#FE7E36]'
      };
    case 'OI Timeflow':
      return {
        bgClass: 'tw-bg-[#8579AD]',
        hoverTextClass: 'hover:tw-text-[#8579AD]'
      };
    case 'Futures':
      return {
        bgClass: 'tw-bg-[#FB3E82]',
        hoverTextClass: 'hover:tw-text-[#FB3E82]'
      };
    case 'TV Chart':
      return {
        bgClass: 'tw-bg-[#131722]',
        hoverTextClass: 'hover:tw-text-[#131722]'
      };
    case 'Option Simulator':
      return {
        bgClass: 'tw-bg-[#577EA4]',
        hoverTextClass: 'hover:tw-text-[#577EA4]'
      };
    case 'Movers':
      return {
        bgClass: 'tw-bg-[#BC3081]',
        hoverTextClass: 'hover:tw-text-[#BC3081]'
      };
    default:
      return {
        bgClass: 'tw-bg-[#04B800]',
        hoverTextClass: 'hover:tw-text-[#04B800]'
      };
  }
};
var getCircleClass = function (title) {
  switch (title) {
    case 'Option Chain':
      return {
        borderColor: 'tw-border-b-[#D80000]',
        textColor: 'tw-text-[#D80000] dark:tw-text-[#FF6666]'
      };
    case 'OI Charts':
      return {
        borderColor: 'tw-border-b-[#04B800]',
        textColor: 'tw-text-[#04B800] dark:tw-text-[#6FDB6F]'
      };
    case 'GIFT NIFTY':
      return {
        borderColor: 'tw-border-b-[#f68e41]',
        textColor: 'tw-text-[#f68e41] dark:tw-text-[#FF9E41]'
      };
    case 'Live Analytics':
      return {
        borderColor: 'tw-border-b-[#B98A2C]',
        textColor: 'tw-text-[#B98A2C] dark:tw-text-[#E6B85C]'
      };
    case 'Trending OI':
      return {
        borderColor: 'tw-border-b-[#fe7e36]',
        textColor: 'tw-text-[#fe7e36] dark:tw-text-[#FF9A61]'
      };
    case 'OI Timeflow':
      return {
        borderColor: 'tw-border-b-[#8579AD]',
        textColor: 'tw-text-[#8579AD] dark:tw-text-[#A89ED2]'
      };
    case 'Futures':
      return {
        borderColor: 'tw-border-b-[#FB3E82]',
        textColor: 'tw-text-[#FB3E82] dark:tw-text-[#FF699A]'
      };
    case 'TV Chart':
      return {
        borderColor: 'tw-border-b-[#131722]',
        textColor: 'tw-text-[#131722] dark:tw-text-[#C0C0C0]'
      };
    case 'Option Simulator':
      return {
        borderColor: 'tw-border-b-[#577EA4]',
        textColor: 'tw-text-[#577EA4] dark:tw-text-[#7FAACD]'
      };
    case 'Movers':
      return {
        borderColor: 'tw-border-b-[#BC3081]',
        textColor: 'tw-text-[#BC3081] dark:tw-text-[#E15FA5]'
      };
    default:
      return {
        borderColor: '',
        textColor: ''
      };
  }
};
var HeaderQuickLinks = function (props) {
  var isFullUrl = props.isFullUrl,
    handleRouting = props.handleRouting,
    isShowSubscriptionBtn = props.isShowSubscriptionBtn;
    props.isSubscriptionPopupOpen;
    var setisSubscriptionPopupOpen = props.setisSubscriptionPopupOpen;
  var scrollRef = React.useRef(null);
  var BASE_URL = 'https://www.niftytrader.in';
  // const router = useRouter();
  var _a = React.useState(false),
    canScrollLeft = _a[0],
    setCanScrollLeft = _a[1];
  var _b = React.useState(false),
    canScrollRight = _b[0],
    setCanScrollRight = _b[1];
  var _c = React.useState(''),
    activeLink = _c[0],
    setActiveLink = _c[1];
  var _d = React.useState(''),
    pathname = _d[0],
    setPathname = _d[1];
  var updateArrows = function () {
    if (scrollRef.current) {
      var _a = scrollRef.current,
        scrollLeft = _a.scrollLeft,
        scrollWidth = _a.scrollWidth,
        clientWidth = _a.clientWidth;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };
  React.useEffect(function () {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return function () {
      return window.removeEventListener('resize', updateArrows);
    };
  }, []);
  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);
  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      var currentPath = pathname;
      var isPathActive_1 = function (path, urls) {
        return urls.some(function (url) {
          return path.startsWith(url);
        });
      };
      var determineActiveLink = function (path) {
        var activeItem = menuItems.find(function (item) {
          return isPathActive_1(path, item.pageUrls);
        });
        return activeItem ? activeItem.title : '';
      };
      setActiveLink(determineActiveLink(currentPath));
    }
  }, [pathname]);
  var scroll = function (direction) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -150 : 150,
        behavior: 'smooth'
      });
    }
  };
  var generateHref = function (pageUrl) {
    return isFullUrl ? new URL(pageUrl || '', BASE_URL).href : pageUrl;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-relative tw-flex tw-justify-between tw-bg-white tw-ps-[20px] tw-shadow-[0px_2px_8px_0px_#0000001A] tw-border tw-border-[#e5e5e5] dark:tw-border-[#443c3c] dark:tw-bg-[#333]"
  }, canScrollLeft && /*#__PURE__*/React.createElement("span", {
    onClick: function () {
      return scroll('left');
    },
    className: "tw-absolute tw-h-[34.5px] dark:tw-bg-[#333] tw-bg-white tw-left-[0px] tw-z-10 tw-top-[-2%] -tw-translate-y-1/2 tw-cursor-pointer"
  }, /*#__PURE__*/React.createElement(Image, {
    src: arrow_left_Dark.default,
    alt: "left icon",
    width: 25,
    height: 25,
    className: "tw-pt-[2px] dark:tw-hidden"
  }), /*#__PURE__*/React.createElement(Image, {
    src: arrow_left_light1.default,
    alt: "left icon",
    width: 25,
    height: 25,
    className: "tw-pt-[2px] tw-hidden dark:tw-block"
  })), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    onScroll: updateArrows,
    className: "tw-flex tw-justify-between tw-w-full tw-space-x-3 tw-overflow-x-auto tw-scrollbar-hide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-text-nowrap"
  }, menuItems.map(function (item, index) {
    var _a = getBgClass(item.title),
      bgClass = _a.bgClass,
      hoverTextClass = _a.hoverTextClass;
    var _b = getCircleClass(item.title),
      borderColor = _b.borderColor,
      textColor = _b.textColor;
    var isActive = activeLink === item.title;
    return /*#__PURE__*/React.createElement("ul", {
      key: index
    }, /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "tw-flex tw-items-center tw-transition-all tw-font-normal dark:tw-text-white tw-flex-shrink-0 tw-border-b-[2px]  tw-border-transparent ".concat(isActive ? "tw-border-b-[2px] ".concat(borderColor, " ").concat(textColor, " ") : '')
    }, item.title == "TV Chart" ? /*#__PURE__*/React.createElement(Link, {
      href: "".concat(generateHref(item === null || item === void 0 ? void 0 : item.pageUrls[0]), "?utm_source=Sub-Menu&utm_medium=2nd-Strip&utm_campaign=Click-Track"),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "tw-items-center tw-flex tw-py-1 tw-pb-1 tw-pe-3 tw-border-b-[2px] tw-border-transparent ".concat(hoverTextClass, " ").concat(isActive ? "".concat(textColor, " tw-border-b-[2px] ").concat(borderColor) : 'tw-text-[#333] dark:tw-text-white')
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-rounded parent-div tw-text-center tw-flex tw-items-center tw-w-[18px] tw-h-[18px] tw-justify-center ".concat(bgClass)
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.image,
      alt: item.title,
      width: 12,
      height: 12
    })), /*#__PURE__*/React.createElement("span", {
      className: "tw-ml-[6px] tw-text-[10px] tw-font-[500]"
    }, item.title)) : /*#__PURE__*/React.createElement(Link, {
      onClick: function (e) {
        e.preventDefault(), handleRouting("".concat(item.pageUrls[0], "?utm_source=Sub-Menu&utm_medium=2nd-Strip&utm_campaign=Click-Track"));
      },
      href: "".concat(generateHref(item === null || item === void 0 ? void 0 : item.pageUrls[0]), "?utm_source=Sub-Menu&utm_medium=2nd-Strip&utm_campaign=Click-Track"),
      target: item.title == "TV Chart" ? '_blank' : '_self',
      rel: "noopener noreferrer",
      className: "tw-items-center tw-font-normal tw-flex tw-py-1 tw-pb-1 tw-pe-3 tw-border-b-[2px] tw-border-transparent ".concat(hoverTextClass, " ").concat(isActive ? "".concat(textColor, " tw-border-b-[2px] ").concat(borderColor) : 'tw-text-[#333] dark:tw-text-white')
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-rounded parent-div tw-text-center tw-flex tw-items-center tw-w-[18px] tw-h-[18px] tw-justify-center ".concat(bgClass)
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.image,
      alt: item.title,
      width: 12,
      height: 12
    })), /*#__PURE__*/React.createElement("span", {
      className: "tw-ml-[6px] tw-text-[10px] tw-font-[500]"
    }, item.title))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-ms-auto tw-place-self-auto tw-flex tw-items-center tw-text-nowrap tw-font-sans tw-tracking-wide"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "https://www.niftytrader.in/contact-us",
    className: "tw-font-[450] tw-text-[14px] dark:tw-text-[#409FFE] tw-text-[#236AD4] "
  }, /*#__PURE__*/React.createElement("span", {
    className: " tw-underline hover:tw-underline dark:tw-text-[#409FFE] tw-text-[#236AD4]   tw-underline-offset-4 hover:tw-decoration-[#236AD4] tw-decoration-[#236AD4]"
  }, "Contact Us")), /*#__PURE__*/React.createElement("div", {
    className: "tw-h-[20px] dark:tw-border-[#443c3c] tw-border-l-[2px] tw-mx-2 tw-border-gray-300"
  }), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    target: "_blank",
    className: "tw-flex tw-items-center tw-text-[14px] tw-font-[450] dark:tw-text-[#409FFE] tw-text-[#236AD4] tw-pointer-events-none tw-my-auto"
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faPhone,
    width: 15,
    height: 15,
    className: " tw-text-[#236AD4] dark:tw-text-[#409FFE]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tw-ps-1 hover:tw-underline tw-text-[#236AD4] dark:tw-text-[#409FFE] hover:tw-decoration-[rgb(35,106,212)]"
  }, "+91 94685 47504")), isShowSubscriptionBtn && /*#__PURE__*/React.createElement("div", {
    className: "tw-top-2 tw-right-0 tw-bg-blue-600 tw-ms-2 tw-text-white tw-text-sm tw-font-semibold tw-px-4 tw-py-1 tw-origin-top-right tw-pe-2 tw-w-[142px] tw-rounded-tl-[50px] tw-rounded-bl-none tw-cursor-pointer tw-flex tw-items-center",
    onClick: function () {
      return setisSubscriptionPopupOpen(true);
    }
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faStar,
    className: "tw-mr-2 tw-w-[15px] tw-h-[15px] tw-max-h-[15px]"
  }), "Upgrade Plan"))), canScrollRight && /*#__PURE__*/React.createElement("span", {
    onClick: function () {
      return scroll('right');
    },
    className: "tw-cursor-pointer tw-absolute tw-h-[34.5px] dark:tw-bg-[#333] tw-right-[0px] tw-bg-white tw-top-[-2%] -tw-translate-y-1/2"
  }, /*#__PURE__*/React.createElement(Image, {
    src: arrow_right_dark.default,
    alt: "right icon",
    width: 25,
    height: 25,
    className: "tw-pt-[2px] dark:tw-hidden"
  }), /*#__PURE__*/React.createElement(Image, {
    src: arrow_right_Light.default,
    alt: "right icon",
    width: 25,
    height: 25,
    className: "tw-pt-[2px] tw-hidden dark:tw-block"
  })));
};

exports.default = HeaderQuickLinks;
//# sourceMappingURL=HeaderQuickLinks.js.map
