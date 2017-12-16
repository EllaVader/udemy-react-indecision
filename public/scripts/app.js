'use strict';

// arguments object - no longer bound with arrow functions

// es5 function
var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// arrow function
var add2 = function add2(a, b) {
  //console.log(arguments); // error, arguments is not defined in arrow functions
  return a + b;
};

// console.log(add2(3, 3));

// const user = {
//   name: 'Janine',
//   cities: ['Downingtown', 'Glenmoore', 'Exton'],
//   printPlacesLived: function () {
//     this.cities.forEach(function(city) {
//       console.log(this.name + ' has lived in ' + city); // error cannot read property this.name
//     });
//   }
// };


// this keyword - no longer bound with arrow functions
//this value will use the parent's this value (the context of which it came from)
// const user = {
//   name: 'Janine',
//   cities: ['Downingtown', 'Glenmoore', 'Exton'],
//   printPlacesLived: function () {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city);
//     })
//   }
// };

// but sometimes it's not good to use it.  For example here:
// const user = {
//   name: 'Janine',
//   cities: ['Downingtown', 'Glenmoore', 'Exton'],
//   printPlacesLived: () => {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city);
//     })
//   }
// };

// new ES6 method syntax for defining functions on objects
var user = {
  name: 'Janine',
  cities: ['Downingtown', 'Glenmoore', 'Exton'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // map lets you transform the array creating a new array that is returned (doesn't change the original array)
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    return cityMessages;
  }
};
console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    //return a new array that returns the values that were multiplied by
    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
