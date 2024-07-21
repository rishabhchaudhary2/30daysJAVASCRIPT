//Activity 1 if-else statement
//Task 1 check if number is positive/negative or zero
let num = 23
if (num > 0) { console.log("It is positive"); }
else {
    console.log("it is negative");
}//It is positive

// Task 2 : eligibility to vote

let s1Age=19
let s2Age=17

function eligibility(age)
{
    if(age>=18)
        console.log("Candidate can vote");
    else
        console.log("Not eligible to vote");
}
eligibility(s1Age);// Candidate can vote
eligibility(s2Age);// Not eligible to vote
//Activity 2
//Task three find largest among three numbers using nested if-else if-else 
let n1=1331;
let n2=-100;
let number3 =23;
if(n1>n2)
{
    if(n1>number3)
    {
        console.log(n1," is the largest among the three numbers ",n1,n2,"and",number3);
    }
    else{
        console.log(number3,"is the largest among all three",n1,n2,"and",number3);
    }
}
else
{
    if(n2>number3)
    {
        console.log(n2," is the largest among three numbers ",n1,n2,"and",number3);
    }
    else{
        console.log(number3," is the largest among three number :",n1,n2,"and",number3);
     }
}
// 1331  is the largest among the three numbers  1331 -100 and 23

// Activity 3
// find the week day

let today=3;

switch(today)
{
    case 1:
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    case 5:
        console.log("Today is Thursday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    case 7:
        console.log("Today is Saturday");        
}
// Today is Tuesday
//Task 5- calculate the grade
let cgpa=7.6;
switch(Math.floor(cgpa))
{
    case 10:
        console.log("Grade = A");
        break;
    case 9:
        console.log("Grade = A");
        break;
    case 8:
        console.log("Grade = B");
        break;  
    case 7:
        console.log("Grade = C");
        break;   
    case 6:
        console.log("Grade = D") ;  
        break;
    case 5:
        console.log("Grade = E");
        break;          
    default:
        console.log("Grade is F");       
}
// Grade = C
// Activity 4
// ternary operator to check even or odd
let number1=2
console.log(number1%2==0? `${number1} is even`:`${number1} is odd`);

// Activity 5
// Task 7
// to find leap yaer

let year=1600

if(year%4==0 && year%100!=0)
{
console.log("It is a leap year");
}
else if (year%100==0 && year%400!=0) {
    console.log("It is not a leap year");
    
} else {
    console.log("It is a leap year");
    
}

// it is a leap year