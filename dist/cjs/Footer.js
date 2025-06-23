'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DesktopFooter = require('./DesktopFooter.js');
var MobileFooter = require('./MobileFooter.js');

// Custom hook to detect screen size
function useIsMobile() {
  var _a = React.useState(false),
    isMobile = _a[0],
    setIsMobile = _a[1];
  React.useEffect(function () {
    var checkIsMobile = function () {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    // Check on mount
    checkIsMobile();
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    // Cleanup
    return function () {
      return window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  return isMobile;
}
function Footer(props) {
  var isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(MobileFooter.default, props) : /*#__PURE__*/React.createElement(DesktopFooter.default, props));
}

exports.default = Footer;
//# sourceMappingURL=Footer.js.map
