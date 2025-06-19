"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  // All your state and functions here
  const defaultHeaderProps = {
    stockListData: [],
    changeSearchStockStatus: () => {},
    isSearchStockStatus: false,
    addSymbols: () => {},
    getSymbol: false,
    isDarkMode: false,
    getGlobalSearchData: [],
    userName: 'Demo User',
    onLoginPopup: () => {},
    redirectForNotifications: () => {},
    setShowChangePassword: () => {},
    notificationData: [],
    crownType: 'non-prime' as const,
    logout: () => {},
    setTheme: () => {},
    setHasDropDownOpen: () => {},
    userInfo: {},
    stockSearchBarProps: {
      stockListData: [],
      changeSearchStockStatus: () => {},
      isSearchStockStatus: false,
      addSymbols: () => {},
      getSymbol: false,
      isDarkMode: false,
      getGlobalSearchData: []
    },
    setShowQrModal: () => {},
    handleRouting: () => {},
    alertHeight: 0,
    activeHeaderIndex: null,
    setActiveHeaderIndex: () => {},
    isShowSubscriptionBtn: false,
    isSubscriptionPopupOpen: false,
    setisSubscriptionPopupOpen: () => {},
    notification_id: 0,
    notification_title: '',
    notification_text: '',
    notification_page_flag: '',
    sent_date: new Date()
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header {...defaultHeaderProps} />
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
} 