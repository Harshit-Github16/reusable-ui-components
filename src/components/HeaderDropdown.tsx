import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { socialLinks } from "./FooterData"
import {
    analyticsData,
    backTestingData,
    barsMenuData,
    optionsData,
    profileData,
    resourcesData
} from "./HeaderData"
import apple_store_logo from "../../public/images/apple_store_logo.svg"
import giftNiftyIcon from "../../public/images/gift_nifty.svg"
import giftNiftyDarkIcon from "../../public/images/gift_nifty_dark.svg"
import menu_qr_codeImage from "../../public/images/menu-qr-code.svg"
import play_store_logo from "../../public/images/play_store_logo.svg"
import strategyIcon from "../../public/images/Header/strategy_builder.svg"
import silverIcon from "../../public/images/Header/silver.svg"
import goldIcon from "../../public/images/Header/gold.svg"
import { usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'

interface HeaderDropDownProps {
    isFullUrl: boolean;
    isLoggedIn: boolean | undefined;
    menuVisible: number | null;
    setMenuVisible: React.Dispatch<React.SetStateAction<number | null>>;
    dropdownRefs: any;
    onLogout: () => void;
    onPassword: () => void;
    onQrCode: () => void;
    isDarkMode: boolean;
    handleRouting: (value: any) => void
}

const HeaderDropDown: React.FC<HeaderDropDownProps> = ({ isLoggedIn, isFullUrl, menuVisible, setMenuVisible, onLogout, onPassword, dropdownRefs, isDarkMode, handleRouting, }) => {
    const pathName = usePathname();
    const BASE_URL = 'https://www.niftytrader.in';

    const isActive = (itemPath: string) => {
        if (itemPath == '') {
            return pathName == itemPath;
        }
        if (pathName == '/nse-top-losers') {
            return itemPath == '/nse-top-gainers'
        }
        return pathName == itemPath || pathName?.startsWith(`${itemPath}/`);
    };

    const getColorClasses = (label: any) => {
        switch (label) {
            case 'New':
                return 'tw-bg-[#d1ffd0] tw-text-[#2f801b]';
            case 'Updated':
                return 'tw-bg-[#d0ddff] tw-text-[#1b3780]';
            case 'Coming':
                return 'tw-bg-[#FFDECC] tw-text-[#CF4B00]';
            default:
                return 'tw-bg-gray-100 tw-text-gray-600';
        }
    };
    const refreshPath = [
        '/ipo',
        '/my-dashboard'
    ]
    const generateHref = (pageUrl: string): string => {
        const shouldUseFullUrl = isFullUrl || refreshPath.some(path => pageUrl.startsWith(path));
        return shouldUseFullUrl ? new URL(pageUrl, BASE_URL).href : pageUrl;
    };

    return (
        <>
            {/* Analytics Menu */}
            {analyticsData && (
                <div ref={(el) => { dropdownRefs.current[0] = el }} className={`tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ${menuVisible == 0 ? 'tw-scale-y-100' : 'tw-scale-y-0'}`}>
                    <ul className="tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto">
                        <div className="tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between">
                            <div className=" tw-gap-4 tw-flex tw-justify-between  tw-w-full ">
                            {analyticsData.map((section, index) => (
                                    <div key={index} className='tw-flex tw-flex-col tw-justify-between'>
                                        <div>
                                            <div className="tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b">
                                                <div className="tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2">
                                                    <Image
                                                        src={section.imageUrl}
                                                        width={100}
                                                        height={100}
                                                        alt={section.title}
                                                        title={section.title}
                                                    />
                                                </div>
                                                <span className='tw-font-bold'>{section.title}</span>
                                                {section.tag && (
                                                    <span className='tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine'>
                                                        {section.tag}
                                                    </span>
                                                )}
                                            </div>
                                            {section.description && (
                                                <span className="tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]">
                                                    {section.description}
                                                </span>
                                            )}
                                            <ul>
                                                {section.items.map((item, idx) => (
                                                    <li key={idx} className={`hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ${item?.description && 'tw-mt-2' || 'tw-mt-1'} ${isActive(item?.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : ''}`}>
                                                        <Link
                                                            onClick={(e) => { e.preventDefault(), handleRouting(item?.pageUrl), setMenuVisible(null) }}
                                                            href={generateHref(item?.pageUrl)}
                                                            className={`${!item?.pageUrl && 'tw-cursor-default'}`}
                                                        >
                                                            <span className="tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white">
                                                                {item.title}
                                                                {item.label && (
                                                                    <span className={`tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ${getColorClasses(item.label)}`}>
                                                                        {item.label}
                                                                    </span>
                                                                )}
                                                                <FontAwesomeIcon
                                                                    icon={faArrowRightLong}
                                                                    width={13}
                                                                    height={15}
                                                                    className='tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1'
                                                                />
                                                            </span>
                                                            {item?.description && (
                                                                <span className="tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]">
                                                                    {item?.description}
                                                                </span>
                                                            )}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {index == 0 && (
                                            <div
                                                onClick={() => { handleRouting('/option-strategy-builder?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null) }}
                                                className="header-chip-card"
                                            >
                                                <div className="tw-bg-white dark:tw-bg-[#111111] tw-p-1 tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center">
                                                    <Image
                                                        src={strategyIcon}
                                                        width={27}
                                                        height={27}
                                                        alt='option strategy logo'
                                                        title='Option Strategy'
                                                    />
                                                </div>
                                                <div className="tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0">
                                                    Strategy Builder
                                                </div>
                                            </div>
                                        )}
                                        {index == 1 && (
                                            <div
                                                onClick={() => { handleRouting('/gift-nifty-live?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null) }}
                                                className="header-chip-card"
                                            >
                                                <div className="tw-bg-white dark:tw-bg-[#111111] tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center">
                                                    <Image
                                                        src={isDarkMode ? giftNiftyDarkIcon : giftNiftyIcon}
                                                        width={35}
                                                        height={35}
                                                        alt='gift nifty'
                                                        title='gift nifty'
                                                    />
                                                </div>
                                                <div className="tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0">
                                                    Gift Nifty
                                                </div>
                                            </div>
                                        )}
                                        {index == 2 && (
                                            <div
                                                // onClick={() => { handleRouting('/watchlist'), setMenuVisible(null) }}
                                                onClick={() => { handleRouting('/gold-price-today?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null) }}
                                                className="header-chip-card"
                                            >
                                                <div className="tw-bg-white shine dark:tw-bg-[#111111] tw-p-1 tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center">
                                                    <Image
                                                        src={goldIcon}
                                                        width={27}
                                                        height={27}
                                                        alt='gold price today logo'
                                                        title='Gold price today'
                                                    />
                                                </div>
                                                <div className="tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0">
                                                    Gold Price Today
                                                </div>
                                            </div>
                                        )}
                                        {index == 3 && (
                                            <div
                                                onClick={() => { handleRouting('/silver-rate-today?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'), setMenuVisible(null) }}
                                                className="header-chip-card"
                                            >
                                                <div className="tw-bg-white shine dark:tw-bg-[#111111] tw-p-1 tw-rounded-full tw-me-2 tw-flex tw-justify-center tw-items-center">
                                                    <Image
                                                        src={silverIcon}
                                                        width={27}
                                                        height={27}
                                                        alt='silver price today logo'
                                                        title='silver price today'
                                                    />
                                                </div>
                                                <div className="tw-font-medium dark:tw-text-white tw-text-sm 2xl:tw-text-base tw-mb-0">
                                                    Silver Price Today
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
            )}

            {/* Backtesting Menu */}
            {backTestingData && (
                <div ref={(el) => { dropdownRefs.current[6] = el }} className={`tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ${menuVisible == 6 ? 'tw-scale-y-100' : 'tw-scale-y-0'}`}>
                    <ul className="tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto">
                    <div className="tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between">
                    <div className=" tw-gap-4 tw-flex tw-justify-between  tw-w-full ">
                                {backTestingData.map((section, index) => (
                                    <div key={index}>
                                        <div className="tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b">
                                            <div className="tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2">
                                                <Image
                                                    src={section.imageUrl}
                                                    width={30}
                                                    height={30}
                                                    alt={section.title}
                                                    title={section.title}
                                                    className='tw-me-2'
                                                />
                                            </div>
                                            <span className='tw-font-bold tw-text-nowrap'>{section.title}</span>
                                            {section.tag && (
                                                <span className='tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine'>
                                                    {section.tag}
                                                </span>
                                            )}
                                        </div>
                                        {section.description && (
                                            <span className="tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]">
                                                {section.description}
                                            </span>
                                        )}
                                        <ul>
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className={`hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ${item?.description && 'tw-mt-2' || 'tw-mt-1'} ${isActive(item?.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : ''}`}>
                                                    <Link
                                                        onClick={(e) => { e.preventDefault(), handleRouting(item?.pageUrl), setMenuVisible(null) }}
                                                        href={generateHref(item?.pageUrl)}
                                                        className={`${!item?.pageUrl && 'tw-cursor-default'}`}
                                                    >
                                                        <span className="tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white">
                                                            {item.title}
                                                            {item.label && (
                                                                <span className={`tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ${getColorClasses(item.label)}`}>
                                                                    {item.label}
                                                                </span>
                                                            )}
                                                            <FontAwesomeIcon
                                                                icon={faArrowRightLong}
                                                                width={13}
                                                                height={15}
                                                                className='tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1'
                                                            />
                                                        </span>
                                                        {item?.description && (
                                                            <span className="tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]">
                                                                {item?.description}
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
            )}

            {/* Options Menu */}
            {optionsData && (
                <div ref={(el) => { dropdownRefs.current[1] = el }} className={`tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ${menuVisible == 1 ? 'tw-scale-y-100' : 'tw-scale-y-0'}`}>
                    <ul className="tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto">
                    <div className="tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between">
                    <div className=" tw-gap-4 tw-flex tw-justify-between  tw-w-full ">
                                {optionsData.map((section, index) => (
                                    <div key={index}>
                                        <div className="tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b">
                                            <div className="tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2">
                                                <Image
                                                    src={section.imageUrl}
                                                    width={30}
                                                    height={30}
                                                    alt={section.title}
                                                    title={section.title}
                                                    className='tw-me-2'
                                                />
                                            </div>
                                            <span className='tw-font-bold'>{section.title}</span>
                                            {section.tag && (
                                                <span className='tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine'>
                                                    {section.tag}
                                                </span>
                                            )}
                                        </div>
                                        {section.description && (
                                            <span className="tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]">
                                                {section.description}
                                            </span>
                                        )}
                                        <ul>
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className={`hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ${item?.description && 'tw-mt-2' || 'tw-mt-1'} ${isActive(item?.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : ''}`}>
                                                    <Link
                                                        onClick={(e) => { e.preventDefault(), handleRouting(item?.pageUrl), setMenuVisible(null) }}
                                                        href={generateHref(item?.pageUrl)}
                                                        className={`${!item?.pageUrl && 'tw-cursor-default'}`}
                                                    >
                                                        <span className="tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white">
                                                            {item.title}
                                                            {item.label && (
                                                                <span className={`tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ${getColorClasses(item.label)}`}>
                                                                    {item.label}
                                                                </span>
                                                            )}
                                                            <FontAwesomeIcon
                                                                icon={faArrowRightLong}
                                                                width={13}
                                                                height={15}
                                                                className='tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1'
                                                            />
                                                        </span>
                                                        {item?.description && (
                                                            <span className="tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]">
                                                                {item?.description}
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
            )}

            {/* Resources Menu */}
            {resourcesData && (
                <div ref={(el) => { dropdownRefs.current[2] = el }} className={`tw-flex tw-items-center tw-w-full tw-absolute tw-z-[100] tw-right-0 tw-m-auto tw-px-4 tw-py-1 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] tw-animate-growDown tw-overflow-hidden smooth-dropdown ${menuVisible == 2 ? 'tw-scale-y-100' : 'tw-scale-y-0'}`}>
                    <ul className="tw-flex xl:tw-items-center tw-gap-y-4 xl:tw-gap-0 xl:tw-flex-row tw-flex-col tw-justify-between tw-w-full max-2xl:tw-max-h-[450px] tw-overflow-y-auto">
                    <div className="tw-py-3 tw-px-1 tw-flex tw-w-full tw-justify-between">
                    <div className=" tw-gap-4 tw-flex tw-justify-between  tw-w-full ">
                                {resourcesData.map((section, index) => (
                                    <div key={index}>
                                        <div className="tw-flex tw-items-center tw-pb-2 tw-text-base tw-font-semibold tw-text-[#00498E] dark:!tw-text-[#409FFE] tw-border-b">
                                            <div className="tw-w-[24px] tw-h-[24px] 2xl:tw-w-[28px] 2xl:tw-h-[28px] tw-me-2">
                                                <Image
                                                    src={section.imageUrl}
                                                    width={30}
                                                    height={30}
                                                    alt={section.title}
                                                    title={section.title}
                                                    className='tw-me-2'
                                                />
                                            </div>
                                            <span className='tw-font-bold'>{section.title}</span>
                                            {section.tag && (
                                                <span className='tw-bg-[#ffc145] tw-text-[#333] tw-text-xs tw-p-[2px_6px] tw-ms-2 tw-rounded-[4px] shine'>
                                                    {section.tag}
                                                </span>
                                            )}
                                        </div>
                                        {section.description && (
                                            <span className="tw-block tw-py-2 tw-text-[10px] xl:tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD]">
                                                {section.description}
                                            </span>
                                        )}
                                        <ul>
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className={`hover:tw-bg-[#ECF5FE] hover:dark:tw-bg-[#00498E] tw-duration-300 tw-group tw-rounded-lg xl:tw-p-1 tw-px-1.5 2xl:tw-px-2 ${item?.description && 'tw-mt-2' || 'tw-mt-1'} ${isActive(item?.pageUrl) ? 'tw-bg-[#ECF5FE] dark:tw-bg-[#00498E]' : ''}`}>
                                                    <Link
                                                        onClick={(e) => { e.preventDefault(), handleRouting(item?.pageUrl), setMenuVisible(null) }}
                                                        href={generateHref(item?.pageUrl)}
                                                        className={`${!item?.pageUrl && 'tw-cursor-default'}`}
                                                    >
                                                        <span className="tw-flex tw-justify-start tw-items-center tw-font-medium tw-text-[12px] xl:tw-text-[15px] tw-p-1 tw-text-[#333333] dark:tw-text-white">
                                                            {item.title}
                                                            {item.label && (
                                                                <span className={`tw-text-[#333] tw-text-[10px] tw-p-[0px_4px] tw-ms-2 shine tw-rounded-[4px] ${getColorClasses(item.label)}`}>
                                                                    {item.label}
                                                                </span>
                                                            )}
                                                            <FontAwesomeIcon
                                                                icon={faArrowRightLong}
                                                                width={13}
                                                                height={15}
                                                                className='tw-ms-2 tw-opacity-0 group-hover:tw-opacity-100 tw-duration-300 tw-min-w-4 tw-me-1'
                                                            />
                                                        </span>
                                                        {item?.description && (
                                                            <span className="tw-block tw-px-1 tw-text-xs 2xl:tw-text-sm tw-text-[#999999] dark:tw-text-[#DDDDDD] tw-leading-[21px]">
                                                                {item?.description}
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
            )}


            {/* Bars Menu */}
            {barsMenuData && (
                <div ref={(el) => { dropdownRefs.current[3] = el }}
                    className={`tw-grid md:tw-grid-cols-3 tw-w-full tw-max-w-[870px] tw-absolute  tw-duration-300 tw-z-[100] ${isLoggedIn && 'tw-right-[284px]' || 'tw-right-[190px]'} tw-m-auto tw-py-6 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] smooth-dropdown ${menuVisible == 3 ? 'tw-scale-y-100' : 'tw-scale-y-0'}`}>
                    <div className="tw-after:h-full tw-after:block tw-after:w-[0.6px] tw-after:bg-[#dddddd] tw-after:absolute tw-after:right-0 tw-after:top-0 tw-px-6 tw-flex tw-justify-center tw-flex-col tw-relative tw-mb-2">
                        {barsMenuData.slice(0, 7).map((item, index) => (
                            <Link
                                key={index}
                                onClick={(e) => { setMenuVisible(null), e.preventDefault(), handleRouting(item?.pageUrl) }}
                                href={generateHref(item?.pageUrl)}
                                className="tw-font-medium tw-text-black dark:tw-text-white  tw-duration-200 tw-mb-3 hover:tw-text-primary-text 
                                tw-text-[15px] tw-flex tw-items-center">
                                <span
                                    className={`tw-w-[45px] tw-h-[45px] tw-flex tw-items-center tw-justify-center tw-rounded-md tw-mr-3 
                                    ${item.label == "Advanced Stock Screener" && "tw-bg-[#FFECE4]"} 
                                     ${item.label == "Live Market Screener" && "tw-bg-[#fff4f4]"}
                                     ${item.label == "Options Screener" && "tw-bg-[#ECF5FE]"} 
                                     ${item.label == "NSE Option Chain" && "tw-bg-[#F3E8FF]"} 
                                     ${item.label == "BSE Option Chain" && "tw-bg-[#FFEFFC]"} 
                                     ${item.label == "Stock Analysis" && "tw-bg-[#FFF6E4]"} 
                                     ${item.label == "GPT Watchlist" && "tw-bg-[#E7FAFF]"}  `}>
                                    <Image src={item.icon} alt={item.label} title={item.label} width={20} height={20} />
                                </span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="tw-after:h-full tw-after:block tw-after:w-[0.6px] tw-after:bg-[#dddddd] tw-after:absolute tw-after:right-0 tw-after:top-0 tw-px-6 tw-flex tw-justify-center tw-flex-col tw-relative tw-mb-2">
                        {barsMenuData.slice(7).map((item, index) => (
                            <Link
                                key={index}
                                href={generateHref(item?.pageUrl)}
                                onClick={(e) => { setMenuVisible(null), e.preventDefault(), handleRouting(item?.pageUrl) }}
                                className="tw-font-medium tw-text-black dark:tw-text-white  tw-duration-200 tw-mb-3 hover:tw-text-primary-text tw-text-[15px] tw-flex tw-items-center">
                                <span
                                    className={`tw-w-[45px] tw-h-[45px] tw-flex tw-items-center tw-justify-center tw-rounded-md tw-mr-3 
                                    ${item.label == "TV Chart" && "tw-bg-[#eee]"}
                                     ${item.label == "GIFT NIFTY" && "tw-bg-[#FFECE4]"} 
                                     ${item.label == "News" && "tw-bg-[#FFEAEA]"} 
                                     ${item.label == "IPO" && "tw-bg-[#ECF5FE]"} 
                                     ${item.label == "Strategy Builder" && "tw-bg-[#F3E8FF]"} 
                                     ${item.label == "Options Simulator" && "tw-bg-[#FFEFFC]"} 
                                     ${item.label == "Prime" && "tw-bg-[#FFF6E4]"} 
                                     ${item.label == "Blog" && "tw-bg-[#E7FAFF]"} `}>
                                    <Image src={item.icon} alt={item.label} title={item.label} width={20} height={20} />
                                </span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <div className="tw-mx-auto tw-w-max">
                            <div className="tw-border tw-w-max">
                                <Image src={menu_qr_codeImage} alt="QR" title='qr code' width={200} height={200} />
                            </div>
                            <div className="tw-text-black dark:tw-text-white tw-text-base tw-mt-2 tw-font-semibold">
                                Download Now
                            </div>
                            <span className="tw-block tw-py-2 tw-text-[#999999] tw-text-base tw-font-semibold">
                                For Android & IOS
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* User menu */}
            {profileData && (
                <div
                    ref={(el) => { dropdownRefs.current[4] = el }}
                    className={`tw-w-[210px] tw-absolute tw-z-[100] tw-right-[140px] tw-m-auto tw-py-2 tw-bg-white dark:tw-bg-[#333] tw-shadow-custom dark:tw-shadow-custom-dark tw-top-[65px] smooth-dropdown ${menuVisible == 4 ? 'tw-scale-y-100' : 'tw-scale-y-0'}`}>
                    <ul>
                        {profileData?.length > 0 &&
                            profileData.map((item, key) => (
                                <li key={key}>
                                    {item?.label === "Logout" ? (
                                        <div
                                            onClick={onLogout}
                                            className="tw-pl-5 tw-pr-3 tw-py-3 dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white tw-w-full tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent hover:tw-border-l-primary-text tw-flex tw-items-center tw-cursor-pointer">
                                            <Image
                                                src={item.icon}
                                                alt={item.label} title={item.label}
                                                width={22}
                                                height={22}
                                                className="tw-mr-3"
                                            />
                                            <span>{item.label}</span>
                                        </div>
                                    ) : item?.label === "Social Media" ? (
                                        <>
                                            <div className="tw-pl-5 tw-cursor-pointer dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white tw-pr-3 tw-group tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent hover:tw-border-l-primary-text tw-flex tw-items-center tw-h-[45px]">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.label} title={item.label}
                                                    width={22}
                                                    height={22}
                                                    className="tw-mr-3 group-hover:tw-hidden"
                                                />
                                                <span className="group-hover:tw-hidden">{item.label}</span>
                                                <ul className="tw-justify-center tw-gap-4 group-hover:tw-flex tw-hidden tw-ms-1">
                                                    {socialLinks.slice(0, 4).map((icon, index) => (
                                                        <li
                                                            key={index}
                                                            className={`tw-rounded tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center ${index === 0 ? "tw-bg-[#485a96]" : index === 1 ? "tw-bg-[#333]" : index === 2 ? "tw-bg-[#dc1716]" : index === 3 ? "tw-bg-linkedin-gradient" : index === 4 ? "tw-bg-instagram-gradient" : index === 5 ? "tw-bg-[#2aa1d4]" : "tw-bg-black"}`}>
                                                            <a
                                                                target="_blank"
                                                                href={icon.link}
                                                                className="tw-flex tw-items-center tw-justify-center">
                                                                <Image
                                                                    src={icon.icon}
                                                                    width={20}
                                                                    height={20}
                                                                    alt={item.label} title={item.label}
                                                                    className="tw-transition tw-duration-300 tw-ease-in-out hover:tw-rotate-y-180 hover:tw-scale-x-[-1]"
                                                                />
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : item?.label === "Download App" ? (
                                        <>
                                            <div className="tw-pl-5 tw-cursor-pointer tw-pr-3 dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white tw-group tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent hover:tw-border-l-primary-text tw-flex tw-items-center tw-h-[45px]">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.label} title={item.label}
                                                    width={22}
                                                    height={22}
                                                    className="tw-mr-3 group-hover:tw-hidden"
                                                />
                                                <span className="group-hover:tw-hidden">{item.label}</span>
                                                <ul className="tw-justify-center tw-gap-4 group-hover:tw-flex tw-hidden tw-ms-12">
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://play.google.com/store/apps/details?id=in.niftytrader&hl=en_IN"
                                                            className="tw-flex tw-items-center tw-justify-center">
                                                            <Image
                                                                src={play_store_logo}
                                                                width={24}
                                                                height={24}
                                                                alt={item.label} title={item.label}
                                                                className="tw-transition tw-duration-300 tw-ease-in-out hover:tw-rotate-y-180 hover:tw-scale-x-[-1]"
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://apps.apple.com/us/app/nifty-trader/id1587483980"
                                                            className="tw-flex tw-items-center tw-justify-center">
                                                            <Image
                                                                src={apple_store_logo}
                                                                width={25}
                                                                height={25}
                                                                alt={item.label} title={item.label}
                                                                className="tw-transition tw-duration-300 tw-ease-in-out hover:tw-rotate-y-180 hover:tw-scale-x-[-1]"
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    ) : item?.label === "Change Password" ? (
                                        <div
                                            onClick={onPassword}
                                            className="tw-pl-5 tw-pr-3 tw-py-3 tw-w-full tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white hover:tw-border-l-primary-text tw-flex tw-items-center tw-cursor-pointer">
                                            <Image
                                                src={item.icon}
                                                alt={item.label} title={item.label}
                                                width={22}
                                                height={22}
                                                className="tw-mr-3"
                                            />
                                            <span>{item.label}</span>
                                        </div>
                                    ) : (
                                        <Link
                                            onClick={(e) => { setMenuVisible(null), e.preventDefault(), handleRouting(item?.pageUrl) }}
                                            href={item.pageUrl}
                                            className="tw-pl-5 tw-pr-3 tw-py-3 tw-w-full tw-text-black dark:tw-text-white tw-text-[15px] hover:tw-bg-[#ecf5fe]  tw-duration-200 hover:tw-text-primary-text tw-border-l-2 tw-border-l-transparent dark:hover:tw-bg-[#00498E] dark:hover:tw-border-l-white hover:tw-border-l-primary-text tw-flex tw-items-center">
                                            <Image
                                                src={item.icon}
                                                alt={item.label} title={item.label}
                                                width={22}
                                                height={22}
                                                className="tw-mr-3"
                                            />
                                            <span>{item.label}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default HeaderDropDown