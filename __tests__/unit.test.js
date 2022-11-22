// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2
test("isPhoneNumber a", () => {
  expect(functions.isPhoneNumber("0")).toBe(false);
});
test("isPhoneNumber 123", () => {
  expect(functions.isPhoneNumber("0000000000")).toBe(false);
});
test("isPhoneNumber 000-000-0000", () => {
  expect(functions.isPhoneNumber("000-000-0000")).toBe(true);
});
test("isPhoneNumber (000)000-0000", () => {
  expect(functions.isPhoneNumber("(000)000-0000")).toBe(true);
});

test("isEmail @@@@", () => {
  expect(functions.isEmail("@@@@")).toBe(false);
});
test("isEmail test", () => {
  expect(functions.isEmail("test")).toBe(false);
});
test("isEmail test@gmail.com", () => {
  expect(functions.isEmail("test@gmail.com")).toBe(true);
});
test("isEmail student@ucsd.edu", () => {
  expect(functions.isEmail("student@ucsd.edu")).toBe(true);
});

test("isStrongPassword 0test", () => {
  expect(functions.isStrongPassword("0test")).toBe(false);
});
test("isStrongPassword no", () => {
  expect(functions.isStrongPassword("no")).toBe(false);
});
test("isStrongPassword strong0011", () => {
  expect(functions.isStrongPassword("strong0011")).toBe(true);
});
test("isStrongPassword stronger_0312", () => {
  expect(functions.isStrongPassword("stronger_0312")).toBe(true);
});

test("isDate 0000", () => {
  expect(functions.isDate("0000")).toBe(false);
});
test("isDate 13/17/300092", () => {
  expect(functions.isDate("13/17/300092")).toBe(false);
});
test("isDate 11/21/2022", () => {
  expect(functions.isDate("11/21/2022")).toBe(true);
});
test("isDate 1/1/2001", () => {
  expect(functions.isDate("1/1/2001")).toBe(true);
});

test("isHexColor 0", () => {
  expect(functions.isHexColor("0")).toBe(false);
});
test("isHexColor aa", () => {
  expect(functions.isHexColor("aa")).toBe(false);
});
test("isHexColor ffffff", () => {
  expect(functions.isHexColor("ffffff")).toBe(true);
});
test("isHexColor #000000", () => {
  expect(functions.isHexColor("#000000")).toBe(true);
});
