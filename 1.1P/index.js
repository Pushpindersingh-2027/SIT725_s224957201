console.log("Welcome to SIT725 Applied Software Engineering");

let studentName = "Pushpinder Singh";
let studentID = "S224957201";
let targetGrade = "Credit";

console.log("Student Name:", studentName);
console.log("Student ID:", studentID);
console.log("Target Grade:", targetGrade);

function introduceStudent(name, course) {
    return `${name} is studying ${course}.`;
}

console.log(
    introduceStudent(
        studentName,
        "Master of Information Technology"
    )
);