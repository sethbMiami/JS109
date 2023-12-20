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
console.log(Math.ceil(1705 / 100));

let steve = 'steven';

function capitilize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

steve = capitilize(steve);
console.log(steve); // => 'Steven';

let scottishCities = ['Edinburgh', 'Glasgow', 'Dundee', 'Aberdeen', 'Inverness'];

const myFavCity = scottishCities[3];

let britishCities = scottishCities;

scottishCities = britishCities.push('Manchester', 'London', 'Bristol', 'Cardiff', 'Belfast');

let goodCities = britishCities.slice(2, 4);

britishCities.push(goodCities);

console.log(scottishCities);
console.log(myFavCity);
console.log(goodCities);
console.log(britishCities);

