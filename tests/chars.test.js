
const namechar = require('../src/chars'); 

test("it concatenates Esha and Patel to get Esha Patel", () => {
  expect(namechar("Esha", "Patel")).toBe("Esha Patel");
});
