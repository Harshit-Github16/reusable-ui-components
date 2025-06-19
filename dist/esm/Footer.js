import React, { useState, useEffect } from 'react';
import DesktopFooter from './DesktopFooter.js';
import MobileFooter from './MobileFooter.js';

// Custom hook to detect screen size
function useIsMobile() {
  var _a = useState(false),
    isMobile = _a[0],
    setIsMobile = _a[1];
  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(MobileFooter, props) : /*#__PURE__*/React.createElement(DesktopFooter, props));
}

export { Footer as default };
//# sourceMappingURL=Footer.js.map
