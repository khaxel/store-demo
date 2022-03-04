import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta name="author" content="EServer" />
          <meta name="copyright" content="Все права принадлежат EServer" />
          <link rel="icon" type="image/png" sizes="24x24" href="/favicon-24x24.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
