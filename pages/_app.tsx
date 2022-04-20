import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '../utils/theme-provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-[100vh] bg-slate-100 dark:bg-slate-800">
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
