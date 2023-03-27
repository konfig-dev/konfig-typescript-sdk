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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PushRequestBody } from '../models';
// @ts-ignore
import { PushResponseBody } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SpecificationsApi - axios parameter creator
 * @export
 */
export const SpecificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Push your OpenAPI Specification to Konfig to trigger SDK generation for a specified repository
         * @summary Push your OpenAPI Specification to Konfig
         * @param {PushRequestBody} [pushRequestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        push: async (pushRequestBody?: PushRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/push`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(pushRequestBody, localVarRequestOptions, configuration)

            requestBeforeHook({
              queryParameters: localVarQueryParameter,
              requestConfig: localVarRequestOptions,
              path: localVarPath,
              configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SpecificationsApi - functional programming interface
 * @export
 */
export const SpecificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SpecificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Push your OpenAPI Specification to Konfig to trigger SDK generation for a specified repository
         * @summary Push your OpenAPI Specification to Konfig
         * @param {SpecificationsApiPushRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async push(requestParameters: SpecificationsApiPushRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PushResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.push(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SpecificationsApi - factory interface
 * @export
 */
export const SpecificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SpecificationsApiFp(configuration)
    return {
        /**
         * Push your OpenAPI Specification to Konfig to trigger SDK generation for a specified repository
         * @summary Push your OpenAPI Specification to Konfig
         * @param {SpecificationsApiPushRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        push(requestParameters: SpecificationsApiPushRequest, options?: AxiosRequestConfig): AxiosPromise<PushResponseBody> {
            return localVarFp.push(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for push operation in SpecificationsApi.
 * @export
 * @interface SpecificationsApiPushRequest
 */
export type SpecificationsApiPushRequest = {
    
} & PushRequestBody

/**
 * SpecificationsApi - object-oriented interface
 * @export
 * @class SpecificationsApi
 * @extends {BaseAPI}
 */
export class SpecificationsApi extends BaseAPI {
    /**
     * Push your OpenAPI Specification to Konfig to trigger SDK generation for a specified repository
     * @summary Push your OpenAPI Specification to Konfig
     * @param {SpecificationsApiPushRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpecificationsApi
     */
    public push(requestParameters: SpecificationsApiPushRequest, options?: AxiosRequestConfig) {
        return SpecificationsApiFp(this.configuration).push(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
