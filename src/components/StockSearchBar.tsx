import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import { useCombobox } from 'downshift';
import SearchIcon from '../../public/images/search.svg';
import SearchWhite from '../../public/images/searchWhite.svg';
import Image from 'next/image';

export interface StockList {
  id: string | number;
  name: string;
  type?: string;
}

export interface StockSearchBarProps {
  stockListData: StockList[];
  changeSearchStockStatus: (value: boolean) => void;
  isSearchStockStatus: boolean;
  addSymbols: (value: any) => void;
  getSymbol: boolean;
  isDarkMode: boolean;
  getGlobalSearchData: any;
}

function StockSearchBar({
  stockListData = [],
  isDarkMode,
}: StockSearchBarProps) {
  const [inputItems, setInputItems] = useState(stockListData);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    // getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        stockListData.filter(item =>
          item.name.toLowerCase().includes(inputValue?.toLowerCase() || '')
        )
      );
    },
    itemToString: item => (item ? item.name : ''),
  });

  return (
    <div className={`tw-relative tw-ms-xl-4 tw-ms-3 autosuggest-header ${(isDarkMode && '') || ''}`}>
      <span className="tw-top-[9px] tw-start-[9px] tw-absolute tw-z-[102] max-2xl:tw-w-[15px] max-2xl:tw-h-[15px]">
        {(isDarkMode && <Image src={SearchWhite} alt="search" title='search' width={20} height={20} />) || (
          <Image src={SearchIcon} alt="search" title='search' width={20} height={20} />
        )}
      </span>
      <input {...getInputProps()} placeholder="Search stocks, IPOs, pages" className="tw-pl-8 tw-py-2 tw-w-full tw-border tw-rounded" />
      <ul {...getMenuProps()} className="tw-absolute tw-bg-white tw-z-[200] tw-w-full tw-shadow-lg tw-mt-1 tw-rounded">
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={item.id}
              {...getItemProps({ item, index })}
              className={`tw-p-2 tw-cursor-pointer ${highlightedIndex === index ? 'tw-bg-blue-100' : ''}`}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

StockSearchBar.propTypes = {
  isSearchStockStatus: PropTypes.bool,
  stockListData: PropTypes.array,
  inputFocus: PropTypes.bool,
  setShowLoginPopup: PropTypes.func,
  changeSearchStockStatus: PropTypes.func,
  addSymbols: PropTypes.func,
  getSymbol: PropTypes.bool,
};

StockSearchBar.defaultProps = {
  inputFocus: false,
};

export default StockSearchBar;