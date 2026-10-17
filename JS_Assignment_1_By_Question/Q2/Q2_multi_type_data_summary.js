// Create values with different JavaScript data types.
const userName = "Yash";
const age = 20;
const isStudent = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const address = { city: "Mathura", state: "Uttar Pradesh" };
const middleName = null;
let phoneNumber;

const report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Address", Value: JSON.stringify(address), Type: typeof address },
    { Label: "Middle name", Value: middleName, Type: "null" },
    { Label: "Phone number", Value: phoneNumber, Type: typeof phoneNumber }
];

console.table(report);
