class Student {
  constructor(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }

  organization() {
    return `I am ${this.name} from Coditas`;
  }

  dob() {
    return `The date of birth of ${this.name} is: ${2023 - this.age}`;
  }

  static add(a, b) {
    return a + b;
  }
}

class ProgrammerStudent extends Student {
  constructor(name, age, roll, language, section) {
    super(name, age, roll);
    this.language = language;
    this.section = section;
  }

  info() {
    return `${this.name} is enrolled for ${this.language}`;
  }
}

// const yashwant = new Student("Yashwant", 22, 45);
// console.log(yashwant.dob());
// console.log(Student.add(10, 45));

const arun = new ProgrammerStudent("Arun", 22, 5454, "AI/ML", "A");
console.log(arun.info());
console.log(arun.organization());
console.log(ProgrammerStudent.add(90, 10));
