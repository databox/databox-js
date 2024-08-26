/* tslint:disable */
/* eslint-disable */
/**
 * Static OpenAPI document of Push API resource
 * Push API resources Open API documentation asdas
 *
 * The version of the OpenAPI document: 0.4.4-alpha.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelApiResponse
 */
export interface ModelApiResponse {
    /**
     * 
     * @type {string}
     * @memberof ModelApiResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelApiResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the ModelApiResponse interface.
 */
export function instanceOfModelApiResponse(value: object): value is ModelApiResponse {
    return true;
}

export function ModelApiResponseFromJSON(json: any): ModelApiResponse {
    return ModelApiResponseFromJSONTyped(json, false);
}

export function ModelApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : json['status'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ModelApiResponseToJSON(value?: ModelApiResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'message': value['message'],
    };
}

