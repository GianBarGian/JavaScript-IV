class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor (attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfet score on ${subject}`;
    }
    testStudent (student) {
        if (Math.random() < 0.5) {
            return student.grade += (Math.random() * 10);
        }
        student.grade -= (Math.random() * 10);
        if (student.grade < 0) {
            student.grade = 0;
        }
        return student.grade
    }
}

class Student extends Person {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
        this.grade = attributes.grade;
    }
    listSubjects () {
        let list = this.favSubject.reduce((acc,current) => acc += ", " + current);
        return list;
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate () {
        if (this.grade >= 70) {
            return `${this.name} has succesfully grtuated at Lambda School!`;
        }
        return `${this.name} need to go back to be tested by Instructors and PMs to increase his grade`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp (slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const giacomo = new Student ({
    name: "Giacomo Benati",
    age: 32,
    location: "Florence, Italy",
    gender: "M",
    previousBackground: "CEO at Slowride",
    className: "FSWEU1",
    favSubject: ["JavaScript","CSS","HTML"],
    grade: 65,
})

const orlando = new ProjectManager ({
    name: "Orlando Castillo",
    age: 30,
    location: "somewhere in the US",
    gender: "M",
    speciality: "JavaScript",
    catchPhrase: "Good, good",
    gradClassName: "FSWsomething",
    favInstructor: "Gabe",
})

const gabe = new Instructor ({
    name: "Gabriel Cabrejas",
    age: 40,
    location: "somewhere in Spain",
    gender: "M",
    speciality: "all of them",
    catchPhrase: "Whoooo!"
})

console.log(giacomo.speak());
console.log(orlando.speak());
console.log(gabe.speak());
console.log(gabe.demo("JavaScript"));
console.log(gabe.grade(giacomo, "JavaScript"));
console.log(gabe.testStudent(giacomo));
console.log(giacomo.listSubjects());
console.log(giacomo.PRAssignment("Javascript"));
console.log(giacomo.sprintChallenge("JavaScript"));
console.log(giacomo.graduate());
console.log(orlando.debugsCode(giacomo, "JavaScript"));
console.log(orlando.standUp("WEBEU1-Orlando"));