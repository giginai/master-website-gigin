import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEOProvider } from "@/contexts/SEOContext";
import App from "./App";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <SEOProvider>
          <TooltipProvider>
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </TooltipProvider>
        </SEOProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );

  // Extract helmet data for SEO - React Helmet Async format
  const { helmet } = helmetContext;

  return {
    html,
    helmet: helmet || {},
  };
}
