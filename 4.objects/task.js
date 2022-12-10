function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    marks = [];
}
new Student("Bogdan", "male", 21);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) {
    if (Student.marks !== undefined){
        Student.marks.push(...marks);
    } else {
        console.log('Студент отчислен');
    }
  
}

Student.prototype.getAverage = function () {
  if (Student.marks === undefined || Student.marks === null){
    return 0;
  } else {
    return (Student.marks.reduce((acc, item) => acc + item.age , 0))/marks.length;
  }
}

Student.prototype.exclude = function (reason) {
    delete Student.subject;
    delete Student.marks;
    this.exclude = reason;

}
