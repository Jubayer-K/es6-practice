class Student {
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "The tangail residential school"

    }
}

const student1 = new Student(12,"Turag");
const student2 = new Student(22,"Imran");
console.log(student1,student2);
console.log(student1.name);

// inheritance


class Parent {
    constructor(){
        this.fatherName = "Schwarzenegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();  // calling 'Parent' properties
        this.name = name;
    }
    // using function
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child ("Arnold");
const baby2 = new Child ("Tom");
console.log(baby.getFullName());