

const API_KEYS = {
  IDEA: process.env.GOOGLE_API_ONE_IDEA_GENERATOR,
  RESPONSE: process.env.GOOGLE_API_TWO_RESPONCE_GENERATOR,
  CONCLUDE: process.env.GOOGLE_API_THREE_CROSS_VALIDATION_BETTER_RESPONCE,
};

import { getNseIndiaMarketData } from "./nseIndiaService"; // Import the new service

import { spawn } from "child_process"; // For running Python script
import path from "path"; // For constructing path to script

// import { GoogleGenAI } from "";
import { GoogleGenAI, } from "@google/genai";
// src/app/api/llmStockInfo/route.ts
import { NextRequest, NextResponse } from "next/server";
import { scrapeWithDefuddle } from "./defuddleService";

import { PrismaClient } from "@/db"; // make sure prisma is setup

import {indInstructionIdea , indInstructionRes , indInstructionConclude} from "./instructions"
const prisma  = new PrismaClient()

// src/app/api/llmStockInfo/route.ts

// ... (imports and other code) ...
import { GoogleGenerativeAI,getGenerativeModel , GenerationConfig, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"; // Corrected import based on your package.json

// ...


async function fetchFromGeminiAPI(prompt: string, apiKey: string): Promise<string> {
  if (!apiKey) {
    console.error("Gemini API key is missing.");
    throw new Error("Missing Gemini API key");
  }

  try {
    // const genAI = new GoogleGenAI(apiKey); // Instantiated with the specific key
    const genAI = new GoogleGenerativeAI(apiKey);

    
    console.log("\n--- Sending Prompt to Gemini ---");
    // console.log(prompt); // Be careful logging entire prompts if they contain sensitive scraped data. Log a snippet or length.
    console.log(`Prompt length: ${prompt.length} characters`);
    console.log("--- End of Prompt ---\n");
    
    // const result = await model.generateContent(prompt);
    // const result = await genAI.models.generateContent({ model: "gemini-1.5-flash-latest" , contents:prompt }); // Using a common and effective model. "gemini-pro" is also good.
    // const response = result.text;
    // // const text = response.text;
    // const text = result .text
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // or "gemini-pro"
const result = await model.generateContent(prompt);
const text = result.response.text();


    console.log("\n--- Received Response from Gemini ---");
    // console.log(text); // Log a snippet or length for brevity in logs
    console.log(`Response length: ${text.length} characters`);
    if (text.length < 200) console.log(text); // Log short responses fully
    else console.log(text.substring(0, 200) + "...");

    console.log("--- End of Response ---\n");

    return text || "NOT ABLE TO GET RESPONSE FROM GEMINI";
  } catch (error) {
    console.error("Error fetching from Gemini API or processing its response:", error);
    // Check for specific error types from the SDK if possible
    if (error instanceof Error) {
        // Log more details if available from the error object
        console.error("Gemini Error Name:", error.name);
        console.error("Gemini Error Message:", error.message);
        // console.error("Gemini Error Stack:", error.stack);
    }
    return `Error processing request with Gemini: ${error instanceof Error ? error.message : String(error)}`;
  }
}


















// Function to call the Python script
async function getYahooFinanceData(symbol: string, market: string): Promise<object | null> {
  return new Promise((resolve, reject) => {
    const pythonScriptPath = path.join(process.cwd(), "src", "app", "api", "llmStockInfo", "yFinance.py");
    
    // Adjust symbol for Yahoo Finance (e.g., add .NS for Indian NSE stocks)
    let yfSymbol = symbol;
    if (market === "INDIA" && !symbol.endsWith(".NS") && !symbol.endsWith(".BO")) {
      yfSymbol = `${symbol}.NS`; // Default to NSE for India
    }
    // Add more rules for other markets if needed, e.g., US stocks don't need a suffix typically

    console.log(`Calling yFinance.py with symbol: ${yfSymbol}`);
    const pythonProcess = spawn("python3", [pythonScriptPath, yfSymbol]); // Use 'python' or 'python3' based on your env

    let rawData = "";
    let errorData = "";

    pythonProcess.stdout.on("data", (data) => {
      rawData += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      errorData += data.toString();
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        console.error(`yFinance.py script exited with code ${code}: ${errorData}`);
        reject(new Error(`Yahoo Finance script error: ${errorData || `Exit code ${code}`}`));
        return;
      }
      try {
        // console.log("Raw yFinance data:", rawData); // for debugging
        const jsonData = JSON.parse(rawData);
        if (jsonData.error) {
            console.warn(`Yahoo Finance data fetch for ${yfSymbol} returned an error in its JSON: ${jsonData.error}`);
            // Resolve with the error object from yfinance so LLM can see it
            resolve(jsonData);
        } else {
            resolve(jsonData);
        }
      } catch (e) {
        console.error("Failed to parse JSON from yFinance.py:", e, "\nRaw data:", rawData);
        reject(new Error("Failed to parse Yahoo Finance data."));
      }
    });

    pythonProcess.on("error", (err) => {
        console.error("Failed to start yFinance.py subprocess:", err);
        reject(new Error("Failed to start Yahoo Finance script subprocess."));
    });
  });
}















