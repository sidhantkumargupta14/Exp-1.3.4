import React from "react";

// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student Class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Student - ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Teacher Class
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    return `Teacher - ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

function App() {
  const persons = [
    new Student("Rahul", 20, "A"),
    new Teacher("Mr. Sharma", 45, "Math"),
    new Student("Priya", 19, "B"),
    new Teacher("Ms. Verma", 38, "Science")
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Person Class Hierarchy</h2>
      {persons.map((p, index) => (
        <div key={index} style={{ margin: "10px", border: "1px solid black", padding: "10px" }}>
          {p.getDetails()}
        </div>
      ))}
    </div>
  );
}

export default App;
