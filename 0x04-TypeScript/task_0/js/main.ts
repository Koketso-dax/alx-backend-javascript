interface Student{
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const student1:Student = {
    firstName:"John",
    lastName:"Doe",
    age:20,
    location:"Hungary"
}

const student2:Student = {
    firstName:"Jane",
    lastName:"Doe",
    age:21,
    location:"Hungary"
}

const studentsList = [student1, student2];

console.log(studentsList);
