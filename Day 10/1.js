
let btn1 = document.getElementById('btn1')
let p1 = document.getElementById('para1')
let temp = p1.innerText
let textchanged = false;

btn1.addEventListener("click", () => {
    if (textchanged) {
        p1.innerText = temp
    }
    else {
        p1.innerText = "The text of paragraph is changed and first task is done "
    }
    textchanged = !textchanged;
});

let img1 = document.getElementById("img1");
let change = false;
let tempsrc = img1.getAttribute('src');

img1.addEventListener('dblclick', () => {
    if (change) {
        img1.setAttribute('src', tempsrc);
    } else {
        img1.setAttribute('src', 'cat.jpeg');
    }
    change = !change;
});

let box = document.getElementById("box");
box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "red"
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = "blue"
});

let input1 = document.getElementById("input1");
let ans = document.getElementById('ans')
input1.addEventListener("keydown", (event) => {
    console.log(event.key);
    temp = input1.value
    ans.innerText = temp
});

let input2 = document.getElementById("input2");
ans2 = document.getElementById("ans2");

input2.addEventListener("keyup", () => {
    console.log(input2.value);
    ans2.innerText = input2.value;
}
);

let form = document.getElementById("myForm");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(q1.value);
    console.log(q2.value);
    console.log(q3.value);
    console.log(q4.value);
});

let dropdown = document.getElementById('dropdown');
let displayText = document.getElementById('displayText');

dropdown.addEventListener('change', () => {
    let selectedValue = dropdown.value; 
    displayText.innerText = `Selected item: ${selectedValue}`; 
});



let list = document.getElementById('sublist');

list.addEventListener('click', (event) => {

    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent); 
    }
});


const parent = document.getElementById('parent');
const addButton = document.getElementById('child');


parent.addEventListener('click', (event) => {
   
    if (event.target.tagName === 'BUTTON') {
        console.log(`Button clicked: ${event.target.textContent}`);
    }
});

// Function to add a new button to the parent element
addButton.addEventListener('click', () => {
    const newButton = document.createElement('button');
    newButton.textContent = `Button ${parent.children.length + 1}`;
    parent.appendChild(newButton);
});

