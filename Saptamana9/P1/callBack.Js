//1

function customMap(array, callback) {
  var arr = [];
  for (var index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (value) => {
  return value + 1;
}

const double = (value) => {
  return value * 2;
}

const square = (value) => {
  return value * value;
}
console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2

// // This function will go over every element in an array one by one, calling the
// // callback with each item, adding the element to a new array only if
// // the callback returns true, and finally returning the new array.

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var filter = function (array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    var arrIndex = array[i];
    if (callback(arrIndex)) {
      filteredArray.push(arrIndex);
    }
  }
  return filteredArray;
};

const filterOdd = (value) => {
  return value % 2 === 1;
}

const divide3 = (value) => {
  return value % 3 === 0;
}

const fourAndMore = (value) => {
  return value >= 4;
}

const sqrt = (value) => {
  result = Math.sqrt(value);
  return result % 1 === 0;
}

const threeIn = (value) => {
  return value % 3 === 1;
}
console.log(filter(randomArray, filterOdd))
console.log(filter(randomArray, divide3))
console.log(filter(randomArray, fourAndMore))
console.log(filter(randomArray, sqrt))
console.log(filter(randomArray, threeIn))

// //Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

// 3 
/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

let objOne = {
  status1: 'Succes',
  status2: 'Error'
}

const happy = () => {
  console.log("I'm Happy!");
}

const notHappy = () => {
  console.log("I'm Not Happy");
}

const multipleCallbacks = (obj, fnP1, fnP2) => {
  if (Object.values(obj)[0] === 'Succes') {
    fnP1();
  }
  if (Object.values(obj)[1] === 'Error') {
    fnP2();
  }
}
multipleCallbacks(objOne, happy, notHappy)

// // acum se printeaza in consola '1' '2' '3' '4' '5' .
// // Vrem sa fie ordinea '3' '5' '2' '1' '4'
// //hint setTimeout

const func1 = () => {
  setTimeout(() => { console.log('1') }, 3);

}

const func2 = () => {
  setTimeout(() => { console.log('2') }, 2);
}

const func3 = () => {
  console.log('3');
}

const func4 = () => {
  setTimeout(function () { console.log('4') }, 4);
}

const func5 = () => {
  setTimeout(() => { console.log('5') }, 1);
}

setTimeout(() => { })
func1();
func2();
func3();
func4();
func5();