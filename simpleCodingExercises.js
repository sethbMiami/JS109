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


console.log(countSubString('Hello, Hello! How are you doing Mellody mellow?', 'ello'));

//JavaScript Problem Solving with PEDAC study session

const sortLowerCaseString = (string) => {
  return string.toLowerCase().split("")
                             .sort()
                             .join("");
};

const anagrams = (string, array) => {
  let anagramsArray = [];

  array.forEach((word) => {
    if (sortLowerCaseString(string) === sortLowerCaseString(word)) {
      anagramsArray.push(word);
    }
  });
  return anagramsArray;
};

// Test cases
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'Racer']));
// ['carer', 'Racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// []

let a = 5;
let b = a;
b = 6;
console.log(a, b);

let arr = [1, 2];
let brr = arr;
brr.push(5, 6);
console.log(arr, brr);
/*
P
Create a function that takes a string as an argument and returns a number representing number of
words that occurred more than once in that string:

E
n/a

D
Input string
output number
array

A
main function
Takes 1 paremter (string)
split array into string of words
loop thru array and create object with word as key and number of occurences as value
assign the object values to valuesArray
assign count to the array filtered down to values greater than 1
return the length of that array
*/

const countDuplic = (string) => {
  let wordsArray = string.split(" ");
  let wordsObject = {};

  wordsArray.forEach((item) => {
    wordsObject[item] = (wordsObject[item] || 0) + 1;
  });

  let valuesArray = Object.values(wordsObject);
  let count = valuesArray.filter((item) => item > 1);

  return count.length;
};

console.log(countDuplic('one two one three two')); //=> 2
console.log(countDuplic('flower cat cat dog flower dog cow horse cow dog cat cow fish')); //=> 3


function replace(str, value) {
  while (true) {
    break;
  }

  str = value;
}

let greet = "Hey!";
replace(greet, "Hello");
console.log(greet);

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newMunstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();

console.log(newMunstersDescription);

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);
console.log(ages);

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Dupe", "loop");
console.log(flintstones);

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
let newAdvice = advice.slice(0, advice.indexOf('house'));
console.log(newAdvice);

let advice2 = "Few things in life are as important as house training your pet dinosaur.";
let advice3 = advice2.replace('important', 'urgent');
console.log(advice3);


let numbers = [1, 2, 3, 4, 5];
numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedNumbers);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let famousWords = "seven years ago...";
let beginningFamousWords = "Four score and ";

console.log(beginningFamousWords + famousWords);

let removeIndex2 = [1, 2, 3, 4, 5];
removeIndex2.splice(2, 1);
console.log(removeIndex2);

let nestedArray = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log(nestedArray.flat());
const flattened = nestedArray.reduce((acc, cur) => acc.concat(cur), []);
console.log([].concat(...nestedArray));
console.log(flattened);

let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barneyArray = [];
barneyArray.push(Object.keys(flintstones2)[2], flintstones2.Barney);

//let test5 = Object.entries(flintstones2).filter(pair => pair[0] === "Barney").shift();
let test5 = Object.entries(flintstones2).filter(pair => pair.includes("Barney")).shift();

console.log(barneyArray);
console.log(test5);

let numbers2 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers2));
console.log(Array.isArray(table));

let title = "Flintstone Family Members";
let titleCenter = (40 - title.length) / 2;
console.log(title.padStart(titleCenter + title.length));

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let lowerT = statement1.match(/t/g).length;
let lowerT2 = statement2.split('').filter((letter) => letter === 't').length;

console.log(lowerT);
console.log(lowerT2);


let stringTest = "Replace every word that is important with urgent";

let stringTestArray = stringTest.split(" ");

stringTestArray.forEach((item) => {
  if (item === 'important') {
    stringTestArray[item] = 'urgent';
  }
});

let newString = stringTestArray.join();

console.log(newString);

function findCommonKeysInSpecificRange(obj1, obj2, minRange, maxRange) {
  // Initialize an empty array to store common keys
  let commonKeys = [];

  // Iterate through the keys of obj1
  for (let key in obj1) {
    // Check if the key is within the specified range
    if (Number(key) >= minRange && Number(key) <= maxRange) {
      // Check if the key is present in obj2 and both values are greater than 1
      if (obj2.hasOwnProperty(key) && obj1[key] > 1 && obj2[key] > 1) {
        commonKeys.push(key);
      }
    }
  }

  return commonKeys;
}

