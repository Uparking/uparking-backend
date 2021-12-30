import { handler } from "../src/functions/hello";
import { describe, expect, test } from "@jest/globals";

describe("[myFunction]", () => {
  test("should not crash", async () => {
    const res = await handler({});

     expect(res).toBeDefined();
    expect(res).toBe("Hello from handler! undefined");
  });
});
