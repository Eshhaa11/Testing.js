
const addChar= require('../src/chars'); 

test("it concatenates Esha and Patel to get Esha Patel", () => {
  expect(addChar("Esha", "Patel")).toBe("Esha Patel");
});
