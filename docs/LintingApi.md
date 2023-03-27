# LintingApi

All URIs are relative to *https://api.konfigthis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lint**](LintingApi.md#lint) | **POST** /lint | Lint your OpenAPI Specification


# **lint**

#### **POST** /lint

### Description
Lint your OpenAPI Specification to ensure generation of high quality SDKs with Konfig

### Example


```typescript
import { Konfig } from "konfig-typescript-sdk"

const konfig = new Konfig({
    // Defining the base path is optional and defaults to https://api.konfigthis.com
    // basePath: "https://api.konfigthis.com",
})

const lintResponse = await konfig.linting.lint({
        "spec": null,
    })

console.log(lintResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lintRequestBody** | **LintRequestBody**|  |


### Return type

**LintResponseBody**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Diagnosis information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


