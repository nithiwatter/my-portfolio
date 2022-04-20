import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-[100vh] bg-slate-100 dark:bg-slate-800">
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
