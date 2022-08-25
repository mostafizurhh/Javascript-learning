// add and remove an element at the end of an array

var numbers = [4, 5, 6, 7, 8];
console.log(numbers);
numbers.push(9);
console.log(numbers);
numbers.pop();
console.log(numbers);

// add and remove an element from the begining of an array

numbers.unshift(3);
console.log(numbers);
numbers.shift();
console.log(numbers);

// add an element from the middle of an array

// var arr = ['a', 'b', 'd'];
// console.log(arr);
// let start = 2; // index position --> from where an element will be added 
// let deleteCount = 0; // index position --> from where the function will start working
// arr.splice(start, deleteCount, 'c'); //the value which will be added
// console.log(arr); //result

var arr = ['a', 'b', 'd'];
console.log(arr);

arr.splice(2, 0, 'c'); // 2--> index position from where an element will be added && 0--> index position of array from where the function will start working && 'c' the value which will be added
console.log(arr);

arr.splice(2, 'c'); // 2--> index position from where an element will be added && 'c' the value which will be added
console.log(arr);

// remove an element from the middle of an array

var arr = ['a', 'b', 'c', 'd'];
console.log(arr);

arr.splice(2, 1); // 2--> index position of array from where items will be removed && 1--> number of items will be removed
console.log(arr);

arr.splice(2, 2); // 2--> index position of array from where items will be removed && 2--> number of items will be removed
console.log(arr);

/*************** Check array type ==> Array.isArray(array name) ==> Array.isArray(age) ******************/

/************** Check an element is inside the array or not ==> Array.array name.includes(value)  ==> array.age(45)*************/

/******* adding 2 arrays  ==> newArrayName = 1stArray.concat(2ndArray) *************/

/******* take a part of an array  ==> newArrayName = array.slice(starting index, ending index) ==> newArray = array.slice(2,7) --> will give a new array from index position 2 to 6 of original array and will not change the original array. *************/

/******* remove duplicate values from an array *************/

function removeDuplicate(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (newArray.includes(element) == false) {
            newArray.push(element);
        }
    }
    return newArray;
}

let myArray = [23, 23, 434, 453, 53, 23, 453, 56];
let freshArray = removeDuplicate(myArray);
console.log(freshArray);

/******* find longest strig of an array *************/
var longest = arr.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);
/* or */
var longest = arr.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];

/******* find longest strig of an array *************/
const min = array.reduce((a, b) => Math.min(a, b));
const max = array.reduce((a, b) => Math.max(a, b), -Infinity);

/* or */
console.log(Math.max(...arr));
console.log(Math.min(...arr));

/* or */
var maximum = arr.sort(function (a, b) { return b - a; })[0];
var minimum = arr.sort(function (a, b) { return a - b; })[0];