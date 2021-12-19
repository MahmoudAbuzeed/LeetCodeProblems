/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  const arr = Array.from(address);
  let newArr = [];

  for (let i = 0; i < arr.length; i++)
    arr[i] === "." ? newArr.push("[.]") : newArr.push(arr[i]);

  return `${newArr.join("")}`;
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
