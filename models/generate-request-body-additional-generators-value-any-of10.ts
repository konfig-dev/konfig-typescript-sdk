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
 * @interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
 */
export interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf10 {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'generator': GenerateRequestBodyAdditionalGeneratorsValueAnyOf10GeneratorEnum;
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyAdditionalGeneratorsValueAnyOfFilesValue; }}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'files'?: { [key: string]: GenerateRequestBodyAdditionalGeneratorsValueAnyOfFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'readmeDescriptionSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * Acme
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'projectName': string;
    /**
     * acme.com
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'podAuthors': string;
}

export const GenerateRequestBodyAdditionalGeneratorsValueAnyOf10GeneratorEnum = {
    Swift: 'swift'
} as const;

export type GenerateRequestBodyAdditionalGeneratorsValueAnyOf10GeneratorEnum = typeof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10GeneratorEnum[keyof typeof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10GeneratorEnum];


