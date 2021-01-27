require("dotenv").config();
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withCSS(
    withSass({
      webpack(config) {
        // console.log(config)
        const prod = process.env.NODE_ENV === "production";
        config.plugins = config.plugins || [];
        // webpack setting
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        });
        return {
          ...config,
          mode: prod ? "production" : "development",
          devtool: prod ? "hidden-source-map" : "eval",
        };
        // 플러그인 관련 설정
      },
      //*********************************//
    })
  )
);
/* config options here */
