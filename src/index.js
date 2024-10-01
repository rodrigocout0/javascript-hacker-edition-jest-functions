// Função que soma dois números
function somar(numero1, numero2) {
  return numero1 + numero2;
}
console.log(somar(2, 2));

// Função que subtrai dois números
function subtrair(numero1, numero2) {
  return numero1 - numero2;
}
console.log(subtrair(3,1));

// Função que multiplica dois números
function multiplicar(numero1,numero2) {
  return numero1 * numero2;
}
console.log(multiplicar(3,3));

// Função que divide dois números, com verificação de divisão por zero
function dividir(numero1 , numero2) {
  if (numero2 ===0){
    return "não pode divisão por zero"
  }
  return numero1 / numero2
}
console.log(dividir(10,5));

// Função que verifica se um número é par
function ehPar(numero) {
  if (numero === 0) {
      return "Zero é par";
  } 
  if (numero % 2 === 0) {
      return "É par";
  } 
  return "Erro: O número é ímpar.";
  }
console.log(ehPar(8));

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};

/* Exercicios resolvidos e teste
feito com sucesso */