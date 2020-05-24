export default (config) => {
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: "worker-loader", options: { name: "[name].[hash].js" } },
  });
};
