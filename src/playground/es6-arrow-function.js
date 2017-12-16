function square(x) {
  return x * x;
}

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = x => x * x;

console.log(squareArrow(5));

const getFirstName = (name) => {
  return name.split(' ')[0];
};

console.log(getFirstName('Janine Roe'));

const getFirstName2 = name => name.split(' ')[0];

console.log(getFirstName2('Mike Roe'));
