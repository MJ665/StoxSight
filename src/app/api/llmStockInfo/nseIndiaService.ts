import { NseIndia } from 'stock-nse-india';

// Assuming './interface' and './index' contain the provided .d.ts types
import { DateRange, IntradayData, EquityDetails, EquityTradeInfo, EquityHistoricalData as EquityHistoricalDataWrapper, EquityHistoricalInfo, SeriesData, IndexDetails, IndexHistoricalData, OptionChainData, EquityCorporateInfo as EquityCorporateInfoRaw } from './interface';
// Re-import the NseIndia class type from the index.d.ts if needed for typing the instance
// import { NseIndia as NseIndiaType } from './index'; // Example if needed

const nseIndia = new NseIndia(); // Initialize the SDK


// Interface for our summary object - Adjusted based on .d.ts
interface NseMarketDataSummary {
  symbol: string;
  fetchTimestampUTC: string;
  status: "Success" | "Partial Success" | "Failed" | "Attempting";
  errorsEncountered: string[];
  generalInfo?: {
    companyName?: string; // From details.info
    industry?: string;    // From details.info
    listingDate?: string; // From details.metadata
    isin?: string;        // From details.metadata
    faceValue?: number;   // From details.securityInfo
    // paidUpValue?: number; // Not consistently in .d.ts structure for EquityDetails/securityInfo - removed
    marketLot?: number;   // From details.securityInfo
    series?: string;      // From details.metadata
    symbolName?: string;  // From details.info.symbol - added
  };
  priceInfo?: {
    lastPrice?: number;   // From details.priceInfo
    previousClose?: number; // From details.priceInfo
    open?: number;        // From details.priceInfo
    high?: number;        // From details.priceInfo
    low?: number;         // From details.priceInfo
    change?: number;      // From details.priceInfo
    pChange?: number;     // From details.priceInfo
    totalTradedVolume?: number; // From tradeInfo.marketDeptOrderBook.tradeInfo or preOpenMarket
    totalTradedValue?: number;  // From tradeInfo.marketDeptOrderBook.tradeInfo or preOpenMarket
    vwap?: number;        // From details.priceInfo
    weekHighLow?: {       // From details.priceInfo.weekHighLow - value is NUMBER in .d.ts
        min?: number;
        minDate?: string;
        max?: number;
        maxDate?: string;
        value?: number; // Corrected type to number
    };
    upperCP?: string;     // From details.securityInfo
    lowerCP?: string;     // From details.securityInfo
  };
  tradeInfo?: { // From getEquityTradeInfo
    totalMarketCap?: number; // From tradeInfo.marketDeptOrderBook.tradeInfo
    ffmc?: number;           // From tradeInfo.marketDeptOrderBook.tradeInfo
    impactCost?: number;     // From tradeInfo.marketDeptOrderBook.tradeInfo
  };
  corporateInfo?: Array<{ // From corporate_actions.data - only including fields present in .d.ts
    purpose?: string; // From action.purpose
    exDate?: string;  // From action.exdate
    // recordDate?: string; // Not in provided .d.ts for this data structure - removed
    // bcStartDate?: string; // Not in provided .d.ts - removed
    // bcEndDate?: string;   // Not in provided .d.ts - removed
    // ndStartDate?: string; // Not in provided .d.ts - removed
    // ndEndDate?: string;   // Not in provided .d.ts - removed
  }>; // Make it an array
  historicalDataSummary?: {
    lastAvailableDate?: string; // Added this as you calculate it
    oneMonthAgoDate?: string; // Added this as you calculate it
    oneMonthAgoClose?: number;
    threeMonthsAgoDate?: string; // Added this as you calculate it
    threeMonthsAgoClose?: number;
    oneYearAgoDate?: string; // Added this as you calculate it
    oneYearAgoClose?: number;
    ytdStartDate?: string; // Added this as you calculate it
    ytdStartClose?: number;
    oneMonthChangePercent?: number;
    threeMonthsChangePercent?: number;
    oneYearChangePercent?: number;
    ytdChangePercent?: number;
    lastMonthLow?: number;
    lastMonthHigh?: number;
    dataPointsFetched?: number;
    periodChecked?: string;
  };
}

// Helper to calculate date ranges
function getDateRange(monthsAgo: number = 0, yearsAgo: number = 0, daysAgo: number = 0): DateRange {
  const end = new Date();
  const start = new Date();
  if (yearsAgo > 0) start.setFullYear(start.getFullYear() - yearsAgo);
  if (monthsAgo > 0) start.setMonth(start.getMonth() - monthsAgo);
  // Adjust start date for inclusivity if needed - the library's API might handle this
  // Keeping your original logic for -1 day, adjust if API is end-date exclusive
  const startDate = new Date(start);
  if (daysAgo > 0) startDate.setDate(start.getDate() - (daysAgo - 1));
  return { start: startDate, end };
}

function round(value: number | undefined, decimals: number): number | undefined {
    if (value === undefined || value === null || isNaN(value)) return undefined;
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}


