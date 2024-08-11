// Task-1: Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

let arr = [3, 6, 1, 2,3,9,324];
bubbleSort(arr); // Output: [1, 2,   3, 3, 6, 9, 324]

// Task-2: Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let mini = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        if (mini !== i) {
            let temp = arr[i];
            arr[i] = arr[mini];
            arr[mini] = temp;
        }
    }
    console.log(arr);
}


selectionSort(arr);  Output: [1, 2,   3, 3, 6, 9, 324]

// Task-3: Quick Sort
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};


let ans = quickSort(arr);
console.log(ans); // Output: [1, 2,   3, 3, 6, 9, 324]


// Task-4: Linear Search
let linear = (arr, target) => {
    let ans = -1;
    arr.forEach((element, index) => {
        if (element === target) {
            ans = index;
        }
    });
    return ans;
};

let arr2 = [5, 3, 2, 1, 9];
ans = linear(arr2, 3);
console.log(ans); // Output: 1

// Task-5: Binary Search
let bs = (arr, s, e, target) => {
    let mid = Math.floor(s + (e - s) / 2);
    if (s > e) {
        return -1;
    }
    if (target == arr[mid]) return mid;
    if (target < arr[mid]) return bs(arr, s, mid - 1, target);
    if (target > arr[mid]) return bs(arr, mid + 1, e, target);
};

arr = [0, 1, 2, 3, 6, 9];
let e = arr.length - 1;
console.log(bs(arr, 0, e, 3)); // Output: 3

// Task-6: Count Character Occurrences
function countCharacterOccurrences(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log("Character Occurrences:", charCount);
    return charCount;
}

// Task-7: Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0;
    let currentSubstring = "";
    for (let char of str) {
        let index = currentSubstring.indexOf(char);
        if (index !== -1) {
            currentSubstring = currentSubstring.slice(index + 1);
        }
        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
    console.log("Longest Substring Length:", maxLength);
    return maxLength;
}

longestSubstringWithoutRepeatingCharacters("my name is is doc")
// Output :Longest Substring Length: 7

// Task-8: Rotate Array
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
    console.log("Rotated Array:", rotatedArray);
    return rotatedArray;
}
