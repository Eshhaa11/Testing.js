const isDivisibleBy2 = require('../src/divisible'); 


test("it returns true if the number is divisible by 2" , () => {
    expect(isDivisibleBy2(8)).toBe(true);
})

test("it returns false if the number is not divisble by 2" , () => {
    expect(isDivisibleBy2(5)).toBe(false);

})