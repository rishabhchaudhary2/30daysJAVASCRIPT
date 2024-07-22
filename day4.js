// Activity 1 :For loops

// Task 1:1 to 10
for (let i = 1; i < 11; i++) {
    console.log(i);

}

// Task 2: 5's table

for (let i = 1; i < 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);

}


// Activity 2:while loop
// sum from 1 to 10

let i = 1;
let sum = 0;
while (i < 11) {
    sum += i;
    i++;
}
console.log(`Sum from 1 to 10 is ${sum}`);


// print from 10 to 1

let j = 10;
while (j > 0) {
    console.log(j--);
}

// Activity 3 : do while loops

// print from 1 to 5
let k = 1
do {
    console.log(k++);

} while (k < 6);

// factorial of number

let num = 5
k = num;
let ans = 1;

do {
    if (num < 0) {
        console.log("1");
        break;
    }
    ans *= k;
    k--

} while (k > 0);
console.log(` the factorial of ${num} is ${ans}`);



// Activity 4:Nested Loops
// pattern 

let s=""
for (let i = 0; i < 5; i++) {
    for (let index = 0; index <=i; index++) {
        s += "*" + "";
        
    }
    console.log(s);
    s="";
    // console.log("\n");
    
}

// outputs :

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// TAsk 2
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45

// TASK 3
// Sum from 1 to 10 is 55

// TASK 4
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// TASK 5
// 1
// 2
// 3
// 4
// 5

// TASK 6
//  the factorial of 5 is 120

//  TASK 7
// *
// **
// ***
// ****
// *****
