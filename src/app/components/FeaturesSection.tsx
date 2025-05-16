import { Card, CardContent, CardHeader, CardTitle } from "./../../components/ui/card.tsx";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChartBig, BrainCircuit, FileText } from "lucide-react";
export function FeaturesSection() {
  const features = [
    {
      icon: <BarChartBig className="h-10 w-10 text-green-400 mb-4" />,
      title: "Multi-Source Data Analysis",
      description: "Combines fundamental data from Screener.in with market context from NSE India for a holistic view.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-green-400 mb-4" />,
      title: "Advanced LLM Insights",
      description: "Leverages powerful Large Language Models (Google Gemini) to generate in-depth textual analysis and structured JSON conclusions.",
    },
    {
      icon: <FileText className="h-10 w-10 text-green-400 mb-4" />,
      title: "Downloadable PDF Reports",
      description: "Access detailed PDF reports from our sophisticated ML server, featuring predictions from LSTM, GRU, Transformer, and Polynomial Regression models.",
    },
  ];

  const mlModels = [
    { name: "LSTM (Long Short-Term Memory)", description: "A type of recurrent neural network (RNN) well-suited for learning from sequences of data, making it effective for time series forecasting like stock prices by remembering patterns over long periods." },
    { name: "GRU (Gated Recurrent Unit)", description: "Similar to LSTM but with a simpler architecture, GRUs are also effective for sequence modeling and can sometimes train faster while providing comparable performance on time series data." },
    { name: "Transformer Models", description: "Utilize attention mechanisms to weigh the importance of different parts of the input data, allowing them to capture long-range dependencies and complex patterns in financial time series more effectively than traditional RNNs for some tasks." },
    { name: "Polynomial Regression", description: "A statistical modeling technique used to describe non-linear relationships. For stock prices, it can help identify underlying trends by fitting a polynomial equation to historical price data." },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What Stox<span className="text-green-400">Sight</span> Offers
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our platform integrates cutting-edge AI to provide you with comprehensive stock market analysis and predictive insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-center hover:shadow-green-500/30 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                {feature.icon}
                <CardTitle className="text-xl font-semibold text-gray-100">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Powered by Advanced ML Models
          </h3>
          <p className="mt-3 text-md text-gray-400 max-w-2xl mx-auto">
            Our separate ML prediction service (coming soon to integrate fully!) utilizes the following models to generate detailed PDF reports:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mlModels.map((model, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-green-400">{model.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
            <h3 className="text-xl font-semibold mb-3">Example Report & Source Code</h3>
            <div className="space-x-4">
                <Button variant="outline" asChild className="border-green-500 text-green-400 hover:bg-green-600 hover:text-white">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        View Example PDF Report
                    </a>
                </Button>
                <Button variant="outline" asChild className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                    <a href="YOUR_GITHUB_REPO_URL_HERE" target="_blank" rel="noopener noreferrer">
                        View GitHub Repo
                    </a>
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
}