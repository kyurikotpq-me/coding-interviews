const { expect } = require("@jest/globals");
const maxChar = require("./index.js");

test("maxChar function should exist", () => {
  expect(maxChar).toBeDefined();
});

test("The string '115' should give '1'", () => {
  expect(maxChar('115')).toEqual('1');
});

test("The string 'abcddddeeff' should give 'd''", () => {
  expect(maxChar("abcddddeeff")).toEqual("d");
});

test("The string '9' should give '9'", () => {
  expect(maxChar('9')).toEqual('9');
});

test("The string '!!!jk' should give '!'", () => {
  expect(maxChar('!!!jk')).toEqual('!');
});

test("The string '-12-34' should give '-'", () => {
  expect(maxChar('-12-34')).toEqual('-');
});
