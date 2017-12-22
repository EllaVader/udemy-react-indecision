console.log('utils.js is running');

// named export - can export this way too
//export const square = (x) => x * x;
//export const add = (a, b) => a + b;

// export - Two types: 1. default export 2. named exports
// default exports there must only be 1
// named exports - the name of the method to export, must match what is defined in import
//export { square, add, subtract as default };
export { square, add };

const subtract = (a,b) => a - b;
const square = (x) => x * x;
const add = (a, b) => a + b;

//or do export default like this:
//export default subtract;

// or do the export like this:
export default (a, b) => a - b;
