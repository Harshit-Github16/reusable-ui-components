import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

var Footer = function (_a) {
  var helpfulLinks = _a.helpfulLinks,
    otherLinks = _a.otherLinks,
    popularLinks = _a.popularLinks,
    socialLinks = _a.socialLinks,
    appStoreLinks = _a.appStoreLinks,
    newsletter = _a.newsletter,
    copyright = _a.copyright,
    _b = _a.className,
    className = _b === void 0 ? '' : _b;
  var _c = useState(''),
    subscribeEmail = _c[0],
    setSubscribeEmail = _c[1];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-gray-900 text-white py-8 px-4 ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-auto sm:w-auto w-6/12 sm:order-1 order-3 mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, "HELPFUL LINKS"), /*#__PURE__*/React.createElement("ul", null, helpfulLinks.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      href: item.pageUrl,
      className: "text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faChevronRight,
      width: 10,
      className: "text-[10px] me-2"
    }), /*#__PURE__*/React.createElement("span", null, item.label)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-auto sm:w-auto w-6/12 sm:order-2 order-4 mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, "OTHER LINKS"), /*#__PURE__*/React.createElement("ul", null, otherLinks.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      href: item.pageUrl,
      className: "text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faChevronRight,
      width: 10,
      className: "text-[10px] me-2"
    }), /*#__PURE__*/React.createElement("span", null, item.label)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-auto sm:order-3 order-2 w-full sm:w-auto mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, "POPULAR LINKS"), /*#__PURE__*/React.createElement("ul", {
    className: "sm:block flex justify-between"
  }, popularLinks.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      href: item.pageUrl,
      className: "text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
    }, /*#__PURE__*/React.createElement("span", null, item.label)));
  }))), newsletter && (/*#__PURE__*/React.createElement("div", {
    className: "lg:flex-auto xl:mt-0 md:my-5 mx-auto lg:my-0 lg:w-auto sm:w-2/4 w-full text-start md:text-center lg:text-start sm:order-4 order-1 mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, newsletter.title || 'SUBSCRIBE TO OUR NEWSLETTER'), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-[13px] mb-3"
  }, newsletter.description || 'Sign up & receive the latest tips via email.'), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: subscribeEmail,
    onChange: function (e) {
      return setSubscribeEmail(e.target.value);
    },
    className: "bg-white text-gray-900 px-4 lg:py-3 py-2 outline-none rounded-tl-sm rounded-bl-sm mr-2 w-3/5",
    placeholder: "Email Address"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      return newsletter.onSubmit(subscribeEmail);
    },
    className: "bg-blue-600 rounded-tr-sm rounded-br-sm text-white lg:py-3 py-2 px-3 border border-transparent font-medium transition-all duration-300 hover:bg-transparent hover:text-blue-600 hover:border-blue-600"
  }, "Subscribe")), appStoreLinks && (/*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center lg:justify-start justify-center"
  }, appStoreLinks.playStore && (/*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.playStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/play-store.png",
    alt: "Play Store",
    className: "mr-3 cursor-pointer h-[45px]"
  }))), appStoreLinks.appStore && (/*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.appStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/app-store.png",
    alt: "App Store",
    className: "mr-3 cursor-pointer h-[45px]"
  })))))))), appStoreLinks && (/*#__PURE__*/React.createElement("div", {
    className: "sm:hidden flex items-center my-5 justify-center"
  }, appStoreLinks.playStore && (/*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.playStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/play-store.png",
    alt: "Play Store",
    className: "mr-3 cursor-pointer h-[45px]"
  }))), appStoreLinks.appStore && (/*#__PURE__*/React.createElement("a", {
    href: appStoreLinks.appStore,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/app-store.png",
    alt: "App Store",
    className: "mr-3 cursor-pointer h-[45px]"
  }))))), /*#__PURE__*/React.createElement("ul", {
    className: "flex justify-center gap-4 mt-5 md:mt-0"
  }, socialLinks.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: item.link,
      rel: "noopener noreferrer",
      className: "flex items-center justify-center w-9 h-9 rounded-full ".concat(index === 0 ? 'bg-[#485a96]' : index === 1 ? 'bg-[#333]' : index === 2 ? 'bg-[#dc1716]' : index === 3 ? 'bg-[#0077b5]' : index === 4 ? 'bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]' : index === 5 ? 'bg-[#2aa1d4]' : 'bg-black')
    }, /*#__PURE__*/React.createElement("img", {
      src: item.icon,
      className: "transition duration-300 ease-in-out hover:rotate-y-180 hover:scale-x-[-1] w-5 h-5",
      alt: "social icon"
    })));
  })), copyright && (/*#__PURE__*/React.createElement("div", {
    className: "m-auto border-t md:w-2/4 mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-gray-400 text-center mt-4"
  }, "Copyright \u00A9", ' ', copyright.link ? (/*#__PURE__*/React.createElement("a", {
    href: copyright.link,
    className: "text-blue-400"
  }, copyright.linkText)) : copyright.text, copyright.version && /*#__PURE__*/React.createElement("p", {
    className: "mb-0"
  }, "All rights reserved ver ", copyright.version))))));
};

export { Footer };
//# sourceMappingURL=index.esm.js.map
