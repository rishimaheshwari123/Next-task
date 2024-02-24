import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
        <link href="/your-path-to-uicons/css/uicons-[your-style].css" rel="stylesheet" />
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>

      </body>
    </Html>
  );
}
