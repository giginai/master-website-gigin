import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEOProvider } from "@/contexts/SEOContext";
import { AppRoutes } from "./App";

export function render(url: string) {
  const helmetContext = {};
  const queryClient = new QueryClient();

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <SEOProvider>
          <TooltipProvider>
            <StaticRouter location={url}>
              <AppRoutes />
            </StaticRouter>
          </TooltipProvider>
        </SEOProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );

  // Extract helmet data for SEO
  const { helmet } = helmetContext as { helmet?: unknown };

  return {
    html,
    helmet: helmet || {},
  };
}
