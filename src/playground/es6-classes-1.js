class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;  
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} old.`;
  }

}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); //call the parent constructor function
    this.major = major;
  }

  hasMajor() {
    return !!this.major
  }

  //override the parent's method
  getDescription() {
    let description = super.getDescription();  //call the parent's getDescription

    if (this.hasMajor()){
      description += ` Their is major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    if(this.homeLocation){
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting;
  }
}

const me = new Traveler('Janine Roe', 49, 'Glenmoore');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
