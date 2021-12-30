import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent) => {
  return `Hello from handler! ${event.httpMethod}`;
};
