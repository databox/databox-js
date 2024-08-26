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
      unit: "<Unit>",
      attributes: [{ key: "<Dimension_name>", value: "<Dimension_value>" }],
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
