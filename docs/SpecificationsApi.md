# SpecificationsApi

All URIs are relative to *https://api.konfigthis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**push**](SpecificationsApi.md#push) | **POST** /push | Push your OpenAPI Specification to Konfig


# **push**

#### **POST** /push

### Description
Push your OpenAPI Specification to Konfig to trigger SDK generation for a specified repository

### Example


```typescript
import { Konfig } from "konfig-typescript-sdk"

const konfig = new Konfig({
    // Defining the base path is optional and defaults to https://api.konfigthis.com
    // basePath: "https://api.konfigthis.com",
})

const pushResponse = await konfig.specifications.push({
        "spec": null,
        "git_hub": {
            "owner": null,
            "repo": null,
        },
    })

console.log(pushResponse)

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushRequestBody** | **PushRequestBody**|  |


### Return type

**PushResponseBody**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