let obj1 = { 1: 1, 2: 2, 3: 1 };
let obj2 = { 1: 2, 2: 3, 3: 2 };

let minRange = 1;
let maxRange = 2;

let commonKeys = findCommonKeysInSpecificRange(obj1, obj2, minRange, maxRange);

console.log(commonKeys);
// Output: [2]


let stringRepeat = "The Flintstones Rock!";

for (let index = 0; index < 10; index++) {
  console.log(" ".repeat(index) + stringRepeat);
}
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...


//swap casings
let munstersDescription2 = "The Munsters are creepy and spooky.";

let swapCase = (string) => {
  let reverseCaseString = "";
  string.split("").forEach((char) => {
    if (char === char.toLowerCase()) {
      reverseCaseString += char.toUpperCase();
    } else {
      reverseCaseString += char.toLowerCase();
    }
  });

  return reverseCaseString;
};

console.log(swapCase(munstersDescription2));

function factors(number) {
  let factors = [];

  if (number % 2 === 0 && number > 0) {
    for (let index = number; index >= 1; index /= 2) {
      factors.push(index);
    }
  } else {
    console.log("enter valid num");
  }

  return factors;
}
console.log(factors(-4));
console.log(3 + 4);
console.log(3 + '4');

function returnNumber(anything) {
  return 6;
}

console.log(returnNumber('hi'));
console.log(returnNumber(false));
console.log(returnNumber([1, 3, 5]));
console.log(returnNumber({a: 2, b: 3}));

let smallArray = [];
smallArray.length = 5;
console.log(smallArray);
smallArray[2] = 8;
console.log(smallArray);


//Create a function that takes an array as an argument and returns the same array with
//all elements sorted in alphabetical order. For example:

const sorting = (array) => {
  return array.sort();
};

let sort1 = ['a', 'd', 'a', 'b']; //=> ['a', 'a', 'b', 'd'];
let sort2 = ['banana', 'apple', 'pear']; //=> ['apple', 'banana', 'pear']
console.log(sorting(sort1));
console.log(sorting(sort2));

//Create a function that takes an array as an argument and returns the same array
//with all elements sorted in descending order. For example:

const sortDescending = (array) => {
  return array.sort((a, b) => b - a);
};

let testSort = [3,5,1,2,11,456]; //=> [456,11,5,3,2,1];
console.log(sortDescending(testSort));


//rewrite this to use one bool and only 1 return statement

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorCool(color) {
  return color === 'blue' || color === 'green';
}

console.log(isColorValid('blue'));
console.log(isColorCool('blue'));
console.log(isColorValid('red'));
console.log(isColorCool('red'));

//Create a function that takes an array of strings as an argument and returns the
//same array with all elements sorted according to length of the string in ascending order. For example:

const sortingStringArray = (array) => {
  return array.sort((a, b) => a.length - b.length);
};

let testSortArray = (['o', 'hello', 'llo', 'ello','lo' ]); // => ['o', 'lo', 'llo', 'ello', 'hello']

console.log(sortingStringArray(testSortArray));

const sortStringDescending = (array) => {
  return array.sort((a, b) => b.length - a.length);
};

console.log(sortStringDescending(testSortArray));

//objects

//Create a function that takes an array of objects as argument and return the same
//array with all the elements sorted according to it's value in ascending order. For example:

let arrayOfObjects = [{a: 1}, {a: 0}, {a : 3}]; //=> [{a:0}, {a:1}, {a:3}];

const sortObjectValues = (array) => {
  return array.sort((a, b) => a['a'] - b['a']);
};

console.log(sortObjectValues(arrayOfObjects));

const sortObjectValueDescending = (array) => {
  return array.sort((a, b) => b['a'] - a['a']);
};

console.log(sortObjectValueDescending(arrayOfObjects));

let nestedArrays = [[1,2,3], [0,1], [2,1]]; //=> [[0,1], [2,1], [1,2,3]]

const sortNestedArray = (array) => {
  return array.sort((a, b) => a.reduce((acc, curVal) => acc + curVal) - b.reduce((acc, curVal) => acc + curVal));
};

console.log(sortNestedArray(nestedArrays));

const emphasize = str => str + "!!!";

let word = emphasize("hello");

console.log(word);

let dude = [1, 2, 3];
let meen = [4, 5];

console.log([1, 2, 3] + [4, 5]);
console.log('2' - '2');
console.log('2' / '2');
console.log({a: 1, b: 2} + {c: 3});
console.log('2' + 2);
