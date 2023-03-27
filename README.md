## konfig-typescript-sdk@1.0.0

This library that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Consuming

navigate to the folder of your consuming project and run the following command.

```
npm install konfig-typescript-sdk@1.0.0 --save
```

### Getting Started

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

## Documentation for API Endpoints

All URIs are relative to *https://api.konfigthis.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LintingApi* | [**lint**](docs/LintingApi.md#lint) | **POST** /lint | Lint your OpenAPI Specification
*SdkApi* | [**generate**](docs/SdkApi.md#generate) | **POST** /generate | Generate SDKs
*SpecificationsApi* | [**push**](docs/SpecificationsApi.md#push) | **POST** /push | Push your OpenAPI Specification to Konfig


