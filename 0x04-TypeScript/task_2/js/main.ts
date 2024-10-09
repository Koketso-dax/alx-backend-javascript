interface DirectorInterface{
    workFromHome() : string,
    getCoffeeBreak() : string,
    workDirectorTasks() : string
}

interface TeacherInterface{
    workFromHome() : string,
    getCoffeeBreak() : string,
    workTeacherTasks() : string
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

interface createEmployee{
    (salary: number | string): Director | Teacher;
}

function createEmployee(salary: number | string): Director | Teacher{
    if(typeof salary === "number" && salary < 500){
        return new Teacher();
    }else{
        return new Director();
    }
}

// Task 6.
function isDirector(employee: Director | Teacher): boolean {
    return 'workDirectorTasks' in employee;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    } else {
        return (employee as Teacher).workTeacherTasks();
    }
}

// Task 7.
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        return "Invalid subject";
    }
}
