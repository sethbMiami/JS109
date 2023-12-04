/* eslint-disable max-len */
/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" };
Object.freeze(obj);

/**
 * BONUS:
 * A single function should satisfy the strings defined 'obj' and the bonus objects below
 * The function should only take a single argument of type object
 * The function should be able to accomidate any word between the single quotes
 */
const bonusObj1 = { text: "Remove occurances of the letter e after 'the' in this sentence" };
const bonusObj2 = { text: "The letter e should not appear after the word 'not' in this sentence" };
Object.freeze(bonusObj1);
Object.freeze(bonusObj2);


/** for loop - function name: forSolution */
let forSolution = (str) => {

  let newString = "";

  for (let index = 0; index < str.length; index++) {

    let letterIndex = str.indexOf('letter') + 5;

    if (str[index] === 'e' && index > letterIndex) {
      continue;
    } else {
      newString += str[index];
    }
  }

  return newString;
};

//console.log(forSolution(obj.text));


/** while loop - function name: whileSolution */
let whileSolution = (str) => {
  let count = 0;
  let newString = "";
  let letterIndex = str.indexOf('letter') + 5;

  while (count < str.length) {

    if (str[count] === 'e' && count > letterIndex) {
      count++;
      continue;
    } else {
      newString += str[count];
    }
    count++;
  }

  return newString;
};

//console.log(whileSolution(obj.text));

/** do while loop - function name: doWhileSolution */
let doWhileSolution = (str) => {

  let newString = "";
  let letterIndex = str.indexOf('letter') + 5;
  let tracker = 0;

  do {
    if (str[tracker] === 'e' && tracker > letterIndex) {
      newString[tracker] = "";
    } else {
      newString += str[tracker];
    }

    tracker++;
  } while (tracker < str.length);

  return newString;
};
//console.log(doWhileSolution(obj.text));

/** forEach iteration method  - function name: forEachSolution */

let forEachSolution = (str) => {
  let newString = "";
  let letterIndex = str.indexOf('letter') + 5;
  let index = 0;

  str.split("").forEach((letter) => {
    if (letter === 'e' && index > letterIndex) {
      newString += "";
    } else {
      newString += letter;
    }
    index++;
  });

  return newString;
};

console.log(forEachSolution(obj.text));
/** filter iteration method  - function name: 'filterSolution' */


// map iteration method


// reduce iteration method