//import et config la fonction à tester
const sum = require("./index");

// etapes supp
//exemple acces db
// mock de la db

//ecrotire des tests
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