export async function getNseIndiaMarketData(symbol: string): Promise<NseMarketDataSummary> {
  const summary: NseMarketDataSummary = {
    symbol: symbol.toUpperCase(), // NSE symbols are usually uppercase
    fetchTimestampUTC: new Date().toISOString(),
    status: "Attempting",
    errorsEncountered: [],
  };

  const logError = (section: string, message: string, error?: any) => {
    const errorMessage = `${section}: ${message}${error ? ` - ${error instanceof Error ? error.message : String(error)}` : ''}`;
    summary.errorsEncountered.push(errorMessage);
    console.warn(`NseIndiaService Error for ${symbol} - ${errorMessage}`);
  };

  let details: EquityDetails | undefined;
  let tradeInfo: EquityTradeInfo | undefined;
  // let historyDataWrapper: EquityHistoricalDataWrapper | undefined;
  let corporateInfoRaw: EquityCorporateInfoRaw | undefined;


  try {
    // 1. Get Equity Details
    try {
      details = await nseIndia.getEquityDetails(symbol.toUpperCase());
      if (details && details.info && details.metadata && details.priceInfo && details.securityInfo) {
        summary.generalInfo = {
          companyName: details.info.companyName,
          industry: details.info.industry,
          listingDate: details.metadata.listingDate,
          isin: details.metadata.isin,
          faceValue: details.securityInfo.faceValue,
          // marketLot: details.securityInfo.marketLot,
          series: details.metadata.series,
          symbolName: details.info.symbol, // Added
        };
        summary.priceInfo = {
          lastPrice: details.priceInfo.lastPrice,
          previousClose: details.priceInfo.previousClose,
          open: details.priceInfo.open,
          // high: details.priceInfo.high,
          // low: details.priceInfo.low,
          change: details.priceInfo.change,
          pChange: details.priceInfo.pChange,
          vwap: details.priceInfo.vwap,
          weekHighLow: details.priceInfo.weekHighLow, // weekHighLow object comes directly
          // upperCP: details.securityInfo.upperCP,
          // lowerCP: details.securityInfo.lowerCP,
          // totalTradedVolume and totalTradedValue assigned after tradeInfo fetch
        };
      } else {
        logError("getEquityDetails", "Incomplete data structure returned from getEquityDetails.");
      }
    } catch (e) {
      logError("getEquityDetails", "Failed to fetch equity details", e);
    }

    // 2. Get Equity Trade Info (Market Cap, Traded Volume/Value)
    try {
      tradeInfo = await nseIndia.getEquityTradeInfo(symbol.toUpperCase());
      // Check for marketDeptOrderBook.tradeInfo path existence
      if (tradeInfo?.marketDeptOrderBook?.tradeInfo) {
        summary.tradeInfo = {
          totalMarketCap: tradeInfo.marketDeptOrderBook.tradeInfo.totalMarketCap, // Corrected path
          ffmc: tradeInfo.marketDeptOrderBook.tradeInfo.ffmc,                       // Corrected path
          impactCost: tradeInfo.marketDeptOrderBook.tradeInfo.impactCost,         // Corrected path
        };

         // Assign volume/value to priceInfo from here if tradeInfo is successful
        if (summary.priceInfo) { // Only assign if priceInfo object was successfully initialized
            summary.priceInfo.totalTradedVolume = tradeInfo.marketDeptOrderBook.tradeInfo.totalTradedVolume;
            summary.priceInfo.totalTradedValue = tradeInfo.marketDeptOrderBook.tradeInfo.totalTradedValue;
        }
      } else if (details?.preOpenMarket) { // Fallback to preOpenMarket values if tradeInfo failed but details succeeded
         if (summary.priceInfo) {
             summary.priceInfo.totalTradedVolume = details.preOpenMarket.totalTradedVolume;
            //  summary.priceInfo.totalTradedValue = details.preOpenMarket.totalTradedValue;
         }
         logError("getEquityTradeInfo", `Incomplete or missing tradeInfo/marketCap data. Falling back to pre-open data if available.`);
      } else {
         logError("getEquityTradeInfo", `Incomplete or missing tradeInfo/marketCap data. No fallback data available.`);
      }
    } catch (e) {
      logError("getEquityTradeInfo", "Failed to fetch equity trade info", e);
    }
    
    // 3. Get Equity Corporate Info
    try {
      corporateInfoRaw = await nseIndia.getEquityCorporateInfo(symbol.toUpperCase());
      // Accessing corporate_actions.data as per .d.ts
      if (corporateInfoRaw?.corporate_actions?.data && corporateInfoRaw.corporate_actions.data.length > 0) {
        // Mapping to the simplified structure based on available .d.ts fields
        summary.corporateInfo = corporateInfoRaw.corporate_actions.data.map(action => ({
          purpose: action.purpose, // Using action.purpose as per .d.ts
          exDate: action.exdate,   // Using action.exdate as per .d.ts
          // recordDate, bcStartDate, etc. are not in corporate_actions.data in provided .d.ts
        })).slice(0, 5); // Take latest 5 for brevity
      } else if (corporateInfoRaw?.latest_announcements?.data && corporateInfoRaw.latest_announcements.data.length > 0) {
         // Optional: Include latest announcements if corporate actions are empty
         summary.corporateInfo = corporateInfoRaw.latest_announcements.data.map(announcement => ({
            purpose: announcement.subject, // Using announcement.subject
            // exDate not available here
         })).slice(0, 5);
          logError("getEquityCorporateInfo", "No corporate actions found, using latest announcements.");
      } else {
          logError("getEquityCorporateInfo", "No corporate actions or announcements found.");
      }
    } catch (e) {
      logError("getEquityCorporateInfo", "Failed to fetch corporate info", e);
    }

    // 4. Get Historical Data
    summary.historicalDataSummary = { periodChecked: "Approx 15 Months" }; // Initialize
    try {
      // Fetch data for approx 1 year and 3 months (approx 15 months) to cover 1Y, 3M, 1M, YTD
      // 3*30 days is a rough estimate, actual trading days are less. Aim for ~300-400 days total?
      // Let's fetch 15 months ago to be safe.
      const range15M = getDateRange(15, 0, 0); // 15 months ago from today
      console.log(`Fetching historical data for ${symbol} with range: Start=${range15M.start.toISOString()}, End=${range15M.end.toISOString()}`);

      // Assuming getEquityHistoricalData returns a single object with a 'data' array
      let historyDataWrapper = await nseIndia.getEquityHistoricalData(symbol.toUpperCase(), range15M);
    //   const history: EquityHistoricalInfo[] = historyDataWrapper || []; // Get the data array
      const history: any = historyDataWrapper || []; // Get the data array

      summary.historicalDataSummary.dataPointsFetched = history.length;
      console.log(`Fetched ${history.length} historical data points for ${symbol}`);

      if (history.length > 1) { // Need at least 2 points for change calculations
        // Ensure history is sorted by date ascending - IMPORTANT for finding points 'N' days ago
        history.sort((a:any, b:any) => new Date(a.CH_TIMESTAMP).getTime() - new Date(b.CH_TIMESTAMP).getTime());

        const lastRecord = history[history.length - 1];
        const lastClose = lastRecord?.CH_CLOSING_PRICE;
        summary.historicalDataSummary.lastAvailableDate = lastRecord?.CH_TIMESTAMP;

        if (lastClose !== undefined) {
            // Helper to find a record roughly N trading days ago
            const findRecordRoughlyAgo = (tradingDaysAgo: number): EquityHistoricalInfo | undefined => {
                const index = history.length - 1 - tradingDaysAgo;
                if (index >= 0 && index < history.length) { // Ensure index is within bounds
                    return history[index];
                }
                return undefined;
            };

            // Use approx trading days: ~21/month, ~63/3 months, ~250/year
            const record1M = findRecordRoughlyAgo(21);
            const record3M = findRecordRoughlyAgo(63);
            const record1Y = findRecordRoughlyAgo(250);

            summary.historicalDataSummary.oneMonthAgoDate = record1M?.CH_TIMESTAMP;
            summary.historicalDataSummary.oneMonthAgoClose = record1M?.CH_CLOSING_PRICE;
            if (record1M?.CH_CLOSING_PRICE !== undefined && record1M.CH_CLOSING_PRICE !== 0) {
                summary.historicalDataSummary.oneMonthChangePercent = round(((lastClose - record1M.CH_CLOSING_PRICE) / record1M.CH_CLOSING_PRICE) * 100, 2);
            }

            summary.historicalDataSummary.threeMonthsAgoDate = record3M?.CH_TIMESTAMP;
            summary.historicalDataSummary.threeMonthsAgoClose = record3M?.CH_CLOSING_PRICE;
            if (record3M?.CH_CLOSING_PRICE !== undefined && record3M.CH_CLOSING_PRICE !== 0) {
                summary.historicalDataSummary.threeMonthsChangePercent = round(((lastClose - record3M.CH_CLOSING_PRICE) / record3M.CH_CLOSING_PRICE) * 100, 2);
            }

            summary.historicalDataSummary.oneYearAgoDate = record1Y?.CH_TIMESTAMP;
            summary.historicalDataSummary.oneYearAgoClose = record1Y?.CH_CLOSING_PRICE;
            if (record1Y?.CH_CLOSING_PRICE !== undefined && record1Y.CH_CLOSING_PRICE !== 0) {
                summary.historicalDataSummary.oneYearChangePercent = round(((lastClose - record1Y.CH_CLOSING_PRICE) / record1Y.CH_CLOSING_PRICE) * 100, 2);
            }

            // YTD
            const currentYear = new Date().getFullYear();
            const ytdStartDate = new Date(currentYear, 0, 1); // Jan 1st of current year
            let ytdStartRecord: EquityHistoricalInfo | undefined = undefined;
            // Find the first record on or after Jan 1st of current year by iterating through sorted history
            for(let i=0; i<history.length; i++){
                if(new Date(history[i].CH_TIMESTAMP) >= ytdStartDate){
                    ytdStartRecord = history[i];
                    break;
                }
            }
            summary.historicalDataSummary.ytdStartDate = ytdStartRecord?.CH_TIMESTAMP;
            summary.historicalDataSummary.ytdStartClose = ytdStartRecord?.CH_CLOSING_PRICE;
            if (ytdStartRecord?.CH_CLOSING_PRICE !== undefined && ytdStartRecord.CH_CLOSING_PRICE !== 0) {
                summary.historicalDataSummary.ytdChangePercent = round(((lastClose - ytdStartRecord.CH_CLOSING_PRICE) / ytdStartRecord.CH_CLOSING_PRICE) * 100, 2);
            }





            // Last month's high/low (from last ~22 records)
            const lastMonthHistory: EquityHistoricalInfo[] = history.slice(Math.max(0, history.length - 22));
            if (lastMonthHistory.length > 0) {
                // Filter out undefined/null/NaN before using Math.min/max and handle empty filtered arrays
                
                const lows = lastMonthHistory
                    .map((h: EquityHistoricalInfo) => h.CH_TRADE_LOW_PRICE) // h is now typed
                    .filter((p): p is number => typeof p === 'number' && !isNaN(p)); // Ensure p is a valid number
                
                summary.historicalDataSummary.lastMonthLow = lows.length > 0 ? Math.min(...lows) : undefined;

                const highs = lastMonthHistory
                    .map((h: EquityHistoricalInfo) => h.CH_TRADE_HIGH_PRICE) // h is now typed
                    .filter((p): p is number => typeof p === 'number' && !isNaN(p)); // Ensure p is a valid number

                summary.historicalDataSummary.lastMonthHigh = highs.length > 0 ? Math.max(...highs) : undefined;
            }
        } else {
            logError("getEquityHistoricalData", "Last closing price is undefined, cannot calculate historical changes.");
        }
      } else if (history.length === 1) {
           // If only one data point, can't calculate changes, but log it
           summary.historicalDataSummary.lastAvailableDate = history[0]?.CH_TIMESTAMP;
           summary.historicalDataSummary.lastMonthLow = history[0]?.CH_TRADE_LOW_PRICE;
           summary.historicalDataSummary.lastMonthHigh = history[0]?.CH_TRADE_HIGH_PRICE;
           logError("getEquityHistoricalData", `Only one historical data point returned for ${symbol}. Cannot calculate period changes.`);
      }
      else {
         logError("getEquityHistoricalData", `No historical data points returned for ${symbol} in the specified range.`);
      }
    } catch (e) {
      logError("getEquityHistoricalData", "Failed to fetch or process historical data", e);
    }

    // Determine final status
    // Check if essential data was obtained
    const gotPriceInfo = summary.priceInfo && summary.priceInfo.lastPrice !== undefined; // Needs at least a price
    const gotMeaningfulHistoricalData = summary.historicalDataSummary?.dataPointsFetched && summary.historicalDataSummary.dataPointsFetched > 0;

    if (summary.errorsEncountered.length === 0 && gotPriceInfo && gotMeaningfulHistoricalData) {
      summary.status = "Success";
    } else if (gotPriceInfo || gotMeaningfulHistoricalData) { // If we got price OR history, it's partial
      summary.status = "Partial Success";
    } else { // If we got neither essential piece of data
      summary.status = "Failed";
    }


  } catch (globalError) { // Catch any unexpected global errors during the main fetch flow
    logError("globalNseFetch", "A critical error occurred during NSE data fetching", globalError);
    summary.status = "Failed";
  }

  return summary;
}














































































































