// EXERCÍCIO 2 - PAGE 41 DO LIVRO
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago. EXEMPLO: Valor do jantar: R$80,00; Taxa do garçom: R$8,00; Total a pagar: R$88,00;

let dinner = 80;
let tip = 10;
let total = 0;

total = 80 + ((tip / 100) * 80);
//console.log((tip/100)*80);
//console.log('Valor do jantar: R$' + dinner + ',00');

console.log(`Valor do jantar: R$${dinner},00`);
console.log(`Taxa do garçom: R$${(tip / 100) * 80},00`);
console.log(`Total a pagar: R$${total},00`)


