// ARRAYS

let arr1=[1,2,3,4,5]
console.log(arr1);

console.log(arr1[0],arr1[arr1.length-1]);


// array methods

arr1.push(6)
console.log(arr1);

arr1.pop()
console.log(arr1);

arr1.shift()
console.log(arr1);

arr1.unshift(10)
console.log(arr1);

let arr2=[1,2,3,4,5,6,7,8,9]


// array iterations


for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    console.log(element);
    
}

arr1.forEach(element => {
    console.log(element);
});

// multi dimensional arrays
let twoDarr=[[1,2],[3,4]]
console.log(twoDarr);

for (let index = 0; index < twoDarr.length; index++) {
    const element = twoDarr[index];
    console.log(element);
}

console.log(twoDarr[1][1]);

// feature request

// first
 arr1 = [1, 2, 3, 4, 5];
console.log("Initial array:", arr1);

// Adding an element to the end of the array using push
arr1.push(6);
console.log("After push(6):", arr1);

// Removing the last element from the array using pop
arr1.pop();
console.log("After pop():", arr1);

// Removing the first element from the array using shift
arr1.shift();
console.log("After shift():", arr1);

// Adding an element to the beginning of the array using unshift
arr1.unshift(10);
console.log("After unshift(10):", arr1);

// Second array 
 arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Second array:", arr2);

/*
Initial array: [ 1, 2, 3, 4, 5 ]
After push(6): [ 1, 2, 3, 4, 5, 6 ]
After pop(): [ 1, 2, 3, 4, 5 ]
After shift(): [ 2, 3, 4, 5 ]
After unshift(10): [ 10, 2, 3, 4, 5 ]
Second array: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]*/






const filteredArr = arr1.filter(num => num > 2);
console.log("Array after filter (elements > 2):", filteredArr);

// Array after filter (elements > 2): [ 10, 3, 4, 5 ]




// Iterating over arr2 using a for loop
console.log("Iterating over arr2 using a for loop:");
for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    console.log(element);
}

// Iterating over arr1 using the forEach method
console.log("Iterating over arr1 using the forEach method:");
arr1.forEach(element => {
    console.log(element);
});

/*
Array after filter (elements > 2): [ 10, 3, 4, 5 ]
Iterating over arr2 using a for loop:
1
2
3
4
5
6
7
8
9
Iterating over arr1 using the forEach method:
10
2
3
4
5*/


 twoDarr=[[1,2],[3,4]]
console.log(twoDarr);

for (let index = 0; index < twoDarr.length; index++) {
    const element = twoDarr[index];
    console.log(element);
}
// [ [ 1, 2 ], [ 3, 4 ] ]
// [ 1, 2 ]
// [ 3, 4 ]