// import { NseIndia, EquityDetails, EquityHistoricalData, EquityCorporateInfo, EquityTradeInfo, DateRange } from 'stock-nse-india';

// const nseIndia = new NseIndia();

// // Interface for our summary object - let's keep it consistent
// interface NseMarketDataSummary {
//   symbol: string;
//   fetchTimestampUTC: string;
//   status: "Success" | "Partial Success" | "Failed" | "Attempting";
//   errorsEncountered: string[];
//   generalInfo?: {
//     companyName?: string;
//     industry?: string;
//     listingDate?: string;
//     isin?: string;
//     faceValue?: number;
//     // paidUpValue?: number; // Often not directly available or needed for summary
//     marketLot?: number;
//     series?: string;
//     symbolName?: string; // From metadata
//   };
//   priceInfo?: {
//     lastPrice?: number;
//     previousClose?: number;
//     open?: number;
//     high?: number;
//     low?: number;
//     change?: number;
//     pChange?: number;
//     totalTradedVolume?: number; // From details.priceInfo.quantityTraded or preOpenMarket.totalTradedVolume
//     totalTradedValue?: number;  // From details.priceInfo.totalTradedValue or preOpenMarket.totalTradedValue
//     vwap?: number;
//     weekHighLow?: { // This structure comes directly from EquityDetails
//         min?: number;
//         minDate?: string;
//         max?: number;
//         maxDate?: string;
//         value?: string;
//     };
//     upperCP?: string;
//     lowerCP?: string;
//   };
//   tradeInfo?: {
//     totalMarketCap?: number;
//     ffmc?: number;
//     impactCost?: number;
//   };
//   corporateInfo?: Array<{ // Corporate info can have multiple entries
//     purpose?: string;
//     exDate?: string;
//     recordDate?: string;
//     bcStartDate?: string;
//     bcEndDate?: string;
//     ndStartDate?: string;
//     ndEndDate?: string;
//   }>; // Make it an array
//   historicalDataSummary?: {
//     lastAvailableDate?: string;
//     oneMonthAgoDate?: string;
//     oneMonthAgoClose?: number;
//     threeMonthsAgoDate?: string;
//     threeMonthsAgoClose?: number;
//     oneYearAgoDate?: string;
//     oneYearAgoClose?: number;
//     ytdStartDate?: string;
//     ytdStartClose?: number;
//     oneMonthChangePercent?: number;
//     threeMonthsChangePercent?: number;
//     oneYearChangePercent?: number;
//     ytdChangePercent?: number;
//     lastMonthLow?: number;
//     lastMonthHigh?: number;
//     dataPointsFetched?: number;
//     periodChecked?: string;
//   };
// }

