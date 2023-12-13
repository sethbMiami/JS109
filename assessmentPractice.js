let numbers = [1, 2, 3, 4];
//numbers = [];
numbers.length = 0;
console.log(numbers);

console.log([1, 2, 3] + [4, 5]);

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
//let arr2 = arr1.slice();
let arr2 = arr1;
arr2[0].first = 42;
console.log(arr1);

function isColorValid(color) {
  return color === "blue" || color === "green";
}

let isColorValid2 = color => color === 'blue' || color === 'green';

console.log(isColorValid('red'));
console.log(isColorValid2('red'));
console.log('');
let sampleArray = [1, 2, 3, 4, 5];

sampleArray.forEach((item) => console.log(item > 3));

//shift method

let newTestArray = ['word', 'longerWord', 'me', 'mississippi', 'emily', 'refridgerator'];
let longWord = newTestArray.shift();
newTestArray.forEach((word) => {
  if (word.length > longWord.length) {
    longWord = word;
  }
});
console.log(longWord);

const array2 = [1, 2, 3];
array2[0] = 4;
array2[1] = 5;
array2[2] = 6;
console.log(array2);

let myObject = {
  name: 'seth',
  age: 34,

  sayHello() {
    return 'hi';
  },

  sayGoodbye() {
    return 'bye';
  }
};

console.log(`${myObject.name} says ${myObject.sayHello()}`);
console.log(myObject.sayGoodbye());
console.log(myObject);