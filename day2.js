//Activity 1: Arithmatic operator



let number1 = 10
let number2 = 5

//Task 1: write a program to add two numbers and log the result to console.
console.log(number1 + number2); // output: 15
// Task 2: write a program to subtract two numbers and log the result to console.
console.log(number1 - number2); // output: 5
// Task 3: write a program to multiply two numbers and log the result to console.
console.log(number1 * number2); // output: 50
// Task 4:write a program to divide two numbers and log the result to console.
console.log(number1 / number2); // output: 2
// Task 5:write a program to find remainder of two numbers and log the result to console.
console.log(number1 % number2); // output: 0


//Activity 2: ASSIGNMENT OPERATION

//Task 6: Use the += operator to add a number to variable and log the result to console.
number1 += 5
console.log(number1);// output: 15

//Task 7: Use the += operator to add a number to variable and log the result to console.
number1 -= 5
console.log(number1);// output: 10


//ACTIVITY 3: COMPARISON OPERATOR

//Task 8: write a program to compare two numbers using < and > operator and log the result to console.
console.log(number1 > number2); // output: true
console.log(number1 < number2);// output: false
//Task 9 :  write a program to compare two numbers using <= and >= operator and log the result to console.
console.log("Greater or equal to :", number1 >= number2); //OUTPUT : Greater or equal to : true
console.log("smaller or equal to : ", number1 <= number2); //OUTPUT : smaller or equal to :  false


//Task 10 : write a program to compare two numbers using == and === operator and log the result to console.

let number3 = 10

console.log(number1 == number2);// output: false
console.log(number1 === number3);// output: true
console.log(number1 === number2);// output: false
console.log(number1 == number3);// output: true

//Actvity 4 : LOGICAL OPERATOR 

number4=20

//Task 11 : Write a program that uses && operator to combine two conditions and log the result to console.
console.log((number1>number2) && (number3>number4)); //output: false


// Task 12 : Write a program that uses || operator to combine two conditions and log the result to console.

console.log(1||0); // output :1 
// Task 13: : Write a program that uses ! operator to negate the condition and log the result to console.

console.log(!(number1<number2));//output : true

// ACTIVITY 5 : TERNARY OPERATOR 
  
// Task 14 : write a program that uses ternary operator to check if a number is positive or negative and log the result to console.

let num=23
console.log(num<0?"it it negative": "it is positive");//output:it is positive


