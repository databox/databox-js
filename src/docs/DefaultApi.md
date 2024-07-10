# Databox.DefaultApi

All URIs are relative to *https://push.databox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataDelete**](DefaultApi.md#dataDelete) | **DELETE** /data | 
[**dataMetricKeyDelete**](DefaultApi.md#dataMetricKeyDelete) | **DELETE** /data/{metricKey} | 
[**dataPost**](DefaultApi.md#dataPost) | **POST** /data | 
[**metrickeysGet**](DefaultApi.md#metrickeysGet) | **GET** /metrickeys | 
[**metrickeysPost**](DefaultApi.md#metrickeysPost) | **POST** /metrickeys | 
[**pingGet**](DefaultApi.md#pingGet) | **GET** /ping | 



## dataDelete

> dataDelete()



### Example

```javascript
import Databox from 'databox';
let defaultClient = Databox.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Databox.DefaultApi();
apiInstance.dataDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## dataMetricKeyDelete

> dataMetricKeyDelete(metricKey)



### Example

```javascript
import Databox from 'databox';
let defaultClient = Databox.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Databox.DefaultApi();
let metricKey = "metricKey_example"; // String | 
apiInstance.dataMetricKeyDelete(metricKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## dataPost

> dataPost(opts)



### Example

```javascript
import Databox from 'databox';
let defaultClient = Databox.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Databox.DefaultApi();
let opts = {
  'pushData': [new Databox.PushData()] // [PushData] | 
};
apiInstance.dataPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushData** | [**[PushData]**](PushData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, application/vnd.databox.v2+json
- **Accept**: Not defined


## metrickeysGet

> metrickeysGet()



### Example

```javascript
import Databox from 'databox';
let defaultClient = Databox.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Databox.DefaultApi();
apiInstance.metrickeysGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## metrickeysPost

> metrickeysPost(opts)



### Example

```javascript
import Databox from 'databox';
let defaultClient = Databox.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Databox.DefaultApi();
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.metrickeysPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, application/vnd.databox.v2+json
- **Accept**: Not defined


## pingGet

> pingGet()



### Example

```javascript
import Databox from 'databox';
let defaultClient = Databox.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new Databox.DefaultApi();
apiInstance.pingGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

