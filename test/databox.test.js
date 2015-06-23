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

        it('Should cry if no \'push_token\'', function(){
            assert.throws(function(){
                new Databox();
            }, Error);

            assert.throws(function(){
                new Databox({});
            }, Error)
        });
    });

    describe('Config', function(){
        var databox, config;
        beforeEach(function(){
            databox = new Databox({
                'push_token': "some_token"
            })
            config = databox.config;
        });

        it('Should have user_agent', function(){
            assert(config.user_agent.match(/\d+\.\d+\.\d+/i) != null);
        });

        it('Should have push_host', function(){
            assert(config.push_host.match(/databox/) != null);
        })
    });
});
