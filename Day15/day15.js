// Activity 1
// TAsk 1: Return a function(inner one ) from an outer function

function func1(){
    let name="abc";
    function func2(){
        console.log(name);
    }
   return func2();
}

func1()

// Task : Counter
function createCounter(){
    let count = 0;
    function increment(){
        count = count + 1;
    }
    function showCount(){
        console.log(count);
    }
    return {
        "inc": increment,
        "display": showCount
    }
}
const counter1 = createCounter();
// console.log(counter1);

counter1.inc();
counter1.inc();
counter1.inc();
counter1.display();
// Output
// 3

// Task : ID Generator
function createId(){
    let id = 5000;
    function increaseId(){
        id = id + 1;
        console.log(id);
    }
    function getId(){
        console.log(id);
    }
    return {
        "last": getId,
        "increase": increaseId
    }
}
let idGen = createId();
idGen.last();
idGen.increase();
idGen.last();
// 5000
// 5001
// 5001


// Task : User Greeting
function greetUser(username){
    function greet(){
        console.log(`Welcome ${username}, hope you are doing well`);
    }
    greet();
}
greetUser("Amit");
// Output
// Welcome Amit, hope you are doing well

// Task : Item Keeper
function itemKeeper(){
    let items = [];
    function addItem(item){
        items.push(item);
        console.log(items);
    }
    function removeItem(item){
        let index = items.indexOf(item);
        if(index === -1){
            console.log("Item not found");
        } else {
            items.splice(index, 1);
            console.log(items);
        }
    }
    return {
        "add": addItem,
        "remove": removeItem
    };
}
let keeper = itemKeeper();
keeper.add("pen");
keeper.remove("pencil");
keeper.remove("pen");
// Output
// [ 'pen' ]
// Item not found
// []


function createArray(size) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push((function(index) {
            return function() {
                console.log(index);
            }
        })(i));
    }

    return arr;
}
createArray
let functions = createArray(5);

functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2
functions[3](); // Output: 3
functions[4](); // Output: 4
