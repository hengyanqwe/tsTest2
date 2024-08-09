const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const path = require('path');
const {apiServer} = require("./config");
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.use(
  '/api',
  createProxyMiddleware({
    target: `${apiServer}`,
    changeOrigin: true,
  }),
);
app.use(
    '/services',
  createProxyMiddleware({
      target: `${apiServer}`,
      changeOrigin: true,
  }),
);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});
app.listen(3012);
