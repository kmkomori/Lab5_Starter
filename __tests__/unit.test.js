// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber

test('phone number with just digits and hyphens', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('phone number with digits, parentheses, and hyphens', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('phone number with only digits', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('phone number with no digits', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail

test('valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('email with underscore', () => {
  expect(isEmail('user_123@domain.co')).toBe(true);
});

test('email with no suffix', () => {
  expect(isEmail('test@example')).toBe(false);
});

test('email with short domain suffix', () => {
  expect(isEmail('user@domain.c')).toBe(false);
});

// isStrongPassword

test('letters and numbers', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('uppercase and underscore', () => {
  expect(isStrongPassword('Z_9abc')).toBe(true);
});

test('only numbers', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('special characters', () => {
  expect(isStrongPassword('a!23')).toBe(false);
});

// isDate

test('valid date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('extreme date to test limits', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('incorrect ordering of YMD', () => {
  expect(isDate('2020/1/1')).toBe(false);
});

test('hyphens instead of slashes', () => {
  expect(isDate('01-01-2020')).toBe(false);
});

// isHexColor

test('hex code with just letters', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('hex code with letters and numbers', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});

test('hex code missing hashtag', () => {
  expect(isHexColor('123ABZ')).toBe(false);
});

test('short number only hex code', () => {
  expect(isHexColor('#1234')).toBe(false);
});