// New function for fetching JSON output
async function fetchFromGeminiAPIConclusion(prompt: string, apiKey: string): Promise<object | string> {
  if (!apiKey) {
    console.error("Gemini API key for conclusion is missing.");
    throw new Error("Missing Gemini API key for conclusion");
  }
  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    // For JSON output, it's good to specify response_mime_type if the model/SDK supports it well.
    // And use a model known for good instruction following and JSON generation.
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash", // "gemini-1.5-pro" is generally better for complex JSON
      generationConfig: {
        responseMimeType: "application/json", // Request JSON output
      } as GenerationConfig, // Cast to GenerationConfig if type inference issues
       safetySettings: [ // Recommended for financial context
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE }, // Be cautious with financial advice
      ],
    });

    console.log("\n--- Sending Conclusion Prompt to Gemini (Expecting JSON) ---");
    console.log(`Prompt length: ${prompt.length} characters`);
    // console.log(prompt) // Avoid logging full sensitive prompts
    console.log("--- End of Conclusion Prompt ---\n");

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    console.log("\n--- Received Conclusion Response from Gemini (Raw Text) ---");
    // console.log(responseText);
    console.log(`Response length: ${responseText.length} characters`);
    if (responseText.length < 300) console.log(responseText);
    else console.log(responseText.substring(0, 300) + "...");
    console.log("--- End of Raw Conclusion Response ---\n");

    try {
      // The response should be a JSON string, parse it.
      const jsonOutput = JSON.parse(responseText);
      return jsonOutput;
    } catch (parseError) {
      console.error("Failed to parse Gemini's conclusion response as JSON:", parseError);
      console.error("Gemini's raw response for conclusion (that failed parsing):", responseText);
      return `Failed to parse JSON from Gemini. Raw output: ${responseText}`;
    }
  } catch (error) {
    console.error("Error in fetchFromGeminiAPIConclusion:", error);
     let errorMessage = "Unknown error during conclusion generation.";
    if (error instanceof Error) {
        errorMessage = error.message;
        // @ts-ignore
        if (error.response && error.response.promptFeedback) { // Specific to GoogleGenerativeAI errors
             // @ts-ignore
            console.error("Prompt Feedback:", error.response.promptFeedback);
        }
    }
    return `Error from Gemini (Conclusion/JSON): ${errorMessage}`;
  }
}