// // Helper to calculate date ranges
// function getDateRange(monthsAgo: number = 0, yearsAgo: number = 0, daysAgo: number = 0): DateRange {
//   const end = new Date();
//   const start = new Date();
//   if (yearsAgo > 0) start.setFullYear(start.getFullYear() - yearsAgo);
//   if (monthsAgo > 0) start.setMonth(start.getMonth() - monthsAgo);
//   if (daysAgo > 0) start.setDate(start.getDate() - (daysAgo -1)); // -1 because end date is inclusive by default for some APIs
//   return { start, end };
// }

// function round(value: number | undefined, decimals: number): number | undefined {
//     if (value === undefined || value === null || isNaN(value)) return undefined;
//     return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
// }


// export async function getNseIndiaMarketData(symbol: string): Promise<NseMarketDataSummary> {
//   const summary: NseMarketDataSummary = {
//     symbol: symbol.toUpperCase(), // NSE symbols are usually uppercase
//     fetchTimestampUTC: new Date().toISOString(),
//     status: "Attempting",
//     errorsEncountered: [],
//   };

//   const logError = (section: string, message: string, error?: any) => {
//     const errorMessage = `${section}: ${message}${error ? ` - ${error instanceof Error ? error.message : String(error)}` : ''}`;
//     summary.errorsEncountered.push(errorMessage);
//     console.warn(`NseIndiaService Error for ${symbol} - ${errorMessage}`);
//   };

