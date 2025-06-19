import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import chartDataIcon from '../../public/images/stacked_bar_chart.svg';
import barChartIcon from '../../public/images/chart_data (1).svg';
import giftnifty from '../../public/images/gift-nifty-sets-1.svg';
import analyticsIcon from '../../public/images/waterfall_chart (1).svg';
import timeIcon from '../../public/images/avg_time (1).svg';
import financeIcon from '../../public/images/finance (1).svg';
import linkIcon from '../../public/images/link@3x.svg';
import areaIcon from '../../public/images/tv_icon.svg';
import monitoringIcon from '../../public/images/diversity_2.svg';
import tableIcon from '../../public/images/table_chart_view (1).svg';
import arrow_left_dark from '../../public/images/arrow_left light-1.svg';
import arrow_left_light from '../../public/images/arrow_left Dark.svg';
import arrow_right_dark from '../../public/images/arrow_right Light.svg';
import arrow_right_light from '../../public/images/arrow_right dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { Router } from 'next/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface IndexData {
    title: string;
    image: string;
    pageUrls: string[]; // Corrected to string[]

}
const URLConfig = {
    optionChain: [
        '/nse-option-chain',
        '/bse-option-chain',
        '/commodities-option-chain-nse',
    ],
    oiCharts: [
        '/live-nifty-open-interest',
        '/banknifty-live-oi-tracker',
        '/live-finnifty-open-interest',
        '/live-midcpnifty-open-interest',
        '/nifty-live-change-in-oi',
        '/live-sensex-open-interest',
        '/bank-nifty-live-oi-change',
        '/finnifty-live-change-in-oi',
        '/midcpnifty-live-change-in-oi',
        '/sensex-live-change-in-oi',
        '/nifty-put-call-ratio',
        '/nifty-put-call-ratio-volume',
        '/banknifty-intra-pcr-trend',
        '/finnifty-put-call-ratio',
        '/midcpnifty-put-call-ratio',
        '/sensex-put-call-ratio',
        '/banknifty-intra-volume-pcr-trend',
        '/finnifty-put-call-ratio-volume',
        '/midcpnifty-put-call-ratio-volume',
        '/sensex-put-call-ratio-volume',
        '/options-max-pain-chart-live',
        '/bse-options-max-pain-chart-live',
        '/stock-options-chart',
    ],
    giftNifty: ['/gift-nifty-live'],
    liveAnalytics: [
        '/live-analytics',
        '/banknifty-live-analysis',
        '/finnifty-live-analysis',
        '/midcpnifty-live-analysis',
    ],
    trendingOi: [
        '/nifty-trending-oi',
        '/banknifty-trending-oi',
        '/finnifty-trending-oi',
        '/midcpnifty-trending-oi',
        '/sensex-trending-oi',
    ],
    oiTimeflow: ['/ltp-calculator'],
    futures: [
        '/stock-futures',
        '/bulk-deals-data',
        '/ban-list',
        '/derivative-summary',
        '/commodity-futures',
    ],
    tvChart: ['/share-price-chart/nifty%2050'],
    optionSimulator: ['/options-simulator/nifty'],
    movers: [
        '/nifty50-contributors',
        '/nifty-next50-contributors',
        '/nifty-bank-contributors',
        '/nifty-fin-contributors',
        '/midcap-nifty-contributors',
        '/midcap-select-contributors',
    ],
};

const menuItems: IndexData[] = [
    { title: 'Option Chain', image: linkIcon, pageUrls: URLConfig.optionChain },
    { title: 'OI Charts', image: chartDataIcon, pageUrls: URLConfig.oiCharts },
    { title: 'GIFT NIFTY', image: giftnifty, pageUrls: URLConfig.giftNifty },
    { title: 'Live Analytics', image: analyticsIcon, pageUrls: URLConfig.liveAnalytics },
    { title: 'Trending OI', image: barChartIcon, pageUrls: URLConfig.trendingOi },
    { title: 'OI Timeflow', image: timeIcon, pageUrls: URLConfig.oiTimeflow },
    { title: 'Futures', image: financeIcon, pageUrls: URLConfig.futures },
    { title: 'TV Chart', image: areaIcon, pageUrls: URLConfig.tvChart, }, // Opens in a new tab
    { title: 'Option Simulator', image: tableIcon, pageUrls: URLConfig.optionSimulator },
    { title: 'Movers', image: monitoringIcon, pageUrls: URLConfig.movers },
];




