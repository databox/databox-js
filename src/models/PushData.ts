// tslint:disable
/**
 * Static OpenAPI document of Push API resource
 * Push API resources Open API documentation
 *
 * The version of the OpenAPI document: 0.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    PushDataAttribute,
} from './';

/**
 * @export
 * @interface PushData
 */
export interface PushData {
    /**
     * @type {Array<PushDataAttribute>}
     * @memberof PushData
     */
    attributes?: Array<PushDataAttribute>;
    /**
     * @type {string}
     * @memberof PushData
     */
    date?: string;
    /**
     * @type {string}
     * @memberof PushData
     */
    key?: string;
    /**
     * @type {string}
     * @memberof PushData
     */
    periodFrom?: string;
    /**
     * @type {string}
     * @memberof PushData
     */
    periodTo?: string;
    /**
     * @type {string}
     * @memberof PushData
     */
    unit?: string;
    /**
     * @type {number}
     * @memberof PushData
     */
    value?: number;
}
