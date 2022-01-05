const { expect } = require("@jest/globals");
const reverse = require("./index.js");

test("Reverse function should exist", () => {
  expect(reverse).toBeDefined();
});

test("Reversing '' should give ''", () => {
  expect(reverse("")).toEqual("");
});

test("Reversing 'k' should give 'k'", () => {
  expect(reverse("k")).toEqual("k");
});

test("Reversing 'lmao' should give '  oaml'", () => {
  expect(reverse("lmao  ")).toEqual("  oaml");
});

test("Reversing '8109' (str) should give '9018' (str)", () => {
  expect(reverse("8109")).toEqual("9018");
});

test("Reversing 'Hehe!' should give '!eheH'", () => {
  expect(reverse("Hehe!")).toEqual("!eheH");
});
