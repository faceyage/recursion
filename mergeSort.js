function mergeSort(arr) {
  //if array has one element it means already sorted
  if (arr.length === 1) {
    return arr;
  }
  const mid = arr.length / 2;
  //sort left and right array recursively
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));
  //merge sorted left and right arrays
  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  //while one of the lists become empty add smallest element to list
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }

  //one list became empty so add all remaining to result
  const remaining = left.length === 0 ? right : left;
  remaining.forEach((val) => {
    result.push(val);
  });

  return result;
}

const arr = [3, 2, 1];
const sorted = mergeSort(arr);
console.log(sorted, arr);
