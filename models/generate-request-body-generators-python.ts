/* tslint:disable */
/* eslint-disable */
/**
 * Konfig\'s REST API
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
import { GenerateRequestBodyGeneratorsPythonGenerator } from './generate-request-body-generators-python-generator';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsPythonObjectPropertyNamingConvention } from './generate-request-body-generators-python-object-property-naming-convention';

/**
 * 
 * @export
 * @interface GenerateRequestBodyGeneratorsPython
 */
export interface GenerateRequestBodyGeneratorsPython {
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; }}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'files'?: { [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'version': string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * acme_client
     * @type {any}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'packageName': any;
    /**
     * acme-python-sdk
     * @type {any}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'projectName': any;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'pypiApiTokenEnvironmentVariable'?: string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsPythonObjectPropertyNamingConvention}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'objectPropertyNamingConvention'?: GenerateRequestBodyGeneratorsPythonObjectPropertyNamingConvention;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'clientName': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'clientState'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'setSkipSerializationToTrueByDefault'?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'apiKeyAlias'?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'validateRequiredStringsAreNonEmpty'?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'topLevelOperations'?: { [key: string]: string; };
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsPythonGenerator}
     * @memberof GenerateRequestBodyGeneratorsPython
     */
    'generator'?: GenerateRequestBodyGeneratorsPythonGenerator;
}

