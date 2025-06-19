import React, { useEffect, useState } from 'react';
import { formatNumber, formatNumberWithZero, signumNumber } from './numberUtils';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { allPages } from './HeaderData';
import Autosuggest from 'react-autosuggest';
import SearchIcon from '../../public/images/search.svg';
import SearchWhite from '../../public/images/searchWhite.svg';
import { UrlObject } from 'url';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const defaultStockList = [
  {
    id: 'INFY',
    name: 'INFOSYS LTD.',
  },
  {
    id: 'RELIANCE',
    name: 'RELIANCE INDUSTRIES LTD.',
  },
  {
    id: 'TCS',
    name: 'TATA CONSULTANCY SERVICES LTD.',
  },
  {
    id: 'SBIN',
    name: 'STATE BANK OF INDIA.',
  },
  {
    id: 'TATAMOTORS',
    name: 'TATA MOTORS LTD.',
  },
];

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
  changeSearchStockStatus,
  isSearchStockStatus,
  addSymbols,
  getSymbol,
  isDarkMode,
  getGlobalSearchData
}: StockSearchBarProps) {
  const [value, setValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSugesstions] = useState([]);
  const [recentSearch, setRecentSearch] = useState<any>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [globalSearchList, setGlobalSearchList] = useState([]);

  useEffect(() => {
    if (getGlobalSearchData) {
      setGlobalSearchList(
        getGlobalSearchData.map((item: any) => ({
          id: item.key_id,
          name: item.key_name,
          type: item.key_type,
        }))
      );
    }
  }, [getGlobalSearchData]);

  useEffect(() => {
    if (isSearchStockStatus) {
      const autocompleteEle = document.getElementById('auto-complete');
      if (autocompleteEle) autocompleteEle.focus();
    } else {
      const autocompleteEle = document.getElementById('auto-complete');
      if (autocompleteEle) autocompleteEle.blur();
    }
  }, [isSearchStockStatus]);

  useEffect(() => {
    if (localStorage.getItem('recentSearch')) {
      setRecentSearch(
        JSON.parse(localStorage.getItem('recentSearch') ?? '').sort(function (
          a: { order: number },
          b: { order: number }
        ) {
          return b.order - a.order;
        })
      );
    }
  }, []);

  function escapeRegexCharacters(str: string) {
    return str?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function shouldRenderSuggestions() {
    return true;
  }

  function getSuggestions(value: string) {
    const escapedValue = escapeRegexCharacters(value?.trim());
    const regex = new RegExp('^' + escapedValue, 'i');
    const editedSuggestion = [{ id: 'Recently Searched', name: 'Recently Searched' }]
      .concat(recentSearch)
      .concat({ id: 'Suggested', name: 'Suggested' })
      .concat(defaultStockList);
    const uniqueSearches = editedSuggestion.filter(
      (ele, ind) => ind === editedSuggestion.findIndex((elem) => elem.id === ele.id)
    );
    uniqueSearches[uniqueSearches.length - 1]['id'] == 'Suggested' && uniqueSearches.pop();

    if (value?.trim() == '' || value?.length < 3) {
      return (
        (recentSearch &&
          recentSearch.length > 0 &&
          uniqueSearches.filter((stock: any) => stock.name || stock.pageName)) ||
        defaultStockList.filter((stock) => stock.name)
      );
    } else {
      if (globalSearchList) {
        let stockdata = globalSearchList.filter((stock: any) => {
          return (
            (typeof stock.id == 'string' && stock.id?.toLowerCase()?.includes(escapedValue?.toLowerCase())) ||
            stock.name?.toLowerCase()?.includes(escapedValue?.toLowerCase())
          );
        });

        let pageData = allPages.filter((page) => {
          return page.pageName?.toLowerCase()?.includes(escapedValue?.toLowerCase());
        });

        // Separate IPOs and Stocks based on type
        let stockItems = stockdata.filter((item:any) => item.type === 'NSE_EQ' || !item.type);
        let ipoItems = stockdata.filter((item:any) => item.type === 'NSE_IPO');

        // Build suggestions array based on available data
        let suggestionsArray = [];
        if (stockItems.length > 0) {
          suggestionsArray.push({ id: 'Stocks', name: 'Stocks' }, ...stockItems);
        }
        if (ipoItems.length > 0) {
          suggestionsArray.push({ id: 'IPO', name: 'IPO' }, ...ipoItems);
        }
        if (pageData.length > 0) {
          suggestionsArray.push({ id: 'Pages', name: 'Pages' }, ...pageData);
        }
        if (suggestionsArray.length === 0) {
          return [{ id: 'No record found', name: 'No record found' }];
        }
        return suggestionsArray;
      } else {
        return [{ id: 'No record found', name: 'No record found' }];
      }
    }
  }

  function getSuggestionValue(suggestion: { name: any }) {
    return suggestion.name;
  }

  function getRecentSearch(selected: { id: any; pageName: any }) {
    const tempStocks: any = { ...selected };
    if (
      !['Recently Searched', 'Suggested', 'Pages', 'Stocks', 'IPO'].includes(tempStocks.id)
    ) {
      if (localStorage.getItem('recentSearch')) {
        const recentSymbols = JSON.parse(localStorage.getItem('recentSearch') ?? '');
        const sortedList = recentSymbols.sort(function (a: { order: number }, b: { order: number }) {
          return a.order - b.order;
        });
        const exist = recentSymbols.filter((x: { id: undefined; pageName: any }) =>
          x.id != undefined ? x.id == selected.id : x.pageName === selected.pageName
        )[0];
        if (exist) {
          const existIndex = recentSymbols.findIndex((item: { id: any }) => item.id == tempStocks.id);
          recentSymbols[existIndex]['order'] = sortedList[sortedList.length - 1]['order'] + 1;
        } else {
          tempStocks['order'] = sortedList[sortedList.length - 1]['order'] + 1;
          recentSymbols.push(tempStocks);
        }
        const finalSort = recentSymbols.sort(function (a: { order: number }, b: { order: number }) {
          return b.order - a.order;
        });
        if (finalSort && finalSort.length > 5) {
          finalSort.pop();
        }
        const finalData = finalSort.filter((item: { id: string }) => item.id != 'Suggested' && item.id != 'HDFC');
        localStorage.setItem('recentSearch', JSON.stringify(finalData));
        setRecentSearch(finalData);
      } else {
        tempStocks['order'] = 1;
        localStorage.setItem('recentSearch', JSON.stringify([tempStocks]));
        setRecentSearch([tempStocks]);
      }
    }
  }

  function renderSuggestion(suggestion: {
    id: string | number;
    name: string;
    type?: string;
    pageName?: string;
    pageUrl?: string | UrlObject;
    todayClose?: number;
  }) {
    const stockId = ['Recently Searched', 'Suggested', 'Stocks', 'IPO', 'Pages'].includes(suggestion.id as string)
      ? ''
      : suggestion.id;

    const getRedirectUrl = () => {
      if (suggestion.type === 'NSE_IPO') {
        return `https://www.niftytrader.in/ipo/${stockId.toString().replace(/&/g, '_')?.toLowerCase()}`;
      }
      return `https://www.niftytrader.in/stocks-analysis/${stockId.toString().replace(/&/g, '_')?.toLowerCase()}`;
    };

    const getSectionHeader = () => {
      if (suggestion.id === 'Stocks') return 'Stocks';
      if (suggestion.id === 'IPO') return 'IPO';
      if (suggestion.id === 'Pages') return 'Pages';
      return suggestion.id;
    };

    if (!searchText || searchText.trim().length < 3) {
      return (
        <>
          {((stockId || suggestion?.pageName) && (
            <>
              {stockId ? (
                <Link
                  prefetch={false}
                  href={getRedirectUrl()}
                  target="_blank"
                >
                  <div className="tw-flex tw-justify-between tw-items-center">
                    {(['Recently Searched', 'Suggested'].includes(suggestion.id as string) && (
                      <span onClick={(e) => e.stopPropagation()} className="tw-font-light">
                        {suggestion.id}
                      </span>
                    )) || (
                      <span className="tw-font-light">
                        {suggestion.name}
                      </span>
                    )}
                  </div>
                </Link>
              ) : (
                <Link prefetch={false} href={`${suggestion.pageUrl || '#'}`} target="_blank">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <span className="tw-font-light">{suggestion.pageName}</span>
                  </div>
                </Link>
              )}
            </>
          )) || (
            <div className="tw-flex tw-justify-between tw-items-center tw-ms-3 tw-mt-2">
              {(['Recently Searched', 'Suggested'].includes(suggestion.id as string) && (
                <span
                  className={`tw-font-semibold tw-text-[#999999] dark:text-white`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {suggestion.id}
                </span>
              )) || <span className={`tw-font-semibold tw-text-[#999999] dark:text-white`}>{suggestion.name}</span>}
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          {suggestion.name ? (
            <div>
              {(['Stocks', 'IPO', 'No record found', 'Recently Searched', 'Suggested'].includes(suggestion.id as string) && (
                <span
                  onClick={(e) => e.stopPropagation()}
                  className={
                    suggestion.id === 'No record found'
                      ? `tw-font-semibold tw-block tw-ms-5 tw-my-2 dark:text-white`
                      : `tw-font-semibold tw-block tw-ms-3 tw-mt-2 dark:text-white`
                  }
                >
                  {getSectionHeader()}
                </span>
              )) || (
                <Link
                  prefetch={false}
                  href={getRedirectUrl()}
                  target="_blank"
                >
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <div>
                      <div className='tw-mb-0 tw-text-base'>
                        {/* {typeof suggestion?.name === 'string' && suggestion?.name?.length > 19
                          ? `${suggestion?.name.slice(0,19)}...`
                          : suggestion?.name} */}
                          {suggestion?.name}
                      </div>
                      {suggestion.type === 'NSE_EQ' && <p className="tw-mb-0">{suggestion.id}</p>}
                    </div>
                    {suggestion['todayClose'] && (
                      <div className="tw-text-end">
                        <div className="tw-mb-0 tw-text-base">{formatNumber(suggestion['todayClose'])}</div>
                      </div>
                    )}
                  </div>
                </Link>
              )}
            </div>
          ) : (
            (suggestion.id === 'Pages' || suggestion?.pageName) && (
              <div>
                {(suggestion.id === 'Pages' && (
                  <span
                    onClick={(e) => e.stopPropagation()}
                    className={`tw-font-semibold tw-block tw-ms-3 tw-mt-2 tw-text-[#999999] dark:text-white`}
                  >
                    Pages
                  </span>
                )) || (
                  <Link
                    prefetch={false}
                    href={`${suggestion.pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div>
                        <span className="tw-font-light">{suggestion?.pageName}</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            )
          )}
        </>
      );
    }
  }

  function onBlur() {
    changeSearchStockStatus(false);
    setValue('');
    setIsInputFocused(false);
  }

  const inputProps = {
    placeholder: 'Search stocks, IPOs, pages',
    onChange: onChange,
    value: value,
    onBlur: onBlur,
    id: 'auto-complete',
    onFocus: () => setIsInputFocused(true),
  };

  function onChange(event: any, { newValue }: any) {
    if (event.key === 'Enter' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    } else {
      setValue(newValue);
    }
  }

  function onSuggestionsFetchRequested({ value }: any) {
    setSearchText(value);
    setSugesstions(getSuggestions(value));
  }

  function onSuggestionsClearRequested() {
    if (suggestions.length === 0) {
      setIsInputFocused(false);
    }
    setValue('');
  }

  function handleClick(e: { target: { value: undefined } }) {
    if (e.target.value == undefined) {
      setSugesstions([]);
    } else {
      setSugesstions(getSuggestions(''));
    }
  }

  function handleSymbolSelect(e: any, { suggestion }: any) {
    setValue('');
    setIsInputFocused(false);
    const stockId = ['Recently Searched', 'Suggested', 'Pages', 'Stocks', 'IPO'].includes(suggestion.id)
      ? ''
      : suggestion.id;

    if (!getSymbol) {
      const autoelement = document.getElementById('auto-complete');
      if (autoelement) autoelement.blur();
    } else {
      addSymbols(suggestion['id']);
    }
    getRecentSearch(suggestion);
  }

  return (
    <>
      <div
        className={`tw-relative tw-ms-xl-4 tw-ms-3 autosuggest-header ${(isDarkMode && '') || ''}`}
      >
        <span className="tw-top-[9px] tw-start-[9px] tw-absolute tw-z-[102] max-2xl:tw-w-[15px] max-2xl:tw-h-[15px]">
          {(isDarkMode && <Image src={SearchWhite} alt="search" title='search' width={20} height={20} />) || (
            <Image src={SearchIcon} alt="search" title='search' width={20} height={20} />
          )}
        </span>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          onSuggestionSelected={handleSymbolSelect}
          focusInputOnSuggestionClick={false}
          inputProps={{ ...inputProps }}
        />

        <div
          className={`tw-fixed tw-top-0 tw-start-0 tw-w-full tw-h-full tw-opacity-0 tw-z-[98] tw-transition-opacity tw-bg-[#00000099] ${
            (suggestions.length > 0 && isInputFocused && `tw-visible tw-opacity-100 tw-transition-all`) ||
            'tw-invisible'
          }`}
        ></div>
      </div>
    </>
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