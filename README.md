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

client.push({
    key: 'js.prices.gas',
    value: 322,
    date: '2015-23-06 09:00:00'
}, function(result){
    console.log(result);
});

// Get last push
client.lastPush(function (pushes) {
    console.log(pushes);
});

// Retrieve several pushes
client.lastPushes(10, function (pushes) {
    console.log(pushes);
});

```

## Author & Licence
- [Oto Brglez](https://github.com/otobrglez)

Comes with [MIT](LICENSE).
