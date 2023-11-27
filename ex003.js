//EXERCÍCIO 3 - PAGE 45
//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento. Calcule e informe o valor para pagamento a vista com 10% e o valor em 3x.
//EXEMPLO: Preço: R$60,00; Á vista: R$54,00;  OU 3x de : R$20,00

let preco_normal = 60;
let preco_vista = 10;
let preco_parc = 0;

preco_vista = (preco_normal - (preco_vista/100)*preco_normal)

console.log(`Preço: R$${preco_normal},00`);
console.log(`À vista: R$${preco_vista},00`);
console.log(`OU 3X de: R$${preco_normal/3},00`);
