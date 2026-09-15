// 1. Creating an Array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original Array:");
console.log(fruits);


// 2. Accessing Array Elements
console.log("\nAccessing Elements:");

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
console.log(fruits[3]); // Orange


// 3. Array Length
console.log("\nArray Length:");
console.log(fruits.length);


// 4. Changing an Element
fruits[1] = "Grapes";

console.log("\nAfter Changing Banana to Grapes:");
console.log(fruits);


// 5. push() - Add element at the end
fruits.push("Watermelon");

console.log("\nAfter push():");
console.log(fruits);


// 6. pop() - Remove element from the end
fruits.pop();

console.log("\nAfter pop():");
console.log(fruits);


// 7. unshift() - Add element at the beginning
fruits.unshift("Strawberry");

console.log("\nAfter unshift():");
console.log(fruits);


// 8. shift() - Remove element from the beginning
fruits.shift();

console.log("\nAfter shift():");
console.log(fruits);


// 9. Loop using for
console.log("\nUsing for loop:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 10. Loop using for...of
console.log("\nUsing for...of loop:");

for (let fruit of fruits) {
    console.log(fruit);
}


// 11. Array of Numbers
let numbers = [10, 20, 30, 40, 50];

console.log("\nNumbers Array:");
console.log(numbers);


// 12. Changing a Number
numbers[2] = 35;

console.log("\nAfter changing 30 to 35:");
console.log(numbers);


// 13. Adding Number
numbers.push(60);

console.log("\nAfter adding 60:");
console.log(numbers);


// 14. Removing First Number
numbers.shift();

console.log("\nAfter removing first element:");
console.log(numbers);


// 15. Final Array
console.log("\nFinal Array:");
console.log(numbers);


// 16. Final Length
console.log("\nFinal Array Length:");
console.log(numbers.length);