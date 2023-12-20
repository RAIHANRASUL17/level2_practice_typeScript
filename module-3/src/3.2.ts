class Person {
    name: string;
    age: number;
    address: string
    // constructor
    constructor(name:string, age:number, address:string){
        this.name = name,
        this.age = age,
        this.address = address
    }
    // method 
    getSleep(numOfSleep: number){
        console.log(`${this.name} and ${numOfSleep}`)
    }
}

// child-1
class Student extends Person {
 
    // constructor
    constructor(name:string, age:number, address:string){
       super(name, age, address)
    }

};
// constance
const student1 = new Student("Mr.studen", 20, "Bng Khulna")


class Teacher extends Person {
    
    designation: string
    // constructor
    constructor(name:string, age:number, address:string, designation:string){
      super(name, age, address),
        this.designation= designation
    }
    // method 

    getClass(numOfClass: number){
        console.log(`${this.name} and ${numOfClass}`)
    }
};
// constance
const teacher1 = new Teacher("Mr.Teacher", 40, "Bng Khulna", "professor")
teacher1.getClass(2)

