function fibonacciIter(n) {
  let results = [0, 1];
  for (let i = 2; i < n; i++) {
    results.push(results[i-2] + results[i-1]);
  }
  return results;
}

function fibonacciRecur(n) {
  let results = [0, 1]
  function helper(n, i=2) {
    if (i >= n) {
      return;
    }
    results.push(results[i-2] + results[i-1]);
    helper(n, i+1);
  }
  helper(n)
  return results;
}

console.log(fibonacciIter(8));
console.log(fibonacciRecur(8));