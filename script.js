class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [4, 5, 5, 3];
    this.dismiss = false;
  }

  get getInfo() {
    return `${this.university}, ${this.course}, ${this.fullName}`;
  }

  get getMarks() {
    if (this.dismiss) return null
    return this.marks;
  }

  set setMarks(mark) {
    if (this.dismiss) return null
    return this.marks.push(mark);
  }

  get getAverageMark() {
    let averageMark = this.marks.reduce((total, amount) => total + amount);
    return averageMark / this.marks.length;
  }

  setDismiss() {
    this.dismiss = true;
  }

  recover() {
    this.dismiss = false;
  }
}

const pasha = new Student("Student of 4 course in", "NU 'LP'", "Pasha Ostapenko");

console.log("Student info: ", pasha.getInfo);
pasha.setMarks = 5;
console.log("Student marks: ", pasha.getMarks);
console.log("Average mark: ", pasha.getAverageMark);

pasha.setDismiss();
console.log("Student marks: ", pasha.getMarks);

pasha.recover();
console.log("Student marks: ", pasha.getMarks);

//advanced
class BudgetStudent extends Student {
  constructor(university, course, fullName, scholarship) {
    super(university, course, fullName);
    this.scholarship = scholarship;
    this.interval = setInterval(this.getScolarShip.bind(this), 5000);
  }

  getScolarShip() {

    if (!this.dismiss && this.getAverageMark >= 4)
    return console.log("Your scolarship: ", this.scholarship, " UAH!");
  }
}

const maksimilian = new BudgetStudent("Student of 4 course in", "NU 'LP'", "Maksimilian Naievski", 5000);
console.log("Maksimilian information: ", maksimilian);