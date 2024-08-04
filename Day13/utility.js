// Define the addition function
let addition = (a, b) => {
    return a + b;
};

// Define the myObj object
let myObj = {
    name: "Mukesh Rishi",
    age: 68,
    profession: "actor",
    dialogue() {
        console.log("Mera naam h Bulla , rkhta hu Khulla!");
    }
};

// Define the MovieName constant
export const MovieName = "Gunda";

// Correctly define and export the multiply function
const multiply = (a, b) => {
    return a * b;
};

export default multiply;

// Export the other elements
export {
    addition,
    myObj,
};
