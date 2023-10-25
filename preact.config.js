export default (config) => {
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: "worker-loader", options: { filename: "[name].[hash].js" } },
  });
};
