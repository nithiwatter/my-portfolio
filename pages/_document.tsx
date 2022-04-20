import { Html, Head, Main, NextScript } from 'next/document';

const themeScript = `
(function () {
    var currentTheme = localStorage.getItem('portfolio-theme') || 'light'
    window.document.documentElement.classList.add(currentTheme);
})()
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
