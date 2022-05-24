const webpack = require("webpack");
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          buffer: require.resolve("buffer"),
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          assert: require.resolve("assert"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify"),
          url: require.resolve("url"),
          fs: require.resolve("fs"),
          path: require.resolve("path-browserify"),
        },
      },
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          process: "process/browser",
          buffer: ["buffer", "Buffer"],
        }),
        new webpack.ProvidePlugin({
          process: "process/crypto",
          crypto: ["crypto", "Crypto"],
        }),
        new webpack.ProvidePlugin({
          process: "process/fs",
          fs: ["fs", "Fs"],
        }),
        new webpack.ProvidePlugin({
          process: "process/path",
          path: ["path", "Path"],
        })
      ],
    },
  },
};
