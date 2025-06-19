'use client'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import moment from "moment"
import Link from "next/link"
// import { useRouter } from "next/router"
import React, {  useEffect, useRef, useState } from "react"
import Premium_crownImage from "../../public/images/Premium.svg"
import close_whiteImage from "../../public/images/close_white.svg"
import combo_crownImage from "../../public/images/combo_crown.svg"
import logoDarkImage from "../../public/images/logo-dark.svg"
import logoImage from "../../public/images/logo.svg"
import menuImage from "../../public/images/menu.svg"
import menu_blueImage from "../../public/images/menu_blue.svg"
import menu_whiteImage from "../../public/images/menu_white.svg"
import notifications_active from "../../public/images/notifications_active.svg"
import notifications_white from "../../public/images/notifications_white.svg"
import nt_os_crownImage from "../../public/images/nt_os_crown.svg"
import prime_crownImage from "../../public/images/nt_prime_crown.svg"
import scheduleImage from "../../public/images/schedule.svg"
import shopping_cart from "../../public/images/shopping_cart.svg"
import shopping_cart_white from "../../public/images/shopping_cart_white.svg"
import HeaderDropDown from "./HeaderDropdown"
import MobileNav from "./MobileNav"
import StockSearchBar, { StockSearchBarProps } from "./StockSearchBar"
import HeaderQuickLinks from "./HeaderQuickLinks"
import SearchIcon from '../../public/images/search.svg';
// import CrownIcon from '../../public/images/crown.svg';
import optionChain from "../../public/images/Header/option_chain.svg";
import oiCharts from "../../public/images/Header/oi_chart.svg";
import giftNifty from "../../public/images/Header/gift-nifty-fill.svg";
import liveAnalytics from "../../public/images/Header/live_analytices_header.svg";
import trendingOi from "../../public/images/Header/bk_trending.svg";
import oiTimeflow from "../../public/images/Header/bk_timeflow.svg";
import optionSimulator from "../../public/images/Header/simulator.svg";
// import movers from "../../public/images/Header/movers.svg";

export interface NotificationData {
  notification_id: number;
  notification_title: string;
  notification_text: string;
  notification_page_flag: string;
  sent_date: string | Date;
}
interface StockItem {
  key_id: string;
  key_name: string;
  key_type: "NSE_EQ" | "NSE_IPO";
}
export interface HeaderProps extends StockSearchBarProps, NotificationData {
  isFullUrl?: boolean;
  isLoggedIn?: boolean;
  userName: any;
  onLoginPopup: (value: any) => void;
  redirectForNotifications: (value: any) => void;
  setShowChangePassword: (value: any) => void;
  notificationData: NotificationData[];
  crownType: "non-prime" | "nt-prime" | "os-prime" | "combo-prime";
  logout: (value: any) => void;
  setTheme: (value: any) => void;
  setHasDropDownOpen: (value: boolean) => void;
  isDarkMode: boolean;
  userInfo: any;
  stockSearchBarProps: StockSearchBarProps;
  isSpecialOffer?: boolean;
  isPrimeMember?: boolean;
  currentUser?: any;

  isContextLoaded?: boolean;
  planId?: boolean;
  setShowQrModal: React.Dispatch<React.SetStateAction<boolean | null>>;
  handleRouting: (value: any) => void;
  alertHeight: number;
  activeHeaderIndex: any;
  setActiveHeaderIndex: (value: any) => void;
  isShowSubscriptionBtn: boolean;
  isSubscriptionPopupOpen: boolean;
  setisSubscriptionPopupOpen: (value: any) => void;
  getGlobalSearchData: any; // Updated to use StockItem interface
}

const menuItems = [
  { label: "Option Chain", icon: optionChain, color: "#D80000", url: "/option-chain" },
  { label: "OI Charts", icon: oiCharts, color: "#04B800", url: "/oi-charts" },
  { label: "GIFT NIFTY", icon: giftNifty, color: "#FFECE4", url: "/gift-nifty" },
  { label: "Live Analytics", icon: liveAnalytics, color: "#B98A2C", url: "/live-analytics" },
  { label: "Trending OI", icon: trendingOi, color: "#FE7E36", url: "/trending-oi" },
  { label: "OI Timeflow", icon: oiTimeflow, color: "#8579AD", url: "/oi-timeflow" },
  { label: "Futures", icon: oiTimeflow, color: "#FB3E82", url: "/futures" },
  { label: "TV Chart", icon: liveAnalytics, color: "#131722", url: "/tv-chart" },
  { label: "Option Simulator", icon: optionSimulator, color: "#577EA4", url: "/option-simulator" },
  { label: "Movers", icon: shopping_cart, color: "#BC3081", url: "/movers" },
];

