
var ports = require('../config/env');
var apiPort = ports.apiPort;

var app = new (require('express'))()

var preziJson = require('./prezis.json');

app.get('/api', function(req, res){
  res.json(preziJson);
});

app.listen(apiPort, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Api listening on port ${apiPort}!`);
  }
});
