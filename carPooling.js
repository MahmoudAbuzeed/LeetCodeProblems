/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let tripArr = Array(1001).fill(0);

  for (const [trip, i, j] of trips) {
    tripArr[i] += trip;
    tripArr[j] -= trip;
  }

  let carLoad = 0;
  for (let i = 0; i < tripArr.length; i++) {
    carLoad += tripArr[i];
    if (carLoad > capacity) {
      return false;
    }
  }
  return true;
};

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    4
  )
);

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    5
  )
);
