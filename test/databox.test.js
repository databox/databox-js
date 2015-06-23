var path = require('path');
// var test = require('testunit');
var assert = require('assert');

var Databox = require(path.join('../lib/', 'databox.js'));

module.exports = {
    setUp: function (cb) {
        cb();
    },

    testSetup: function (test) {
        var push_token = 123;
        var d = new Databox({
            'push_token': push_token
        });

        test.ok(d.push_token == push_token, "Token must be set");
        test.done();
    }
}