
var a = 20
console.log(a);
// output: 20
let b = 40
console.log(b);
// output : 40

// Activity 2:
const constant_variable = true
console.log(constant_variable);
// output : true

// Activity 3:

let v1 = 120
let v2 = "hello"
let v3 = true
let v4 = {
  name: "raj",
  age: 22
};
let v5 = [1, 2, 3, 5, 4]

console.log(typeof (v1)); //  output:number
console.log(typeof (v2)); //  output:string
console.log(typeof (v3)); //  output:boolean
console.log(typeof (v4)); //  output:object
console.log(typeof (v5)); //  output:object


// Activity 4:
let x=20
console.log(x);  //  output: 20
x=50
console.log(x);  //  output: 50

// Activity 5:

const y=60
console.log(y); //  output: 60

// y=30
// console.log(y); //  output: error , we can't assign const type variable a new value , different from it previously assigned value

// Feature request

let age = 30;
let greeting = "Hello, World!";
let isStudent = false;
let person = { name: "Alice", age: 25 };
let numbers = [10, 20, 30, 40, 50];
let notDefined;
let emptyValue = null;

console.log("Value: ", age, ", Type: ", typeof age);
// Output: Value:  30 , Type: number

console.log("Value: ", greeting, ", Type: ", typeof greeting);
// Output: Value:  Hello, World! , Type: string

console.log("Value: ", isStudent, ", Type: ", typeof isStudent);
// Output: Value:  false , Type: boolean

console.log("Value: ", person, ", Type: ", typeof person);
// Output: Value:  { name: "Alice", age: 25 } , Type: object

console.log("Value: ", numbers, ", Type: ", typeof numbers);
// Output: Value:  [10, 20, 30, 40, 50] , Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", notDefined, ", Type: ", typeof notDefined);
// Output: Value:  undefined , Type: undefined

console.log("Value: ", emptyValue, ", Type: ", typeof emptyValue);
// Output: Value:  null , Type: object (This is a well-known quirk in JavaScript)


//  2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.



let variableLet = "Initial value with let";
console.log(variableLet); // Output: Initial value with let
variableLet = "Reassigned value with let";
console.log(variableLet); // Output: Reassigned value with let

const variableConst = "Initial value with const";
console.log(variableConst); // Output: Initial value with const
// variableConst = "Reassigned value with const"; // This will throw an error
