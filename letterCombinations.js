/**
 * @param {string} digits
 * @return {string[]}
 */

// const map = {
//   2: "abc",
//   3: "def",
//   4: "dhi",
//   5: "jkl",
//   6: "mno",
//   7: "pqrs",
//   8: "tuv",
//   9: "wxyz",
// };
// var letterCombinations = function (digits) {
//   const stringArr = findAllStrings(digits);
//   const combinedStrings = combineStrings(stringArr);
//   const separatedCharacters = separateString(combinedStrings);
//   const finalRes = [];
//   for (let i = 0; i < separatedCharacters.length; i++) {
//     for (let j = i + 1; j < separatedCharacters.length; j++) {
//       finalRes.push(`${separatedCharacters[i]}${separatedCharacters[j]}`);
//     }
//   }

//   console.log(finalRes);
// };

// const findAllStrings = (digits) => {
//   const stringArr = [];
//   for (let i = 0; i < digits.length; i++) {
//     stringArr.push(map[digits[i]]);
//   }

//   return stringArr;
// };

// const combineStrings = (stringArr) => {
//   let result = "";
//   for (let i = 0; i < stringArr.length; i++) {
//     for (let j = i + 1; j < stringArr.length; j++) {
//       result = `${stringArr[i]}${stringArr[j]}`;
//     }
//   }
//   return result;
// };

// const separateString = (combinedStrings) => {
//   const result = [];
//   for (let i = 0; i < combinedStrings.length; i++) {
//     result.push(combinedStrings[i]);
//   }
//   return result;
// };

var mapOfNumbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  let lastDigitPossibilities = [""];

  for (let i = 0; i < digits.length; i++) {
    let newPossibilities = [];
    for (let x = 0; x < lastDigitPossibilities.length; x++) {
      for (let letter of mapOfNumbers[digits[i]]) {
        newPossibilities.push(lastDigitPossibilities[x].concat(letter));
        console.log({ x });
      }
    }

    if (i == digits.length - 1) return newPossibilities;
    lastDigitPossibilities = newPossibilities;
  }
};

console.log(letterCombinations("23"));
