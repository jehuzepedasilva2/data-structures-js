function mergeSort(array) {
  // base case, return when there is at most 1 element in the array since subarray si sorted
  if (array.length <= 1) {
    return array
  }
  const middleIndex = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, middleIndex)),
    mergeSort(array.slice(middleIndex))
  );
}

function merge(left, right) {
  let merged = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));