// JavaScript Array Example

let marks = [85, 72, 90, 65, 78];

console.log("Student Marks:");
console.log(marks);

// Access elements
console.log("First Mark:", marks[0]);
console.log("Last Mark:", marks[marks.length - 1]);

// Find length
console.log("Total Subjects:", marks.length);

// Change a value
marks[2] = 95;

console.log("After Updating Marks:");
console.log(marks);

// Add a mark at the end
marks.push(88);

console.log("After Adding New Mark:");
console.log(marks);

// Remove the last mark
marks.pop();

console.log("After Removing Last Mark:");
console.log(marks);

// Add at beginning
marks.unshift(80);

console.log("After Adding at Beginning:");
console.log(marks);

// Remove from beginning
marks.shift();

console.log("After Removing First Mark:");
console.log(marks);

// Print all marks using loop
console.log("All Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// Calculate total
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

console.log("Total Marks:", total);

// Calculate average
let average = total / marks.length;

console.log("Average Marks:", average);