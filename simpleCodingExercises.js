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