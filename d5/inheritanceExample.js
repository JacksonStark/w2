// PERSON SUPERCLASS
class Person {
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`;
  }

}



// STUDENT SUBCLASS
class Student extends Person {
  
  enroll(cohort) {
    this.cohort = cohort;
  }

  contact(){
    return `Hello my name is ${this.name}, and you can reach me at ${this.email}!!`
  }

  // SUPER IMPLEMENTATION
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }

}



// MENTOR SUBCLASS
class Mentor extends Person {

  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }

  // SUPER IMPLEMENTATION
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }

}

const Stark = new Student('Jackson', 'Daredevil', 'jacksonstark77@hotmail.com');

console.log(Stark.bio());

