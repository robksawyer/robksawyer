// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const { query } = this.props.__NEXT_DATA__;
    const { lang } = query;
    let ltr = true;
    switch (lang) {
      case "ar-gl":
        ltr = false;
        break;
      default:
        break;
    }

    return (
      <Html lang={lang ? lang.split("-")[0] : "en"} dir={ltr ? "ltr" : "rtl"}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="https://use.typekit.net/ppb7mun.css"
            as="style"
          />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GOOGLE_GTM_CODE}');`,
            }}
          ></script> */}
        </Head>
        <body className={`overflow-x-hidden`}>
          <Main />
          <NextScript />
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_CODE}`}
              height="0"
              width="0"
              style={{
                display: "none",
                visibility: "hidden",
              }}
            ></iframe>
          </noscript> */}
        </body>
      </Html>
    );
  }
}

MyDocument.propTypes = {};

export default MyDocument;