export async function POST(req: NextRequest) { // Removed res: NextResponse as it's not used in App Router route handlers like this
  try {
    const { query, symbol, market } = await req.json();
    if (!query || !market || !symbol) {
      return NextResponse.json({ success: false, msg: "Query, symbol, and market are required." }, { status: 400 });
    }

    if (market === "INDIA") {
      // const stockExists = await prisma.indiaStock.findUnique({ // Assuming your symbol in DB is unique for where clause
      //   where: { symbol: symbol } // Make sure 'symbol' is a unique field in your IndiaStock model
      // });
      // if (!stockExists) {
      //   return NextResponse.json({ success: false, msg: `Stock symbol ${symbol} not found in our database for the INDIA market.` }, { status: 404 });
      // }
      // For hackathon speed, you've set stock = true, which is fine.

      try {
        console.log(`Processing query for INDIA market: ${query}, Symbol: ${symbol}`);
       
        // 1. Scrape Screener.in content
        const scrapedContent = await scrapeWithDefuddle(symbol, "SCREENER") || "No fundamental data available from Screener.in.";

        // 2. Fetch NSE India Data using the new service
        let nseMarketDataString = "NSE India market data could not be retrieved or processed fully.";
        let nseDataObject: any = null; // Use 'any' or the NseMarketDataSummary interface
        try {
          console.log(`Fetching NSE India data for symbol: ${symbol}`);
          nseDataObject = await getNseIndiaMarketData(symbol); 

          if (nseDataObject) {
            const fetchStatus = nseDataObject.status || "Unknown";
            let dataForPrompt;
            if (fetchStatus === "Success" || fetchStatus === "Partial Success") {
              dataForPrompt = nseDataObject;
            } else {
              dataForPrompt = { // Provide a structure indicating failure
                symbol: symbol,
                status: fetchStatus,
                errorsEncountered: nseDataObject.errorsEncountered || ["General fetch failure"],
                message: `NSE India data for ${symbol} could not be fully retrieved.`
              };
            }     nseMarketDataString = `\n\n--- NSE India Market Data for ${symbol} (Status: ${fetchStatus}) ---\n` +
            JSON.stringify(dataForPrompt, null, 2) +
            "\n--- End of NSE India Market Data ---\n";

// VERY IMPORTANT LOG:
console.log(`Prepared nseMarketDataString. Status: ${fetchStatus}, Errors: ${JSON.stringify(nseDataObject.errorsEncountered)}. Data snippet: ${nseMarketDataString.substring(0, 500)}...`);
            console.log(`NSE India data string prepared. Length: ${nseMarketDataString.length}`);
          } else {
             nseMarketDataString = `\n\n--- NSE India Market Data for ${symbol} ---\n` +
                                  `Critical error: No data object returned from NSE data fetcher.`+
                                  "\n--- End of NSE India Market Data ---\n";
            console.warn(`getNseIndiaMarketData returned null for ${symbol}`);
          }
        } catch (nseError) {
          console.error(`Critical error calling getNseIndiaMarketData for ${symbol}:`, nseError);
          nseMarketDataString = `\n\n--- NSE India Market Data for ${symbol} (System Error) ---\n` +
                               `System error during NSE India data retrieval: ${nseError instanceof Error ? nseError.message : String(nseError)}` +
                               "\n--- End of NSE India Market Data ---\n";
        }


 if (!scrapedContent) {
            console.warn("Scraping returned no content for symbol:", symbol);
            // Decide if you want to proceed without scraped data or return an error
            // return NextResponse.json({ success: false, msg: `Could not scrape data for ${symbol}. Cannot proceed.` }, { status: 500 });
        }

        const ideaPrompt = `you have to follow this instructions \ninstructions ---\n${indInstructionIdea}\n---\n
        \nUser Query: ${query}\nStock Symbol: ${symbol}\n
        \nScraped Content:\n${scrapedContent || "No scraped content available."}
        
This is data retrived from nse india:
${nseMarketDataString || "NSE Data not available"}
        `;
        console.log("Generating initial ideas...");
        const idea = await fetchFromGeminiAPI(ideaPrompt, API_KEYS.IDEA);

        const resPrompt = `Detailed Instructions for Final Report Generation:\n you have to follow this instructions --- \n${indInstructionRes}\n
        User Original Query: ${query}\n
        Stock Symbol: ${symbol}\n
        Market: ${market} market\n
        \nFull Scraped Content from Screener.in:\n${scrapedContent || "No scraped content available."}\n 
This is data retrived from nse india:
${nseMarketDataString || "NSE Data not available"}
 \nKey Themes/Initial Ideas (from previous step):\n${idea}\n\n`;
        console.log("Generating final response...");
        const finalResponse = await fetchFromGeminiAPI(resPrompt, API_KEYS.RESPONSE);


        // const concludePrompt = `
        // User Original Query: ${query}
        // Stock Symbol: ${symbol}
        // Market: ${market} market
        
        // Full Scraped Content from Screener.in:
        // ${scrapedContent}
        
        // Key Themes/Initial Ideas (from first AI step):
        // ${idea}
        
        // Detailed Stock Analysis Report (from second AI step):
        // ${finalResponse}
        
        // ---
        // ${indInstructionConclude}
        // `;


        // 5. LLM Step 3: Conclusion JSON (All data sources)
        const concludePrompt = `
        you have the instructions at the end of the prompt you need to follow that
User Original Query: ${query}
Stock Symbol: ${symbol}
Market: ${market} market

Screener.in Content:
${scrapedContent}

This is data retrived from nse india:
${nseMarketDataString} 

Key Themes/Initial Ideas (from Screener data):
${idea}

Detailed Stock Analysis Report (based on Screener & NSE context):
${finalResponse}

instructions
---
${indInstructionConclude}
---
`;
console.log(`Full nseMarketDataString being sent to conclude prompt: ${nseMarketDataString}`);
        console.log(`Final yFinanceDataString (now NSE data) being sent to conclude prompt: ${nseMarketDataString}`); // LOG THIS
        console.log("Generating conclusion JSON (Screener + NSE context)...");
        const conclusionResult = await fetchFromGeminiAPIConclusion(concludePrompt, API_KEYS.CONCLUDE);

        if (typeof conclusionResult === 'string') {
            return NextResponse.json({
                success: false, msg: "Failed to generate structured conclusion.",
                report: finalResponse, errorDetails: conclusionResult
            }, { status: 500 });
        }
        return NextResponse.json({ success: true, result: finalResponse, conclusion : conclusionResult });

      } catch (error) {
        console.error("Error during LLM processing or scraping:", error);
        return NextResponse.json({ success: false, msg: "Failed to get response due to an internal error.", err: error instanceof Error ? error.message : String(error) }, { status: 500 });
      }
    } else {
        return NextResponse.json({ success: false, msg: `Market type '${market}' is not currently supported for this feature.` }, { status: 400 });
    }

  } catch (error) {
    console.error("Overall error in POST /api/llmStockInfo:", error);
    return NextResponse.json({ success: false, msg: "An unexpected error occurred on the server.", err: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

































// // import { GoogleGenAI } from "";
// import { GoogleGenAI } from "@google/genai";
// // src/app/api/llmStockInfo/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { scrapeWithDefuddle } from "./defuddleService";

// import { PrismaClient } from "@/db"; // make sure prisma is setup

// import {indInstructionIdea , indInstructionRes} from "./instructions"
// const prisma  = new PrismaClient()



// const API_KEYS = {
//   IDEA: process.env.GOOGLE_API_ONE_IDEA_GENERATOR,
//   RESPONSE: process.env.GOOGLE_API_TWO_RESPONCE_GENERATOR,
//   VALIDATE: process.env.GOOGLE_API_THREE_CROSS_VALIDATION_BETTER_RESPONCE,
// };

// export async function POST(req:NextRequest,res:NextResponse) {

// const {query , symbol, market} = await req.json()
// if (!query || !market || !symbol) {
//     return NextResponse.json ({msg:"query symbol and market not present "})
// }


// if (market  === "INDIA"){
// // is that stock present in the db ,
// // if not then return nextresponce stock not in db
// try {

//   // const stock = await prisma.indiaStock.findUnique({
//   //   where :symbol
//   // })
//   const stock = true
//   if (stock ){

//     try {
//       const scrapedContent = await scrapeWithDefuddle(symbol, "SCREENER")
      
//             const ideaPrompt = `${indInstructionIdea}\n\n${scrapedContent}`;
//             const resPrompt = `${query }, ${symbol} , ${market}market\n\n${scrapedContent}\n\n${indInstructionRes}`;
      
      
//             const idea = await fetchFromGeminiAPI(ideaPrompt, API_KEYS.IDEA);
//             const response = await fetchFromGeminiAPI(resPrompt + " "+idea, API_KEYS.RESPONSE);
      
//           //   const final = await fetchFromGeminiAPIVALIDATE(response, API_KEYS.VALIDATE);// 
      
//           return NextResponse.json ({success :true , result : response})
      
//       }catch (error){
//           return NextResponse.json({msg:"not able to get responce" , err :error}, {status:400})
//       }
      
      
      
//   }

// }catch(error){
//   return NextResponse .json({msg :"the stock symbol invalid",err:error},{status:400})
// }

// }

// async function fetchFromGeminiAPI(prompt: string, apiKey?: string): Promise<string> {
//   if (!apiKey) throw new Error("Missing Gemini API key");




// const ai = new  GoogleGenAI({ apiKey: apiKey });

//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: prompt,
//   });
//   console.log("*****************************************")
//   console.log("*****************************************")
//   console.log("*****************************************")
//   console.log(response.text);
//   console.log("*****************************************")
//   console.log("*****************************************")
//   console.log("*****************************************")
//   console.log("*****************************************")
//   console.log("*****************************************")

// return response.text || "NOT ABLE TO GET RESPONSE"

//   // const res = await fetch(
//   //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
//   //   {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
//   //   }
//   // );
//   // const data = await res.json();
//   // return data.candidates?.[0]?.content?.parts?.[0]?.text || "No result from Gemini";
// }
// }



