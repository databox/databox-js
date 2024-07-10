/**
 * Static OpenAPI document of Push API resource
 * Push API resources Open API documentation
 *
 * The version of the OpenAPI document: 0.3.15-sdk.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ApiResponse from './model/ApiResponse';
import PushData from './model/PushData';
import PushDataAttribute from './model/PushDataAttribute';
import State from './model/State';
import DefaultApi from './databox/DefaultApi';


/**
* SDK Client for using Databox Push API feature.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Databox = require('databox/index'); // See note below*.
* var xxxSvc = new Databox.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Databox.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['databox/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Databox.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Databox.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module databox/index
* @version 2.1.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:databox/ApiClient}
     */
    ApiClient,

    /**
     * The ApiResponse model constructor.
     * @property {module:databox/model/ApiResponse}
     */
    ApiResponse,

    /**
     * The PushData model constructor.
     * @property {module:databox/model/PushData}
     */
    PushData,

    /**
     * The PushDataAttribute model constructor.
     * @property {module:databox/model/PushDataAttribute}
     */
    PushDataAttribute,

    /**
     * The State model constructor.
     * @property {module:databox/model/State}
     */
    State,

    /**
    * The DefaultApi service constructor.
    * @property {module:databox/databox/DefaultApi}
    */
    DefaultApi
};
