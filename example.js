#!/usr/bin/env node

var Databox = require('./lib/databox');

var client = new Databox({
  'push_token': (process.env.DATABOX_PUSH_TOKEN || 'adxg1kq5a4g04k0wk0s4wkssow8osw84'),
});

client.push({
  key: 'js.prices.gas',
  value: 322,
  date: '2015-06-23 09:00:00'
}, function (result) {
  console.log(result);
});

client.push({
  key: 'js.prices.test.gas',
  value: 322
});

client.insertAll([
  {
    key: 'js.prices.gas',
    value: 322
  },
  {
    key: 'js.prices.gas',
    value: 100,
    date: '2015-06-23 09:00:00'
  }
], function (result) {
  console.log(result);
});

client.lastPush(function (pushes) {
  console.log("Last push was:");
  console.log(JSON.stringify(pushes, null, 2));
});

