## databox@2.1.1

This package is designed to consume the Databox Push API functionality via TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The package is compatible with the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - You must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

The package can be used with both TypeScript and JavaScript. In TypeScript, the definitions will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)).

### Installing

```
npm install databox --save
```

### Prerequisites
In use the Databox Push API functionality, please refer to [Databox Developers Page](https://developers.databox.com/), specifically the **Quick Guide** section, where you will learn how to create a **Databox Push API token** which is required for pushing your data.

### Example
The basic example of pushing data to Databox is provided below:
```TypeScript
import {
  ApiResponse,
  Configuration,
  DataPostRequest,
  DefaultApi,
} from "databox";

const config: Configuration = new Configuration({
  basePath: "https://push.databox.com",
  username: "<Your_Databox_API_Token>",
  headers: {
    Accept: "application/vnd.databox.v2+json",
  },
});

const dataPostRequest: DataPostRequest = {
  pushData: [
    {
      key: "<Metric_name>",
      value: 123,
      date: "<Date_in_ISO8601>",
      unit: "<Unit>", // Optional
      attributes: [{ key: "<Dimension_name>", value: "<Dimension_value>" }], // Optional
    },
  ],
};

const api = new DefaultApi(config);

try {
  api
    .dataPostRaw(dataPostRequest)
    .then((response: ApiResponse<void>) => response.raw.json())
    .then((responseBody) => {
      console.log("Response data", responseBody);
    });
} catch (error) {
  console.log("Error: ", error);
}
```
