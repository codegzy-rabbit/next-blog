import Document from 'next/document';
import { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="notifications"></div>
      </Html>
    );
  }
}

export default MyDocument;
