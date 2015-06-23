#!/usr/bin/env node

var Databox = require('./lib/databox');

var client = new Databox({
    'push_token': 'adxg1kq5a4g04k0wk0s4wkssow8osw84',
});

client.lastPush(function (pushes) {
    console.log(pushes);
});