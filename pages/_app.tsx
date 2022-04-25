// vendors' CSS first to prevent conflicts with tailwind global CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '@reach/menu-button/styles.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';

import { AnimationProvider } from '../utils/animation-provider';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore: Types arr bundled incorrectly for this package
    // next-themes has bugs for its latest version - use 0.0.15
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <AnimationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
