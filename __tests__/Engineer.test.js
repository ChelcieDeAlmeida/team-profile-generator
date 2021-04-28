const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
});

test("Checks engineer's name", () => {
    const engineer = new Engineer('Engineer1');

    expect(engineer.getName()).toBe('Engineer1');
});

test("Checks Engineer's id", () => {
    const engineer = new Engineer('Engineer1', '1');

    expect(engineer.getId()).toBe('1');
});

test("Checks Engineer's github", () => {
    const engineer = new Engineer('joe','1','youremail@email.com','githubGuy');

    expect(engineer.github).toBe('githubGuy');
});

test("getRole() returns Engineer", () => {
    const engineer = new Engineer('Engineer');

    expect(engineer.getRole()).toBe('Engineer');
});