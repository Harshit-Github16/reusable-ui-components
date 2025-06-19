import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderTopBar: React.FC = () => {
  return (
    <nav className="tw-w-full tw-bg-white tw-border-b tw-flex tw-items-center tw-px-4 tw-py-2">
      {/* Logo */}
      <Link href="/" className="tw-flex tw-items-center tw-mr-4">
        <Image src={require('../../public/images/logo.svg')} alt="Logo" width={40} height={40} />
        <span className="tw-font-bold tw-text-lg tw-ml-2 tw-text-black">Nifty<span className="tw-font-normal tw-text-gray-500">Trader</span></span>
      </Link>

      {/* Search Bar */}
      <div className="tw-flex-1 tw-mx-4">
        <div className="tw-flex tw-items-center tw-bg-[#f2f7fd] tw-rounded tw-px-3 tw-py-2">
          <Image src={require('../../public/images/search.svg')} alt="search" width={18} height={18} className="tw-mr-2" />
          <input
            type="text"
            placeholder="Search stocks, IPOs, pages"
            className="tw-bg-transparent tw-outline-none tw-border-none tw-w-full tw-text-gray-700"
          />
        </div>
      </div>

      {/* Dropdown Menus */}
      <div className="tw-flex tw-items-center tw-gap-6 tw-mr-4">
        {['Analytics', 'Backtesting', 'Options', 'Resources'].map((item) => (
          <div key={item} className="tw-relative tw-group tw-cursor-pointer tw-text-gray-800 tw-font-medium tw-text-base">
            {item}
            <span className="tw-ml-1">▼</span>
            {/* Dropdown placeholder */}
          </div>
        ))}
      </div>

      {/* Go Prime */}
      <Link href="/go-prime" className="tw-flex tw-items-center tw-text-[#2d7ff9] tw-font-semibold tw-mr-4">
        <Image src={require('../../public/images/Premium.svg')} alt="crown" width={22} height={22} className="tw-mr-1" />
        Go Prime
      </Link>

      {/* Hamburger Menu */}
      <button className="tw-p-2 tw-mr-4">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tw-text-gray-700"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>

      {/* Login/Register Button */}
      <Link href="/login" className="tw-bg-[#2d7ff9] tw-text-white tw-font-semibold tw-px-4 tw-py-2 tw-rounded hover:tw-bg-blue-700 tw-text-sm">Login / Register</Link>
    </nav>
  );
};

export default HeaderTopBar; 