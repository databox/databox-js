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

client.push({
  key: 'js.prices.test.gas',
  value: 124,
  unit: 'USD',
  attributes: {
    'station': 'omv'
  }
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
  var sha = pushes[0].response.body.id;

  console.log('Last push id: ' + sha);
  client.getPush(sha, function (onePush) {
    console.log('#getPush response:', JSON.stringify(onePush, null, 2));
  });
});

client.lastPushes(2, function (pushes) {
  var sha = [];
  for (var i in pushes) {
    sha.push(pushes[i].response.body.id);
  }

  console.log('Last two pushes:', sha);
  client.getPush(sha, function (multiplePushes) {
    console.log('#getPush response:', JSON.stringify(multiplePushes, null, 2));
  });
});

client.metrics(function (res) {
  console.log('#metrics response', JSON.stringify(res, null, 2));
});

client.purge(function (res) {
  console.log('#purge response', JSON.stringify(res, null, 2));
});
