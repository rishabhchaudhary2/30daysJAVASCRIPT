// Task 1:Using try catch block

function intentional() {
    throw new Error("This is intentional error.");
}
try {
    intentional()

} catch (error) {
    console.error(error);
    // console.log("errorr");
}


// Task 2: divide

function divide(a, b) {
    if (b == 0) {
        throw new Error("Denominator can't be zero");
    } else {
        console.log(a / b);
    }
}

try {
    divide(4, 0);
} catch (error) {
    console.error(error);
}



// Task 3:
try {
    console.log("Inside try block.");
    // Intentionally throw an error
    // throw new Error("Something went wrong!");
} catch (error) {
    console.error("Caught an error:", error.message);
} finally {
    console.log("This is the finally block, it always executes.");
}


/* Inside try block.
 This is the finally block, it always executes.
                    OR
Inside try block.
Caught an error: Something went wrong!
This is the finally block, it always executes.
 */

// Task 4:
class Errors extends Error {
    constructor(msg) {
        super(msg);
        this.name = "TypeErrorr";
    }
}

try {
    console.log("trying dividing by zero");
    let ans = divide(5, 0);
    console.log(ans);
}
catch (error) {
    console.log(error.message)
}
finally {
    console.log("It will be exeuted every time")
}
//Output
// trying dividing by zero
// Deno. can't be zero
// It will be exeuted every time


// Task 6
let promise1 = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 10)
    console.log(random);

    if (!random) {
        reject("Promise is rejected")
    }
    resolve("Promise is resolved");
})
promise1
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
// 1
// Promise is resolved

// OR
// 0
// Promise is rejected


//Task-7: Try catch in async
let calling = async function () {
    try {
        let response = await promise1
        console.log(response)
    }
    catch (er) {
        console.log(er)
    }
}
calling()
//Output-1
// 9
// Promise is resolved

//Output-2
// 0
// Promise is rejected


//Activity-5 Graceful Error Handling in Fetch

//Task-8: Error in url fetching.
// let url = "https://developers.google.com/apps-script/reference/url-fetch";
let url2 = "https://errr"; // Invalid URL

fetch(url2)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    }).then((data) => console.log(data))
    .catch(() => {
        console.log("Error Fetching URL");
    });

// Error Fetching URL
//Task-9
let try_Catch = async function () {
    try {
        let data = await fetch(url);
        console.log(data)
    }
    catch {
        console.log("Its an error");
    }
}
try_Catch();
//Output
// Its an error