/**
 * Static OpenAPI document of Push API resource
 * Push API resources Open API documentation
 *
 * The version of the OpenAPI document: 0.3.15-sdk.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/databox/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/databox/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Databox);
  }
}(this, function(expect, Databox) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Databox.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('dataDelete', function() {
      it('should call dataDelete successfully', function(done) {
        //uncomment below and update the code to test dataDelete
        //instance.dataDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataMetricKeyDelete', function() {
      it('should call dataMetricKeyDelete successfully', function(done) {
        //uncomment below and update the code to test dataMetricKeyDelete
        //instance.dataMetricKeyDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataPost', function() {
      it('should call dataPost successfully', function(done) {
        //uncomment below and update the code to test dataPost
        //instance.dataPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('metrickeysGet', function() {
      it('should call metrickeysGet successfully', function(done) {
        //uncomment below and update the code to test metrickeysGet
        //instance.metrickeysGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('metrickeysPost', function() {
      it('should call metrickeysPost successfully', function(done) {
        //uncomment below and update the code to test metrickeysPost
        //instance.metrickeysPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pingGet', function() {
      it('should call pingGet successfully', function(done) {
        //uncomment below and update the code to test pingGet
        //instance.pingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
