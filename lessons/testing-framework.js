const { sum, subtract } = require("../math");

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});

//encapsulation of the tests so if they throw an error we know where in the code the error is being thrown
function test(title, callback) {
  try {
    callback();
    console.log(`✔ ${title}`);
  } catch (error) {
    console.log(`X ${title}`);
    console.log(error);
  }
}

//assertions used for the tests
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
