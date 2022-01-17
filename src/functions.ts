//import AWS from "aws-sdk";
//import type { AWS } from "@serverless/typescript";

const functions = {
  fake: {
    handler: "src/functions/hello.handler",
    events: [
      {
        http: {
          method: "post",
          path: "hello",
          bodyType: "Passenger",
          parameters: {
            headers: {
              authorization: {
                required: true,
              },
            },
          },
          swaggerTags: ["aa"],
          description: "Hello this is description",
          queryStringParameters: {
            a: {
              required: true,
              type: "integer",
              description: "a parameter description",
              minimum: 0,
            },
          },
          responses: {
            200: {
              description: "status 200",
              bodyType: "Flight",
            },
            400: {
              description: "status 400",
            },
          },
        },
      },
    ],
  },
};

export default functions;
