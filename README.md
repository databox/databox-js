# databox-js

[![Build Status](https://travis-ci.org/databox/databox-js.svg)](https://travis-ci.org/databox/databox-js)

## Usage
```javascript
var Databox = require('databox');

var client = new Databox({
    push_token: '<my token>'
});

client.lastPush(function (pushes) {
    console.log(pushes);
});

```

## Author & Licence
- [Oto Brglez](https://github.com/otobrglez)

Comes with [MIT](LICENSE).
