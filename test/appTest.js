const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

// result

sayHelloResult = app.sayHello()   ;
addNumbersResult = app.addNumbers(1, 1);

describe("App", () => {
  describe('sayHello()', () => {
    it("app should return hello", () => {
      // const result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', () => {
      // const result = app.sayHello();
      assert.typeOf(sayHelloResult, "string");
    });
  });

  describe("addNumbers()", () => {
    it("addNumbers should be above 5", () => {
      // const result = app.addNumbers(5, 5);
      assert.isAbove(addNumbersResult, 5);
    });

    it("addNumbers should return type number", () => {
      // const result = app.addNumbers(5, 5);
      assert.typeOf(addNumbersResult, "number");
    });
  });
});
