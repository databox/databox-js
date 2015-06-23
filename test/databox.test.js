var path = require('path');
var assert = require('assert');

var Databox = require(path.join('../lib/', 'databox.js'));

describe('Databox', function () {
    describe('Setup', function () {
        it('Should set push_token', function () {
            var push_token = 123;
            var d = new Databox({
                'push_token': push_token
            });

            assert.equal(d.push_token, push_token);
        });
    });
});
