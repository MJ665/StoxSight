import fs from "fs"


import { NseIndia } from  "stock-nse-india";
const  nseIndia = new  NseIndia()
// To get all symbols from NSE
nseIndia.getAllStockSymbols().then(symbols  => {
console.log(symbols)
})

// To get equity details for specific symbol
nseIndia.getEquityDetails('IRCTC').then(details  => {
    console.log(details)
    })
const symbol = "ITC"
const range = {
    start: new Date("2010-01-01"),
    end: new Date("2021-03-20")
}
    nseIndia.getEquityHistoricalData(symbol, range).then(data => {
        console.log(JSON.stringify(data) )
        console.log('""##@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        const filePath = './scrap2.json'
        fs.writeFileSync(filePath,JSON.stringify(data))


    })





// // Use ESM import (ensure your package.json has "type": "module" or save as .mjs)


// import { NseIndia } from "stock-nse-india";

// // If you are not using ESM (e.g. older Node or "type": "commonjs" in package.json)
// // const { NseIndia } = require("stock-nse-india");

// const nseIndia = new NseIndia();
// const symbol = "LT"; // NSE Symbol for Larsen & Toubro

// async function fetchAllLTFinancialDetails() {
//     console.log(`--- Fetching Financial Details for ${symbol} using stock-nse-india ---`);

//     try {
//         // 1. Equity Details
//         console.log(`\n--- Equity Details for ${symbol} ---`);
//         const details = await nseIndia.getEquityDetails(symbol);
//         console.log(JSON.stringify(details, null, 2)); // Pretty print JSON

//     } catch (error) {
//         console.error(`Error fetching Equity Details for ${symbol}:`, error.message || error);
//     }

//     try {
//         // 2. Equity Historical Data (e.g., last 2 years)
//         console.log(`\n--- Equity Historical Data for ${symbol} (Last 2 Years) ---`);
//         const endDate = new Date();
//         const startDate = new Date();
//         startDate.setFullYear(endDate.getFullYear() - 2);

//         const range = {
//             start: startDate,
//             end: endDate
//         };
//         const historicalData = await nseIndia.getEquityHistoricalData(symbol, range);
//         console.log(`Fetched ${historicalData.length} records.`);
//         if (historicalData.length > 0) {
//             console.log("Sample Historical Data (first 3, last 3 records):");
//             console.log(historicalData.slice(0, 3)); // Show first 3
//             console.log("...");
//             console.log(historicalData.slice(-3)); // Show last 3
//         }
//     } catch (error)
//  {
//         console.error(`Error fetching Equity Historical Data for ${symbol}:`, error.message || error);
//     }

//     try {
//         // 3. Equity Corporate Info
//         console.log(`\n--- Equity Corporate Info for ${symbol} ---`);
//         const corporateInfo = await nseIndia.getEquityCorporateInfo(symbol);
//         console.log(JSON.stringify(corporateInfo, null, 2));

//     } catch (error) {
//         console.error(`Error fetching Equity Corporate Info for ${symbol}:`, error.message || error);
//     }

//     try {
//         // 4. Equity Trade Info
//         console.log(`\n--- Equity Trade Info for ${symbol} ---`);
//         const tradeInfo = await nseIndia.getEquityTradeInfo(symbol);
//         console.log(JSON.stringify(tradeInfo, null, 2));

//     } catch (error) {
//         console.error(`Error fetching Equity Trade Info for ${symbol}:`, error.message || error);
//     }
    
//     try {
//         // 5. Equity Series (if needed)
//         console.log(`\n--- Equity Series for ${symbol} ---`);
//         const series = await nseIndia.getEquitySeries(symbol);
//         console.log(JSON.stringify(series, null, 2));

//     } catch (error) {
//         console.error(`Error fetching Equity Series for ${symbol}:`, error.message || error);
//     }

//     // Note: Equity Option Chain can be very large, fetch if specifically needed
//     // try {
//     //     console.log(`\n--- Equity Option Chain for ${symbol} ---`);
//     //     const optionChain = await nseIndia.getEquityOptionChain(symbol);
//     //     console.log("Option chain data fetched (can be very large).");
//     //     // console.log(JSON.stringify(optionChain, null, 2)); // Be careful, this can be huge
//     // } catch (error) {
//     //     console.error(`Error fetching Equity Option Chain for ${symbol}:`, error.message || error);
//     // }

//     console.log("\n--- Other Potentially Useful Methods ---");
//     console.log("- getAllStockSymbols(): To get all symbols from NSE.");
//     console.log("- getEquityIntradayData(symbol, preOpen): For intraday data.");
//     console.log("- getEquityStockIndices(indexSymbol): For index components.");
//     // ... and others from the documentation.
// }

// fetchAllLTFinancialDetails();