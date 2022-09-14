//iterative fibonacci
function fibsIterative(num) {
  if (num <= 0) console.error("Number can't be lower than 0");
  let a = 0;
  let b = 1;
  const arr = [0];
  for (let i = 1; i < num; i++) {
    let c = a + b;
    a = b;
    b = c;
    arr.push(a);
  }
  return arr;
}

//Recursive Fibonacci
function fibsIterativeRecursive(n) {
  if (n < 3) return [0, 1];
  const fibArr = fibsIterativeRecursive(n - 1);
  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  return fibArr;
}

const result1 = fibsIterative(10);
const result2 = fibsIterativeRecursive(10);
console.log(`Iterative: ${result1}`);
console.log(`Recursive: ${result2}`);
