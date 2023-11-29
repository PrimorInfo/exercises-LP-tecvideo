/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  // Write your code here
  let soma =0;
  // laço de repetição = repete até o fim das opções
  for(let index=0; index < ar.length; index += 1){
    soma = soma + ar[index];
  }
  return soma;
};

simpleArraySum([2, 5, 3]);