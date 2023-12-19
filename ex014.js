// calculando peso ideal IMC = peso * alt ao quadrado

let altura = 1.80;
let sexo = 'Masc';
let pesoIdeal = 0;

if(sexo === 'Masc') {
    pesoIdeal = 22 * Math.pow(altura, 2);
}else {
    pesoIdeal = 21 * Math.pow(altura, 3);
}

console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(3)}Kg`); // to Fixed para aumentar/diminuir casas decimais
