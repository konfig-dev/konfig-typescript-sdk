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
import { GenerateRequestBodyAdditionalGeneratorsValueAnyOfFilesValue } from './generate-request-body-additional-generators-value-any-of-files-value';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidGit } from './generate-request-body-generators-android-git';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidTest } from './generate-request-body-generators-android-test';

/**
 * 
 * @export
 * @interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
 */
export interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf9 {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'generator': GenerateRequestBodyAdditionalGeneratorsValueAnyOf9GeneratorEnum;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'readmeDescriptionSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyAdditionalGeneratorsValueAnyOfFilesValue; }}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'files'?: { [key: string]: GenerateRequestBodyAdditionalGeneratorsValueAnyOfFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'version': string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * acme
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9
     */
    'packageName': string;
}

export const GenerateRequestBodyAdditionalGeneratorsValueAnyOf9GeneratorEnum = {
    Go: 'go'
} as const;

export type GenerateRequestBodyAdditionalGeneratorsValueAnyOf9GeneratorEnum = typeof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9GeneratorEnum[keyof typeof GenerateRequestBodyAdditionalGeneratorsValueAnyOf9GeneratorEnum];