//   try {
//     // 1. Get Equity Details
//     try {
//       const details: EquityDetails = await nseIndia.getEquityDetails(symbol.toUpperCase());
//       if (details && details.info && details.metadata && details.priceInfo && details.securityInfo) {
//         summary.generalInfo = {
//           companyName: details.info.companyName,
//           industry: details.info.industry,
//           listingDate: details.metadata.listingDate,
//           isin: details.metadata.isin,
//           faceValue: details.securityInfo.faceValue,
//           marketLot: details.securityInfo.marketLot,
//           series: details.metadata.series,
//           symbolName: details.info.symbol,
//         };
//         summary.priceInfo = {
//           lastPrice: details.priceInfo.lastPrice,
//           previousClose: details.priceInfo.previousClose,
//           open: details.priceInfo.open,
//           high: details.priceInfo.high,
//           low: details.priceInfo.low,
//           change: details.priceInfo.change,
//           pChange: details.priceInfo.pChange,
//           totalTradedVolume: details.priceInfo.quantityTraded || details.preOpenMarket?.totalTradedVolume,
//           totalTradedValue: details.priceInfo.totalTradedValue || details.preOpenMarket?.totalTradedValue,
//           vwap: details.priceInfo.vwap,
//           weekHighLow: details.weekHighLow, // This comes as an object directly
//           upperCP: details.securityInfo.upperCP,
//           lowerCP: details.securityInfo.lowerCP,
//         };
//       } else {
//         logError("getEquityDetails", "Incomplete data structure returned from getEquityDetails.");
//       }
//     } catch (e) {
//       logError("getEquityDetails", "Failed to fetch equity details", e);
//     }

//     // 2. Get Equity Trade Info (Market Cap) - DEFENSIVE ACCESS
//     try {
//       const tradeInfo: EquityTradeInfo | undefined = await nseIndia.getEquityTradeInfo(symbol.toUpperCase());
//       if (tradeInfo && tradeInfo.marketCap) { // Check if tradeInfo and tradeInfo.marketCap exist
//         summary.tradeInfo = {
//           totalMarketCap: tradeInfo.marketCap.totalMarketCap,
//           ffmc: tradeInfo.marketCap.ffmc,
//           impactCost: tradeInfo.marketCap.impactCost,
//         };
//       } else {
//         logError("getEquityTradeInfo", `Incomplete or missing tradeInfo/marketCap data. tradeInfo: ${JSON.stringify(tradeInfo)}`);
//       }
//     } catch (e) {
//       logError("getEquityTradeInfo", "Failed to fetch equity trade info", e);
//     }
    
//     // 3. Get Equity Corporate Info
//     try {
//       const corpInfoResponse: EquityCorporateInfo = await nseIndia.getEquityCorporateInfo(symbol.toUpperCase());
//       if (corpInfoResponse.corpInfo && corpInfoResponse.corpInfo.length > 0) {
//         summary.corporateInfo = corpInfoResponse.corpInfo.map(action => ({ // Map all actions
//           purpose: action.subject || action.purpose,
//           exDate: action.exDate,
//           recordDate: action.recordDate,
//           bcStartDate: action.bcStartDate,
//           bcEndDate: action.bcEndDate,
//           ndStartDate: action.ndStartDate,
//           ndEndDate: action.ndEndDate,
//         })).slice(0, 5); // Take latest 5 for brevity
//       }
//     } catch (e) {
//       logError("getEquityCorporateInfo", "Failed to fetch corporate info", e);
//     }

//     // 4. Get Historical Data
//     summary.historicalDataSummary = { periodChecked: "15 Months" };
//     try {
//       const range15M = getDateRange(0, 1, 3*30); // Approx 1 year and 3 months for enough data points.
//                                                // The library might have its own limits.
//       console.log(`Fetching historical data for ${symbol} with range: Start=${range15M.start.toISOString()}, End=${range15M.end.toISOString()}`);
//       const history: EquityHistoricalData[] = await nseIndia.getEquityHistoricalData(symbol.toUpperCase(), range15M);
//       summary.historicalDataSummary.dataPointsFetched = history.length;
//       console.log(`Fetched ${history.length} historical data points for ${symbol}`);


//       if (history.length > 1) { // Need at least 2 points for some calcs
//         // Ensure history is sorted by date ascending - IMPORTANT
//         history.sort((a, b) => new Date(a.CH_TIMESTAMP).getTime() - new Date(b.CH_TIMESTAMP).getTime());
        
//         const lastRecord = history[history.length - 1];
//         const lastClose = lastRecord?.CH_CLOSING_PRICE;
//         summary.historicalDataSummary.lastAvailableDate = lastRecord?.CH_TIMESTAMP;

