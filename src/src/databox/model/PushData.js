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

import ApiClient from '../ApiClient';
import PushDataAttribute from './PushDataAttribute';

/**
 * The PushData model module.
 * @module databox/model/PushData
 * @version 2.1.1
 */
class PushData {
    /**
     * Constructs a new <code>PushData</code>.
     * @alias module:databox/model/PushData
     */
    constructor() { 
        
        PushData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PushData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:databox/model/PushData} obj Optional instance to populate.
     * @return {module:databox/model/PushData} The populated <code>PushData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PushData();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [PushDataAttribute]);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('periodFrom')) {
                obj['periodFrom'] = ApiClient.convertToType(data['periodFrom'], 'String');
            }
            if (data.hasOwnProperty('periodTo')) {
                obj['periodTo'] = ApiClient.convertToType(data['periodTo'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PushData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PushData</code>.
     */
    static validateJSON(data) {
        if (data['attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attributes'])) {
                throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
            }
            // validate the optional field `attributes` (array)
            for (const item of data['attributes']) {
                PushDataAttribute.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['periodFrom'] && !(typeof data['periodFrom'] === 'string' || data['periodFrom'] instanceof String)) {
            throw new Error("Expected the field `periodFrom` to be a primitive type in the JSON string but got " + data['periodFrom']);
        }
        // ensure the json data is a string
        if (data['periodTo'] && !(typeof data['periodTo'] === 'string' || data['periodTo'] instanceof String)) {
            throw new Error("Expected the field `periodTo` to be a primitive type in the JSON string but got " + data['periodTo']);
        }
        // ensure the json data is a string
        if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
            throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
        }

        return true;
    }

/**
     * @return {Array.<module:databox/model/PushDataAttribute>}
     */
    getAttributes() {
        return this.attributes;
    }

    /**
     * @param {Array.<module:databox/model/PushDataAttribute>} attributes
     */
    setAttributes(attributes) {
        this['attributes'] = attributes;
    }
/**
     * @return {String}
     */
    getDate() {
        return this.date;
    }

    /**
     * @param {String} date
     */
    setDate(date) {
        this['date'] = date;
    }
/**
     * @return {String}
     */
    getKey() {
        return this.key;
    }

    /**
     * @param {String} key
     */
    setKey(key) {
        this['key'] = key;
    }
/**
     * @return {String}
     */
    getPeriodFrom() {
        return this.periodFrom;
    }

    /**
     * @param {String} periodFrom
     */
    setPeriodFrom(periodFrom) {
        this['periodFrom'] = periodFrom;
    }
/**
     * @return {String}
     */
    getPeriodTo() {
        return this.periodTo;
    }

    /**
     * @param {String} periodTo
     */
    setPeriodTo(periodTo) {
        this['periodTo'] = periodTo;
    }
/**
     * @return {String}
     */
    getUnit() {
        return this.unit;
    }

    /**
     * @param {String} unit
     */
    setUnit(unit) {
        this['unit'] = unit;
    }
/**
     * @return {Number}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param {Number} value
     */
    setValue(value) {
        this['value'] = value;
    }

}



/**
 * @member {Array.<module:databox/model/PushDataAttribute>} attributes
 */
PushData.prototype['attributes'] = undefined;

/**
 * @member {String} date
 */
PushData.prototype['date'] = undefined;

/**
 * @member {String} key
 */
PushData.prototype['key'] = undefined;

/**
 * @member {String} periodFrom
 */
PushData.prototype['periodFrom'] = undefined;

/**
 * @member {String} periodTo
 */
PushData.prototype['periodTo'] = undefined;

/**
 * @member {String} unit
 */
PushData.prototype['unit'] = undefined;

/**
 * @member {Number} value
 */
PushData.prototype['value'] = undefined;






export default PushData;

