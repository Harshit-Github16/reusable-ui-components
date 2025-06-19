import Premium_crownImage from './public/images/Premium.svg.js';
import alarm from './public/images/alarm.svg.js';
import app_promo from './public/images/app_promo.svg.js';
import bid_landscape from './public/images/bid_landscape.svg.js';
import watch_list_bar from './public/images/watch_list_bar.svg.js';
import bookmark_blue from './public/images/bookmark_blue.svg.js';
import contract from './public/images/contract.svg.js';
import dashboard from './public/images/dashboard.svg.js';
import diversity_1 from './public/images/diversity_1.svg.js';
import flowsheet from './public/images/flowsheet.svg.js';
import giftNifty from './public/images/Header/gift-nifty-fill.svg.js';
import live_market from './public/images/live_market.svg.js';
import link_oc from './public/images/link_oc.svg.js';
import lock_reset from './public/images/lock_reset.svg.js';
import logout from './public/images/logout.svg.js';
import model_training from './public/images/model_training.svg.js';
import news from './public/images/news.svg.js';
import newspaper from './public/images/Tv_chart_logo.svg.js';
import person from './public/images/person.svg.js';
import share from './public/images/share.svg.js';
import option_screener_bar from './public/images/option_screener_bar.svg.js';
import table_chart_view_os from './public/images/table_chart_view_os.svg.js';
import advance_stock from './public/images/advance_stock.svg.js';
import stockTracking from './public/images/stocks-tracking.svg.js';
import screener from './public/images/Header/screener.svg.js';
import liveAnalytics from './public/images/Header/live_analytices_header.svg.js';
import marketAction from './public/images/Header/market_action.svg.js';
import contributors from './public/images/Header/contributors_header.svg.js';
import optionSimulator from './public/images/Header/simulator.svg.js';
import intraDay from './public/images/Header/bk_intraday.svg.js';
import trendingOi from './public/images/Header/bk_trending.svg.js';
import multiStrike from './public/images/Header/bk_multistrike.svg.js';
import oiTimeflow from './public/images/Header/bk_timeflow.svg.js';
import optionChain from './public/images/Header/option_chain.svg.js';
import oiChart from './public/images/Header/pcr.svg.js';
import changeOI from './public/images/Header/change_oi.svg.js';
import oiCharts from './public/images/Header/oi_chart.svg.js';
import volPcr from './public/images/Header/vol_pcr.svg.js';
import maxPain from './public/images/Header/max_pain.svg.js';
import ipo from './public/images/Header/ipo.svg.js';
import ipo_bar from './public/images/ipo_bar.svg.js';
import stats from './public/images/Header/stats.svg.js';
import dailyStats from './public/images/Header/daily_stats.svg.js';
import broker from './public/images/Header/broker.svg.js';
import calculator from './public/images/Header/calculator.svg.js';
import references from './public/images/Header/references.svg.js';

// label : Upcoming, New, Update