//         if (lastClose !== undefined) {
//             // Helper to find a record roughly N trading days ago
//             const findRecordRoughlyAgo = (tradingDaysAgo: number): EquityHistoricalData | undefined => {
//                 if (history.length > tradingDaysAgo) {
//                     return history[history.length - 1 - tradingDaysAgo]; // -1 for last, then back N days
//                 }
//                 return undefined;
//             };

//             const record1M = findRecordRoughlyAgo(21); // Approx 21-22 trading days in a month
//             const record3M = findRecordRoughlyAgo(63); // Approx 63-65 trading days in 3 months
//             const record1Y = findRecordRoughlyAgo(250); // Approx 250-252 trading days in a year

//             summary.historicalDataSummary.oneMonthAgoDate = record1M?.CH_TIMESTAMP;
//             summary.historicalDataSummary.oneMonthAgoClose = record1M?.CH_CLOSING_PRICE;
//             if (record1M?.CH_CLOSING_PRICE && record1M.CH_CLOSING_PRICE !== 0) {
//                 summary.historicalDataSummary.oneMonthChangePercent = round(((lastClose - record1M.CH_CLOSING_PRICE) / record1M.CH_CLOSING_PRICE) * 100, 2);
//             }

//             summary.historicalDataSummary.threeMonthsAgoDate = record3M?.CH_TIMESTAMP;
//             summary.historicalDataSummary.threeMonthsAgoClose = record3M?.CH_CLOSING_PRICE;
//             if (record3M?.CH_CLOSING_PRICE && record3M.CH_CLOSING_PRICE !== 0) {
//                 summary.historicalDataSummary.threeMonthsChangePercent = round(((lastClose - record3M.CH_CLOSING_PRICE) / record3M.CH_CLOSING_PRICE) * 100, 2);
//             }

//             summary.historicalDataSummary.oneYearAgoDate = record1Y?.CH_TIMESTAMP;
//             summary.historicalDataSummary.oneYearAgoClose = record1Y?.CH_CLOSING_PRICE;
//             if (record1Y?.CH_CLOSING_PRICE && record1Y.CH_CLOSING_PRICE !== 0) {
//                 summary.historicalDataSummary.oneYearChangePercent = round(((lastClose - record1Y.CH_CLOSING_PRICE) / record1Y.CH_CLOSING_PRICE) * 100, 2);
//             }

//             // YTD
//             const currentYear = new Date().getFullYear();
//             const ytdStartDate = new Date(currentYear, 0, 1); // Jan 1st of current year
//             let ytdStartRecord: EquityHistoricalData | undefined = undefined;
//             // Find the first record on or after Jan 1st of current year
//             for(let i=0; i<history.length; i++){
//                 if(new Date(history[i].CH_TIMESTAMP) >= ytdStartDate){
//                     ytdStartRecord = history[i];
//                     break;
//                 }
//             }
//             summary.historicalDataSummary.ytdStartDate = ytdStartRecord?.CH_TIMESTAMP;
//             summary.historicalDataSummary.ytdStartClose = ytdStartRecord?.CH_CLOSING_PRICE;
//             if (ytdStartRecord?.CH_CLOSING_PRICE && ytdStartRecord.CH_CLOSING_PRICE !==0) {
//                 summary.historicalDataSummary.ytdChangePercent = round(((lastClose - ytdStartRecord.CH_CLOSING_PRICE) / ytdStartRecord.CH_CLOSING_PRICE) * 100, 2);
//             }

//             // Last month's high/low (from last ~22 records)
//             const lastMonthHistory = history.slice(Math.max(0, history.length - 22)); // Ensure slice index isn't negative
//             if (lastMonthHistory.length > 0) {
//                 summary.historicalDataSummary.lastMonthLow = Math.min(...lastMonthHistory.map(h => h.CH_TRADE_LOW_PRICE).filter(p => p !== undefined && p !== null)) || undefined;
//                 summary.historicalDataSummary.lastMonthHigh = Math.max(...lastMonthHistory.map(h => h.CH_TRADE_HIGH_PRICE).filter(p => p !== undefined && p !== null)) || undefined;
//             }
//         }
//       } else {
//          logError("getEquityHistoricalData", `No historical data points returned for ${symbol} in the specified range.`);
//       }
//     } catch (e) {
//       logError("getEquityHistoricalData", "Failed to fetch or process historical data", e);
//     }

//     // Determine final status
//     if (summary.errorsEncountered.length === 0 && summary.priceInfo && summary.historicalDataSummary?.dataPointsFetched && summary.historicalDataSummary.dataPointsFetched > 0) {
//       summary.status = "Success";
//     } else if (summary.priceInfo || (summary.historicalDataSummary?.dataPointsFetched && summary.historicalDataSummary.dataPointsFetched > 0)) {
//       summary.status = "Partial Success";
//     } else {
//       summary.status = "Failed";
//     }

//   } catch (globalError) { // Catch any unexpected global errors
//     logError("globalNseFetch", "A critical error occurred during NSE data fetching", globalError);
//     summary.status = "Failed";
//   }

//   return summary;
// }




































































































// // import { NseIndia, EquityDetails, EquityHistoricalData, EquityCorporateInfo, EquityTradeInfo } from 'stock-nse-india';

// // const nseIndia = new NseIndia(); // Initialize the SDK

