console.log('utils.js is running');

// can export this way too
export const square = (x) => x * x;
export const add = (a, b) => a + b;

// export - Two types: 1. default export 2. named exports

// named exports example - the name of the method to export, must match what is defined in import
//export { square, add };