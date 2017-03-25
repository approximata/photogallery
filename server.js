var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var httpProxy = require("http-proxy");
var ports = require('./config/env');
var apiPort = ports.apiPort;
var webpackPort = ports.port;

var app = new (require('express'))()
var port = webpackPort;
var apiProxy = httpProxy.createProxyServer();

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use("/api", function(req, res) {
    req.url = req.baseUrl;
    apiProxy.web(req, res, {
      target: {
        port: apiPort,
        host: "localhost"
      }
    });
  });

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser. Proxy on %s .", port, port, apiPort)
  }
})
