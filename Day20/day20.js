// Local Storage

// Taks1:
const str1="Hello Local Storage";
localStorage.setItem("string",str1)

// Task 2:Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
 myobj={
    name:"Rishab",
    age:18
}

const myJSON=JSON.stringify(myobj)
localStorage.setItem("object1",myobj)
localStorage.setItem("JSONobject",myJSON)

const data=localStorage.getItem("JSONobject")

const parsedObject = JSON.parse(data);
console.log(parsedObject);

// Task 3:
let name=document.getElementById("name")
let email=document.getElementById("email")
let btn=document.getElementById("btn")
let editable=document.getElementById('uname')

btn.addEventListener('click',()=>
{
const value=name.value
localStorage.setItem("username",value);
location.reload()
})
window.addEventListener('load',()=>
{
    const value=localStorage.getItem("username");
    editable.innerText=value
})

//Task 4: Remove item from local storage and log before and after.
console.log(localStorage);

localStorage.removeItem("object1")
console.log(localStorage);


// Session Storage
// Task 5:
sessionStorage.setItem("string",str1);
// Task 6:
sessionStorage.setItem("JSONobject",myJSON)

// Activity 4:

//Task7: create a form and store data using session storage
let emial1=document.getElementById("email1")
let newname=document.getElementById("text")
let btn2=document.getElementById("btn2");

btn2.addEventListener('submit' , (event )=>
{
    event.preventDefault();
    sessionStorage.setItem("NAME",newname)
    sessionStorage.setItem("EMAIL-ID",emial1)
    displaydata();
})

function displaySavedData() {
    const name = sessionStorage.getItem("NAME");
    const email = sessionStorage.getItem("EMAIL-ID");

    if (name && email) {
        document.getElementById("savedData").textContent = `Name: ${name}, Email: ${email}`;
    } else {
        document.getElementById("savedData").textContent = "No data saved.";
    }
}


window.onload = function() {
    displaySavedData();
};

// Task 8:REmove an item from it 

console.log(sessionStorage)
sessionStorage.removeItem("NAME")
console.log(sessionStorage);


// Activity 5:

// Task 9:saving  a key value pair to both the storage

function savingTOstorage(key, value) {
   
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    const lStorage = localStorage.getItem(key);
    const SStorage = sessionStorage.getItem(key);

    console.log(`Value from localStorage: ${lStorage}`);
    console.log(`Value from sessionStorage: ${SStorage}`);
}

savingTOstorage("username", "Rishab");

// TAsk 10: to clear all the data from both the storages then log the result
function clearAllStorage() {
    localStorage.clear();
    sessionStorage.clear();
    const lStorage = localStorage.length === 0;
    console.log(`Is localStorage empty? ${lStorage}`);
    const SStorage = sessionStorage.length === 0;
    console.log(`Is sessionStorage empty? ${SStorage}`);
}

clearAllStorage();
