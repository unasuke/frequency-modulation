import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import React from "react";

class UnasukeFmDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    const analyticsTag = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GOOGLE_ANALYTICS_ID}');`;

    return (
      <Html lang="ja">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {process.env.NODE_ENV === "production" ? (
            <script dangerouslySetInnerHTML={{ __html: analyticsTag }} />
          ) : null}
          <link
            rel="alternate"
            type="application/rss+xml"
            href={`${process.env.DEPLOY_URL}/feed.xml`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default UnasukeFmDocument;
