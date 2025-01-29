const reverseword = require('../src/reverse');


test("It reverses the characters in the string", () => {
    expect(reverseword("JavaScript")).toBe("tpircSavaJ");
})