// // interface NseMarketDataSummary {
// //   symbol: string;
// //   fetchTimestampUTC: string;
// //   status: "Success" | "Partial Success" | "Failed" | "Attempting";
// //   errorsEncountered: string[];
// //   generalInfo?: {
// //     companyName?: string;
// //     industry?: string;
// //     listingDate?: string;
// //     isin?: string;
// //     faceValue?: number;
// //     paidUpValue?: number;
// //     marketLot?: number;
// //     series?: string;
// //   };
// //   priceInfo?: {
// //     lastPrice?: number;
// //     previousClose?: number;
// //     open?: number;
// //     high?: number;
// //     low?: number;
// //     change?: number;
// //     pChange?: number;
// //     totalTradedVolume?: number;
// //     totalTradedValue?: number;
// //     vwap?: number;
// //     weekHighLow?: {
// //         min?: number;
// //         minDate?: string;
// //         max?: number;
// //         maxDate?: string;
// //         value?: string; // as provided by API "max - min"
// //     };
// //     upperCP?: string; // Circuit limits
// //     lowerCP?: string;
// //   };
// //   tradeInfo?: { // From getEquityTradeInfo
// //     totalMarketCap?: number;
// //     ffmc?: number; // Free float market cap
// //     impactCost?: number;
// //   };
// //   corporateInfo?: { // From getEquityCorporateInfo
// //     purpose?: string; // e.g., "DIVIDEND", "AGM/EGM"
// //     exDate?: string;
// //     recordDate?: string;
// //     bcStartDate?: string; // Book closure start
// //     bcEndDate?: string;   // Book closure end
// //     ndStartDate?: string; // No delivery start
// //     ndEndDate?: string;   // No delivery end
// //     // ... other fields like 'series', 'period' might be relevant
// //   };
// //   historicalDataSummary?: {
// //     oneMonthAgoClose?: number;
// //     threeMonthsAgoClose?: number;
// //     oneYearAgoClose?: number;
// //     ytdStartClose?: number;
// //     oneMonthChangePercent?: number;
// //     threeMonthsChangePercent?: number;
// //     oneYearChangePercent?: number;
// //     ytdChangePercent?: number;
// //     lastMonthLow?: number;
// //     lastMonthHigh?: number;
// //     dataPointsFetched?: number;
// //   };
// //   // We can add more specific fields as needed
// // }

// // // Helper to calculate date ranges
// // function getDateRange(monthsAgo: number = 0, yearsAgo: number = 0, daysAgo: number = 0): { start: Date; end: Date } {
// //   const end = new Date();
// //   const start = new Date();
// //   if (yearsAgo > 0) start.setFullYear(start.getFullYear() - yearsAgo);
// //   if (monthsAgo > 0) start.setMonth(start.getMonth() - monthsAgo);
// //   if (daysAgo > 0) start.setDate(start.getDate() - daysAgo);
// //   return { start, end };
// // }


// // export async function getNseIndiaMarketData(symbol: string): Promise<NseMarketDataSummary> {
// //   const summary: NseMarketDataSummary = {
// //     symbol: symbol,
// //     fetchTimestampUTC: new Date().toISOString(),
// //     status: "Attempting",
// //     errorsEncountered: [],
// //   };

// //   const logError = (section: string, message: string, error?: any) => {
// //     const errorMessage = `${section}: ${message}${error ? ` - ${error instanceof Error ? error.message : String(error)}` : ''}`;
// //     summary.errorsEncountered.push(errorMessage);
// //     console.warn(`NseIndiaService Error for ${symbol} - ${errorMessage}`);
// //   };

// //   try {
// //     // 1. Get Equity Details (Current Price, Open, High, Low, Previous Close, etc.)
// //     try {
// //       const details: EquityDetails = await nseIndia.getEquityDetails(symbol);
// //       summary.generalInfo = {
// //         companyName: details.info.companyName,
// //         industry: details.info.industry,
// //         listingDate: details.metadata.listingDate,
// //         isin: details.metadata.isin,
// //         faceValue: details.securityInfo.faceValue,
// //         paidUpValue: details.securityInfo.paidUpValue,
// //         marketLot: details.securityInfo.marketLot,
// //         series: details.metadata.series,
// //       };
// //       summary.priceInfo = {
// //         lastPrice: details.priceInfo.lastPrice,
// //         previousClose: details.priceInfo.previousClose,
// //         open: details.priceInfo.open,
// //         high: details.priceInfo.high,
// //         low: details.priceInfo.low,
// //         change: details.priceInfo.change,
// //         pChange: details.priceInfo.pChange,
// //         totalTradedVolume: details.preOpenMarket?.totalTradedVolume || details.priceInfo.vwap, // VWAP might not be volume but use if preOpen not there
// //         totalTradedValue: details.preOpenMarket?.totalTradedValue,
// //         vwap: details.priceInfo.vwap,
// //         weekHighLow: details.weekHighLow,
// //         upperCP: details.securityInfo.upperCP,
// //         lowerCP: details.securityInfo.lowerCP,
// //       };
// //     } catch (e) {
// //       logError("getEquityDetails", "Failed to fetch equity details", e);
// //     }

// //     // 2. Get Equity Trade Info (Market Cap)
// //     try {
// //       const tradeInfo: EquityTradeInfo = await nseIndia.getEquityTradeInfo(symbol);
// //       summary.tradeInfo = {
// //         totalMarketCap: tradeInfo.marketCap.totalMarketCap,
// //         ffmc: tradeInfo.marketCap.ffmc,
// //         impactCost: tradeInfo.marketCap.impactCost,
// //       };
// //     } catch (e) {
// //       logError("getEquityTradeInfo", "Failed to fetch equity trade info", e);
// //     }
    
