const nameVar = 'Janine';
console.log('nameVar', nameVar);

let nameLet = 'Ben';
nameLet = 'Matt';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  const pet = 'Snickers';
  return pet;
}

// block scoping
var fullName = 'Janine Roe';
if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
