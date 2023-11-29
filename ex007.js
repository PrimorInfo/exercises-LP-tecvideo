/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
  // Write your code here
  let soma = 0;
  for(let index = 0; index < ar.length; index += 1){
    soma = soma + ar[index];
  }
  return soma;
}
console.log(aVeryBigSum([10,20,30,50]));