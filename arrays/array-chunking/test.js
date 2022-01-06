/**
 * These test cases were taken from
 * https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/chunk/test.js
 */
const { expect } = require("@jest/globals");
const chunk = require("./index");

test("function chunk exists", () => {
  expect(typeof chunk).toEqual("function");
});

test("chunk divides an array of 10 elements with chunk size 2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("chunk divides an array of 3 elements with chunk size 1", () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test("chunk divides an array of 5 elements with chunk size 3", () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
});

test("chunk divides an array of 13 elements with chunk size 5", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
});

// My own test case, since LeetCode likes to test these funky edge cases
test("chunk divides an array of 1 elements with chunk size 1", () => {
  const arr = ["h"];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([["h"]]);
});