function NavDropdown({ label }: { label: string }) {
  return (
    <div className="relative group">
      <button className="font-medium text-gray-800 hover:text-blue-600 flex items-center gap-1">{label} <span>▼</span></button>
      {/* Dropdown content can go here */}
    </div>
  );
}

function Header(props: HeaderProps) {
  const {
    isFullUrl = false,
    userName,
    userInfo,
    planId,
    isLoggedIn,
    isDarkMode,
    crownType,
    isPrimeMember,
    isSpecialOffer,
    isContextLoaded,
    stockSearchBarProps,
    notificationData,
    logout,
    setTheme,
    onLoginPopup,
    setShowQrModal,
    setShowChangePassword,
    setHasDropDownOpen = () => { },
    redirectForNotifications,
    handleRouting,
    activeHeaderIndex,
    setActiveHeaderIndex,
    alertHeight,
    isShowSubscriptionBtn,
    isSubscriptionPopupOpen,
    setisSubscriptionPopupOpen,
    getGlobalSearchData

  } = props

  // const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [menuVisible, setMenuVisible] = useState<number | null>(null)
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  // SSR-safe location checks
  const [isHomePage, setIsHomePage] = useState(false);
  const [isOptionStrategy, setIsOptionStrategy] = useState(false);
  const [isPrimePlans, setIsPrimePlans] = useState(false);
  const [isOptionChainPath, setIsOptionChainPath] = useState(false);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === '/');
      setIsOptionStrategy(window.location.pathname === '/option-strategy-builder');
      setIsPrimePlans(window.location.pathname === '/primeplans');
      setIsOptionChainPath(
        optionChainPaths.some(
          (path) => `/${window.location.pathname.split("/")[1]}` === path
        )
      );
    }
  }, []);

  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      const dropdownMenu = document.querySelector('.tw-animate-growDown');
      const targetElement = event.target as Node;

      if (dropdownMenu && !dropdownMenu.contains(targetElement)) {
        setMenuVisible(null);
        setHasDropDownOpen(false);
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);



  const handleMenuToggle = (e: any, menuIndex: any) => {
    if (e && typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }
    if (`/${window.location.pathname.split('/')[1]}` == '/ipo') {
      if (activeHeaderIndex == menuIndex) {
        setMenuVisible(null);
        setHasDropDownOpen(false);
        setActiveHeaderIndex(null)
      } else {
        setActiveHeaderIndex(menuIndex)
        setHasDropDownOpen(true);
        setMenuVisible((prevMenu) => (prevMenu === menuIndex ? null : menuIndex));
      }
    } else {
      if (menuIndex === menuVisible) {
        setMenuVisible(null);
        setHasDropDownOpen(false);
      } else {
        setHasDropDownOpen(true);
        setMenuVisible((prevMenu) => (prevMenu === menuIndex ? null : menuIndex));
      }
    }
  };

  const toggleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  useEffect(() => {
    if (openSideMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openSideMenu]);

  useEffect(() => {
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

  const optionChainPaths = [
    "/nse-option-chain",
    "/bse-option-chain",
    "/commodities-option-chain-nse",
    "/option-chain",
    "/ltp-calculator",
  ];

  // Fallback for debugging: show a visible header if nothing else renders
  const showFallback = true;



  return (
    <nav className="tw-w-full tw-bg-white tw-border-b">
      <div className="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-2">
     <div className="tw-flex">
        <Link href="/" className="tw-flex tw-items-center">
          <Image
            src={logoImage}
            alt="Logo"
            width={100}
            height={100}
            className="tw-h-10 tw-w-36"
            priority
          />
        </Link>
        <div className="tw-relative tw-lg-flex tw-items-center lg:tw-block  tw-mx-3">
              <StockSearchBar
                {...stockSearchBarProps}
                isDarkMode={isDarkMode}
                getGlobalSearchData={getGlobalSearchData}
              />
            </div>
            </div>

         <ul className="lg:tw-flex xl:tw-gap-4 2xl:tw-gap-[1.5rem] tw-gap-3 tw-items-center ">
            <li
              className={`tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ${menuVisible == 0 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white"} tw-group   hover:!tw-text-primary-text tw-animate-growDown`}
            >
              <span
                className="tw-flex tw-items-center"
                onClick={(e) => handleMenuToggle(e, 0)}
              >
                Analytics
                <FontAwesomeIcon
                  icon={faChevronDown}
                  width={12}
                  height={12}
                  className={`tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ${menuVisible == 0 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]"} tw-transition-transform tw-duration-300`}
                />
              </span>
            </li>
            <li
              className={`tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ${menuVisible == 6 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white"} tw-group   hover:!tw-text-primary-text tw-animate-growDown`}>
              <span className="tw-flex tw-items-center" onClick={(e) => handleMenuToggle(e, 6)}>
                Backtesting
                <FontAwesomeIcon
                  icon={faChevronDown}
                  width={12}
                  height={12}
                  className={`tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ${menuVisible == 6 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]"} tw-transition-transform tw-duration-300`}
                />
              </span>
            </li>
            <li
              className={`tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ${menuVisible == 1 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white"} tw-group   hover:!tw-text-primary-text`}>
              <span className="tw-flex tw-items-center" onClick={(e) => handleMenuToggle(e, 1)}>
                Options
                <FontAwesomeIcon
                  icon={faChevronDown}
                  width={12}
                  height={12}
                  className={`tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ${menuVisible == 1 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]"} tw-transition-transform tw-duration-300`}
                />
              </span>
            </li>
            <li
              className={`tw-font-medium tw-cursor-pointer tw-text-sm 2xl:tw-text-base tw-select-none ${menuVisible == 2 ? "tw-text-primary-text" : "tw-text-black dark:tw-text-white"} tw-group   hover:!tw-text-primary-text`}>
              <span className="tw-flex tw-items-center" onClick={(e) => handleMenuToggle(e, 2)}>
                Resources
                <FontAwesomeIcon
                  icon={faChevronDown}
                  width={12}
                  height={12}
                  className={`tw-text-lg tw-ml-1 group-hover:tw-text-primary-text ${menuVisible == 2 ? "tw-text-primary tw-rotate-180" : "tw-text-[#999]"} tw-transition-transform tw-duration-300`}
                />
              </span>
            </li>
            {isContextLoaded && !isPrimeMember && (
              <li>
                <Link
                  onClick={(e) => { e.preventDefault(), handleRouting('/primeplans') }}
                  href={"/primeplans?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"}
                  className="tw-flex tw-gap-2 tw-items-center tw-font-semibold tw-cursor-pointer xl:tw-text-lg tw-text-base tw-select-none !tw-text-primary-text">
                  <Image alt="Go Prime" title="Go Prime" src={Premium_crownImage} width={25} height={25} /> <span className="max-xl:tw-hidden text-nowrap">Go Prime</span>
                </Link>
              </li>
            )}
            {isContextLoaded && isSpecialOffer && isLoggedIn && (
              <li>
                <Link
                  onClick={(e) => { e.preventDefault(), handleRouting('/renew-plan') }}
                  href={"/renew-plan?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"}
                  className="tw-flex tw-gap-2 tw-items-center tw-font-semibold tw-cursor-pointer 2xl:tw-text-lg tw-select-none !tw-text-primary-text hover:tw-text-primary-text">
                  <Image
                    alt="Special Offer"
                    title="special offer"
                    src={Premium_crownImage}
                    width={25}
                    height={25}
                  />
                  <span className="max-xl:tw-hidden tw-text-nowrap">Special Offer</span>
                </Link>
              </li>
            )}
            {!isDarkMode ? (
              <li>
                <Image
                  src={menuVisible == 3 ? menu_blueImage : menuImage}
                  alt="Menu"
                  title="Menu"
                  width={18}
                  height={12}
                  className="tw-cursor-pointer"
                  onClick={(e) => handleMenuToggle(e, 3)}
                />
              </li>
            ) : (
              <li>
                <Image
                  src={menuVisible == 3 ? menu_blueImage : menu_whiteImage}
                  alt="Menu"
                  title="Menu"
                  width={18}
                  height={12}
                  className="tw-cursor-pointer"
                  onClick={(e) => handleMenuToggle(e, 3)}
                />
              </li>
            )}
            {planId && (
              <li className="tw-relative">
                <Link
                  onClick={(e) => { e.preventDefault(), handleRouting('/checkout') }}
                  href={"/checkout"}>
                  <Image
                    src={!isDarkMode ? shopping_cart : shopping_cart_white}
                    alt="shopping cart"
                    title="shopping cart"
                    width={24}
                    height={24}
                    className="tw-cursor-pointer"
                  />
                  <div className="tw-w-2 tw-h-2 tw-bg-[#e6191e] tw-rounded-full tw-absolute tw-top-0 tw-right-0"></div>
                </Link>
              </li>
            )}
            {
              isLoggedIn && (
                <>
                  <Image
                    src={!isDarkMode ? notifications_active : notifications_white}
                    alt="notification"
                    title="notification"
                    width={24}
                    height={24}
                    className="tw-cursor-pointer"
                    onClick={(e) => handleMenuToggle(e, 5)}
                  />
                  {notificationData && (
                    <div className={`tw-p-4 tw-flex tw-gap-3 tw-absolute ${notificationData.length > 0 ? 'tw-h-[400px]' : ''} tw-top-[54px] tw-justify-center tw-right-[180px] tw-w-1/4 tw-rounded tw-bg-white dark:tw-bg-black tw-w-25 tw-mt-3 tw-overflow-auto tw-shadow-custom dark:tw-shadow-custom-dark smooth-dropdown ${menuVisible == 5 ? 'tw-scale-y-100' : '-tw-scale-y-0'}`}>
                      <div>
                        {notificationData.length > 0 ? (
                          notificationData.map((item, key) => {
                            const sentDate = moment(item.sent_date)
                            const formattedDate = sentDate.format("DD-MM-YYYY")
                            const formattedTime = sentDate.format("hh:mm A")
                            return (
                              <div
                                key={key}
                                className={`tw-my-2 ${key !== notificationData.length - 1 ? "tw-border-b tw-border-[#dddddd]" : ""}`}>
                                <div
                                  onClick={() => redirectForNotifications(item.notification_page_flag)}
                                  className="tw-py-2 tw-group tw-duration-300 tw-block tw-cursor-pointer">
                                  <div className="tw-flex tw-items-center tw-justify-between">
                                    <span className="tw-text-base group-hover:!tw-text-primary-text tw-duration-300 dark:tw-text-white tw-font-semibold">
                                      {item.notification_title}
                                    </span>
                                    <span className="tw-text-[#999999] tw-flex tw-items-center tw-justify-between tw-text-sm tw-gap-2">
                                      <Image
                                        src={scheduleImage}
                                        alt='notification time'
                                        title='notification time'
                                        width={20}
                                        height={20}
                                      />
                                      {formattedTime} | {formattedDate}
                                    </span>
                                  </div>
                                  <span className="tw-text-sm group-hover:!tw-text-primary-text tw-duration-300 dark:tw-text-white">
                                    {item.notification_text}
                                  </span>
                                </div>
                              </div>
                            )
                          })
                        ) : (
                          <div className="tw-text-base tw-text-[#999999]">
                            Notification not found!
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )
            }
            {isLoggedIn ? (
              <>
                <li className="tw-relative">
                  <span
                    className="tw-w-[40px] tw-h-[40px] tw-flex tw-items-center tw-justify-center tw-rounded-full tw-font-bold tw-cursor-pointer tw-bg-[#ECF5FE] tw-text-primary-text tw-text-base tw-uppercase tw-select-none"
                    onClick={(e) => handleMenuToggle(e, 4)}>
                    {userName}
                  </span>
                  {crownType && crownType != 'non-prime' && (
                    <div className="tw-relative">
                      <Image
                        src={
                          crownType == "combo-prime"
                            ? combo_crownImage
                            : crownType == "nt-prime"
                              ? prime_crownImage
                              : crownType == "os-prime"
                                ? nt_os_crownImage
                                : ''
                        }
                        alt={crownType}
                        title={crownType}
                        width={23}
                        height={23}
                        className="tw-absolute tw-left-0 tw-right-0 tw-m-auto -tw-top-[50px]"
                      />
                    </div>
                  )}
                </li>
                <li>
                  <div className="tw-flex tw-gap-2 tw-items-center">
                    <div
                      className={`tw-relative tw-inline-flex tw-items-center tw-h-6 tw-bg-no-repeat tw-rounded-full tw-w-12 tw-cursor-pointer tw-transition-colors tw-duration-300 ${isDarkMode ? "tw-bg-dark-bg" : "tw-bg-light-bg"}`}
                      onClick={setTheme}>
                      <span
                        className={`tw-inline-block tw-w-6 tw-h-6 tw-transform tw-bg-no-repeat tw-rounded-full tw-bg-center tw-transition-transform tw-duration-300 ${isDarkMode ? "tw-translate-x-5 tw-bg-dark-mode" : "tw-translate-x-1 tw-bg-light-mode"}`}
                      />
                    </div>
                    <p className="tw-text-[15px] tw-select-none tw-font-medium tw-text-primary-text tw-mb-0">
                      {isDarkMode ? "Dark" : "Light"}
                    </p>
                  </div>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="tw-py-1 tw-px-3 xl:tw-px-4 tw-text-sm xl:tw-text-base tw-outline-none tw-text-white tw-bg-primary-text tw-rounded-[4px] tw-font-semibold tw-border-primary-text tw-border   hover:tw-bg-white dark:tw-bg-[#333] hover:tw-text-primary-text"
                  onClick={onLoginPopup}>
                  Login / Register
                </button>
              </li>
            )}
          </ul>
          <HeaderDropDown
            {...{
              isFullUrl,
              menuVisible,
              setMenuVisible,
              onLogout,
              onPassword,
              onQrCode,
              dropdownRefs,
              isLoggedIn,
              isDarkMode,
              handleRouting,
            }}
          />
      </div>
   
      {!(isHomePage || isOptionStrategy || isPrimePlans) && (
            <div className="tw-m-0 tw-p-0 lg:tw-block tw-hidden">
              <HeaderQuickLinks
                handleRouting={handleRouting}
                isShowSubscriptionBtn={isShowSubscriptionBtn}
                isSubscriptionPopupOpen={isSubscriptionPopupOpen}
                setisSubscriptionPopupOpen={setisSubscriptionPopupOpen}
                isFullUrl={isFullUrl}
              />
            </div>
          )}
      <div className="tw-flex tw-items-center tw-px-2 tw-py-1 tw-gap-2 tw-border-t tw-bg-white" style={{ minHeight: '20px' }}>
      {menuItems.map((item, idx) => (
        <Link
          key={item.label}
          href={item.url}
          className={
            idx === 0
              ? 'tw-flex tw-items-center tw-gap-1  tw-text-gray-700 tw-font-medium tw-px-3 tw-py-1 tw-relative tw-text-[11px]'
              : 'tw-flex tw-items-center tw-gap-1  tw-text-gray-700 tw-font-medium tw-px-3 tw-py-1 tw-text-[11px]'
          }
        >
          <Image src={item.icon} alt={item.label} width={20} height={20} />
          <span>{item.label}</span>
          {idx === 0 && (
            <span className="tw-absolute tw-left-0 tw-bottom-0 tw-w-full tw-h-[4px] tw-text-[10px]" style={{ background: '#D80000' }} />
          )}
        </Link>
      ))}
      <div className="tw-ml-auto tw-flex tw-items-center tw-gap-2">
        <Link href="/contact-us" className="tw-text-blue-600 tw-text-sm tw-underline hover:tw-text-blue-800">Contact Us</Link>
        <span className="tw-h-5 tw-border-l tw-border-gray-300 tw-mx-2" />
        <span className="tw-text-sm tw-text-gray-600 tw-flex tw-items-center">
          {/* <Image src="/images/phone.svg" alt="phone" width={16} height={16} className="tw-mr-1" /> */}
          +91 94685 47504
        </span>
      </div>
    </div>
 
    </nav>
  );
}
export default Header;
