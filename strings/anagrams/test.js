const anagrams = require("./index.js");
const { expect } = require("@jest/globals");

test("anagrams function exists", () => {
  expect(typeof anagrams).toEqual("function");
});

test('"lmao" is an anagram of "amol"', () => {
  expect(anagrams("lmao", "amol")).toBeTruthy();
});

test('"hello, world!" is an anagram of "Hello, World!"', () => {
  expect(anagrams("hello, world!", "Hello, World!")).toBeTruthy();
});

test('"Zao an! Good morning!" is an anagram of "Good morning! Zao An!"', () => {
  expect(
    anagrams("Zao an! Good morning!", "Good morning! Zao An!")
  ).toBeTruthy();
});

test('"Five Five" is not an anagram of "Five Five Five"', () => {
  expect(anagrams("Five Five", "Five Five Five")).toBeFalsy();
});

test('"Three Three" is not an anagram of "Three Three k"', () => {
  expect(anagrams("Three Three", "Three Three k")).toBeFalsy();
});
