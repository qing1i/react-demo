const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://mock.apifox.cn/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
