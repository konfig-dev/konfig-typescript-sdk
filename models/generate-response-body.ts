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
import { GenerateResponseBodyUrlsInner } from './generate-response-body-urls-inner';

/**
 * 
 * @export
 * @interface GenerateResponseBody
 */
export interface GenerateResponseBody {
    /**
     * 
     * @type {Array<GenerateResponseBodyUrlsInner>}
     * @memberof GenerateResponseBody
     */
    'urls': Array<GenerateResponseBodyUrlsInner>;
    /**
     * 
     * @type {string}
     * @memberof GenerateResponseBody
     */
    'generateConfigId': string;
}