const analyticsData = [{
  title: "SCREENER",
  imageUrl: screener,
  description: null,
  items: [{
    title: "Advanced Stock Screener",
    description: "EOD research and analysis",
    label: null,
    pageUrl: "/advanced-stock-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Live Market Screener",
    description: "Real time stocks filter",
    label: null,
    pageUrl: "/stock-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Options Screener",
    description: "Real time filter for FnO stocks",
    label: null,
    pageUrl: "/options-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "LIVE ANALYTICS",
  tag: "Prime",
  description: "Real time Market Trend, Central pivot range and detail information for Indices and stocks.",
  imageUrl: liveAnalytics,
  items: [{
    title: "Nifty Live Analytics",
    description: null,
    label: null,
    pageUrl: "/live-analytics?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty Live Analytics",
    description: null,
    label: null,
    pageUrl: "/banknifty-live-analysis?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty Live Analytics",
    description: null,
    label: null,
    pageUrl: "/finnifty-live-analysis?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty Live Analytics",
    description: null,
    label: null,
    pageUrl: "/midcpnifty-live-analysis?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sensex Today",
    description: null,
    label: null,
    pageUrl: "/sensex-today?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "MARKET ACTION",
  imageUrl: marketAction,
  items: [{
    title: "Opening Price Clues",
    description: null,
    label: null,
    pageUrl: "/opening-price-clues?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Gap Up, Gap Down",
    description: null,
    label: null,
    pageUrl: "/gap-ups-gap-downs?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Breakout Stocks",
    description: null,
    label: null,
    pageUrl: "/nse-stocks-price?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Gainers & Losers",
    description: null,
    label: null,
    pageUrl: "/nse-top-gainers?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Volume Shockers",
    description: null,
    label: null,
    pageUrl: "/nse-stocks-volume?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Advance Decline Ratio Chart",
    description: null,
    label: null,
    pageUrl: "/advance-decline-ratio?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "STOCK TRACKING",
  imageUrl: stockTracking,
  items: [{
    title: "GPT Alerts and Watchlist",
    description: null,
    label: null,
    pageUrl: "/watchlist?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "TV Chart",
    description: null,
    label: null,
    pageUrl: "/share-price-chart/nifty-50?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Custom Alerts",
    description: null,
    label: null,
    pageUrl: "/stockalerts?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Derivative Summary",
    description: null,
    label: null,
    pageUrl: "/derivative-summary?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  },
  // {
  //    title: "F&O Signals",
  //    description: null,
  //    label: 'Upcoming',
  //    pageUrl: "",
  // },
  {
    title: "Stock Futures",
    description: null,
    label: null,
    pageUrl: "/stock-futures?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sector Analysis",
    description: null,
    label: null,
    pageUrl: "/sector-analysis?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "CONTRIBUTORS",
  description: "Keep Track of Real time trend of NSE/BSE indices contributors",
  imageUrl: contributors,
  items: [{
    title: "Nifty 50 Contributors",
    description: null,
    label: null,
    pageUrl: "/nifty50-contributors?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Nifty Next 50 Contributors",
    description: null,
    label: null,
    pageUrl: "/nifty-next50-contributors?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty Contributors",
    description: null,
    label: null,
    pageUrl: "/nifty-bank-contributors?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty Contributors",
    description: null,
    label: null,
    pageUrl: "/nifty-fin-contributors?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty Contributors",
    description: null,
    label: null,
    pageUrl: "/midcap-nifty-contributors?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Select Contributors",
    description: null,
    label: null,
    pageUrl: "/midcap-select-contributors?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "BSE Sensex Contributors",
    description: null,
    label: null,
    pageUrl: "/sensex-contributor?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}];
const backTestingData = [{
  title: "OPTION SIMULATOR",
  imageUrl: optionSimulator,
  description: "Back Test, model and analyze the potential outcomes of trading strategies along with pre built",
  items: [{
    title: "Nifty Option Simulator",
    description: null,
    label: null,
    pageUrl: "/options-simulator/nifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty Option Simulator",
    description: null,
    label: null,
    pageUrl: "/options-simulator/banknifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty Option Simulator",
    description: null,
    label: null,
    pageUrl: "/options-simulator/finnifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "INTRADAY BACKTEST",
  imageUrl: intraDay,
  tag: "Prime",
  description: "Back Test and model all your Intraday Trade strategies with our pre built strategies ",
  items: [{
    title: "Nifty Options",
    description: null,
    label: null,
    pageUrl: "/options-trading-backtesting/nifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty Options",
    description: null,
    label: null,
    pageUrl: "/options-trading-backtesting/banknifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty Options",
    description: null,
    label: null,
    pageUrl: "/options-trading-backtesting/finnifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty Options",
    description: null,
    label: null,
    pageUrl: "/options-trading-backtesting/midcpnifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "TRENDING OI",
  imageUrl: trendingOi,
  tag: "Prime",
  description: "Check the calculated change of direction of market and accurate sentiment analysis of intraday market",
  items: [{
    title: "NSE Trending OI",
    description: null,
    label: null,
    pageUrl: "/nifty-trending-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "BSE Trending OI",
    description: null,
    label: null,
    pageUrl: "/sensex-trending-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "NSE Commodity Trending OI",
    description: null,
    label: null,
    pageUrl: "/mcx-trending-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "MULTI STRIKE COMPARISON",
  imageUrl: multiStrike,
  description: "Get the Call and Put OI, Vol, PCR, LTP , change in OI comparison chart on more strikes.",
  items: [{
    title: "Nifty",
    description: null,
    label: null,
    pageUrl: "/nifty-multi-strike-comparison?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty",
    description: null,
    label: null,
    pageUrl: "/banknifty-multi-strike-comparison?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty",
    description: null,
    label: null,
    pageUrl: "/finnifty-multi-strike-comparison?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Nifty Midcap Select",
    description: null,
    label: null,
    pageUrl: "/midcpnifty-multi-strike-comparison?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "OI TIMEFLOW",
  imageUrl: oiTimeflow,
  description: "Check the Intraday Option chain and get the complete day's LTP calculation at one step.",
  items: [{
    title: "Nifty OI Timeflow",
    description: null,
    label: null,
    pageUrl: "/ltp-calculator/nifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty OI Timeflow",
    description: null,
    label: null,
    pageUrl: "/ltp-calculator/banknifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty OI Timeflow",
    description: null,
    label: null,
    pageUrl: "/ltp-calculator/finnifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty OI Timeflow",
    description: null,
    label: null,
    pageUrl: "/ltp-calculator/midcpnifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sensex OI Timeflow",
    description: null,
    label: null,
    pageUrl: "/ltp-calculator/sensex?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "NSE Commodity OI Timeflow",
    description: null,
    label: null,
    pageUrl: "/mcx-ltp-calculator?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}];
const optionsData = [{
  title: "OPTION CHAIN",
  imageUrl: optionChain,
  description: "Get Technical study & Download Greeks of Option Chain with live quotes",
  items: [{
    title: "NSE Option Chain",
    description: null,
    label: null,
    pageUrl: "/nse-option-chain?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "BSE Option Chain",
    description: null,
    label: null,
    pageUrl: "/bse-option-chain?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "NSE Commodity Option Chain",
    description: null,
    label: null,
    pageUrl: "/commodities-option-chain-nse?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "OI CHART",
  imageUrl: oiChart,
  tag: "Prime",
  description: "Get line chart and bar chart view for all indices and F&O stocks open interest",
  items: [{
    title: "Nifty",
    description: null,
    label: null,
    pageUrl: "/live-nifty-open-interest"
  }, {
    title: "Bank Nifty",
    description: null,
    label: null,
    pageUrl: "/banknifty-live-oi-tracker?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty",
    description: null,
    label: null,
    pageUrl: "/live-finnifty-open-interest?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty",
    description: null,
    label: null,
    pageUrl: "/live-midcpnifty-open-interest?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sensex",
    description: null,
    label: null,
    pageUrl: "/live-sensex-open-interest?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Stocks",
    description: null,
    label: null,
    pageUrl: "/stock-options-chart/sbin?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "CHANGE IN OI",
  imageUrl: changeOI,
  description: "Get line chart and bar chart view for all indices and F&O stocks change in OI",
  items: [{
    title: "Nifty",
    description: null,
    label: null,
    pageUrl: "/nifty-live-change-in-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty",
    description: null,
    label: null,
    pageUrl: "/bank-nifty-live-oi-change?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty",
    description: null,
    label: null,
    pageUrl: "/finnifty-live-change-in-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty",
    description: null,
    label: null,
    pageUrl: "/midcpnifty-live-change-in-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sensex",
    description: null,
    label: null,
    pageUrl: "/sensex-live-change-in-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Stocks",
    description: null,
    label: null,
    pageUrl: "/stock-options-chart/sbin?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "PCR",
  imageUrl: oiCharts,
  description: "Get updated Put call ratio(PCR) charts of all Indices and F&O stocks",
  items: [{
    title: "Nifty",
    description: null,
    label: null,
    pageUrl: "/nifty-put-call-ratio?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty",
    description: null,
    label: null,
    pageUrl: "/banknifty-intra-pcr-trend?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty",
    description: null,
    label: null,
    pageUrl: "/finnifty-put-call-ratio?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty",
    description: null,
    label: null,
    pageUrl: "/midcpnifty-put-call-ratio?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sensex",
    description: null,
    label: null,
    pageUrl: "/sensex-put-call-ratio?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Stocks",
    description: null,
    label: null,
    pageUrl: "/stock-options-chart/sbin?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "VOLUME PCR",
  imageUrl: volPcr,
  tag: "Prime",
  description: "Get updated Volume Put call ratio(PCR) charts of all Indices and F&O stocks",
  items: [{
    title: "Nifty",
    description: null,
    label: null,
    pageUrl: "/nifty-put-call-ratio-volume?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty",
    description: null,
    label: null,
    pageUrl: "/banknifty-intra-volume-pcr-trend?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty",
    description: null,
    label: null,
    pageUrl: "/finnifty-put-call-ratio-volume?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty",
    description: null,
    label: null,
    pageUrl: "/midcpnifty-put-call-ratio-volume?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sensex",
    description: null,
    label: null,
    pageUrl: '/sensex-put-call-ratio-volume?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track'
  }, {
    title: "Stocks",
    description: null,
    label: null,
    pageUrl: "/stock-options-chart/sbin?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "LIVE MAX PAIN",
  imageUrl: maxPain,
  description: "Get Live max pain chart of all indices and F&O stocks, Sensex",
  items: [{
    title: "Nifty",
    description: null,
    label: null,
    pageUrl: "/options-max-pain-chart-live/nifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bank Nifty",
    description: null,
    label: null,
    pageUrl: "/options-max-pain-chart-live/banknifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Finnifty",
    description: null,
    label: null,
    pageUrl: "/options-max-pain-chart-live/finnifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Midcap Nifty",
    description: null,
    label: null,
    pageUrl: "/options-max-pain-chart-live/midcpnifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Sensex",
    description: null,
    label: null,
    pageUrl: "/bse-options-max-pain-chart-live?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Stocks",
    description: null,
    label: null,
    pageUrl: "/options-max-pain-chart-live/sbin?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}];
const resourcesData = [{
  title: "IPO",
  imageUrl: ipo,
  description: null,
  tag: null,
  items: [{
    title: "Upcoming IPO",
    description: null,
    label: null,
    pageUrl: "/ipo/upcoming?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Current IPO",
    description: null,
    label: null,
    pageUrl: "/ipo/ongoing?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Closed IPO",
    description: null,
    label: null,
    pageUrl: "/ipo/closed?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Recently Listed IPO",
    description: null,
    label: null,
    pageUrl: "/ipo/new-listed?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "SME IPO",
    description: null,
    label: null,
    pageUrl: "/ipo/sme?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Mainboard IPO",
    description: null,
    label: null,
    pageUrl: "/ipo/main-board?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "STATS",
  imageUrl: stats,
  description: null,
  tag: null,
  items: [{
    title: "F&O Lot Size",
    description: null,
    label: null,
    pageUrl: "/nse-fo-lot-size?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Result Calendar",
    description: null,
    label: null,
    pageUrl: "/results-calendar?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Bulk Deals",
    description: null,
    label: null,
    pageUrl: "/bulk-deals-data?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "DAILY STATS",
  imageUrl: dailyStats,
  description: null,
  tag: null,
  items: [{
    title: "FII DII Data",
    description: null,
    label: null,
    pageUrl: "/fii-dii-data?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Participant Wise OI",
    description: null,
    label: null,
    pageUrl: "/participant-wise-oi?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "F&O of FII",
    description: null,
    label: null,
    pageUrl: "/fii-dii-data?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Ban List",
    description: null,
    label: null,
    pageUrl: "/ban-list?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "BSE NSE Holiday List",
    description: null,
    label: null,
    pageUrl: "/bse-nse-trading-holidays?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Commodity Trading Holiday",
    description: null,
    label: null,
    pageUrl: "/commodity-trading-holidays?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "BROKERS",
  imageUrl: broker,
  description: null,
  tag: null,
  items: [{
    title: "Broker Directory",
    description: null,
    label: null,
    pageUrl: "/broker-directory?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Compare Broker",
    description: null,
    label: null,
    pageUrl: "/select-best-broker?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Stock Broker in India",
    description: null,
    label: null,
    pageUrl: "/stock-brokers-in-india?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "CALCULATOR",
  imageUrl: calculator,
  description: null,
  tag: null,
  items: [{
    title: "Option Pricing Calculator",
    description: null,
    label: null,
    pageUrl: "/option-pricing-calculator?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Fibonacci Calculator",
    description: null,
    label: null,
    pageUrl: "/fibonacci-calculator?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Pivot Calculator",
    description: null,
    label: null,
    pageUrl: "/pivot-calculator?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Developing Pivot Calculator",
    description: null,
    label: null,
    pageUrl: "/developing-pivots?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Elliot Wave Fibonacci Cluster Calculator",
    description: null,
    label: null,
    pageUrl: "/elliott-wave-fibonacci-cluster-calculator?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}, {
  title: "REFERENCES",
  imageUrl: references,
  description: null,
  tag: null,
  items: [
  // {
  //    title: "Trading & Investment Terminology",
  //    description: null,
  //    label: null,
  //    pageUrl: "/terms",
  // },
  {
    title: "Option Strategies to Mint Money",
    description: null,
    label: null,
    pageUrl: "/option-strategies?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Candlestick Pattern",
    description: null,
    label: null,
    pageUrl: "/candlestick-patterns?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }, {
    title: "Investing Books",
    description: null,
    label: null,
    pageUrl: "/investing-books?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
  }]
}];

// menu data
const barsMenuData = [{
  label: "Advanced Stock Screener",
  icon: advance_stock,
  pageUrl: "/advanced-stock-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track",
  bg: "#F1FFF1"
}, {
  label: "Live Market Screener",
  icon: live_market,
  bg: "#FFEAEA",
  pageUrl: "/stock-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Options Screener",
  icon: option_screener_bar,
  bg: "#ECF5FE",
  pageUrl: "/options-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "NSE Option Chain",
  icon: link_oc,
  bg: "#F3E8FF",
  pageUrl: "/nse-option-chain?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "BSE Option Chain",
  icon: flowsheet,
  bg: "#FFEFFC",
  pageUrl: "/bse-option-chain?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Stock Analysis",
  icon: bid_landscape,
  bg: "#FFF6E4",
  pageUrl: "/stocks-analysis?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "GPT Watchlist",
  icon: watch_list_bar,
  bg: "#E7FAFF",
  pageUrl: "/watchlist?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "GIFT NIFTY",
  icon: giftNifty,
  bg: "#FFECE4",
  pageUrl: "/gift-nifty-live?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
},
// {
//    label: "News",
//    icon: newspaper,
//    bg: "#FFEAEA",
//    pageUrl: "/news",
// },    pageUrl: "/share-price-chart/NIFTY%2050",

{
  label: "TV Chart",
  icon: newspaper,
  bg: "#333333",
  pageUrl: "/share-price-chart/nifty-50?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "IPO",
  icon: ipo_bar,
  bg: "#ECF5FE",
  pageUrl: "/ipo?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Strategy Builder",
  icon: model_training,
  bg: "#F3E8FF",
  pageUrl: "/option-strategy-builder?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Options Simulator",
  icon: table_chart_view_os,
  bg: "#FFEFFC",
  pageUrl: "/options-simulator/nifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Prime",
  icon: Premium_crownImage,
  bg: "#FFF6E4",
  pageUrl: "/primeplans?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Blog",
  icon: news,
  bg: "#E7FAFF",
  pageUrl: "/content/?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}];

// profile data
const profileData = [{
  label: "My Profile",
  icon: person,
  pageUrl: "/my-profile?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Dashboard",
  icon: dashboard,
  pageUrl: "/my-dashboard?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Watchlist",
  icon: bookmark_blue,
  pageUrl: "/watchlist?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Alerts",
  icon: alarm,
  pageUrl: "/stockalerts?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Portfolio",
  icon: contract,
  pageUrl: "/portfolio?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Share a Trial",
  icon: share,
  pageUrl: "/share-a-trial?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Social Media",
  icon: diversity_1,
  pageUrl: ""
}, {
  label: "Change Password",
  icon: lock_reset,
  pageUrl: ""
}, {
  label: "Download App",
  icon: app_promo,
  pageUrl: ""
}, {
  label: "Logout",
  icon: logout,
  pageUrl: ""
}];

export { analyticsData, backTestingData, barsMenuData, optionsData, profileData, resourcesData };
//# sourceMappingURL=HeaderData.js.map
