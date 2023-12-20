"use strict";
class Person {
    // constructor
    constructor(name, age, address) {
        this.name = name,
            this.age = age,
            this.address = address;
    }
    // method 
    getSleep(numOfSleep) {
        console.log(`${this.name} and ${numOfSleep}`);
    }
}
// child-1
class Student extends Person {
    // constructor
    constructor(name, age, address) {
        super(name, age, address);
    }
}
;
// constance
const student1 = new Student("Mr.studen", 20, "Bng Khulna");
class Teacher extends Person {
    // constructor
    constructor(name, age, address, designation) {
        super(name, age, address),
            this.designation = designation;
    }
    // method 
    getClass(numOfClass) {
        console.log(`${this.name} and ${numOfClass}`);
    }
}
;
// constance
const teacher1 = new Teacher("Mr.Teacher", 40, "Bng Khulna", "professor");
teacher1.getClass(2);
