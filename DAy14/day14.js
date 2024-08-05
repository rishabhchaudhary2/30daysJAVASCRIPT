class Person {
    constructor(firstName,lName,age){
    this.firstName=firstName;
    this.lName=lName;
    this.age=age;
    }


    Greeting() {
        return `Hello, my name is ${this.firstName} ${this.lName} and I am ${this.age} years old.`;
    }
    happyBirthday()
    {
        this.age=this.age+1;
        return`Updated age is ${this.age}`;
    }

    /*One way of adding static method to class
    static Greeting1()
    {
        return `This will always print .`
    }*/

// For getter and setter, visit this link:
// https://stackoverflow.com/questions/812961/what-are-getters-and-setters-how-and-when-should-i-use-them

//    Adding Getter
    get fullName() {
        return `${this.firstName} ${this.lName}`;
    }
//  Adding Setter
    set fullName(name){
        const [firstName, lName] = name.split(' ');
        this.firstName = firstName;
        this.lName = lName;

    }
}




const person1=new Person("Rishab","Chaudhary",18)
console.log(person1.Greeting( ));//Hello, my name is Rishab Chaudhary and I am 18 years old.
console.log(person1.happyBirthday());//Updated age is 19


class Student extends Person{
    static count=0;
    constructor(firstName,lName,age,studentID)
    {
        super(firstName,lName,age)
        this.studentID=studentID;
        Student.count++;
        // as evertime the student is created constructor will be executed so increasing count here makes sense!
    }

    getID()
    {
        return `Student ID is ${this.studentID}`;
    }
    // Overidding the greeting function  to add student id in return message
    Greeting(){
        return `Hello, my name is ${this.firstName} ${this.lName} and I am ${this.age} years old and my Student ID is ${this.studentID}`;
    }
    static studentCount()
    {
        return `Total no. of students are ${Student.count}`
    }
}

let s1=new Student("Kunal","Sharma",19,123444)
console.log(s1.getID());//Student ID is 123444
console.log(s1.Greeting());//Hello, my name is Kunal Sharma and I am 19 years old and my Student ID is 123444

// Task 5: Create a static method in Person class
// 2nd way
Person.genericGreet=()=>
{
    return "Hello Everyone!"
}
// this is how we access static method
console.log(Person.genericGreet());//Hello Everyone!



//Task 6:Keeping the count of student created 
let s2=new Student("Rahul","Rai",20,123110)
console.log(Student.studentCount());//Total no. of students are 2



// Task 7: Add a getter method to the Person class to return the full name 
console.log(person1.fullName);//Rishab Chaudhary


// Task 8: Adding s setter method for name so that we can set(change) the name, even after giving something else to instance
person1.fullName="Rishabh Gupta"
console.log(person1.fullName);//Rishabh Gupta


// Task9 & Task 10:Create an account class with balace as private field
// TO learn or review about private field in js:
// https://dev.to/smitterhane/private-class-fields-in-javascript-es2022-3b8#how-to-create-a-private-class-field
class Account {
    #balance;
//  # is used to create private field inside a class
    constructor(inital) {
        // can access like this
        this.#balance = inital;
    }

    deposit(amount) {
        if (amount > 1) {
            this.#balance += amount;
            console.log(`Deposited: ${amount} & New balance: ${this.#balance}`);
        } else {
            console.log('Deposit amount must be greater than One(1).');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdraw: ${amount} & New balance: ${this.#balance}`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }

    CheckBalance() {
        return this.#balance;
    }
}


const account1 = new Account(1000);

// Testing the deposit and withdraw methods

account1.deposit(500);//Deposited: 500 & New balance: 1500

account1.deposit(1);//Deposit amount must be greater than One(1).

account1.withdraw(300);//Withdraw: 300 & New balance: 1200

account1.withdraw(2000)//Invalid withdrawal amount.

console.log(`Final balance: ${account1.CheckBalance()}`);//Final balance: 1200
