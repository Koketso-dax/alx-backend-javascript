// task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: symbol]: any; // array of additional properties
  }

const teacher1: Teacher = {
    firstName: 'Judit',
    lastName: 'Polgár',
    fullTimeEmployee: true,
    location: 'Hungary',
    contract: false
}

console.log(teacher1);

// Task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'Canada',
    numberOfReports: 17,
};

console.log(director1);

// Task 3
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("Judit", "Polgár"));

// Task 4
interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}