const getBgClass = (title: string): { bgClass: string; hoverTextClass: string } => {
    switch (title) {
        case 'Option Chain':
            return { bgClass: 'tw-bg-[#D80000]', hoverTextClass: 'hover:tw-text-[#D80000]' };
        case 'OI Charts':
            return { bgClass: 'tw-bg-[#04B800]', hoverTextClass: 'hover:tw-text-[#04B800]' };
        case 'GIFT NIFTY':
            return { bgClass: 'tw-bg-[#FFECE4]', hoverTextClass: 'hover:tw-text-[#f68e41]' };
        case 'Live Analytics':
            return { bgClass: 'tw-bg-[#B98A2C]', hoverTextClass: 'hover:tw-text-[#B98A2C]' };
        case 'Trending OI':
            return { bgClass: 'tw-bg-[#FE7E36]', hoverTextClass: 'hover:tw-text-[#FE7E36]' };
        case 'OI Timeflow':
            return { bgClass: 'tw-bg-[#8579AD]', hoverTextClass: 'hover:tw-text-[#8579AD]' };
        case 'Futures':
            return { bgClass: 'tw-bg-[#FB3E82]', hoverTextClass: 'hover:tw-text-[#FB3E82]' };
        case 'TV Chart':
            return { bgClass: 'tw-bg-[#131722]', hoverTextClass: 'hover:tw-text-[#131722]' };
        case 'Option Simulator':
            return { bgClass: 'tw-bg-[#577EA4]', hoverTextClass: 'hover:tw-text-[#577EA4]' };
        case 'Movers':
            return { bgClass: 'tw-bg-[#BC3081]', hoverTextClass: 'hover:tw-text-[#BC3081]' };
        default:
            return { bgClass: 'tw-bg-[#04B800]', hoverTextClass: 'hover:tw-text-[#04B800]' };
    }
};

const getCircleClass = (title: string): { borderColor: string; textColor: string } => {
    switch (title) {
        case 'Option Chain':
            return { borderColor: 'tw-border-b-[#D80000]', textColor: 'tw-text-[#D80000] dark:tw-text-[#FF6666]' };
        case 'OI Charts':
            return { borderColor: 'tw-border-b-[#04B800]', textColor: 'tw-text-[#04B800] dark:tw-text-[#6FDB6F]' };
        case 'GIFT NIFTY':
            return { borderColor: 'tw-border-b-[#f68e41]', textColor: 'tw-text-[#f68e41] dark:tw-text-[#FF9E41]' };
        case 'Live Analytics':
            return { borderColor: 'tw-border-b-[#B98A2C]', textColor: 'tw-text-[#B98A2C] dark:tw-text-[#E6B85C]' };
        case 'Trending OI':
            return { borderColor: 'tw-border-b-[#fe7e36]', textColor: 'tw-text-[#fe7e36] dark:tw-text-[#FF9A61]' };
        case 'OI Timeflow':
            return { borderColor: 'tw-border-b-[#8579AD]', textColor: 'tw-text-[#8579AD] dark:tw-text-[#A89ED2]' };
        case 'Futures':
            return { borderColor: 'tw-border-b-[#FB3E82]', textColor: 'tw-text-[#FB3E82] dark:tw-text-[#FF699A]' };
        case 'TV Chart':
            return { borderColor: 'tw-border-b-[#131722]', textColor: 'tw-text-[#131722] dark:tw-text-[#C0C0C0]' };
        case 'Option Simulator':
            return { borderColor: 'tw-border-b-[#577EA4]', textColor: 'tw-text-[#577EA4] dark:tw-text-[#7FAACD]' };
        case 'Movers':
            return { borderColor: 'tw-border-b-[#BC3081]', textColor: 'tw-text-[#BC3081] dark:tw-text-[#E15FA5]' };
        default:
            return { borderColor: '', textColor: '' };
    }
};


