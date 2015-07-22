# databox-js

[![Build Status](https://travis-ci.org/databox/databox-js.svg)](https://travis-ci.org/databox/databox-js)

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
    date: '2015-23-06 09:00:00'
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
        date: '2015-06-23 09:00:00'
    },
    {
        key: 'js.prices.gas',
        value: 200,
        
        // With additional attributes
        attributes: {
            'station': 'ny-main'
        }
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
        date: '2015-06-23 09:00:00'
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

```

## Development

    git clone ...
    npm test
    
## Debugging

    # Add "debugger" keyword anywhere and run
    mocha debug test

## Author & Licence
- [Oto Brglez](https://github.com/otobrglez)

Comes with [MIT](LICENSE).
