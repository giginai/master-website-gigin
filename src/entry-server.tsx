
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

interface HelmetContext {
  helmet?: {
    title?: { toString: () => string };
    meta?: { toString: () => string };
    link?: { toString: () => string };
  };
}

export function render(url: string) {
  const helmetContext: HelmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  
  // Extract helmet data for SEO
  const { helmet } = helmetContext;
  
  return {
    html,
    helmet: helmet || {}
  };
}
