'use strict';

var Premium = require('./public/images/Premium.svg.js');
var alarm = require('./public/images/alarm.svg.js');
var app_promo = require('./public/images/app_promo.svg.js');
var bid_landscape = require('./public/images/bid_landscape.svg.js');
var watch_list_bar = require('./public/images/watch_list_bar.svg.js');
var bookmark_blue = require('./public/images/bookmark_blue.svg.js');
var contract = require('./public/images/contract.svg.js');
var dashboard = require('./public/images/dashboard.svg.js');
var diversity_1 = require('./public/images/diversity_1.svg.js');
var flowsheet = require('./public/images/flowsheet.svg.js');
var giftNiftyFill = require('./public/images/Header/gift-nifty-fill.svg.js');
var live_market = require('./public/images/live_market.svg.js');
var link_oc = require('./public/images/link_oc.svg.js');
var lock_reset = require('./public/images/lock_reset.svg.js');
var logout = require('./public/images/logout.svg.js');
var model_training = require('./public/images/model_training.svg.js');
var news = require('./public/images/news.svg.js');
var Tv_chart_logo = require('./public/images/Tv_chart_logo.svg.js');
var person = require('./public/images/person.svg.js');
var share = require('./public/images/share.svg.js');
var option_screener_bar = require('./public/images/option_screener_bar.svg.js');
var table_chart_view_os = require('./public/images/table_chart_view_os.svg.js');
var advance_stock = require('./public/images/advance_stock.svg.js');
var stocksTracking = require('./public/images/stocks-tracking.svg.js');
var screener = require('./public/images/Header/screener.svg.js');
var live_analytices_header = require('./public/images/Header/live_analytices_header.svg.js');
var market_action = require('./public/images/Header/market_action.svg.js');
var contributors_header = require('./public/images/Header/contributors_header.svg.js');
var simulator = require('./public/images/Header/simulator.svg.js');
var bk_intraday = require('./public/images/Header/bk_intraday.svg.js');
var bk_trending = require('./public/images/Header/bk_trending.svg.js');
var bk_multistrike = require('./public/images/Header/bk_multistrike.svg.js');
var bk_timeflow = require('./public/images/Header/bk_timeflow.svg.js');
var option_chain = require('./public/images/Header/option_chain.svg.js');
var pcr = require('./public/images/Header/pcr.svg.js');
var change_oi = require('./public/images/Header/change_oi.svg.js');
var oi_chart = require('./public/images/Header/oi_chart.svg.js');
var vol_pcr = require('./public/images/Header/vol_pcr.svg.js');
var max_pain = require('./public/images/Header/max_pain.svg.js');
var ipo = require('./public/images/Header/ipo.svg.js');
var ipo_bar = require('./public/images/ipo_bar.svg.js');
var stats = require('./public/images/Header/stats.svg.js');
var daily_stats = require('./public/images/Header/daily_stats.svg.js');
var broker = require('./public/images/Header/broker.svg.js');
var calculator = require('./public/images/Header/calculator.svg.js');
var references = require('./public/images/Header/references.svg.js');

// label : Upcoming, New, Update

const analyticsData = [{
  title: "SCREENER",
  imageUrl: screener.default,
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
  imageUrl: live_analytices_header.default,
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
  imageUrl: market_action.default,
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
  imageUrl: stocksTracking.default,
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
  imageUrl: contributors_header.default,
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
  imageUrl: simulator.default,
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
  imageUrl: bk_intraday.default,
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
  imageUrl: bk_trending.default,
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
  imageUrl: bk_multistrike.default,
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
  imageUrl: bk_timeflow.default,
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
  imageUrl: option_chain.default,
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
  imageUrl: pcr.default,
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
  imageUrl: change_oi.default,
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
  imageUrl: oi_chart.default,
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
  imageUrl: vol_pcr.default,
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
  imageUrl: max_pain.default,
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
  imageUrl: ipo.default,
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
  imageUrl: stats.default,
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
  imageUrl: daily_stats.default,
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
  imageUrl: broker.default,
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
  imageUrl: calculator.default,
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
  imageUrl: references.default,
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
  icon: advance_stock.default,
  pageUrl: "/advanced-stock-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track",
  bg: "#F1FFF1"
}, {
  label: "Live Market Screener",
  icon: live_market.default,
  bg: "#FFEAEA",
  pageUrl: "/stock-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Options Screener",
  icon: option_screener_bar.default,
  bg: "#ECF5FE",
  pageUrl: "/options-screener?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "NSE Option Chain",
  icon: link_oc.default,
  bg: "#F3E8FF",
  pageUrl: "/nse-option-chain?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "BSE Option Chain",
  icon: flowsheet.default,
  bg: "#FFEFFC",
  pageUrl: "/bse-option-chain?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Stock Analysis",
  icon: bid_landscape.default,
  bg: "#FFF6E4",
  pageUrl: "/stocks-analysis?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "GPT Watchlist",
  icon: watch_list_bar.default,
  bg: "#E7FAFF",
  pageUrl: "/watchlist?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "GIFT NIFTY",
  icon: giftNiftyFill.default,
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
  icon: Tv_chart_logo.default,
  bg: "#333333",
  pageUrl: "/share-price-chart/nifty-50?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "IPO",
  icon: ipo_bar.default,
  bg: "#ECF5FE",
  pageUrl: "/ipo?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Strategy Builder",
  icon: model_training.default,
  bg: "#F3E8FF",
  pageUrl: "/option-strategy-builder?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Options Simulator",
  icon: table_chart_view_os.default,
  bg: "#FFEFFC",
  pageUrl: "/options-simulator/nifty?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Prime",
  icon: Premium.default,
  bg: "#FFF6E4",
  pageUrl: "/primeplans?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Blog",
  icon: news.default,
  bg: "#E7FAFF",
  pageUrl: "/content/?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}];

// profile data
const profileData = [{
  label: "My Profile",
  icon: person.default,
  pageUrl: "/my-profile?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Dashboard",
  icon: dashboard.default,
  pageUrl: "/my-dashboard?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Watchlist",
  icon: bookmark_blue.default,
  pageUrl: "/watchlist?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Alerts",
  icon: alarm.default,
  pageUrl: "/stockalerts?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "My Portfolio",
  icon: contract.default,
  pageUrl: "/portfolio?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Share a Trial",
  icon: share.default,
  pageUrl: "/share-a-trial?utm_source=Menu&utm_medium=Header-Dropdown&utm_campaign=Click-Track"
}, {
  label: "Social Media",
  icon: diversity_1.default,
  pageUrl: ""
}, {
  label: "Change Password",
  icon: lock_reset.default,
  pageUrl: ""
}, {
  label: "Download App",
  icon: app_promo.default,
  pageUrl: ""
}, {
  label: "Logout",
  icon: logout.default,
  pageUrl: ""
}];

exports.analyticsData = analyticsData;
exports.backTestingData = backTestingData;
exports.barsMenuData = barsMenuData;
exports.optionsData = optionsData;
exports.profileData = profileData;
exports.resourcesData = resourcesData;
//# sourceMappingURL=HeaderData.js.map
