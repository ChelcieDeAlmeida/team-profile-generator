const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe("object");
});

test("Checks intern's name", () => {
    const intern = new Intern('Testy');

    expect(intern.name).toBe('Testy');
});

test("Checks intern's id", () => {
    const intern = new Intern('Intern1', '1');

    expect(intern.getId()).toBe('1');
});

test("Checks intern's school", () => {
    const intern = new Intern('Nick','1','youremail@email.com','Northwestern');

    expect(intern.school).toBe('Northwestern');
});

test("getRole() returns Intern", () => {
    const intern = new Intern('Intern');

    expect(intern.getRole()).toBe('Intern');
});