// //     // 3. Get Equity Corporate Info (Dividends, AGM/EGM, etc. - might be an array, take latest)
// //     try {
// //       const corpInfoResponse: EquityCorporateInfo = await nseIndia.getEquityCorporateInfo(symbol);
// //       if (corpInfoResponse.corpInfo && corpInfoResponse.corpInfo.length > 0) {
// //         // Assuming the first one is the most relevant or latest for a summary
// //         // You might want to process this array more thoroughly if needed
// //         const latestCorpAction = corpInfoResponse.corpInfo[0];
// //         summary.corporateInfo = {
// //           purpose: latestCorpAction.subject || latestCorpAction.purpose, // subject might be more descriptive
// //           exDate: latestCorpAction.exDate,
// //           recordDate: latestCorpAction.recordDate,
// //           bcStartDate: latestCorpAction.bcStartDate,
// //           bcEndDate: latestCorpAction.bcEndDate,
// //           ndStartDate: latestCorpAction.ndStartDate,
// //           ndEndDate: latestCorpAction.ndEndDate,
// //         };
// //       }
// //     } catch (e) {
// //       logError("getEquityCorporateInfo", "Failed to fetch corporate info", e);
// //     }

// //     // 4. Get Historical Data for calculations (e.g., 15 months for YTD, 1yr, 3mo, 1mo changes)
// //     summary.historicalDataSummary = {}; // Initialize
// //     try {
// //       const range15M = getDateRange(15); // 15 months ago to now
// //       const history: EquityHistoricalData[] = await nseIndia.getEquityHistoricalData(symbol, range15M);
// //       summary.historicalDataSummary.dataPointsFetched = history.length;

// //       if (history.length > 0) {
// //         history.sort((a, b) => new Date(a.CH_TIMESTAMP).getTime() - new Date(b.CH_TIMESTAMP).getTime()); // Ensure sorted by date asc
        
// //         const lastRecord = history[history.length - 1];
// //         const lastClose = lastRecord?.CH_CLOSING_PRICE;

// //         if (lastClose) {
// //             const findPriceRoughlyAgo = (days: number): number | undefined => {
// //                 if (history.length < days) return undefined;
// //                 return history[history.length - days]?.CH_CLOSING_PRICE;
// //             };

// //             const oneMonthAgoPrice = findPriceRoughlyAgo(22); // ~22 trading days
// //             const threeMonthsAgoPrice = findPriceRoughlyAgo(65); // ~65 trading days
// //             const oneYearAgoPrice = findPriceRoughlyAgo(252); // ~252 trading days

// //             if (oneMonthAgoPrice && oneMonthAgoPrice !== 0) summary.historicalDataSummary.oneMonthChangePercent = round(((lastClose - oneMonthAgoPrice) / oneMonthAgoPrice) * 100, 2);
// //             if (threeMonthsAgoPrice && threeMonthsAgoPrice !== 0) summary.historicalDataSummary.threeMonthsChangePercent = round(((lastClose - threeMonthsAgoPrice) / threeMonthsAgoPrice) * 100, 2);
// //             if (oneYearAgoPrice && oneYearAgoPrice !== 0) summary.historicalDataSummary.oneYearChangePercent = round(((lastClose - oneYearAgoPrice) / oneYearAgoPrice) * 100, 2);

// //             // YTD
// //             const currentYear = new Date().getFullYear();
// //             const ytdStartDate = new Date(currentYear, 0, 1); // Jan 1st of current year
// //             const ytdStartRecord = history.find(h => new Date(h.CH_TIMESTAMP) >= ytdStartDate);
// //             if (ytdStartRecord?.CH_CLOSING_PRICE && ytdStartRecord.CH_CLOSING_PRICE !==0) {
// //                 summary.historicalDataSummary.ytdStartClose = ytdStartRecord.CH_CLOSING_PRICE;
// //                 summary.historicalDataSummary.ytdChangePercent = round(((lastClose - ytdStartRecord.CH_CLOSING_PRICE) / ytdStartRecord.CH_CLOSING_PRICE) * 100, 2);
// //             }

// //             // Last month's high/low (approx from last 22 records)
// //             const lastMonthHistory = history.slice(-22);
// //             if (lastMonthHistory.length > 0) {
// //                 summary.historicalDataSummary.lastMonthLow = Math.min(...lastMonthHistory.map(h => h.CH_TRADE_LOW_PRICE));
// //                 summary.historicalDataSummary.lastMonthHigh = Math.max(...lastMonthHistory.map(h => h.CH_TRADE_HIGH_PRICE));
// //             }
// //         }
// //       } else {
// //          logError("getEquityHistoricalData", "No historical data returned for 15-month range");
// //       }
// //     } catch (e) {
// //       logError("getEquityHistoricalData", "Failed to fetch or process historical data", e);
// //     }

// //     summary.status = summary.errorsEncountered.length === 0 ? "Success" : "Partial Success";
// //     if (Object.keys(summary.priceInfo || {}).length === 0 && Object.keys(summary.historicalDataSummary || {}).length === 0) {
// //         summary.status = "Failed"; // If no price and no historical, consider it a failure
// //     }

// //   } catch (globalError) {
// //     logError("globalNseFetch", "A critical error occurred during NSE data fetching", globalError);
// //     summary.status = "Failed";
// //   }

// //   return summary;
// // }

// // function round(value: number, decimals: number): number {
// //     return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
// // }