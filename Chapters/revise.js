//Ternary (Conditional) Operator
let age = 31;
let will_be_happy = age>30? "Yes" : "No";
console.log(will_be_happy);

console.log("------------");

// Type of Operator

console.log(typeof "sfas");
console.log(typeof 123);
console.log(typeof false);

// Splice in array

let arr = [1,2,3,4,5];
arr.splice(2,2,8,9); //go to index 2, remove 2 elements and add 8 and 9
console.log(arr);
let arr2 = [1,2,3,4,5]; 
arr2.push(9); //add 9 at the end of the array
console.log(arr2);
arr2.pop(); //remove last element of the array
console.log(arr2);
arr2.unshift(5); //add 5 at the start of the array
console.log(arr2);
arr2.shift(); //remove first element of the array
console.log(arr2);
arr2.splice(1,0,6);
console.log(arr2);

// map
let marks = [10,20,30,40,50]; //map is used to create a new array by performing some operation on each element of the original array
let grades = marks.map(item => item >20? "Pass" : "Fail");
console.log(grades);

let passing = marks.filter(item => item >20); //filter is used to create a new array by filtering out elements of the original array based on some condition
console.log(passing);

//sorting
let numbers = [5,2,9,1,5,6];
numbers.sort((a,b) => a-b);
console.log(numbers);

//slice
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(1,3); //slice is used to create a new array by extracting a portion of the original array
console.log(fruits.slice(1,3));
console.log(fruits);