import React from "react";

const Html = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>React ssr with stream</title>
      </head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<b>Enable JavaScript to run this app.</b>`,
        }}
      />
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `assetManifest = ${JSON.stringify({
            "main.js": "./main.js",
          })};`,
        }}
      />
    </html>
  );
};

export default Html;
