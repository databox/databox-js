# databox-js

[![Build Status](https://travis-ci.org/databox/databox-js.svg)](https://travis-ci.org/databox/databox-js)
[![npm version](https://badge.fury.io/js/databox.svg)](https://badge.fury.io/js/databox)

## Installation
```
npm install databox
```

## Usage
```javascript
var Databox = require('databox');

var client = new Databox({
    push_token: '<my token>'
});

// Push one KPI
client.push({
    key: 'js.prices.gas',
    value: 322,
    date: '2018-02-23 09:00:00'
}, function(result){
    console.log(result);
});

// Push multiple KPIs
client.insertAll([
    {
        key: 'js.prices.gas',
        value: 322
    },
    {
        key: 'js.prices.gas',
        value: 100,

        // With date
        date: '2018-02-23 09:00:00'
    },
    {
        key: 'js.prices.gas',
        value: 200,

        // With additional attributes
        attributes: {
            'station': 'ny-main'
        }
    },
    {
        key: 'js.prices.gas',
        value: 200,

        // With additional currency unit
        unit: 'USD'
    }
], function(result){
    console.log(result);
});

// Callback is optional
client.insertAll([
    {
        key: 'js.prices.gas',
        value: 322
    },
    {
        key: 'js.prices.gas',
        value: 100,
        date: '2018-02-23 09:00:00'
    }
]);

// Get last push
client.lastPush(function (pushes) {
    console.log(pushes);
});

// Retrieve several pushes
client.lastPushes(10, function (pushes) {
    console.log(pushes);
});

// Retrieve specific push
var id = '14714784007cb9cd36cf46baefcd0a';
client.getPush(id, function (pushes) {
    console.log(pushes);
});

// Retrieve pushed metric keys
client.metrics(function (metrics) {
    console.log(metrics);
});

// Purge pushed data
client.purge(function (response) {
    console.log(response);
});

```

## Development

    git clone ...
    npm test

## Debugging

    # Add "debugger" keyword anywhere and run
    mocha debug test

## Author & Licence
- [Oto Brglez](https://github.com/otobrglez)
- [Vlada Petrovic](https://github.com/vladapetrovic)

Comes with [MIT](LICENSE).
