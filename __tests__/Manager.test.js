const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");
});

test("Checks manager's name", () => {
    const manager = new Manager('Manager');

    expect(manager.name).toBe('Manager');
});

test("Checks Manager's id", () => {
    const manager = new Manager('Manager1', '1');

    expect(manager.getId()).toBe('1');
});

test("Checks manager's office number", () => {
    const manager = new Manager('jack','1','youremail@email.com','123456890');

    expect(manager.officeNumber).toBe('123456890');
});

test("getRole() returns Manager", () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toBe('Manager');
});