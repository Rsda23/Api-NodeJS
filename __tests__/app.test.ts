import request from "supertest";
import { app } from "../src/app";
import { test, describe, expect } from "@jest/globals";

describe("Test du point d'entrée!", () => {
  test("Catch all route", async () => {
    const res = await request(app).get("/");
    console.log("res body content", res.body);
    expect(res.body).toEqual("Hello from my REST API");
  });
});
