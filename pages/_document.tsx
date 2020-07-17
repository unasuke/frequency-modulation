import Document, { Html, Head, Main, NextScript } from "next/document";

class UnasukeFmDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head>
          <meta httpEquiv={"Content-Security-Policy"} content={"media-src https://s3.wasabisys.com/"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default UnasukeFmDocument
