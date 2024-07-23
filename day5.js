
// ACTIVITY 1
// TASK 1 FUNCTION TO TELL EVEN OR ODD



const evenOdd = (num) => {
    if (num % 2 == 0)
        console.log(`${num} is an even number`);
    else
        console.log(`${num} is an odd number`);

}
evenOdd(8)
// 8 is an even number

// TASK 2 : FUNCTION TO FIND THE SQUARE OF THE NUMBER

const square = (num) => {
    console.log(`The square of ${num} is ${num * num}`);

}
square(8)
// Output : The square of 8 is 64

// ACTIVITY 2
// TASK 3 : Find maximum of the two number

const maxi = (n1, n2) => {
    if (n1 > n2)
        console.log(`${n1} is greater than ${n2} `);
    else
        console.log(`${n2} is greater than ${n1} `);

}
maxi(4, 5);
// TASK 4 : Concatenate two strings
const concat = (s1, s2) => {
    return s1 + " " + s2;

}

let ans = concat("hello", "world");
console.log(ans);
// hello world


// ACTIVITY 3
// TASK 5 Sum of two numbers

const addTwo= (num1, num2 ) =>{
    return num1+num2;}

console.log(addTwo(5,6));
// output : 11

// TASK 6: Check for a special character

const findChar= (s,char) =>
{
    return s.includes(char);
}
console.log(findChar("hello","e"));//true
console.log(findChar("world", "a"));//false

// ACTIVITY 4
// TASK 7
const mult= (a,b) =>
    {
        return a*b;
    }
console.log(mult(9,6));//54


// TASK 8
const greet= (name,age=20) =>
    {
        console.log(`Good Morning ${name} ,(${age})`);
    }
greet("Rishabh")//Good Morning Rishabh ,(20)
greet("Rishabh",18)//Good Morning Rishabh ,(18)

// ACTIVITY 5
// TASK 9:Higher-Order Function that Calls a Function Multiple Times
const repeatFunction = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn();
    }
};


const sayHello = () => console.log("Hello!");
repeatFunction(sayHello, 3); // "Hello!" will be printed 3 times

// TASK 10: Higher-Order Function that Applies Two Functions in Sequence

const higherFunc=(fn1,fn2,val)=>
{
    console.log(fn1(val));
    console.log( fn2(val));
    console.log(fn1(fn2(val)));
   

}
const double=(num)=>num*2
const sq=(num)=>num*num

higherFunc(double,sq,6);
// 12
// 36
// 72

// Feature Request 1: Even or Odd Function Script
const isNumberEvenOrOdd = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
};

isNumberEvenOrOdd(8); // Output: 8 is even.

// Feature Request 2: Square Calculation Function Script
const computeSquare = (num) => num * num;

console.log(`The square of 8 is ${computeSquare(8)}`); // Output: The square of 8 is 64

// Feature Request 3: Concatenation Function Script
const mergeStrings = (firstString, secondString) => firstString + " " + secondString;

let mergedResult = mergeStrings("hello", "world");
console.log(mergedResult); // Output: hello world

// Feature Request 4: Sum Calculation Arrow Function Script
const calculateSum = (number1, number2) => number1 + number2;

console.log(calculateSum(5, 6)); // Output: 11

// Feature Request 5: Higher-Order Function Script
// Part 1: Higher-Order Function that Calls a Function Multiple Times
const executeRepeatedly = (action, count) => {
    for (let i = 0; i < count; i++) {
        action();
    }
};

const greeting = () => console.log("Hello!");
executeRepeatedly(greeting, 3); // Output: "Hello!" will be printed 3 times

// Part 2: Higher-Order Function that Applies Two Functions in Sequence
const chainFunctionApplications = (func1, func2, initialValue) => {
    console.log(func1(initialValue));
    console.log(func2(initialValue));
    console.log(func1(func2(initialValue)));
};

const doubleValue = (value) => value * 2;
const squareValue = (value) => value * value;

chainFunctionApplications(doubleValue, squareValue, 6);
// Output:
// 12
// 36
// 72


