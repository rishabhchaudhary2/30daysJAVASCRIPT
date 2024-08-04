// import { addition,MovieName } from "./utility.js";
// importing from utility .js file

import * as uti from "./utility.js";
// Import everything from utility.js using *


let res=uti.addition(4,5)
console.log(res);// Output: 9


let newobj=uti.myObj
console.log(newobj);
// Output: {name: "Mukesh Rishi", age: 68, profession: "actor", dialogue: ƒ}

// Calling the dialogue method of myObj
newobj.dialogue(); // Output: Mera naam h Bulla , rkhta hu Khulla!


// Using the imported MovieName constant
console.log(uti.MovieName); // Output: Gunda


// Using the default export (multiply function)
let product = uti.default(4, 5);
console.log(product); // Output: 20