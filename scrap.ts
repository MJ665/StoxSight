// // testNse.ts
// import fs from "fs";
// import { NseIndia, DateRange } from "stock-nse-india";
// const nseIndia = new NseIndia();

// async function testInfyLongRange() {
//     const symbol = "INFY";
//     const range: DateRange = {
//         start: new Date("2020-01-01"),
//         end: new Date("2023-12-31")
//     };
//     try {
//         console.log(`Standalone test: Fetching for ${symbol} from ${range.start.toDateString()} to ${range.end.toDateString()}`);
//         const data = await nseIndia.getEquityHistoricalData(symbol, range);
//         console.log(`Standalone test: Raw response structure type: ${typeof data}, IsArray: ${Array.isArray(data)}`);
//         if (Array.isArray(data) && data.length > 0) {
//              console.log(`Standalone test: First element of raw response:`, data[0]);
//              if (data[0].data && Array.isArray(data[0].data)) {
//                 console.log(`Standalone test: Actual data points fetched: ${data[0].data.length}`);
//                 fs.writeFileSync('./infy_long_range_test.json', JSON.stringify(data[0].data, null, 2));
//                 console.log("Data written to infy_long_range_test.json");
//              } else if (typeof data[0].CH_SYMBOL === 'string') {
//                 console.log(`Standalone test: Actual data points fetched: ${data.length}`);
//                 fs.writeFileSync('./infy_long_range_test.json', JSON.stringify(data, null, 2));
//                 console.log("Data written to infy_long_range_test.json");
//              }
//         } else {
//             console.log("Standalone test: No data or empty array returned.", data);
//         }
//     } catch (err) {
//         console.error("Standalone test error:", err);
//     }
// }
// testInfyLongRange();