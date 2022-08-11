// Get Odd Numbers of an array and get odd numbers Sum of an array.

function sumOfAnArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum += element;
    }
    return sum;
}

function sumOfOddNumbersOfAnArray(array) {
    let oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element % 2 == 1) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

let arr = [13, 12, 129, 387, 22, 43, 44, 78];
let arraySum = sumOfAnArray(arr);
console.log(arraySum);

let oddNumbersArray = sumOfOddNumbersOfAnArray(arr);
console.log(oddNumbersArray);
let oddNumbersArraysum = sumOfAnArray(oddNumbersArray);
console.log(oddNumbersArraysum);