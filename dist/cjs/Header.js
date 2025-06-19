'use strict';

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var Image = require('next/image');
var moment = require('./node_modules/moment/moment.js');
var Link = require('next/link');
var React = require('react');
var Premium = require('./public/images/Premium.svg.js');
var combo_crown = require('./public/images/combo_crown.svg.js');
var logo = require('./public/images/logo.svg.js');
var menu = require('./public/images/menu.svg.js');
var menu_blue = require('./public/images/menu_blue.svg.js');
var menu_white = require('./public/images/menu_white.svg.js');
var notifications_active = require('./public/images/notifications_active.svg.js');
var notifications_white = require('./public/images/notifications_white.svg.js');
var nt_os_crown = require('./public/images/nt_os_crown.svg.js');
var nt_prime_crown = require('./public/images/nt_prime_crown.svg.js');
var schedule = require('./public/images/schedule.svg.js');
var shopping_cart = require('./public/images/shopping_cart.svg.js');
var shopping_cart_white = require('./public/images/shopping_cart_white.svg.js');
var HeaderDropdown = require('./HeaderDropdown.js');
var StockSearchBar = require('./StockSearchBar.js');
var HeaderQuickLinks = require('./HeaderQuickLinks.js');
var option_chain = require('./public/images/Header/option_chain.svg.js');
var oi_chart = require('./public/images/Header/oi_chart.svg.js');
var giftNiftyFill = require('./public/images/Header/gift-nifty-fill.svg.js');
var live_analytices_header = require('./public/images/Header/live_analytices_header.svg.js');
var bk_trending = require('./public/images/Header/bk_trending.svg.js');
var bk_timeflow = require('./public/images/Header/bk_timeflow.svg.js');
var simulator = require('./public/images/Header/simulator.svg.js');

