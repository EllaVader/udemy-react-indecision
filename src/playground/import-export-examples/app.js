//import './utils.js';

import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 25));

console.log(isAdult(5));
console.log(canDrink(21));
console.log(isSenior(65));