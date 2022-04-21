// vendors' CSS first to prevent conflicts with tailwind global CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '@reach/menu-button/styles.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';

import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
