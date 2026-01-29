const { expect } = require("chai");
const calculator = require("../app/calculator");

describe("Calculator Tests", () => {

  it("PASS: add(5,2) = 7", () => {
    expect(calculator.add(5, 2)).to.equal(7);
  });

  it("FAIL: add(5,2) = 8", () => {
    expect(calculator.add(5, 2)).to.not.equal(8);
  });

  it("PASS: sub(5,2) = 3", () => {
    expect(calculator.sub(5, 2)).to.equal(3);
  });

  it("FAIL: sub(5,2) = 5", () => {
    expect(calculator.sub(5, 2)).to.not.equal(5);
  });

  it("PASS: mul(5,2) = 10", () => {
    expect(calculator.mul(5, 2)).to.equal(10);
  });

  it("FAIL: mul(5,2) = 12", () => {
    expect(calculator.mul(5, 2)).to.not.equal(12);
  });

  it("PASS: div(10,2) = 5", () => {
    expect(calculator.div(10, 2)).to.equal(5);
  });

  it("FAIL: div(10,2) = 2", () => {
    expect(calculator.div(10, 2)).to.not.equal(2);
  });

});
