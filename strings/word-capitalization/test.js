const capitalize = require("./index.js");
const { expect } = require("@jest/globals");

test("capitalize function exists", () => {
  expect(typeof capitalize).toEqual("function");
});

test('Capitalize "a" to obtain "A"', () => {
  expect(capitalize("a")).toEqual("A");
});

test('Capitalize "Ahhhh" to obtain "Ahhhh"', () => {
  expect(capitalize("Ahhhh")).toEqual("Ahhhh");
});

test('Capitalize "ahhhh choo!" to obtain "Ahhhh Choo!"', () => {
  expect(capitalize("ahhhh choo!")).toEqual("Ahhhh Choo!");
});

test('Capitalize "lma0jj" to obtain "Lma0jj"', () => {
  expect(capitalize("lma0jj")).toEqual("Lma0jj");
});

test('Capitalize "The quick fox" to obtain "The Quick Fox"', () => {
  expect(capitalize("The quick fox")).toEqual("The Quick Fox");
});

test('Capitalize "panic! at the disco" to obtain "Panic! At The Disco"', () => {
  expect(capitalize("panic! at the disco")).toEqual("Panic! At The Disco");
});
