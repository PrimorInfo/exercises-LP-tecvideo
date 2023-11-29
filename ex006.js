/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for(let index = 0; index < a.length; index +=1) {
    if(a[index] > b[index]){
      alice += 1;
    }else if(a[index]<b[index]) {
      bob += 1;
    };
  };
  return [alice, bob];
};