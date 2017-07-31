var https = require('https'),
  url = require('url'),
  util = require('util'),
  package_json = require('../package.json');

function Databox(config) {
  this.config = config || {};

  if (config.hasOwnProperty('push_token'))
    this.push_token = config.push_token;

  this.push_token = process.env.DATABOX_PUSH_TOKEN || this.push_token;

  if (typeof(this.push_token) == "undefined")
    throw new Error("Missing push_token.");

  this.config.push_host = 'https://push.databox.com/';
  this.config.user_agent = util.format('databox-js/%s', package_json.version);
  this.config.accept = util.format('application/vnd.databox.v%s+json', package_json.version.split('.')[0]);
}

Databox.prototype._pushJSONRequest = function (i_options, data, cb) {
  if (typeof(i_options) == "undefined") i_options = {};

  var options = {
    hostname: url.parse(this.config.push_host).hostname,
    port: url.parse(this.config.push_host).port || 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': this.config.user_agent,
      'Accept': this.config.accept
    },
    auth: util.format("%s:%s", this.config.push_token, '')
  };

  for (var k in i_options) {
    if (i_options.hasOwnProperty(k)) options[k] = i_options[k];
  }

  var jsonData = null;
  if (data !== null) {
    jsonData = JSON.stringify({data: data});
    // When any of the values represented inside the Object being stringified, 
    // contain some UNICODE characters, produces the return of the following Error: 
    // {message : "Invalid request body - JSON parse error", type : "invalid_json"}
    //
    // The proposed patch, converts each string char to its (Hex) Unicode representation 
    // An example, using a Spanish word -with a conflictive accent mark in the 'o'- :
    // "Atención" => "\u0041\u0074\u0065\u006e\u0063\u0069\u00f3\u006e"
    // This disambiguation prevents the unexpected error on the request sending.
    // <-- BEGINING OF THE PATCH 
    jsonData  = jsonData.replace(/[\u007F-\uFFFF]/g, function(chr) {
      return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4);
    });
    // END OF THE PATCH -->
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
        if (typeof(cb) != "undefined") {

          try {
            outObject = JSON.parse(bf);
            cb(outObject);
          } catch (e) {
            var p = 1;
            cb(e);
          }

          outObject = null;
          bf = null;
        }
      });
    });

  if (data !== null) request.write(jsonData);
  request.end();

  return request;
};

Databox.prototype._processKPI = function (kpi) {
  var out = {};

  out[util.format("$%s", kpi.key)] = kpi.value;

  if (kpi.hasOwnProperty("date") || typeof(kpi.date) != "undefined") {
    out.date = kpi.date;
    //TODO: If it's some kind of Date/Time instance do "casting".
  }

  if (kpi.hasOwnProperty("unit") || typeof(kpi.unit) != "undefined") {
    out.unit = kpi.unit;
  }

  if (kpi.hasOwnProperty('attributes') || typeof(kpi.attributes) != "undefined") {
    for (var k in kpi.attributes)
      out[k] = kpi.attributes[k];
  }

  return out;
};

Databox.prototype.getPush = function (sha, cb) {
  var path = (sha instanceof Array) ? '/lastpushes?id=' + sha.join(',') : '/lastpushes/' + sha;

  return this._pushJSONRequest({
    method: 'GET',
    path: path
  }, null, cb);
};

Databox.prototype.lastPushes = function (n, cb) {
  return this._pushJSONRequest({
    method: 'GET',
    path: util.format("/lastpushes?limit=%d", parseInt(n, 10))
  }, null, cb);
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

Databox.prototype.metrics = function (cb) {
  return this._pushJSONRequest({
    method: 'GET',
    path: '/metrickeys'
  }, null, cb);
};

Databox.prototype.purge = function (cb) {
  return this._pushJSONRequest({
    method: 'DELETE',
    path: '/data'
  }, null, cb);
};

module.exports = Databox;
