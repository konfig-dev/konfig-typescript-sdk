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
import { GenerateRequestBodyGeneratorsAndroidFilesValue } from './generate-request-body-generators-android-files-value';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidGit } from './generate-request-body-generators-android-git';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidTest } from './generate-request-body-generators-android-test';

/**
 * 
 * @export
 * @interface GenerateRequestBodyGeneratorsPhp
 */
export interface GenerateRequestBodyGeneratorsPhp {
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; }}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'files'?: { [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'version': string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * acme-php
     * @type {any}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'packageName': any;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPhp
     */
    'invokerPackage': string;
}

