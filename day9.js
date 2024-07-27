document.addEventListener("DOMContentLoaded", () => {
    // Change text of a list item
    let temp1 = document.getElementById('child1');
    console.log(temp1);
    temp1.innerText = "not monday";
    console.log(temp1.innerText);

    // Change background color of elements with a specific class
    const byClass = document.getElementsByClassName("children2");
    for (let l of byClass) {
        l.style.backgroundColor = "green";
    }

    // Create a new div element and add it to the body
    let div1 = document.createElement('div');
    console.log(div1);
    div1.innerHTML = "<h1>hello world</h1>";
    document.body.appendChild(div1);

    // Add a new list item to the ordered list
    let myol = document.getElementById('ol');
    let listob = document.createElement('li');
    listob.innerText = "holiday";
    listob.style.color = "red";
    myol.appendChild(listob);

    // Remove a specific list item
    let lielement = document.getElementById('child1');
    lielement.remove();

    // Remove the last list item
    let lastElement = document.querySelector('li:last-child');
    lastElement.remove();

    // Change the source of the image
    let image = document.getElementById('image');
    image.setAttribute('src', 'download.jpeg');

    // Change the text of a paragraph when the button is clicked
    let paragraph = document.getElementById('para1');
    let btn1 = document.getElementById('btn');

    btn1.addEventListener('click', () => {
        paragraph.innerText = "This is the new text.";
    });


    //  changes color when hovered
    let hover = document.getElementById('hover');
    hover.addEventListener('mouseover', () => {
        hover.style.color = 'blue';
        hover.style.borderColor = 'red';
    });
    hover.addEventListener('mouseout', () => {
        hover.style.color = '';
        hover.style.borderColor = '';
    });
    // Feature request:
    temp1 = document.getElementById('he');
        console.log(temp1);
        temp1.innerText = "hehehhehhhhhhhhhh";
        console.log(temp1.innerText);

        2.
        let div2 = document.createElement('div');
        console.log(div2);
        div2.innerHTML = '<img src="download2.jpeg" alt="Image">hello world';
        document.body.appendChild(div2);
        
});
