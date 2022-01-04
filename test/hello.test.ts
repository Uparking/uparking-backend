import { handler } from "../src/functions/hello";
import { describe, expect, test } from "@jest/globals";
import { eventGenerator } from "./testUtils/eventGenerator";

describe("[myFunction]", () => {
  test("should not crash", async () => {
    const event: APIGatewayProxyEvent = eventGenerator({
      body: JSON.stringify({ type: "hello" }),
    });
    const res = await handler(event);

    expect(res).toBeDefined();
    expect(res).toBe("Hello from handler! undefined");
  });
});
