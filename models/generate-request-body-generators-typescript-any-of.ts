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
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsPythonTopLevelOperations } from './generate-request-body-generators-python-top-level-operations';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsTypescriptAnyOfPagination } from './generate-request-body-generators-typescript-any-of-pagination';

/**
 * 
 * @export
 * @interface GenerateRequestBodyGeneratorsTypescriptAnyOf
 */
export interface GenerateRequestBodyGeneratorsTypescriptAnyOf {
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; }}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'files'?: { [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'version': string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'readmeDescriptionSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'clientName': string;
    /**
     * acme-typescript-sdk
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'npmName': string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsTypescriptAnyOfPagination}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'pagination'?: GenerateRequestBodyGeneratorsTypescriptAnyOfPagination;
    /**
     * A list of stateful properties generated into the SDK that can be used in custom implementation hooks. This is useful when you need state in the SDK that is not described in the OpenAPI Specification such as a key used for request signing.
     * @type {Array<string>}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'clientState'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'removeRequiredProperties'?: Array<string>;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsPythonTopLevelOperations}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'topLevelOperations'?: GenerateRequestBodyGeneratorsPythonTopLevelOperations;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'includeFetchAdapter'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsTypescriptAnyOf
     */
    'includeEventSourceParser'?: boolean;
}

