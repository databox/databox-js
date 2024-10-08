/* tslint:disable */
/* eslint-disable */
/**
 * Static OpenAPI document of Push API resource
 * Push API resources Open API documentation
 *
 * The version of the OpenAPI document: 0.4.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PushDataAttribute } from './PushDataAttribute';
import {
    PushDataAttributeFromJSON,
    PushDataAttributeFromJSONTyped,
    PushDataAttributeToJSON,
} from './PushDataAttribute';

/**
 * 
 * @export
 * @interface PushData
 */
export interface PushData {
    /**
     * 
     * @type {Array<PushDataAttribute>}
     * @memberof PushData
     */
    attributes?: Array<PushDataAttribute>;
    /**
     * 
     * @type {string}
     * @memberof PushData
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof PushData
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof PushData
     */
    periodFrom?: string;
    /**
     * 
     * @type {string}
     * @memberof PushData
     */
    periodTo?: string;
    /**
     * 
     * @type {string}
     * @memberof PushData
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof PushData
     */
    value?: number;
}

/**
 * Check if a given object implements the PushData interface.
 */
export function instanceOfPushData(value: object): value is PushData {
    return true;
}

export function PushDataFromJSON(json: any): PushData {
    return PushDataFromJSONTyped(json, false);
}

export function PushDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PushData {
    if (json == null) {
        return json;
    }
    return {
        
        'attributes': json['attributes'] == null ? undefined : ((json['attributes'] as Array<any>).map(PushDataAttributeFromJSON)),
        'date': json['date'] == null ? undefined : json['date'],
        'key': json['key'] == null ? undefined : json['key'],
        'periodFrom': json['periodFrom'] == null ? undefined : json['periodFrom'],
        'periodTo': json['periodTo'] == null ? undefined : json['periodTo'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function PushDataToJSON(value?: PushData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attributes': value['attributes'] == null ? undefined : ((value['attributes'] as Array<any>).map(PushDataAttributeToJSON)),
        'date': value['date'],
        'key': value['key'],
        'periodFrom': value['periodFrom'],
        'periodTo': value['periodTo'],
        'unit': value['unit'],
        'value': value['value'],
    };
}