var menuItems = [{
  label: "Option Chain",
  icon: option_chain,
  color: "#D80000",
  url: "/option-chain"
}, {
  label: "OI Charts",
  icon: oi_chart,
  color: "#04B800",
  url: "/oi-charts"
}, {
  label: "GIFT NIFTY",
  icon: giftNiftyFill,
  color: "#FFECE4",
  url: "/gift-nifty"
}, {
  label: "Live Analytics",
  icon: live_analytices_header,
  color: "#B98A2C",
  url: "/live-analytics"
}, {
  label: "Trending OI",
  icon: bk_trending,
  color: "#FE7E36",
  url: "/trending-oi"
}, {
  label: "OI Timeflow",
  icon: bk_timeflow,
  color: "#8579AD",
  url: "/oi-timeflow"
}, {
  label: "Futures",
  icon: bk_timeflow,
  color: "#FB3E82",
  url: "/futures"
}, {
  label: "TV Chart",
  icon: live_analytices_header,
  color: "#131722",
  url: "/tv-chart"
}, {
  label: "Option Simulator",
  icon: simulator,
  color: "#577EA4",
  url: "/option-simulator"
}, {
  label: "Movers",
  icon: shopping_cart,
  color: "#BC3081",
  url: "/movers"
}];
function Header(props) {
  var _a = props.isFullUrl,
    isFullUrl = _a === void 0 ? false : _a,
    userName = props.userName;
    props.userInfo;
    var planId = props.planId,
    isLoggedIn = props.isLoggedIn,
    isDarkMode = props.isDarkMode,
    crownType = props.crownType,
    isPrimeMember = props.isPrimeMember,
    isSpecialOffer = props.isSpecialOffer,
    isContextLoaded = props.isContextLoaded,
    stockSearchBarProps = props.stockSearchBarProps,
    notificationData = props.notificationData,
    logout = props.logout,
    setTheme = props.setTheme,
    onLoginPopup = props.onLoginPopup,
    setShowQrModal = props.setShowQrModal,
    setShowChangePassword = props.setShowChangePassword,
    _b = props.setHasDropDownOpen,
    setHasDropDownOpen = _b === void 0 ? function () {} : _b,
    redirectForNotifications = props.redirectForNotifications,
    handleRouting = props.handleRouting,
    activeHeaderIndex = props.activeHeaderIndex,
    setActiveHeaderIndex = props.setActiveHeaderIndex;
    props.alertHeight;
    var isShowSubscriptionBtn = props.isShowSubscriptionBtn,
    isSubscriptionPopupOpen = props.isSubscriptionPopupOpen,
    setisSubscriptionPopupOpen = props.setisSubscriptionPopupOpen,
    getGlobalSearchData = props.getGlobalSearchData;
  // const router = useRouter();
  var _c = React.useState(false),
    openSideMenu = _c[0],
    setOpenSideMenu = _c[1];
  var _d = React.useState(null),
    menuVisible = _d[0],
    setMenuVisible = _d[1];
  var dropdownRefs = React.useRef([]);
  // SSR-safe location checks
  var _e = React.useState(false),
    isHomePage = _e[0],
    setIsHomePage = _e[1];
  var _f = React.useState(false),
    isOptionStrategy = _f[0],
    setIsOptionStrategy = _f[1];
  var _g = React.useState(false),
    isPrimePlans = _g[0],
    setIsPrimePlans = _g[1];
  var _h = React.useState(false);
    _h[0];
    var setIsOptionChainPath = _h[1];
  var _j = React.useState(false);
    _j[0];
    var setIsClient = _j[1];
  React.useEffect(function () {
    setIsClient(true);
  }, []);
  React.useEffect(function () {
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === '/');
      setIsOptionStrategy(window.location.pathname === '/option-strategy-builder');
      setIsPrimePlans(window.location.pathname === '/primeplans');
      setIsOptionChainPath(optionChainPaths.some(function (path) {
        return "/".concat(window.location.pathname.split("/")[1]) === path;
      }));
    }
  }, []);
  React.useEffect(function () {
    var handleBodyClick = function (event) {
      var dropdownMenu = document.querySelector('.tw-animate-growDown');
      var targetElement = event.target;
      if (dropdownMenu && !dropdownMenu.contains(targetElement)) {
        setMenuVisible(null);
        setHasDropDownOpen(false);
      }
    };
    document.body.addEventListener('click', handleBodyClick);
    return function () {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);
  var handleMenuToggle = function (e, menuIndex) {
    if (e && typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }
    if ("/".concat(window.location.pathname.split('/')[1]) == '/ipo') {
      if (activeHeaderIndex == menuIndex) {
        setMenuVisible(null);
        setHasDropDownOpen(false);
        setActiveHeaderIndex(null);
      } else {
        setActiveHeaderIndex(menuIndex);
        setHasDropDownOpen(true);
        setMenuVisible(function (prevMenu) {
          return prevMenu === menuIndex ? null : menuIndex;
        });
      }
    } else {
      if (menuIndex === menuVisible) {
        setMenuVisible(null);
        setHasDropDownOpen(false);
      } else {
        setHasDropDownOpen(true);
        setMenuVisible(function (prevMenu) {
          return prevMenu === menuIndex ? null : menuIndex;
        });
      }
    }
  };
  React.useEffect(function () {
    if (openSideMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return function () {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openSideMenu]);
  React.useEffect(function () {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [isDarkMode]);
  function onLogout() {
    logout(null);
    setMenuVisible(null);
    setHasDropDownOpen(false);
  }
  function onPassword() {
    setMenuVisible(null);
    setHasDropDownOpen(false);
    setShowChangePassword(true);
    setOpenSideMenu(false);
  }
  function onQrCode() {
    setShowQrModal(true);
    setOpenSideMenu(false);
  }
  var optionChainPaths = ["/nse-option-chain", "/bse-option-chain", "/commodities-option-chain-nse", "/option-chain", "/ltp-calculator"];
  return /*#__PURE__*/React.createElement("nav", {
    className: "tw-w-full tw-bg-white tw-border-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "/",
    className: "tw-flex tw-items-center"
  }, /*#__PURE__*/React.createElement(Image, {
    src: logo,
    alt: "Logo",
    width: 100,
    height: 100,
    className: "tw-h-10 tw-w-36",
    priority: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-relative tw-lg-flex tw-items-center lg:tw-block  tw-mx-3"
  }, /*#__PURE__*/React.createElement(StockSearchBar, _rollupPluginBabelHelpers.extends({}, stockSearchBarProps, {
    isDarkMode: isDarkMode,
    getGlobalSearchData: getGlobalSearchData
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "lg:tw-flex xl:tw-gap-4 2xl:tw-gap-[1.5rem] tw-gap-3 tw-items-center "
  }, /*#__PURE__*/React.createElement("li", {
    className: "tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ".concat(menuVisible == 0 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white", " tw-group   hover:!tw-text-primary-text tw-animate-growDown")
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-flex tw-items-center",
    onClick: function (e) {
      return handleMenuToggle(e, 0);
    }
  }, "Analytics", /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faChevronDown,
    width: 12,
    height: 12,
    className: "tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ".concat(menuVisible == 0 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]", " tw-transition-transform tw-duration-300")
  }))), /*#__PURE__*/React.createElement("li", {
    className: "tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ".concat(menuVisible == 6 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white", " tw-group   hover:!tw-text-primary-text tw-animate-growDown")
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-flex tw-items-center",
    onClick: function (e) {
      return handleMenuToggle(e, 6);
    }
  }, "Backtesting", /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faChevronDown,
    width: 12,
    height: 12,
    className: "tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ".concat(menuVisible == 6 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]", " tw-transition-transform tw-duration-300")
  }))), /*#__PURE__*/React.createElement("li", {
    className: "tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ".concat(menuVisible == 1 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white", " tw-group   hover:!tw-text-primary-text")
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-flex tw-items-center",
    onClick: function (e) {
      return handleMenuToggle(e, 1);
    }
  }, "Options", /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faChevronDown,
    width: 12,
    height: 12,
    className: "tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ".concat(menuVisible == 1 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]", " tw-transition-transform tw-duration-300")
  }))), /*#__PURE__*/React.createElement("li", {
    className: "tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ".concat(menuVisible == 2 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white", " tw-group   hover:!tw-text-primary-text")
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-flex tw-items-center",
    onClick: function (e) {
      return handleMenuToggle(e, 2);
    }
  }, "Resources", /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faChevronDown,
    width: 12,
    height: 12,
    className: "tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ".concat(menuVisible == 2 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]", " tw-transition-transform tw-duration-300")
  }))), isContextLoaded && !isPrimeMember && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    onClick: function (e) {
      e.preventDefault(), handleRouting('/primeplans');
    },
    href: "/primeplans?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track",
    className: "tw-flex tw-gap-2 tw-items-center tw-font-semibold tw-cursor-pointer xl:tw-text-lg tw-text-base tw-select-none !tw-text-primary-text"
  }, /*#__PURE__*/React.createElement(Image, {
    alt: "Go Prime",
    title: "Go Prime",
    src: Premium,
    width: 25,
    height: 25
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "max-xl:tw-hidden text-nowrap"
  }, "Go Prime"))), isContextLoaded && isSpecialOffer && isLoggedIn && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    onClick: function (e) {
      e.preventDefault(), handleRouting('/renew-plan');
    },
    href: "/renew-plan?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track",
    className: "tw-flex tw-gap-2 tw-items-center tw-font-semibold tw-cursor-pointer 2xl:tw-text-lg tw-select-none !tw-text-primary-text hover:tw-text-primary-text"
  }, /*#__PURE__*/React.createElement(Image, {
    alt: "Special Offer",
    title: "special offer",
    src: Premium,
    width: 25,
    height: 25
  }), /*#__PURE__*/React.createElement("span", {
    className: "max-xl:tw-hidden tw-text-nowrap"
  }, "Special Offer"))), !isDarkMode ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Image, {
    src: menuVisible == 3 ? menu_blue : menu,
    alt: "Menu",
    title: "Menu",
    width: 18,
    height: 12,
    className: "tw-cursor-pointer",
    onClick: function (e) {
      return handleMenuToggle(e, 3);
    }
  })) : /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Image, {
    src: menuVisible == 3 ? menu_blue : menu_white,
    alt: "Menu",
    title: "Menu",
    width: 18,
    height: 12,
    className: "tw-cursor-pointer",
    onClick: function (e) {
      return handleMenuToggle(e, 3);
    }
  })), planId && /*#__PURE__*/React.createElement("li", {
    className: "tw-relative"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: function (e) {
      e.preventDefault(), handleRouting('/checkout');
    },
    href: "/checkout"
  }, /*#__PURE__*/React.createElement(Image, {
    src: !isDarkMode ? shopping_cart : shopping_cart_white,
    alt: "shopping cart",
    title: "shopping cart",
    width: 24,
    height: 24,
    className: "tw-cursor-pointer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-w-2 tw-h-2 tw-bg-[#e6191e] tw-rounded-full tw-absolute tw-top-0 tw-right-0"
  }))), isLoggedIn && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Image, {
    src: !isDarkMode ? notifications_active : notifications_white,
    alt: "notification",
    title: "notification",
    width: 24,
    height: 24,
    className: "tw-cursor-pointer",
    onClick: function (e) {
      return handleMenuToggle(e, 5);
    }
  }), notificationData && /*#__PURE__*/React.createElement("div", {
    className: "tw-p-4 tw-flex tw-gap-3 tw-absolute ".concat(notificationData.length > 0 ? 'tw-h-[400px]' : '', " tw-top-[54px] tw-justify-center tw-right-[180px] tw-w-1/4 tw-rounded tw-bg-white dark:tw-bg-black tw-w-25 tw-mt-3 tw-overflow-auto tw-shadow-custom dark:tw-shadow-custom-dark smooth-dropdown ").concat(menuVisible == 5 ? 'tw-scale-y-100' : '-tw-scale-y-0')
  }, /*#__PURE__*/React.createElement("div", null, notificationData.length > 0 ? notificationData.map(function (item, key) {
    var sentDate = moment(item.sent_date);
    var formattedDate = sentDate.format("DD-MM-YYYY");
    var formattedTime = sentDate.format("hh:mm A");
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "tw-my-2 ".concat(key !== notificationData.length - 1 ? "tw-border-b tw-border-[#dddddd]" : "")
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function () {
        return redirectForNotifications(item.notification_page_flag);
      },
      className: "tw-py-2 tw-group tw-duration-300 tw-block tw-cursor-pointer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-flex tw-items-center tw-justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tw-text-base group-hover:!tw-text-primary-text tw-duration-300 dark:tw-text-white tw-font-semibold"
    }, item.notification_title), /*#__PURE__*/React.createElement("span", {
      className: "tw-text-[#999999] tw-flex tw-items-center tw-justify-between tw-text-sm tw-gap-2"
    }, /*#__PURE__*/React.createElement(Image, {
      src: schedule,
      alt: "notification time",
      title: "notification time",
      width: 20,
      height: 20
    }), formattedTime, " | ", formattedDate)), /*#__PURE__*/React.createElement("span", {
      className: "tw-text-sm group-hover:!tw-text-primary-text tw-duration-300 dark:tw-text-white"
    }, item.notification_text)));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "tw-text-base tw-text-[#999999]"
  }, "Notification not found!")))), isLoggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    className: "tw-relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-w-[40px] tw-h-[40px] tw-flex tw-items-center tw-justify-center tw-rounded-full tw-font-bold tw-cursor-pointer tw-bg-[#ECF5FE] tw-text-primary-text tw-text-base tw-uppercase tw-select-none",
    onClick: function (e) {
      return handleMenuToggle(e, 4);
    }
  }, userName), crownType && crownType != 'non-prime' && /*#__PURE__*/React.createElement("div", {
    className: "tw-relative"
  }, /*#__PURE__*/React.createElement(Image, {
    src: crownType == "combo-prime" ? combo_crown : crownType == "nt-prime" ? nt_prime_crown : crownType == "os-prime" ? nt_os_crown : '',
    alt: crownType,
    title: crownType,
    width: 23,
    height: 23,
    className: "tw-absolute tw-left-0 tw-right-0 tw-m-auto -tw-top-[50px]"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-gap-2 tw-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-relative tw-inline-flex tw-items-center tw-h-6 tw-bg-no-repeat tw-rounded-full tw-w-12 tw-cursor-pointer tw-transition-colors tw-duration-300 ".concat(isDarkMode ? "tw-bg-dark-bg" : "tw-bg-light-bg"),
    onClick: setTheme
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-inline-block tw-w-6 tw-h-6 tw-transform tw-bg-no-repeat tw-rounded-full tw-bg-center tw-transition-transform tw-duration-300 ".concat(isDarkMode ? "tw-translate-x-5 tw-bg-dark-mode" : "tw-translate-x-1 tw-bg-light-mode")
  })), /*#__PURE__*/React.createElement("p", {
    className: "tw-text-[15px] tw-select-none tw-font-medium tw-text-primary-text tw-mb-0"
  }, isDarkMode ? "Dark" : "Light")))) : /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "tw-py-1 tw-px-3 xl:tw-px-4 tw-text-sm xl:tw-text-base tw-outline-none tw-text-white tw-bg-primary-text tw-rounded-[4px] tw-font-semibold tw-border-primary-text tw-border   hover:tw-bg-white dark:tw-bg-[#333] hover:tw-text-primary-text",
    onClick: onLoginPopup
  }, "Login / Register"))), /*#__PURE__*/React.createElement(HeaderDropdown, {
    isFullUrl: isFullUrl,
    menuVisible: menuVisible,
    setMenuVisible: setMenuVisible,
    onLogout: onLogout,
    onPassword: onPassword,
    onQrCode: onQrCode,
    dropdownRefs: dropdownRefs,
    isLoggedIn: isLoggedIn,
    isDarkMode: isDarkMode,
    handleRouting: handleRouting
  })), !(isHomePage || isOptionStrategy || isPrimePlans) && /*#__PURE__*/React.createElement("div", {
    className: "tw-m-0 tw-p-0 lg:tw-block tw-hidden"
  }, /*#__PURE__*/React.createElement(HeaderQuickLinks, {
    handleRouting: handleRouting,
    isShowSubscriptionBtn: isShowSubscriptionBtn,
    isSubscriptionPopupOpen: isSubscriptionPopupOpen,
    setisSubscriptionPopupOpen: setisSubscriptionPopupOpen,
    isFullUrl: isFullUrl
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-flex tw-items-center tw-px-2 tw-py-1 tw-gap-2 tw-border-t tw-bg-white",
    style: {
      minHeight: '20px'
    }
  }, menuItems.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(Link, {
      key: item.label,
      href: item.url,
      className: idx === 0 ? 'tw-flex tw-items-center tw-gap-1  tw-text-gray-700 tw-font-medium tw-px-3 tw-py-1 tw-relative tw-text-[11px]' : 'tw-flex tw-items-center tw-gap-1  tw-text-gray-700 tw-font-medium tw-px-3 tw-py-1 tw-text-[11px]'
    }, /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      alt: item.label,
      width: 20,
      height: 20
    }), /*#__PURE__*/React.createElement("span", null, item.label), idx === 0 && /*#__PURE__*/React.createElement("span", {
      className: "tw-absolute tw-left-0 tw-bottom-0 tw-w-full tw-h-[4px] tw-text-[10px]",
      style: {
        background: '#D80000'
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-ml-auto tw-flex tw-items-center tw-gap-2"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "/contact-us",
    className: "tw-text-blue-600 tw-text-sm tw-underline hover:tw-text-blue-800"
  }, "Contact Us"), /*#__PURE__*/React.createElement("span", {
    className: "tw-h-5 tw-border-l tw-border-gray-300 tw-mx-2"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tw-text-sm tw-text-gray-600 tw-flex tw-items-center"
  }, "+91 94685 47504"))));
}

module.exports = Header;
//# sourceMappingURL=Header.js.map
