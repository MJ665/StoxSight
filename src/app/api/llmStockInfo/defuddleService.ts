import { JSDOM } from 'jsdom';
import { Defuddle } from 'defuddle/node';
import { NextResponse } from 'next/server';



export async function scrapeWithDefuddle (stockSymbol :string, webName:string){
     
    try {

    
if (webName == "SCREENER") {
    const websiteURL = `https://www.screener.in/company/${stockSymbol}/consolidated/`

    const dom = await JSDOM.fromURL(websiteURL);

    const result = await Defuddle(dom
    //     ,{
    //         // debug: true, // Enable debug mode for verbose logging
    //         markdown: true, // Convert content to markdown
    //         url: 'https://example.com/article' // Original URL of the page
    // }
)
console.log (result)
    return "I have got this data from the screener applications " + String( result.content)

}
    }catch(error) {return NextResponse .json ({msg :"error", err:error},{status:400} )}



    

}