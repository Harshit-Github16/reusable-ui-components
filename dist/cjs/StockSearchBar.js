'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('./node_modules/prop-types/index.js');
var downshift_esm = require('./node_modules/downshift/dist/downshift.esm.js');
var search = require('./public/images/search.svg.js');
var searchWhite = require('./public/images/searchWhite.svg.js');
var Image = require('next/image');

function StockSearchBar(_a) {
  var _b = _a.stockListData,
    stockListData = _b === void 0 ? [] : _b,
    isDarkMode = _a.isDarkMode;
  var _c = React.useState(stockListData),
    inputItems = _c[0],
    setInputItems = _c[1];
  var _d = downshift_esm.useCombobox({
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
    src: searchWhite.default,
    alt: "search",
    title: "search",
    width: 20,
    height: 20
  }) || /*#__PURE__*/React.createElement(Image, {
    src: search.default,
    alt: "search",
    title: "search",
    width: 20,
    height: 20
  })), /*#__PURE__*/React.createElement("input", _rollupPluginBabelHelpers.extends({}, getInputProps(), {
    placeholder: "Search stocks, IPOs, pages",
    className: "tw-pl-8 tw-py-2 tw-w-full tw-border tw-rounded"
  })), /*#__PURE__*/React.createElement("ul", _rollupPluginBabelHelpers.extends({}, getMenuProps(), {
    className: "tw-absolute tw-bg-white tw-z-[200] tw-w-full tw-shadow-lg tw-mt-1 tw-rounded"
  }), isOpen && inputItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", _rollupPluginBabelHelpers.extends({
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
  isSearchStockStatus: index.default.bool,
  stockListData: index.default.array,
  inputFocus: index.default.bool,
  setShowLoginPopup: index.default.func,
  changeSearchStockStatus: index.default.func,
  addSymbols: index.default.func,
  getSymbol: index.default.bool
};
StockSearchBar.defaultProps = {
  inputFocus: false
};

exports.default = StockSearchBar;
//# sourceMappingURL=StockSearchBar.js.map
