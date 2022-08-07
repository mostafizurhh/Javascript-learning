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
// let start = 2; // index position --> from where an element will be added or removed
// let deleteCount = 0; // index position --> from where the function will start working
// arr.splice(start, deleteCount, 'c'); //the value which will be added
// console.log(arr); //result

var arr = ['a', 'b', 'd'];
console.log(arr);

arr.splice(2, 0, 'c'); //2,0 are index position of array arr
console.log(arr);

// remove an element from the middle of an array

var arr = ['a', 'b', 'c', 'd'];
console.log(arr);

arr.splice(2, 1); // 2--> index position, 1--> number of items will be removed
console.log(arr);

arr.splice(2, 2); // 2--> index position, 1--> number of items will be removed
console.log(arr);