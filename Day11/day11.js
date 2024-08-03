function getdata(data) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {console.log(data);
            resolve("success")
        },2000)
    })
}

let p=getdata(23)
console.log(p);


// Task 2:
function getpromise() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {console.log("Good Morning");
            reject("error")
        },2000)
    })
}

let promise=getpromise()
promise.catch((res)=>
{
    console.log(res);
})

// Activity 2
// Task 3:
getdata1 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("your data is " + data);
            resolve("done fetching data1")
        }, 4000)
    })
}


getdata2 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("your data is " + data);
            resolve("done fetching data2")
        }, 4000)
    })
}
console.log("Fetching data 1");
let p1 = getdata1(344)
p1.then((res) => {
    console.log(res);
    console.log("Fetching data 2");
    getdata2(342).then((res) => {
        console.log(res);
    })
})
/*Fetching data 1
your data is 344
done fetching data1
Fetching data 2
your data is 342
done fetching data2*/


// Task 4:
function asyncfun1() {
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve("success")
        },5000)
       
    })
}

asyncfun1().then((res)=>
{
    console.log(res);
})
// success

// Task 4 and 5 combined

async function logResult(promise) {
    try {
        const resolved=await promise
        console.log(resolved);
        
    } catch (error) {
        console.error('Promise rejected with error :'+ error);
        
    }
    
}



usingPromise=(num)=>
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num*num==100)
                resolve("Your promise is resolved")
            else{
                reject("Wrong input")
            }
        },2000)

    })
}

logResult(usingPromise(11));    // Promise rejected with error :Wrong input
logResult(usingPromise(10));    // Your promise is resolved


// Fethching data from api


// Task 6:USing promise

const URL="https://cat-fact.herokuapp.com/facts"
 promise=fetch(URL)
 console.log(promise);
//  Task 7:USing async function

 const getinfo=async()=>
 {
    let response=fetch(URL);
    console.log(response);
 }

//  Task 8:
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved!"), 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved!"), 3000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved!"), 4000);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log('All promises resolved:', values);
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });

    // ["Promise 1 resolved!", "Promise 2 resolved!", "Promise 3 resolved!"]

    // Task 9: use promise.race

    Promise.race([promise1,promise2,promise3]).then((value)=>
    {
        console.log('Promise that resolved first is :',value);
    })
    .catch((error)=>{
        console.log("Error in all promises");
    })


