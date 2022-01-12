const { expect } = require("@jest/globals");
const search = require("./index.js");

const TEST_ARRAY = [-1, 0, 3, 5, 9, 12];

test("Search function should exist", () => {
  expect(search).toBeDefined();
});

test("Search -1 in [-1] should return index 0", () => {
  expect(search([-1], -1)).toEqual(0);
});

test("Search 2 in [2, 5] should return index 0", () => {
  expect(search([2, 5], 2)).toEqual(0);
});

test("Search 5 in [-1,0,5] should return index 2", () => {
  expect(search([-1, 0, 5], 5)).toEqual(2);
});

test("Search 0 in [-1,0,5] should return index 1", () => {
  expect(search([-1, 0, 5], 0)).toEqual(1);
});

test("Search 9 in [-1, 0, 3, 5, 9, 12] should return index 4", () => {
  expect(search(TEST_ARRAY, 9)).toEqual(4);
});

test("Search 111 in [-1, 0, 3, 5, 9, 12] should return -1 (a.k.a not found)", () => {
  expect(search(TEST_ARRAY, 111)).toEqual(-1);
});

