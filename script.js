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
