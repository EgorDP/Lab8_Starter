// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const { TestWatcher } = require('@jest/core');
const functions = require('../code-to-unit-test/unit-test-me.js');

// Phone Numbers
test('Checks if phone number is a valid phone number #1', () => {
    expect(functions.isPhoneNumber('(623)878-3123')).toBe(true);
});
test('Checks if phone number is a valid phone number #2', () => {
    expect(functions.isPhoneNumber('(000)420-3790')).toBe(true);
});
test('Checks invalid phone number #1', () => {
    expect(functions.isPhoneNumber('aef')).toBe(true);
});
test('Checks invalid phone number #2', () => {
    expect(functions.isPhoneNumber('33372819129129')).toBe(true);
});

// Valid email check
test('Checks valid email #1', () => {
    expect(functions.isEmail('joseph@gmail.com')).toBe(true);
});
test('Checks valid email #2', () => {
    expect(functions.isEmail('hobber@ucsd.edu')).toBe(true);
});
test('Checks invalid email #1', () => {
    expect(functions.isEmail('hobboaefu')).toBe(true);
});
test('Checks invalid email #2', () => {
    expect(functions.isEmail('johnny rules')).toBe(true);
});

// Strong password check 
test('Checks valid strong password #1', () => {
    expect(functions.isStrongPassword('A1209E')).toBe(true);
});
test('Checks valid strong password #2', () => {
    expect(functions.isStrongPassword('o8273230_')).toBe(true);
});
test('Checks invalid strong password #1', () => {
    expect(functions.isStrongPassword('8a98afe98')).toBe(true);
});
test('Checks invalid strong password #2', () => {
    expect(functions.isStrongPassword('yo')).toBe(true);
});

// Date check
test('Checks valid date #1', () => {
    expect(functions.isDate('01/32/2001')).toBe(true);
});
test('Checks valid date #2', () => {
    expect(functions.isDate('23/32/2332')).toBe(true);
});
test('Checks invalid date #1', () => {
    expect(functions.isDate('urDate')).toBe(true);
});
test('Checks invalid date #2', () => {
    expect(functions.isDate('230912/230/23923')).toBe(true);
});

// Hex color

test('Checks valid hex color #1', () => {
    expect(functions.isHexColor('#AC5B4A')).toBe(true);
});
test('Checks valid hex color #2', () => {
    expect(functions.isHexColor('#F8451F')).toBe(true);
});
test('Checks invalid hex color #1', () => {
    expect(functions.isHexColor('a fine hex color ')).toBe(true);
});
test('Checks invalid hex color #2', () => {
    expect(functions.isHexColor('28si29')).toBe(true);
});