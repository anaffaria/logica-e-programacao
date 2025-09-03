const { somarDoisNumeros } = require("../src/calculadora");
const { expect } = require("chai");

describe("Testes da função de soma", function () {
  it("A função deve ser capaz de somar dois numeros positivos", function () {
    const resultadoDaSoma = somarDoisNumeros(5, 3);

    expect(resultadoDaSoma).to.equal(8);
  });

  it("A função deve ser capaz de somar um numero positivo e um negativo ", function () {
    const resultadoDaSoma = somarDoisNumeros(50, -15);

    expect(resultadoDaSoma).to.equal(35);
  });
});
