/* tslint:disable */
/* eslint-disable */
/**
 * Konfig REST API
 * To help you generate SDKs with Konfig
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * https://konfigthis.com
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyAdditionalGeneratorsValue } from './generate-request-body-additional-generators-value';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyAllObjectsHaveAdditionalProperties } from './generate-request-body-all-objects-have-additional-properties';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyFixConfig } from './generate-request-body-fix-config';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGenerators } from './generate-request-body-generators';

/**
 * 
 * @export
 * @interface GenerateRequestBody
 */
export interface GenerateRequestBody {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'spec': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'konfigYaml': string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'outputSpec'?: boolean;
    /**
     * 
     * @type {GenerateRequestBodyGenerators}
     * @memberof GenerateRequestBody
     */
    'generators': GenerateRequestBodyGenerators;
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyAdditionalGeneratorsValue; }}
     * @memberof GenerateRequestBody
     */
    'additionalGenerators'?: { [key: string]: GenerateRequestBodyAdditionalGeneratorsValue; };
    /**
     * 
     * @type {GenerateRequestBodyFixConfig}
     * @memberof GenerateRequestBody
     */
    'fixConfig'?: GenerateRequestBodyFixConfig;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterQueryParams'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterTags'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterModels'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'filterRequestBodies'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'attachNullabletoAllResponseSchemas'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'validateRequiredPropertiesAreNonEmpty'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBody
     */
    'stripRequiredStringProperties'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'infoContactEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'infoContactName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBody
     */
    'infoContactUrl'?: string;
    /**
     * Multiple tags can cause conflicts for TypeScript SDK
     * @type {any}
     * @memberof GenerateRequestBody
     */
    'takeFirstTag'?: any;
    /**
     * Default array value is not supported in Java SDK
     * @type {any}
     * @memberof GenerateRequestBody
     */
    'removeDefaultArrayValues'?: any;
    /**
     * Array data type is not supported in TypeScript SDK for OAS 3.1
     * @type {any}
     * @memberof GenerateRequestBody
     */
    'convertArrayDataTypesToAny'?: any;
    /**
     * 
     * @type {GenerateRequestBodyAllObjectsHaveAdditionalProperties}
     * @memberof GenerateRequestBody
     */
    'allObjectsHaveAdditionalProperties'?: GenerateRequestBodyAllObjectsHaveAdditionalProperties;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBody
     */
    'requiredEnvironmentVariables'?: Array<string>;
}

