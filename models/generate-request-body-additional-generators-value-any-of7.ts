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
 * @interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
 */
export interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf7 {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'generator': GenerateRequestBodyAdditionalGeneratorsValueAnyOf7GeneratorEnum;
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyAdditionalGeneratorsValueAnyOfFilesValue; }}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'files'?: { [key: string]: GenerateRequestBodyAdditionalGeneratorsValueAnyOfFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'readmeDescriptionSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * com.acme
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'groupId': string;
    /**
     * acme-kotlin-sdk
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7
     */
    'artifactId': string;
}

export const GenerateRequestBodyAdditionalGeneratorsValueAnyOf7GeneratorEnum = {
    Kotlin: 'kotlin'
} as const;

export type GenerateRequestBodyAdditionalGeneratorsValueAnyOf7GeneratorEnum = typeof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7GeneratorEnum[keyof typeof GenerateRequestBodyAdditionalGeneratorsValueAnyOf7GeneratorEnum];


