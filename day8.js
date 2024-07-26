// activity 1 
// task 1 : use literals to log name and age
name="rishabh"
age=18
console.log(`my name is ${name} and my age is ${age}`);
// my name is rishabh and my age is 18

// task 2:Create a multi-line string using template literals 

const str = `This is a multi-line string.
It has  many lines,
we can write as a para .`;
console.log(str);

// This is a multi-line string.
// It has  many lines,
// we can write as a para .

// Activity 2: 
// task 3:log first and second ele of an array

const arr=[12,3,4,4,5,6]
const [first, second] = arr;
console.log(first,second);
// 12 3

// task  4:

const book = {
    title: "abc",
    author: "def",
    year: 1920
};
const { title, author } = book;
console.log(`title is ${title} and sauthor is ${author}`);
// title is abc and sauthor is def

// Activity 3: 

// TASK 5
const arr2=[...arr,9,8,7]
console.log(arr2);

// [
//     12, 3, 4, 4, 5,
//      6, 9, 8, 7
//   ]

// TASK 6

function sum(...num) {
    let total=0;
    for (const n of num) {
        total+=n
    }
    return total;
    
}

console.log(sum(1,2,3,4,45,5,));//60
console.log(sum(1,2,3,4));//10


// Activity 4
// Task 7: 
const multiply=(a,b=1)=>
{
    return a*b;

}
console.log(multiply(5,6));//30
console.log(multiply(7));//7

// Activity 5
// Task 8:

// variable declaration 
var name = "mike tyson"; 
var sport = "boxing"; 
var age = 71; 

// function declaration 
var box = function(){ 
	console.log("K.O."); 
} 

// Using Object Literal Enhancement 
// combines all variables into an anotherDog object 
var player = {name, sport, age, box}; 
player.box(); 
// K.O.

// Task 9:Create an object with computed property names based on variables 

let surname = "lastname";
let fullname = {
	firstname: "lokesh",
	[surname]: "jain"
};
console.log(
	"My fullname is: " + fullname.firstname
	+ " " + fullname.lastname
);

// OUTPUT IS :My fullname is: lokesh jain


// let LAST_NAME = "lastname";
//  fullname = {
// 	firstname: "somya",
// 	[LAST_NAME]: "jain"
// };
// console.log(
// 	"My fullname is: " + fullname.firstname
// 	+ " " + fullname.lastname
// );


// FEATURE REQUEST:

let principal = 1000;
let noofyears = 1;
let rateofinterest = 7;

let SI = `Simple Interest is ${(principal *
    noofyears * rateofinterest) / 100}`;
console.log( SI);
// Simple Interest is 70


// 2.Use array and object destructuring to extract values


const arr1 = [10, 20, 30, 40];
const [f, s] = arr1;
console.log(`First number: ${f}`);
console.log(`Second number: ${s}`);

// Object destructuring
const book1 = {
    name1: "The Great Gatsby",
    writer: "F. Scott Fitzgerald",
    year: 1890
};
const { name1, writer} = book1;
console.log(`Title: ${name1}`);
console.log(`Author: ${writer}`);

// First number: 10
// Second number: 20
// Title: The Great Gatsby
// Author: F. Scott Fitzgerald


// 3. spread and rest opertor

let a1=[1,2,3]
let a2=[4,5,6]
let newarr=[...a1,...a2];
console.log(newarr);
// [ 1, 2, 3, 4, 5, 6 ]

function multi(...i) {
    let ans=1;
    for (const iterator of i) {
        ans*=iterator
    }
return ans
    
}

console.log(multi(1,2,3,4,5,6,7,8,9,10));

// OUTPUT IS:3628800