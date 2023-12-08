/* eslint-disable indent */
/* eslint-disable max-len */
//scrap paper

let arrayMutate = [1, 2, 3];
arrayMutate.pop();
console.log(arrayMutate);

let string1 = 'me';

let mutateString = () => {
  string1 = 'you';
};

mutateString();
console.log(string1);

//- **Excercise:**
//Create a function that takes two arguments: starting number and end number and returns an array with numbers 
//starting from `startNumber` and ending on `endNumber`.

const createArray = (startNum, endNum) => {
  let array = [];

  while (startNum <= endNum) {
    array.push(startNum);
    startNum++;
  }

  return array;
};

console.log(createArray(2, 20));

//Create a function that takes a string as an argument and return an object with letters of the string and 
//their occurrence as properties:  eg: 'abbab' `{a:2, b: 3}`

const countOccurencies = (str) => {
  let keyIndex = 0;
  let keyArray = [];
  let valuesArray = [];

  while (keyIndex < str.length) {
    let letter = str[keyIndex];
    let letterRegExp = new RegExp(letter, "g");

    if (keyArray.indexOf(letter) === -1) {
      keyArray.push(letter);
      let count = (str.match(letterRegExp)).length;
      valuesArray.push(count);
    }
    keyIndex++;
  }

  return Object.assign(...keyArray.map((key, value) => ({
    [key]: valuesArray[value] })));
};

let sample = 'aabccabcbaaaaab';
console.log(countOccurencies(sample));
let newSample = countOccurencies(sample);
let outOfOrderSample = 'zzxxaaaaiiiibbazzz';
let outOfOrderSampleObj = countOccurencies(outOfOrderSample);
console.log(outOfOrderSampleObj);

//Create a function that takes the object that your function returned as an argument
//and returns a string in with all the letters that appears in the object, in alphabetical
//order appearing as many times as the value states. Order doesn't matter. For example:

//    {a:1, k:3, g:2} => 'aggkkk'

const objToStr = (obj) => {
  let newString = '';
  let index = 0;
  let objLength = Object.keys(obj).length;

  while (index < objLength) {
    newString += Object.keys(obj)[index].repeat(Object.values(obj)[index]);
    index++;
  }
  return newString.split('').sort().join('');
};

console.log(objToStr(newSample));
console.log(objToStr(outOfOrderSampleObj));
//let newObj = {a: 1, k: 3, g: 2};
//console.log(Object.keys(newObj)[0]); access key

//Create a function that takes a string as an argument and returns a number of words in that string

//     countWords('hello world'); // => 2

const countWords = (string) => {
  return string.split(' ').length;
};

console.log(countWords('hello world! here i am'));

//Create a function that takes a string as an argument and returns an object containing
//all of the words from the string and count occurrences of that word.

//      countWords('Hello, hello wolrd'); // => {'hello' : 2, 'world' : 1};

const countWordsObject = (string) => {
  let wordsObject = {};
  let wordsArray = string.replace(/[^a-zA-Z ]/g, "")
                         .split(" ");

  wordsArray.forEach((item) => {
    wordsObject[item] = (wordsObject[item] || 0) + 1;
  });

  return wordsObject;
};

console.log(countWordsObject('hello, world. hello !@world. world! hello'));

//Create a function that takes two strings as an argument and returns a number representing occurrences
//of the second argument as a sub-string of the first argument, for example:
//        countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' );// => 3


const countSubString = (string1, string2) => {
  let count = 0;
  let array = string1.split(" ");


  array.forEach((word) => {
    count += word.includes(string2) ? 1 : 0;
  });
  return count;
};


console.log(countSubString('Hello, Hello! How are you doing Mellody?', 'ello'));

//JavaScript Problem Solving with PEDAC study session

const sortLowerCaseString = (string) => {
  return string.toLowerCase().split("")
                             .sort()
                             .join("");
};

const anagrams = (string, array) => {
  let newArray = [];

  for (let word of array) {
    if (sortLowerCaseString(string) === sortLowerCaseString(word)) {
      newArray.push(word);
    }
  }
  return newArray;
};

// Test cases
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'Racer']));
// ['carer', 'Racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// []