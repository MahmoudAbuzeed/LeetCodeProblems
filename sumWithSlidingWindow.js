const maxSum = (list, k) => {
  if (k > list.length) return;
  let maxSum = -Infinity;

  for (let i = 0; i < list.length - k + 1; i++) {
    let currentSum = 0;

    for (let j = 0; j < k; j++) {
      currentSum += list[i + j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(maxSum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));



const maxSumWithSlidingWindow = (list, k) => {
    if (k > list.length) return;
    let maxSum = 0;
    let windowSum = 0;
  
      for (let i = 0; i < k; i++) {
        maxSum += list[i];
      }

      windowSum  = maxSum;

      for (let j = k; j < list.length; j++) {
        windowSum = windowSum - list[ j - k] + list[j]
        maxSum= Math.max(windowSum, maxSum)
      }

    return maxSum;
  };


  console.log(maxSumWithSlidingWindow([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
