class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [4, 5, 5, 3];

    this.getInfo = function() {
      return `${university}, ${course}, ${fullName}`;
    }

  }

  get getMarks() {
    return this.marks;
  }

  set setMarks(mark) {
    return this.marks.push(mark);
  }

  get getAverageMark() {
    let averageMark = this.marks.reduce((total, amount) => total + amount);
    averageMark = averageMark / this.marks.length;
    return averageMark;
  }
}

const pashaDalbaeb = new Student("Студент 4-го курсу", "НУ 'ЛП'", "Pasha Dovbokryak");
console.log(pashaDalbaeb.getInfo());
console.log(pashaDalbaeb.getMarks);
pashaDalbaeb.setMarks = 5;
console.log(pashaDalbaeb.getMarks);

console.log(pashaDalbaeb.getAverageMark);