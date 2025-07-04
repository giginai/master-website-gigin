
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
// import { HelmetProvider } from 'react-helmet-async';
import helmetAsync from 'react-helmet-async';
import App from './App';


const { Helmet, HelmetProvider } = helmetAsync;
export function render(url: string) {
  const helmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  
  // Extract helmet data for SEO
  const { helmet } = helmetContext as any;
  
  return {
    html,
    helmet: helmet || {}
  };
}



