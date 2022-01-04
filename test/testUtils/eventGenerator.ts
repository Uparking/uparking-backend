import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventHeaders,
  APIGatewayProxyEventPathParameters,
  APIGatewayProxyEventQueryStringParameters,
  APIGatewayProxyEventStageVariables,
  APIGatewayEventRequestContextWithAuthorizer,
  APIGatewayEventDefaultAuthorizerContext,
} from "aws-lambda";

export default function eventGenerator({
  body,
  method,
  path,
  queryStringObject,
  pathParametersObject,
  stageVariables,
  headers,
  requestContext,
}: {
  body?: object | null;
  method?: string;
  path?: string;
  queryStringObject?: APIGatewayProxyEventQueryStringParameters;
  pathParametersObject?: APIGatewayProxyEventPathParameters;
  stageVariables?: APIGatewayProxyEventStageVariables;
  headers?: APIGatewayProxyEventHeaders;
  requestContext?: APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventDefaultAuthorizerContext>;
}): APIGatewayProxyEvent {
  const request: APIGatewayProxyEvent = {
    body: body ? JSON.stringify(body) : null,
    headers: headers ? headers : null,
    multiValueHeaders: {},
    httpMethod: method,
    isBase64Encoded: false,
    path,
    pathParameters: pathParametersObject || null,
    queryStringParameters: queryStringObject || null,
    multiValueQueryStringParameters: null,
    stageVariables,
    requestContext: requestContext || {
      accountId: "",
      apiId: "",
      httpMethod: method,
      identity: {
        accessKey: "",
        accountId: "",
        apiKey: "",
        apiKeyId: "",
        caller: "",
        clientCert: null,
        cognitoAuthenticationProvider: "",
        cognitoAuthenticationType: "",
        cognitoIdentityId: "",
        cognitoIdentityPoolId: "",
        principalOrgId: "",
        sourceIp: "",
        user: "",
        userAgent: "",
        userArn: "",
      },
      path,
      stage: "",
      requestId: "",
      requestTimeEpoch: 3,
      resourceId: "",
      resourcePath: "",
    },
    resource: "",
  };
  return request;
}
