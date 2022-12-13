function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
new Student("Bogdan", "male", 21);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks !== undefined ){
        this.marks.push(...marks);
    } 
  
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks === null){
    return 0;
  } 
    return this.marks.reduce((acc, item, index, arr) =>  {
      if (index === arr.length - 1){
        return (acc + item) / arr.length;
      }
      return acc + item
    }, 0)
  
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;

}
