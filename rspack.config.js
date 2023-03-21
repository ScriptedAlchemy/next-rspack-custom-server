module.exports = {
  entry: {
    main: "./server.js"
  },
  target: "node",
  externals: [
    /next/,
    "next"
  ]
};
