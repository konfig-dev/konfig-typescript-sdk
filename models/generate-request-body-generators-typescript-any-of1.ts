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
import { GenerateRequestBodyGeneratorsAndroidGit } from './generate-request-body-generators-android-git';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidTest } from './generate-request-body-generators-android-test';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsTypescriptAnyOf1ParameterStateInner } from './generate-request-body-generators-typescript-any-of1-parameter-state-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsTypescriptAnyOfPagination } from './generate-request-body-generators-typescript-any-of-pagination';

/**
 * 
 * @export
 * @interface GenerateRequestBodyGeneratorsTypescriptAnyOf1
 */
export interface GenerateRequestBodyGeneratorsTypescriptAnyOf1 {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'outputDirectory': string;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'generatorVersion': GenerateRequestBodyGeneratorsTypescriptAnyOf1GeneratorVersionEnum;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'httpClient'?: GenerateRequestBodyGeneratorsTypescriptAnyOf1HttpClientEnum;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'useOptions'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'useUnionTypes'?: boolean;
    /**
     * AcmeClient
     * @type {any}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'clientName'?: any;
    /**
     * SDK for Acme\'s REST API
     * @type {any}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'npmDescription': any;
    /**
     * acme.com
     * @type {any}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'npmAuthor': any;
    /**
     * acme-typescript-sdk
     * @type {any}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'npmName': any;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'packageVersion': string;
    /**
     * 
     * @type {Array<GenerateRequestBodyGeneratorsTypescriptAnyOf1ParameterStateInner>}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'parameterState'?: Array<GenerateRequestBodyGeneratorsTypescriptAnyOf1ParameterStateInner>;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'removeTagFromOperationId'?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'operationIdMapping'?: { [key: string]: string; };
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsTypescriptAnyOfPagination}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'pagination'?: GenerateRequestBodyGeneratorsTypescriptAnyOfPagination;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf1
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
}

export const GenerateRequestBodyGeneratorsTypescriptAnyOf1GeneratorVersionEnum = {
    NUMBER_2: 2
} as const;

export type GenerateRequestBodyGeneratorsTypescriptAnyOf1GeneratorVersionEnum = typeof GenerateRequestBodyGeneratorsTypescriptAnyOf1GeneratorVersionEnum[keyof typeof GenerateRequestBodyGeneratorsTypescriptAnyOf1GeneratorVersionEnum];
export const GenerateRequestBodyGeneratorsTypescriptAnyOf1HttpClientEnum = {
    Fetch: 'fetch',
    Xhr: 'xhr',
    Node: 'node',
    Axios: 'axios',
    Angular: 'angular'
} as const;

export type GenerateRequestBodyGeneratorsTypescriptAnyOf1HttpClientEnum = typeof GenerateRequestBodyGeneratorsTypescriptAnyOf1HttpClientEnum[keyof typeof GenerateRequestBodyGeneratorsTypescriptAnyOf1HttpClientEnum];