const HeaderQuickLinks: React.FC<{
    handleRouting: (value: any) => void; isFullUrl: boolean; isShowSubscriptionBtn: boolean; isSubscriptionPopupOpen: boolean; setisSubscriptionPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
    const { isFullUrl, handleRouting, isShowSubscriptionBtn, isSubscriptionPopupOpen, setisSubscriptionPopupOpen } = props
    const scrollRef = useRef<HTMLDivElement>(null);
    const BASE_URL = 'https://www.niftytrader.in';
    // const router = useRouter();
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [activeLink, setActiveLink] = useState<string>('');

    const updateArrows = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }

    };

    useEffect(() => {
        updateArrows();
        window.addEventListener('resize', updateArrows);
        return () => window.removeEventListener('resize', updateArrows);
    }, []);
    useEffect(() => {
        if (typeof window !== 'undefined') {

            const currentPath = window.location.pathname;

            const isPathActive = (path: string, urls: string[]) => {
                return urls.some((url) => path.startsWith(url)); // Check if the current path starts with any defined URL
            };

            const determineActiveLink = (path: string): string => {
                const activeItem = menuItems.find((item) => isPathActive(path, item.pageUrls));
                return activeItem ? activeItem.title : '';
            };

            setActiveLink(determineActiveLink(currentPath));
        }
    }, [typeof window !== 'undefined', window.location.pathname]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: direction === 'left' ? -150 : 150, behavior: 'smooth' });
        }
    };
    const generateHref = (pageUrl: string): string => {
        return isFullUrl ? new URL(pageUrl || '', BASE_URL).href : (pageUrl);
    };

    return (
        <div className="tw-relative tw-flex tw-justify-between
         tw-bg-white tw-ps-[20px] tw-shadow-[0px_2px_8px_0px_#0000001A] tw-border tw-border-[#e5e5e5] dark:tw-border-[#443c3c] dark:tw-bg-[#333]">
            {canScrollLeft && (
                <span onClick={() => scroll('left')} className="tw-absolute tw-h-[34.5px] dark:tw-bg-[#333] tw-bg-white tw-left-[0px] tw-z-10 tw-top-[-2%] -tw-translate-y-1/2 tw-cursor-pointer">
                    <Image src={arrow_left_light} alt="left icon" width={25} height={25} className="tw-pt-[2px] dark:tw-hidden" />
                    <Image src={arrow_left_dark} alt="left icon" width={25} height={25} className="tw-pt-[2px] tw-hidden dark:tw-block" />
                </span>
            )}

            <div ref={scrollRef} onScroll={updateArrows} className="tw-flex tw-justify-between tw-w-full tw-space-x-3 tw-overflow-x-auto tw-scrollbar-hide">
                <div className='tw-flex tw-text-nowrap'>
                    {menuItems.map((item, index) => {
                        const { bgClass, hoverTextClass } = getBgClass(item.title);
                        const { borderColor, textColor } = getCircleClass(item.title);
                        const isActive = activeLink === item.title;

                        return (
                            <ul key={index}>
                                <li
                                    key={index}
                                    className={`tw-flex tw-items-center tw-transition-all tw-font-normal dark:tw-text-white tw-flex-shrink-0 tw-border-b-[2px]  tw-border-transparent ${isActive ? `tw-border-b-[2px] ${borderColor} ${textColor} ` : ''
                                        }`}
                                >
                                    {item.title == "TV Chart" ?
                                        <Link
                                            href={`${generateHref(item?.pageUrls[0])}?utm_source=Sub-Menu&utm_medium=2nd-Strip&utm_campaign=Click-Track`}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className={`tw-items-center tw-flex tw-py-1 tw-pb-1 tw-pe-3 tw-border-b-[2px] tw-border-transparent ${hoverTextClass} ${isActive ? `${textColor} tw-border-b-[2px] ${borderColor}` : 'tw-text-[#333] dark:tw-text-white'
                                                }`}
                                        >
                                            <div className={`tw-rounded parent-div tw-text-center tw-flex tw-items-center tw-w-[18px] tw-h-[18px] tw-justify-center ${bgClass}`}>
                                                <Image src={item.image} alt={item.title} width={12} height={12} />
                                            </div>
                                            <span className={`tw-ml-[6px] tw-text-[10px] tw-font-[500]`}>{item.title}</span>
                                        </Link>
                                        :
                                        <Link
                                            onClick={(e) => { e.preventDefault(), 
                                             handleRouting(`${item.pageUrls[0]}?utm_source=Sub-Menu&utm_medium=2nd-Strip&utm_campaign=Click-Track`); }}
                                            href={`${generateHref(item?.pageUrls[0])}?utm_source=Sub-Menu&utm_medium=2nd-Strip&utm_campaign=Click-Track`}
                                            target={item.title == "TV Chart" ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                            className={`tw-items-center tw-font-normal tw-flex tw-py-1 tw-pb-1 tw-pe-3 tw-border-b-[2px] tw-border-transparent ${hoverTextClass} ${isActive ? `${textColor} tw-border-b-[2px] ${borderColor}` : 'tw-text-[#333] dark:tw-text-white'
                                                }`}
                                        >
                                            <div className={`tw-rounded parent-div tw-text-center tw-flex tw-items-center tw-w-[18px] tw-h-[18px] tw-justify-center ${bgClass}`}>
                                                <Image src={item.image} alt={item.title} width={12} height={12} />
                                            </div>
                                            <span className={`tw-ml-[6px] tw-text-[10px] tw-font-[500]`}>{item.title}</span>
                                        </Link>
                                    }
                                </li>
                            </ul>

                        );
                    })}
                </div>

                <div className="tw-ms-auto tw-place-self-auto tw-flex tw-items-center tw-text-nowrap tw-font-sans tw-tracking-wide">






                    <Link
                        href="https://www.niftytrader.in/contact-us"
                        className="tw-font-[450] tw-text-[14px] dark:tw-text-[#409FFE] tw-text-[#236AD4] "
                    >
                        <span className=' tw-underline hover:tw-underline dark:tw-text-[#409FFE] tw-text-[#236AD4]  
                        tw-underline-offset-4 hover:tw-decoration-[#236AD4] tw-decoration-[#236AD4]'>Contact Us</span>
                    </Link>
                    {/* <div className="tw-h-[20px] dark:tw-border-[#443c3c] tw-border-l-[2px] tw-mx-2 tw-border-gray-300"></div> */}


                    {/* <Link
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=care@niftytrader.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-font-[450] tw-my-auto tw-text-[14px] tw-mx-1 dark:tw-text-[#409FFE] tw-text-[#236AD4] tw-flex tw-items-center"
                    >
                        <FontAwesomeIcon icon={faEnvelope} width={15} height={15} className="tw-mr-2 tw-text-[#236AD4] dark:tw-text-[#409FFE]" />
                        <span className="dark:tw-text-[#409FFE] tw-text-[#236AD4] hover:tw-underline tw-underline-offset-4 hover:tw-decoration-[#236AD4]">
                            care@niftytrader.in
                        </span>
                    </Link> */}

                    <div className="tw-h-[20px] dark:tw-border-[#443c3c] tw-border-l-[2px] tw-mx-2 tw-border-gray-300"></div>

                    <Link
                        href="#"
                        target="_blank"
                        className="tw-flex tw-items-center tw-text-[14px] tw-font-[450] dark:tw-text-[#409FFE] tw-text-[#236AD4] tw-pointer-events-none tw-my-auto"
                    >
                        <FontAwesomeIcon icon={faPhone} width={15} height={15} className=" tw-text-[#236AD4] dark:tw-text-[#409FFE]" />
                        <span className="tw-ps-1 hover:tw-underline tw-text-[#236AD4] dark:tw-text-[#409FFE] hover:tw-decoration-[rgb(35,106,212)]">
                            +91 94685 47504
                        </span>
                    </Link>


                    {isShowSubscriptionBtn && (
                        <div className="tw-top-2 tw-right-0 tw-bg-blue-600 tw-ms-2 tw-text-white tw-text-sm tw-font-semibold tw-px-4 tw-py-1 tw-origin-top-right tw-pe-2
  tw-w-[142px]
  tw-rounded-tl-[50px] tw-rounded-bl-none tw-cursor-pointer tw-flex tw-items-center"
                            onClick={() => setisSubscriptionPopupOpen(true)}
                        >
                            <FontAwesomeIcon icon={faStar} className="tw-mr-2 tw-w-[15px] tw-h-[15px] tw-max-h-[15px]" />
                            Upgrade Plan
                        </div>
                    )}

                </div>


            </div>

            {canScrollRight && (
                <span onClick={() => scroll('right')} className="tw-cursor-pointer tw-absolute tw-h-[34.5px] dark:tw-bg-[#333] tw-right-[0px] tw-bg-white tw-top-[-2%] -tw-translate-y-1/2">
                    <Image src={arrow_right_light} alt="right icon" width={25} height={25} className="tw-pt-[2px] dark:tw-hidden" />
                    <Image src={arrow_right_dark} alt="right icon" width={25} height={25} className="tw-pt-[2px] tw-hidden dark:tw-block" />
                </span>
            )}
        </div>
    );
};


export default HeaderQuickLinks;
