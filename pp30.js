// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

// Solution 1: 
const multiply = (a, b, c) => a * b * c;
const result = multiply(3, 4, 5);
// console.log(result);

// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

// Solution2:
const threeLines = `I am a web developer. 
I love to code. 
I love to eat biryani.`;
// console.log(threeLines);

// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

// Solution 3:
const addition = (a, b = 3) => (a + b);
const addTotal = addition(5);
// console.log(addTotal);

// 4. Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

/* Solution 4: */
/* function newFriend() {
    let newFriend = [];
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        if (friends[i].length % 2 == 1) {
            newFriend.push(friend);
        }
    }
    return newFriend;
} */

const friend = (friend1) => {
    let friend2 = [];
    for (let i = 0; i < friend1.length; i++) {
        let friend = friend1[i];
        if (friend1[i].length % 2 == 1) {
            friend2.push(friend);
        }
    }
    return friend2;
}
const friends = ['romel', 'refat', 'abul', 'rana', 'john', 'alex', 'ovi'];
const newFriend = friend(friends);
// console.log(newFriend);


// 5. Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

let sumOfSquare = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        let newElements = num[i] * num[i];
        sum = sum + newElements;
    }
    let average = sum / num.length;
    return average;;
}
let number = [2, 3, 4, 5];
let average = sumOfSquare(number);
// console.log(average);


// 6. Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

/* Solution 6: */
const combinedArray = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    return (Math.max(...newArray));
}
const array1 = [1, 2, 3, 4, 15];
const array2 = [6, 7, 8, 9, 10];

const maxOfNewArray = combinedArray(array1, array2);
console.log(maxOfNewArray);