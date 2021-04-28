const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test("Checks employee's name", () => {
    const employee = new Employee('Employee1');

    expect(employee.getName()).toBe('Employee1');
});

test("Checks employee's id", () => {
    const employee = new Employee('Employee1', '1');

    expect(employee.getId()).toBe('1');
});

test("Checks employee's email", () => {
    const employee = new Employee('Employee1', '1', 'youremail@email.com');

    expect(employee.getEmail()).toBe('youremail@email.com');
});

test("getRole() returns Employee", () => {
    const employee = new Employee('Employee');

    expect(employee.getRole()).toBe('Employee');
});