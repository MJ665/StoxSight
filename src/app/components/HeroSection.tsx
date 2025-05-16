'use client';
'use client'; // CORRECT
import { useSearchParams, useRouter } from 'next/navigation'; // Potentially useSearchParams was here before, if so it needs Suspense in parent

// ...
import { useState, FormEvent } from 'react';
import { Button } from './../../components/ui/button';
import { Textarea } from './../../components/ui/textarea';
import { Label } from './../../components/ui/label.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../../components/ui/select"; // Assuming you installed this via shadcn/ui add select
import { Alert, AlertDescription, AlertTitle } from "./../../components/ui/alert";
import { Terminal, AlertCircle, Loader2, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './../../components/ui/card';
import { Separator } from './../../components/ui/separator';

interface LlmResponse {
  success: boolean;
  result?: string; // Textual report
  conclusion?: any; // JSON conclusion (type this more strictly if possible)
  message?: string; // Error message from backend
  details?: string;
  runId?: string;
}

export function HeroSection() {
  const [query, setQuery] = useState('');
  const [symbol, setSymbol] = useState('');
  const [market, setMarket] = useState('INDIA'); // Default market
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [llmResponse, setLlmResponse] = useState<LlmResponse | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim() || !symbol.trim()) {
      setError("Please enter both a query and a stock symbol.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setLlmResponse(null);

    try {
      const res = await fetch('/api/llmStockInfo', { // Your Next.js API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, symbol, market }),
      });

      const data: LlmResponse = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || data.details || 'An unknown error occurred.');
        setLlmResponse(data); // Store even if error, might contain details
      } else {
        setLlmResponse(data);
      }
    } catch (err) {
      console.error("API call failed:", err);
      setError('Failed to connect to the analysis service. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to format JSON nicely
  const formatJson = (jsonObj: any) => {
    try {
      return JSON.stringify(jsonObj, null, 2);
    } catch {
      return "Could not format JSON conclusion.";
    }
  };

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-opacity-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            AI-Powered <span className="text-green-400">StoxSight</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10">
            Get in-depth stock analysis and speculative insights using advanced LLMs.
            Enter your query and stock symbol below.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400 flex items-center justify-center">
              <Bot className="mr-2 h-7 w-7" /> Analyze Stock
            </CardTitle>
            <CardDescription className="text-gray-400">
              Provide your query, stock symbol (e.g., TCS, INFY), and market.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="query" className="text-left block text-sm font-medium text-gray-200 mb-1">
                  Your Query (e.g., "Future outlook and buy recommendation?")
                </Label>
                <Textarea
                  id="query"
                  placeholder="e.g., What is the future outlook of this stock and should I buy it?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="symbol" className="text-left block text-sm font-medium text-gray-200 mb-1">
                    Stock Symbol
                  </Label>
                  <Input
                    id="symbol"
                    type="text"
                    placeholder="e.g., TCS, RELIANCE"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <Label htmlFor="market" className="text-left block text-sm font-medium text-gray-200 mb-1">
                    Market
                  </Label>
                  <Select value={market} onValueChange={setMarket}>
                    <SelectTrigger id="market" className="w-full bg-gray-700 border-gray-600 text-white focus:ring-green-500 focus:border-green-500">
                      <SelectValue placeholder="Select market" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 text-white border-gray-600">
                      <SelectItem value="INDIA" className="hover:bg-gray-600">INDIA</SelectItem>
                      <SelectItem value="US" className="hover:bg-gray-600">US (Experimental)</SelectItem>
                      <SelectItem value="CRYPTO" className="hover:bg-gray-600">CRYPTO (Experimental)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Get Stox Sight Analysis'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive" className="mt-8 max-w-2xl mx-auto bg-red-900/30 border-red-700 text-red-300">
            <AlertCircle className="h-4 w-4 !text-red-400" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {llmResponse && (
          <Card className="mt-10 max-w-4xl mx-auto text-left bg-gray-800 border-gray-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-green-400">Analysis for: {llmResponse.conclusion?.symbol || symbol}</CardTitle>
              {llmResponse.runId && <CardDescription className="text-gray-500">Run ID: {llmResponse.runId}</CardDescription>}
            </CardHeader>
            <CardContent className="space-y-6">
              {llmResponse.success && llmResponse.result && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-200">Detailed Report:</h3>
                  <div className="prose prose-sm prose-invert max-w-none p-4 bg-gray-900 rounded-md whitespace-pre-wrap overflow-x-auto">
                    {/* Attempt to render markdown - install a library for full support */}
                    {llmResponse.result.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-2 text-gray-300">{paragraph.replace(/(\*\*|##)/g, '')}</p> // Basic ** and ## removal
                    ))}
                  </div>
                </div>
              )}

              {llmResponse.conclusion && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-200">Structured Conclusion:</h3>
                  <pre className="p-4 bg-gray-900 rounded-md text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap break-all">
                    {formatJson(llmResponse.conclusion)}
                  </pre>
                </div>
              )}
              
              {!llmResponse.success && llmResponse.message && (
                 <Alert variant="destructive" className="bg-red-900/30 border-red-700 text-red-300">
                    <AlertCircle className="h-4 w-4 !text-red-400" />
                    <AlertTitle>Processing Issue</AlertTitle>
                    <AlertDescription>{llmResponse.message}</AlertDescription>
                 </Alert>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}