const sum = require('./sum.js');

describe('Testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando não é um número', () => {
    expect(sum(4, '5')).toThrowError('parameters must be numbers');
  });
});