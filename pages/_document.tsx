import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
          <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>

          <link
            href="//cdn.quilljs.com/1.3.6/quill.snow.css"
            rel="stylesheet"
          />
          <link
            href="//cdn.quilljs.com/1.3.6/quill.bubble.css"
            rel="stylesheet"
          />

          <link
            href="//cdn.quilljs.com/1.3.6/quill.core.css"
            rel="stylesheet"
          />
          <script src="//cdn.quilljs.com/1.3.6/quill.core.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="__portal" />
        </body>
      </Html>
    );
  }
}
