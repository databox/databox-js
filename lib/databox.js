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

Databox.prototype._pushJSONRequest = function (i_options, data, cb) {
    if (typeof(i_options) == "undefined") i_options = {};

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

    var jsonData = null;
    if (data != null) {
        jsonData = JSON.stringify({data: data});
        options.headers['Content-Length'] = jsonData.length;
    }

    var request = https
        .request(options, function (response) {
            var bf = '';
            response.on('data', function (data) {
                bf += data;
                if (bf.length > 1e6) request.connection.destroy();
            });

            response.on('end', function (data) {
                if (cb != null) {
                    cb(JSON.parse(bf));
                    bf = null;
                }
                ;
            });
        });

    if (data != null) request.write(jsonData);
    request.end();

    return request;
};

Databox.prototype._processKPI = function (kpi) {
    var out = {};

    out[util.format("$%s", kpi['key'])] = kpi.value;

    if (kpi.hasOwnProperty("date") || typeof(kpi['date']) != "undefined") {
        out['date'] = kpi.date;
        //TODO: If it's some kind of Date/Time instance do "casting".
    }

    return out;
};

Databox.prototype.lastPushes = function (n, cb) {
    return this._pushJSONRequest({
        path: util.format("/lastpushes/%d", parseInt(n, 10))
    }, null, cb)
};

Databox.prototype.lastPush = function (cb) {
    return this.lastPushes(1, cb);
};

Databox.prototype.push = function (kpi, cb) {
    return this._pushJSONRequest('/',
        [kpi].map(this._processKPI),
        cb
    );
};

Databox.prototype.insertAll = function (kpis, cb) {
    return this._pushJSONRequest('/',
        kpis.map(this._processKPI),
        cb
    );
};

module.exports = Databox;