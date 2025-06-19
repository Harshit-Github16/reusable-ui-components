import { extends as _extends } from './_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';
import PropTypes from './node_modules/prop-types/index.js';
import { useCombobox } from './node_modules/downshift/dist/downshift.esm.js';
import SearchIcon from './public/images/search.svg.js';
import SearchWhite from './public/images/searchWhite.svg.js';
import Image from 'next/image';

function StockSearchBar(_a) {
  var _b = _a.stockListData,
    stockListData = _b === void 0 ? [] : _b,
    isDarkMode = _a.isDarkMode;
  var _c = useState(stockListData),
    inputItems = _c[0],
    setInputItems = _c[1];
  var _d = useCombobox({
      items: inputItems,
      onInputValueChange: function (_a) {
        var inputValue = _a.inputValue;
        setInputItems(stockListData.filter(function (item) {
          return item.name.toLowerCase().includes((inputValue === null || inputValue === void 0 ? void 0 : inputValue.toLowerCase()) || '');
        }));
      },
      itemToString: function (item) {
        return item ? item.name : '';
      }
    }),
    isOpen = _d.isOpen,
    getMenuProps = _d.getMenuProps,
    getInputProps = _d.getInputProps,
    // getComboboxProps,
    getItemProps = _d.getItemProps,
    highlightedIndex = _d.highlightedIndex;
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-relative tw-ms-xl-4 tw-ms-3 autosuggest-header ".concat('')
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-top-[9px] tw-start-[9px] tw-absolute tw-z-[102] max-2xl:tw-w-[15px] max-2xl:tw-h-[15px]"
  }, isDarkMode && /*#__PURE__*/React.createElement(Image, {
    src: SearchWhite,
    alt: "search",
    title: "search",
    width: 20,
    height: 20
  }) || /*#__PURE__*/React.createElement(Image, {
    src: SearchIcon,
    alt: "search",
    title: "search",
    width: 20,
    height: 20
  })), /*#__PURE__*/React.createElement("input", _extends({}, getInputProps(), {
    placeholder: "Search stocks, IPOs, pages",
    className: "tw-pl-8 tw-py-2 tw-w-full tw-border tw-rounded"
  })), /*#__PURE__*/React.createElement("ul", _extends({}, getMenuProps(), {
    className: "tw-absolute tw-bg-white tw-z-[200] tw-w-full tw-shadow-lg tw-mt-1 tw-rounded"
  }), isOpen && inputItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", _extends({
      key: item.id
    }, getItemProps({
      item: item,
      index: index
    }), {
      className: "tw-p-2 tw-cursor-pointer ".concat(highlightedIndex === index ? 'tw-bg-blue-100' : '')
    }), item.name);
  })));
}
StockSearchBar.propTypes = {
  isSearchStockStatus: PropTypes.bool,
  stockListData: PropTypes.array,
  inputFocus: PropTypes.bool,
  setShowLoginPopup: PropTypes.func,
  changeSearchStockStatus: PropTypes.func,
  addSymbols: PropTypes.func,
  getSymbol: PropTypes.bool
};
StockSearchBar.defaultProps = {
  inputFocus: false
};

export { StockSearchBar as default };
//# sourceMappingURL=StockSearchBar.js.map
