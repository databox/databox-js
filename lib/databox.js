var https = require('https');
var url = require('url');
var util = require('util');
var package_json = require('../package.json');

function Databox(config) {
    this.config = config || {};

    if (config.hasOwnProperty('push_token'))
        this.push_token = config.push_token;

    if (typeof(this['push_token']) == "undefined")
        throw new Error("Missing push_token.");

    this.config['push_host'] = 'https://push2new.databox.com/';
    this.config['user_agent'] = util.format('Databox/%s (Node.js)', package_json.version);
}

Databox.prototype._pushJSONRequest = function (i_options, cb) {
    if (typeof(i_options) == "undefined") i_options = {};
    if (typeof(cb) == "undefined") return null;

    var options = {
        hostname: url.parse(this.config['push_host']).hostname,
        port: url.parse(this.config['push_host']).port || 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': this.config['user_agent']
        },
        auth: util.format("%s:%s", this.config['push_token'], '')
    };

    for (var k in i_options) {
        options[k] = i_options[k];
    }

    var request = https
        .request(options, function (response) {
            var bf = '';
            response.on('data', function (data) {
                bf += data;
                if (bf.length > 1e6) request.connection.destroy();
            });

            response.on('end', function (data) {
                cb(JSON.parse(bf));
            });
        })
        .end();

    return request;
};


Databox.prototype.lastPushes = function (n, cb) {
    return this._pushJSONRequest({
        path: util.format("/lastpushes/%d", parseInt(n, 10))
    }, cb)
};

Databox.prototype.lastPush = function (cb) {
    return this.lastPushes(1, cb);
};

Databox.prototype.push = function () {
    throw new Error("Not yet implemented");
};

Databox.prototype.insertAll = function () {
    throw new Error("Not yet implemented");
};

module.exports = Databox;